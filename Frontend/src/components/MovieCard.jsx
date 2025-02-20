import { Link } from "react-router-dom";
import "../styles/MovieCard.css"

const MovieCard = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <img src={movie.Poster} alt={movie.Title} />
          <h3>
            <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
          </h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
