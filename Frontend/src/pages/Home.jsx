import { useState } from "react";
import { searchMovies } from "../services/api";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import "../styles/home.css"

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    const results = await searchMovies(query);
    setMovies(results);
    setLoading(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <MovieCard movies={movies} />}
    </div>
  );
};

export default Home;
