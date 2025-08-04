import { Link } from "react-router-dom";
import "../styles/Notecard.css";

export default function NoteCard({ note, onDelete }) {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.content.slice(0, 120)}{note.content.length > 120 && "..."}</p>

      {/* Optional: Tags support */}
      {note.tags && (
        <div className="tags">
          {note.tags.map((tag, index) => (
            <span className="tag" key={index}>#{tag}</span>
          ))}
        </div>
      )}

      <div className="note-actions">
        <Link to={`/note/edit/${note._id}`} className="btn edit">Edit</Link>
        <button onClick={() => onDelete(note._id)} className="btn delete">Delete</button>
      </div>
    </div>
  );
}
