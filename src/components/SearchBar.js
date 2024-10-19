import React from "react";
import { CiSearch } from "react-icons/ci";
import SearchLeaf from "../assests/images/search-leaf.png"

const SearchBar = () => {
  return (
    <div className="grid grid-cols-12 mt-5">
      <div className="col-span-4"></div>
    <div className="flex items-center border-b border-gray-300  col-span-4">
      {/* Search Icon */}
      <CiSearch className="h-5 w-5" />
      {/* Input field */}
      <input
        className="pb-0 mb-0 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-0 px-2 leading-tight focus:outline-none focus:ring-0 focus:border-transparent"
        type="text"
        placeholder="Search Plant"
        aria-label="Search Plant"
      />
      {/* Leaf Icon */}
      <img src={SearchLeaf} alt="" className="h-5 w-5 mb-0"/>
    </div>
    </div>
  );
};

export default SearchBar;
