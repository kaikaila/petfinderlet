import React, { createContext, useState, useEffect } from "react";
import { fetchAnimals } from "../api";

// Create Context 
export const AnimalContext = createContext();

// Context Provider 
export const AnimalProvider = ({ children }) => {
  const [animals, setAnimals] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch animal data on mount 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAnimals();
        if (data && data.data) {
          const { data: animalsData, included } = data;

          setAnimals(
            animalsData.map((animal) => {
              // Get animal species
              const speciesId =
                animal.relationships?.species?.data?.[0]?.id || null;

              const speciesObject = included?.find(
                (item) => item.type === "species" && item.id === speciesId
              );

              const species =
                speciesObject?.attributes?.singular || "Unknown";

              // Get animal pic
              const pictureIds = animal.relationships.pictures?.data.map((pic) => pic.id);
              const pictures = data.included.filter(
                (item) => item.type === "pictures" && pictureIds?.includes(item.id)
              );

              const highResPicture =
                pictures.length > 0 ? pictures[0].attributes.original.url : null;

              return {
                id: animal.id,
                name: animal.attributes.name,
                age: animal.attributes.ageString,
                sex: animal.attributes.sex,
                description: animal.attributes.descriptionText,
                picture: highResPicture,
                breed: animal.attributes.breedPrimary,
                species: species,
                size: animal.attributes.sizeGroup,
                activityLevel: animal.attributes.activityLevel,
                adoptionFeeString: animal.attributes.adoptionFeeString,
                isKidsOk: animal.attributes.isKidsOk,
                vaccinated: animal.attributes.isCurrentVaccinations,
                descriptionText: animal.attributes.descriptionText,
                descriptionHTML: animal.attributes.descriptionHtml,
                url: animal.attributes.url,
              };
            })
          );
        }
      } catch (err) {
        setError("Failed to fetch animals. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Load favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Add or remove favorites
  const toggleFavorite = (animal) => {
    const isFavorited = favorites.some((fav) => fav.id === animal.id);
    let updatedFavorites;
    if (isFavorited) {
      updatedFavorites = favorites.filter((fav) => fav.id !== animal.id);
    } else {
      updatedFavorites = [...favorites, animal];
    }
    setFavorites(updatedFavorites);

    // Update localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <AnimalContext.Provider
      value={{
        animals,
        favorites,
        toggleFavorite,
        loading,
        error,
      }}
    >
      {children}
    </AnimalContext.Provider>
  );
};
