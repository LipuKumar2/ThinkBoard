import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://thinkboard-cv0y.onrender.com/api/auth/signup", form);
      navigate("/login");
    } catch {
      alert("Signup failed");
    }
  };

  return (
  <div className="auth-container">
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
        required
      />
      <button type="submit">Register</button>
    </form>
  </div>
);
}
