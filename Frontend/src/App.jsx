import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Fav";
import { AuthProvider } from "./context/authContext";
import "./App.css"
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
    </AuthProvider>
  );
};

export default App;
