import Image from "next/image";
import React from "react";

function Book_details({ book }) {
  if (!book) {
    return <p>No book data available.</p>;
  }

  const {
    title,
    authors,
    publishedDate,
    description,
    imageLinks,
    averageRating,
    ratingsCount,
  } = book.volumeInfo;

  const reviews = [];

  return (
    <div className="flex flex-col items-center justify-center m-5">
      <div className="flex flex-col items-center justify-center">
        <Image width={200} height={200} src={imageLinks?.thumbnail} alt={title} className="w-full h-auto" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-gray-700">{title}</h1>
        <h2 className="text-xl text-gray-600">by {authors.join(", ")}</h2>
        <p className="text-gray-500">Published on: {publishedDate}</p>
        <div
          className="text-gray-500"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <p className="text-gray-500">
          Average Rating: {averageRating} ({ratingsCount} ratings)
        </p>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-lg text-gray-600">Reviews:</h3>
          {reviews.length > 0 ? (
            <ul className="list-none p-0">
              {reviews.map((review, index) => (
                <li key={index} className="my-2">
                  <strong className="text-gray-700">{review.reviewer}</strong>:{" "}
                  {review.comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Book_details;
