"use client";

import { useEffect, useState } from "react";
import Image from 'next/image'

const Page = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
      );
      const result = await response.json();

      const volumes = await Promise.all(
        result.items.map(async (item) => {
          const res = await fetch(
            "https://www.googleapis.com/books/v1/volumes/" + item.id
          );
          return res.json();
        })
      );

      setBooks(volumes);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      {books.map((book, index) => (
        <div key={index}>
          <h2>
            {book.volumeInfo.title}: {book.volumeInfo.authors.join(', ')}
            <Image
              src={book.volumeInfo.imageLinks.thumbnail}
              width={100}
              height={100}
              alt="Picture of the book"
            />
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Page;
