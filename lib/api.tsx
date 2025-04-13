import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
const apiUrl = "https://pizza-and-desserts.p.rapidapi.com/pizzas";
console.log("API Key:", apiKey);

async function fetchPizza() {
  if (!apiKey) {
    console.error("API Key is missing!");
    return [];
  }
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
      },
    });
    console.log("Pizza API Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Error fetching pizza:", err.response?.data || err.message);
    return [];
  }
}

export default fetchPizza;
