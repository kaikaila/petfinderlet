import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useParams } from "react-router-dom";
import { AnimalContext } from "../context/AnimalContext";

const DetailPage = () => {
  const { animals, favorites, toggleFavorite} = useContext(AnimalContext);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  // Wait for animals to be loaded before setting loading to false
  useEffect(() => {
    if (animals.length > 0) {
      setIsLoading(false);
    }
  }, [animals]);
  const selectedAnimal = animals.find((animal) => animal.id === id);

  if (!selectedAnimal) {
    return (
      <div className="not-found">
        <h2>Loading</h2>
        {/* <Link to="/">Back to Home</Link> */}
      </div>
    );
  }

  const {
    name,
    picture,
    age,
    sex,
    species,
    breed,
    size,
    activityLevel,
    isKidsOk,
    vaccinated,
    descriptionHTML,
    adoptionFeeString,
    url,
  } = selectedAnimal;

  // Check if the animal is favorited
  const isFavorited = favorites.some((fav) => fav.id === id);

  return (
    <div className="detail-page">

      {/* Detail Header */}
      <div className="detail-header">
        {/* Left side of header: back home button */}
        <Link to="/" className="back-home-btn">
          <img src="../../assets/icon-back.png" alt="Back" className="back-icon" />
          Back to Home
        </Link>
        {/* Right side of header: saved animals button */}
        <Link to="/saved" className="view-saved-btn">
          <img src="../../assets/icon-heart.png" alt="Saved" className="icon-heart" />
          Saved animals
        </Link>
      </div>

      {/* Container with content */}
      <div className="container">
        <div className="detail-container">
          <img id="detail-pic" src={picture} alt={name} />
          <div className="detail-in-container">
            <div className="name-and-save">
              <h1>{name}</h1>
              <button
                onClick={() => toggleFavorite(selectedAnimal)}
              >
              <img
                src={isFavorited ? "../../assets/icon-save-on.png" : "../../assets/icon-heart.png"}
                alt="Favorite"
              />
              </button>
            </div>
            <div id="detail-info">
              <p><span className="detail-label">Age:</span> {age ? age : "N/A"}</p>
              <p><span className="detail-label">Sex:</span> {sex ? sex : "N/A"}</p>
              <p><span className="detail-label">Species:</span> {species ? species : "N/A"}</p>
              <p><span className="detail-label">Breed:</span> {breed ? breed : "N/A"}</p>
              <p><span className="detail-label">Size:</span> {size ? size : "N/A"}</p>
              <p><span className="detail-label">Activity Level:</span> {activityLevel ? activityLevel : "N/A"}</p>
              <p><span className="detail-label">Good with Kids:</span> {isKidsOk ? "Yes" : "No"}</p>
              <p><span className="detail-label">Vaccinated:</span> {vaccinated ? "Yes" : "No"}</p>
              <p><span className="detail-label">Adoption Fee:</span> {adoptionFeeString ? `$${adoptionFeeString}` : "N/A"}</p>
            </div>
          </div>
        </div>
        <div className="description">
          <h2><span>About</span></h2>
          <div dangerouslySetInnerHTML={{ __html: descriptionHTML || "N/A" }} />
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              View Adoption Details
            </a>
          )}
        </div>
      </div>

    </div>
  );
};

export default DetailPage;

