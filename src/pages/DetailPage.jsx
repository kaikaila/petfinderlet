import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimalContext } from "../context/AnimalContext";

const DetailPage = () => {
  const { animals, favorites, toggleFavorite } = useContext(AnimalContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedAnimal = animals.find((animal) => animal.id === id);

  const goBack = () => navigate(-1);

  if (!selectedAnimal) {
    return <p>Animal not found!</p>;
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
    <main id="detail-page">
      <button onClick={goBack} style={{ margin: "20px" }}>
        Back to Homepage
      </button>
      <header id="detail-header" style={{ position: "relative" }}>
        <h1>{name}</h1>
        <img
          id="detail-pic"
          src={picture}
          alt={name}
          style={{ width: "300px", height: "300px", borderRadius: "10px" }}
        />
        {/* Single Heart Button */}
        <button
          onClick={() => toggleFavorite(selectedAnimal)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={isFavorited ? "../../assets/icon-save-on.png" : "../../assets/icon-save-off.png"}
            alt="Favorite"
            style={{ width: "30px", height: "30px" }}
          />
        </button>
      </header>
      <section id="detail-info">
        <p>Age: {age}</p>
        <p>Sex: {sex}</p>
        <p>Species: {species}</p>
        <p>Breed: {breed}</p>
        <p>Size: {size}</p>
        <p>Activity Level: {activityLevel}</p>
        <p>Adoption Fee: {adoptionFeeString ? `$${adoptionFeeString}` : "N/A"}</p>
        <p>Good with Kids: {isKidsOk ? "Yes" : "No"}</p>
        <p>Vaccinated: {vaccinated ? "Yes" : "No"}</p>
        <p>Description:</p>
        <div dangerouslySetInnerHTML={{ __html: descriptionHTML || "N/A" }} />
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            View Adoption Details
          </a>
        )}
      </section>
    </main>
  );
};

export default DetailPage;

