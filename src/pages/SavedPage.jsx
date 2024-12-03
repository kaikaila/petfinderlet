import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import { AnimalContext } from "../context/AnimalContext";
import AnimalCard from "../components/AnimalCard";

const SavedPage = () => {
  const { favorites, toggleFavorite } = useContext(AnimalContext);

  if (favorites.length === 0) {
    return (
      <div>
        <Link to="/" className="back-home-btn">
          <img src="../../assets/icon-back.png" alt="Back" className="back-icon" />
          Back to Home
        </Link>
        <h1 className="saved-title">Saved animals</h1>
        <div className="no-saved-item-container">
            <img
              id="paw-icon"
              src="../../assets/img-no-results.png" 
              alt="No results"
            />
            <p>No animals saved yet</p>
          </div>
      </div>
    );
  }

  return (
    <div className="saved-page">
      <div className="saved-header">
        <Link to="/" className="back-home-btn">
          <img src="../../assets/icon-back.png" alt="Back" className="back-icon" />
          Back to Home
        </Link>
        <h1 className="saved-title">Saved animals</h1>
      </div>
      <div className="animal-list">
        {favorites.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default SavedPage;

