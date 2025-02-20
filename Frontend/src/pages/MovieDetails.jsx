import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import { AuthContext } from "../context/authContext";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState("");
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  const handleAddToFavorites = async () => {
    if (!user) {
      setMessage("Please login to add favorites.");
      return;
    }

    const response = await fetch("http://localhost:5000/api/auth/favorites", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imdbID: movie.imdbID,
        Title: movie.Title,
        Poster: movie.Poster,
        Year: movie.Year,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      setMessage("Added to favorites!");
    } else {
      setMessage(data.error || "Failed to add.");
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        backgroundColor: "gray",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "10px" }}>{movie.Title}</h2>
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{
          width: "100%",
          maxWidth: "300px",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
          marginBottom: "15px",
        }}
      />
      <p style={{ fontSize: "16px", color: "#555" }}>{movie.Plot}</p>
      <p style={{ fontWeight: "bold", color: "#444" }}>Genre: {movie.Genre}</p>
      <p style={{ fontWeight: "bold", color: "#444" }}>
        Director: {movie.Director}
      </p>
      <p style={{ fontWeight: "bold", color: "#444" }}>
        IMDb Rating: {movie.imdbRating}
      </p>
      <button
        onClick={handleAddToFavorites}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#ff4b5c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "15px",
          transition: "background 0.3s ease",
        }}
      >
        Add to Favorites
      </button>
      {message && (
        <p
          style={{
            marginTop: "10px",
            color: "green",
            fontWeight: "bold",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default MovieDetails;
