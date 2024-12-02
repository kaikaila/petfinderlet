const BASE_URL = "https://api.rescuegroups.org/v5/public";
const API_KEY = "CNOlnygF";

// fetching data example link: 
// /public/animals/search/available/dogs/?limit=10&page=2&sort=+distance&fields[animals]=name&include=fosters
export async function fetchAnimals() {
  try {
    const response = await fetch(`${BASE_URL}/animals/search/available/?limit=100`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Return the API response
  } catch (error) {
    console.error("Failed to fetch animals:", error);
    return null;
  }
}
