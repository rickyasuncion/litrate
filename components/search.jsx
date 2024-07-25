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
            "https://www.googleapis.com/books/v1/volumes?q=" + text + "&maxResults=40"
          );
          break;
        case "Author":
          response = await fetch(
            "https://www.googleapis.com/books/v1/volumes?q=inauthor:" + text + "&maxResults=40"
          );
          break;
        case "ISBN":
          response = await fetch(
            "https://www.googleapis.com/books/v1/volumes?q=isbn:" + text + "&maxResults=40"
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
    <div>
      {books.map((book, index) => (
        book.volumeInfo ? (
          <div key={index}>
            <div>
              {book.volumeInfo.title}: {book.volumeInfo.authors?.join(", ")}
            </div>
            {book.volumeInfo.imageLinks && (
              <Image
                src={book.volumeInfo.imageLinks.thumbnail}
                width={100}
                height={100}
                className="w-44 h-auto"
                alt="Picture of the book"
              />
            )}
          </div>
        ) : null
      ))}
    </div>
  );
};

export default Search;
