import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/DashBoard.css";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://thinkboard-cv0y.onrender.com/api/notes", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const deleteNote = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://thinkboard-cv0y.onrender.com/api/notes/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchNotes();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Your Notes</h2>
        <Link className="new-note-btn" to="/note/new">
          + New Note
        </Link>
      </div>

      {notes.length === 0 ? (
        <p className="empty-message">No notes yet. Create one!</p>
      ) : (
        notes.map((note) => (
          <div className="note-card" key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div className="note-actions">
              <Link to={`/note/edit/${note._id}`} className="edit-link">
                Edit
              </Link>
              <button
                onClick={() => deleteNote(note._id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
