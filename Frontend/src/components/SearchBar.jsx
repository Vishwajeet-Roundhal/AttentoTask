import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") onSearch(query);
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "250px",
          outline: "none",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          background: "#ff4b5c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background 0.3s ease-in-out",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
