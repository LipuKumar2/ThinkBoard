import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/NoteForm.css";// Reuse your new/edit note form styles

export default function EditNote() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://thinkboard-cv0y.onrender.com/api/notes", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const noteData = res.data.find(n => n._id === id);
        if (!noteData) {
          setNotFound(true);
        } else {
          setNote(noteData);
        }
      } catch (err) {
        alert("Failed to fetch note.");
      }
      setLoading(false);
    };
    fetchNote();
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put(`http://thinkboard-cv0y.onrender.com/api/notes/${id}`, note, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate("/dashboard");
    } catch {
      alert("Failed to update note.");
    }
  };

  if (loading) return <div className="note-loading">Loading note...</div>;
  if (notFound) return <div className="note-error">Note not found.</div>;

  return (
    <div className="note-form-container">
      <form onSubmit={handleSubmit} className="note-form">
        <h2>Edit Note</h2>
        <input
          type="text"
          value={note.title}
          placeholder="Note Title"
          onChange={e => setNote({ ...note, title: e.target.value })}
          required
        />
        <textarea
          value={note.content}
          placeholder="Note Content"
          onChange={e => setNote({ ...note, content: e.target.value })}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
