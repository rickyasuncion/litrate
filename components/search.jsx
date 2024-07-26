import { useEffect, useState } from "react";
import Image from "next/image";

const Search = ({ type, text }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (type == "" || text == "") {
        return;
      }
      let response;

      switch (type) {
        case "Title":
          response = await fetch(
            "https://www.googleapis.com/books/v1/volumes?q=" +
              text +
              "&maxResults=40"
          );
          break;
        case "Author":
          response = await fetch(
            "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
              text +
              "&maxResults=40"
          );
          break;
        case "ISBN":
          response = await fetch(
            "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
              text +
              "&maxResults=40"
          );
          break;
      }
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
  }, [type, text]);

  return (
    <div className="flex flex-col items-start p-5 mx-auto mt-10 w-1/2 bg-dark-blue border border-black rounded-lg shadow-lg">
      {books.map((book, index) =>
        book.volumeInfo ? (
          <div
            className="flex p-8 mt-10 w-full gap-4 bg-cyan-800 rounded-md shadow-md"
            key={index}
          >
            {book.volumeInfo.imageLinks && (
              <Image
                src={book.volumeInfo.imageLinks.thumbnail}
                width={100}
                height={100}
                className="w-56 h-56"
                alt="Picture of the book"
              />
            )}
            <div className="ml-5 ">
              <h2 className="text-xl font-bold text-white">
                {book.volumeInfo.title}
              </h2>
              <p className="text-gray-300">
                {book.volumeInfo.authors?.join(", ")}
              </p>
              <p className="">
                {book.volumeInfo.description
                  ?.substring(0, 350)
                  .replace(/<[^>]*>?/gm, "")}
                ...
              </p>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Search;
