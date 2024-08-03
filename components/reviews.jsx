"use client";

import React, { useState, useEffect } from "react";
import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { UserAuth } from "@/app/_utils/auth-context";
import { useRouter } from "next/navigation";
import { db } from "@/app/_utils/firebase";

function Reviews({ book }) {
  const { user } = UserAuth();
  const [reviewContent, setReviewContent] = useState("");
  const [reviews, setReviews] = useState([]);
  const router = useRouter();
  const isbn = book.volumeInfo.industryIdentifiers[0].identifier;
  const date = new Date();

  useEffect(() => {
    const fetchReviews = async () => {
      const q = query(collection(db, "books", isbn, "reviews"));
      const querySnapshot = await getDocs(q);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, data: doc.data() });
      });
      setReviews(items);
    };

    fetchReviews();
  }, [isbn]);

  const addReview = async () => {
    const newReview = {
      author: user.email,
      date: date.toLocaleDateString(),
      content: reviewContent,
    };
    const docRef = await addDoc(
      collection(db, "books", isbn, "reviews"),
      newReview
    );
    setReviews((prevReviews) => [
      ...prevReviews,
      { id: docRef.id, data: newReview },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user) {
      addReview();
      setReviewContent("");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mx-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-lg text-gray-700 font-semibold">Reviews:</h3>

        <label htmlFor="review" className="block">
          <textarea
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            className="w-full p-2 text-black border border-gray-300 rounded-md"
            required
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-4 border border-gray-200 rounded-md"
          >
            <h4 className="text-sm text-gray-700 font-bold">
              {review.data.author}
            </h4>
            <p className="mt-2 text-gray-700">{review.data.content}</p>
            <p className="mt-2 text-xs text-gray-500">{review.data.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
