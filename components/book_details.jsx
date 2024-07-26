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
    ratingsCount 
  } = book.volumeInfo;

  const reviews = [];

  return (
    <div class="flex flex-col items-center justify-center m-5">
      <div class="flex flex-col items-center justify-center">
        <img src={imageLinks?.thumbnail} alt={title} class="w-full h-auto" />
      </div>
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-3xl text-gray-700">{title}</h1>
        <h2 class="text-xl text-gray-600">by {authors.join(", ")}</h2>
        <p class="text-gray-500">Published on: {publishedDate}</p>
        <div class="text-gray-500" dangerouslySetInnerHTML={{ __html: description }} />
        <p class="text-gray-500">Average Rating: {averageRating} ({ratingsCount} ratings)</p>
        <div class="flex flex-col items-start justify-center">
          <h3 class="text-lg text-gray-600">Reviews:</h3>
          {reviews.length > 0 ? (
            <ul class="list-none p-0">
              {reviews.map((review, index) => (
                <li key={index} class="my-2">
                  <strong class="text-gray-700">{review.reviewer}</strong>: {review.comment}
                </li>
              ))}
            </ul>
          ) : (
            <p class="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Book_details;