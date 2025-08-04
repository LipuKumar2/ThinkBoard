import "../styles/About.css"; // Optional if you're adding CSS

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About ThinkBoard</h2>
      <p className="about-description">
        <strong>ThinkBoard</strong> is a clean and intuitive personal note-taking web application that helps
        you stay organized and productive. You can create, edit, and delete notes securely,
        and access them anytime from your dashboard.
      </p>
      <ul className="about-features">
        <li>📝 Easy note creation and editing</li>
        <li>🔐 Secure login and authentication</li>
        <li>📂 Organized dashboard</li>
        <li>📱 Fully responsive interface</li>
      </ul>
      <p className="about-footer">
        Built with ❤️ using React, Node.js, Express, and MongoDB.
      </p>
    </div>
  );
}
