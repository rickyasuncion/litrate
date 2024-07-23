function Search_bar() {
  return (
    <div className="w-3/5 h-12 text-black flex justify-center mt-24 mx-auto">
        <select className="border border-black rounded-l-full px-3">
            <option value="Title">Title</option>
            <option value="Author">Author</option>
            <option value="ISBN">ISBN</option>
        </select>
        <input type="text" className="w-full border border-black px-2"/>
        <button className="border border-black bg-white rounded-r-full px-3">Search</button>
    </div>
  )
}

export default Search_bar