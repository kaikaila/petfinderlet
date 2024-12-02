import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AnimalContext } from "../context/AnimalContext";

const AnimalCard = ({ animal }) => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useContext(AnimalContext);

  // Check if the animal is in the favorites list
  const isFavorited = favorites.some((fav) => fav.id === animal.id);

  const handleCardClick = () => {
    navigate(`/detail/${animal.id}`);
  };

  const handleFavoriteClick = (event) => {
    event.stopPropagation(); // Prevent triggering the card navigation
    toggleFavorite(animal);
  };

  return (
    <div className="animal-card" onClick={handleCardClick} style={{ cursor: "pointer", position: "relative" }}>
      {/* Animal Image */}
      <img 
        className="animal-card-image"
        src={animal.picture} 
        alt={animal.name} 
        style={{ width: "100%" }} 
      />

      {/* Heart Icon */}
      <button
        onClick={handleFavoriteClick}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img
          className="favorite-icon"
          src={isFavorited ? "../../assets/icon-save-on.png" : "../../assets/icon-save-off.png"}
          alt="Favorite"
          style={{ width: "32px", height: "32px" }}
        />
      </button>

      {/* Animal Details */}
      <h3>{animal.name}</h3>
      <p>Age: {animal.age ? animal.age : "/"}</p>
      <p>Sex: {animal.sex ? animal.sex : "/"}</p>
      <p>Species: {animal.species ? animal.species : "/"}</p>
      <p>Breed: {animal.breed ? animal.breed : "/"}</p>
      <p>Size: {animal.size ? animal.size : "/"}</p>

    </div>
  );
};


export default AnimalCard;

