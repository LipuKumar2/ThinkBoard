import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Welcome from "../src/pages/Welcome";
import Signup from "../src/pages/Signup";
import Login from "../src/pages/Login";
import Dashboard from "../src/pages/DashBoard";
import NewNote from "../src/pages/NewNote";
import EditNote from "../src/pages/EditNote";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";

// Components
import Navbar from "../src/components/Navbar";
import ProtectedRoute from "../src/components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/note/new"
          element={
            <ProtectedRoute>
              <NewNote />
            </ProtectedRoute>
          }
        />
        <Route
          path="/note/edit/:id"
          element={
            <ProtectedRoute>
              <EditNote />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
