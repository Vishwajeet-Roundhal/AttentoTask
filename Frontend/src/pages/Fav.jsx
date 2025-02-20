import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import "../styles/Fav.css"

const Fav = () => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;

      const response = await fetch("http://localhost:5000/api/auth/favorites", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      setFavorites(data);
    };

    fetchFavorites();
  }, [user]);

  return (
    <div className="favorites-container">
      <h2>My Favorite Movies</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <p>{movie.Title} ({movie.Year})</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Fav;
