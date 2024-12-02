import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import { AnimalContext } from "../context/AnimalContext";
import AnimalCard from "../components/AnimalCard";

const SavedPage = () => {
  const { favorites, toggleFavorite } = useContext(AnimalContext);

  if (favorites.length === 0) {
    return (
      <div>
        <p>No saved animals yet!</p>
        <Link to="/" style={{ textDecoration: "none", margin: "20px" }}>
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>
            Back to Homepage
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Saved Animals</h1>
      <Link to="/" style={{ textDecoration: "none", margin: "20px" }}>
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>
          Back to Homepage
        </button>
      </Link>
      <div className="animal-list">
        {favorites.map((animal) => (
          <div key={animal.id}>
            <AnimalCard animal={animal} />
      
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPage;

