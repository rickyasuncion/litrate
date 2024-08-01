"use client";

import { useState } from "react";
import Search from "./search";

function Search_bar() {
  const [type, setType] = useState("Title");
  const [text, setText] = useState("");
  const [searchType, setSearchType] = useState(type);
  const [searchText, setSearchText] = useState(text);
  const [search, setSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchType(type);
    setSearchText(text);
    setSearch(true);
    console.log(type);
    console.log(text);
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="w-3/5 h-12 text-black flex justify-center mt-20 mx-auto"
      >
        <select
          className="border border-black rounded-l-full px-3"
          title="type"
          id="type"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Title">Title</option>
          <option value="Author">Author</option>
          <option value="ISBN">ISBN</option>
        </select>
        <input
          type="text"
          id="text"
          className="w-full border border-black px-2"
          title="text"
          placeholder="Enter Title, Author, ISBN"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="border border-black bg-white rounded-r-full px-3"
        >
          Search
        </button>
      </form>
      {search && <Search type={searchType} text={searchText} />}
    </>
  );
}

export default Search_bar;
