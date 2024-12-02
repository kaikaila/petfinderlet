import React from "react";

const Filters = ({ filter, setFilter, handleFilterChange }) => {
  const categories = ["All", "Dogs", "Cats", "Others"];

  return (
    <div className="filter-buttons">
      {categories.map((category) => (
        <button
          key={category}
          className={filter === category ? "active-filter" : ""}
          onClick={() => handleFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filters;
