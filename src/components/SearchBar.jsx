import React from "react";

const SearchBar = ({ searchText, setSearchText, handleSearch }) => {
  return (
    <div className="max-w-lg mx-auto mt-6 p-4 bg-gray-50 rounded-lg shadow-md">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter city or zipcode..."
      />
      <button
        onClick={() => handleSearch(searchText)}
        className="mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
