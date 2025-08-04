import "../styles/Contact.css"; // Create this CSS file if you haven't

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        Have questions, feedback, or need support? We're here to help!
      </p>

      <div className="contact-details">
        <p><strong>📧 Email:</strong> <a href="mailto:thinkboard.com">support@thinkboard.com</a></p>
        <p><strong>🌐 Website:</strong> <a href="https://ThinkBoard.com" target="_blank" rel="noopener noreferrer">thinkboard.com</a></p>
        <p><strong>🧾 Developer Portfolio:</strong> <a href="https://lipuportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">portfolio.com</a></p>
      </div>

      <p className="contact-footer">
        We typically respond within 24 hours. Thank you for using ThinkBoard!
      </p>
    </div>
  );
}
