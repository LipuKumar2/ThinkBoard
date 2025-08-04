import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../styles/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  let user = null;
  if (isLoggedIn) {
    try {
      user = jwtDecode(token); // Decode only once, inside component
    } catch (err) {
      console.error("Invalid token");
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">📝 ThinkBoard</Link>
      </div>

      <div className="navbar-right">
        {isLoggedIn ? (
          <>
            <span className="user-info">Hello, {user?.name || user?.email}</span>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/note/new">New Note</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
