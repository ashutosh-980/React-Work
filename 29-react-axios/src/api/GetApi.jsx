import axios from "axios";

// Create an Axios Instance
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

// Create a get method
export const getMovies = () => {
  return api.get("/movie/popular");
};
