import React, { useEffect } from "react";
import { fetchAnimals } from "../api";

const APITest = () => {
  useEffect(() => {
    const testAPI = async () => {
      const data = await fetchAnimals();
      console.log("Fetched Animals:", data); // Log the results
    };

    testAPI();
  }, []);

  return (
    <div>
      <h1>API Test Page</h1>
      <p>Check the console for the API response.</p>
    </div>
  );
};

export default APITest;
