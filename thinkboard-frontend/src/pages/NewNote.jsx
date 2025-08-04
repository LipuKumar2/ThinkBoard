import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/NoteForm.css";


export default function NewNote() {
  const [note, setNote] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post("http://thinkboard-cv0y.onrender.com/api/notes", note, {
      headers: { Authorization: `Bearer ${token}` }
    });
    navigate("/dashboard");
  };

 return (
  <div className="note-container">
    <form onSubmit={handleSubmit} className="note-form">
      <h2>New Note</h2>
      <input
        type="text"
        placeholder="Title"
        onChange={e => setNote({ ...note, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Content"
        onChange={e => setNote({ ...note, content: e.target.value })}
        required
      />
      <button type="submit">Save</button>
    </form>
  </div>
);

}
