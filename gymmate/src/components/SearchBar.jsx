import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md group">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search food, workouts, etc."
        className="flex-grow px-4 py-2 rounded-l-md border-2 border-gray-800 focus:outline-none "
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gray-800 text-white rounded-r-md transition hover:cursor-pointer hover:bg-gray-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
