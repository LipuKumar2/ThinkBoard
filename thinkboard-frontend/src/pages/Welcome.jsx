import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/Welcome.css";

export default function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to ThinkBoard</h1>
      <p>Your secure, simple place to store and manage notes.</p>
      <Link to="/signup">Get Started</Link>
    </div>
  );
}
