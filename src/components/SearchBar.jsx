import React from "react";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <>
    <img id="logo-icon" src="../../assets/logo.png" alt="logo" />
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by breed, size, or age"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <img
        id="search-icon"
        src="../../assets/icon-search.png" 
        alt="Search"
      />
    </div>
    </>
    
  );
};

export default SearchBar;



