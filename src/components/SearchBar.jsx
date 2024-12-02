import React from "react";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <div className="search-icon-container">
        <img
          id="search-icon"
          src="../../assets/image-search-btn.png" 
          alt="Search"
          className="search-btn-icon"
        />
      </div>
      
    </div>
    </>
    
  );
};

export default SearchBar;



