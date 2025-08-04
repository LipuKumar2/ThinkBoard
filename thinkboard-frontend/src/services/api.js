import axios from "axios";

// ✅ Use environment variable or fallback to localhost
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://thinkboard-cv0y.onrender.com";

const api = axios.create({
  baseURL: API_BASE,
});

// ✅ Attach JWT token (if present) to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
