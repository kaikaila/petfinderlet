// 
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AnimalContext } from "../context/AnimalContext";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import AnimalCard from "../components/AnimalCard";

const HomePage = () => {
  const { animals, loading, error } = useContext(AnimalContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  // Derive filtered animals dynamically
  const filteredAnimals = animals.filter((animal) => {
    // Apply filter logic
    if (filter === "Cats" && animal.species !== "Cat") return false;
    if (filter === "Dogs" && animal.species !== "Dog") return false;
    if (filter === "Others" && (animal.species === "Cat" || animal.species === "Dog")) return false;

    // Apply search logic
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      return (
        (animal.name?.toLowerCase() || "").includes(query) ||
        (animal.age?.toLowerCase() || "").includes(query) ||
        (animal.sex?.toLowerCase() || "").includes(query) ||
        (animal.breed?.toLowerCase() || "").includes(query) ||
        (animal.size?.toLowerCase() || "").includes(query)
      );
    }
    return true; // Show all if no search query
  });

  if (loading) return <p>Loading animal data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {/* Button to navigate to SavedPage */}
      <Link to="/saved" style={{ textDecoration: "none", margin: "20px" }}>
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>
          View Saved Animals
        </button>
      </Link>

      {/* Filter Component */}
      <Filters filter={filter} setFilter={setFilter} handleFilterChange={setFilter} />

      {/* Search Bar Component */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Animal Cards or No Results Message */}
      <div className="animal-list">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={{
                name: animal.name,
                age: animal.age,
                sex: animal.sex,
                breed: animal.breed,
                species: animal.species,
                picture: animal.picture,
                size: animal.size,
                id: animal.id,
              }}
            />
          ))
        ) : (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <img
              id="paw-icon"
              src="../../assets/illustration-paw.png" 
              alt="No results"
              style={{ width: "50px", height: "50px" }}
            />
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>No results found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
