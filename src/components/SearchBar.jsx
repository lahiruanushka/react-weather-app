import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ searchText, onSearchChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchText}
          onChange={onSearchChange}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Search for a city..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
