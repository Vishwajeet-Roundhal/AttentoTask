import axios from "axios";

const API_URL = "http://www.omdbapi.com/";
const API_KEY = "6ca3fc38"; 

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${query}`);
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
