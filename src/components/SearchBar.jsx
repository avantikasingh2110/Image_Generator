import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) {
      alert("Please enter a search term.");
      return;
    }
    onSearch(query.trim());
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
        className="w-full max-w-md p-2 border rounded shadow text-black"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-green-300 text-blue-800 rounded hover:bg-amber-200"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
