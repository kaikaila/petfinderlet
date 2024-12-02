import React, { useEffect, useState } from "react";
import { fetchAnimals } from "../api";

const AnimalTest = () => {
  const [animals, setAnimals] = useState([]); // State to store fetched animals

  useEffect(() => {
    const testAPI = async () => {
      const data = await fetchAnimals();
      console.log("Fetched Animals:", data); // Log the results
      if (data && data.data) {
        // Extract only the required fields
        const formattedAnimals = data.data.map((animal) => ({
          name: animal.attributes.name,
          age: animal.attributes.ageString,
          sex: animal.attributes.sex,
          pictureUrl: animal.attributes.pictureThumbnailUrl,
        }));
        setAnimals(formattedAnimals); // Update state with formatted data
      }
    };

    testAPI();
  }, []);

  return (
    <div>
      <h1>API Test Page</h1>
      <p>Displaying fetched animal data below:</p>
      {animals.length > 0 ? (
        <ul>
          {animals.map((animal, index) => (
            <li key={index}>
              <h3>{animal.name}</h3>
              <p>Age: {animal.age}</p>
              <p>Sex: {animal.sex}</p>
              <img src={animal.pictureUrl} alt={`${animal.name}`} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading animal data...</p>
      )}
    </div>
  );
};

export default AnimalTest;
