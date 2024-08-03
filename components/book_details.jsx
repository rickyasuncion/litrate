"use client"
import Image from "next/image";
import React from "react";
import Reviews from "./reviews";

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
    <div>
    <div className="flex items-center text-white justify-center m-5 bg-dark-blue p-9 border border-black rounded-lg shadow-lg">
      <div className="flex items-center justify-center w-full">
        <Image
          width={300}
          height={300}
          src={imageLinks?.thumbnail}
          alt={title}
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-cyan-800 rounded-md shadow-md px-6">
        <h1 className="text-3xl">{title}</h1>
        <h2 className="text-xl">by {authors.join(", ")}</h2>
        <p className="">Published on: {publishedDate}</p>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <p className="">
          Average Rating: {averageRating} ({ratingsCount} ratings)
        </p>
        <div className="flex flex-col items-start justify-center">
        </div>
      </div>
      </div>
      <Reviews book={book}/>
    </div>
  );
}

export default Book_details;
