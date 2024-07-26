"use client";

import Book_details from "@/components/book_details";
import Header from "@/components/header";
import { useState, useEffect } from "react";

function Page() {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const details = localStorage.getItem("book");
    const detailsObj = JSON.parse(details);
    setBook(detailsObj);
  }, []);
  return (
    <>
      <Header />
      <Book_details book={book} />
    </>
  );
}

export default Page;
