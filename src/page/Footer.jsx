import React, { useState } from "react";
import "../style/footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaComments } from "react-icons/fa";

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Toggle Chat Window
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Handle Chat Input
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      setMessages([...messages, { text: chatMessage, sender: "user" }]);
      setChatMessage("");
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: "Hello! How can I help you?", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We provide the best products and services to our customers with top-notch support.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt /> +1 234 567 890</p>
          <p><FaEnvelope /> support@example.com</p>
          <p><FaMapMarkerAlt /> 123 Main Street, City, Country</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="chat-button" onClick={toggleChat}>
        <FaComments /> Chat with Us
      </button>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Live Chat</span>
            <button className="close-chat" onClick={toggleChat}>✖</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form className="chat-input" onSubmit={handleChatSubmit}>
            <input
              type="text"
              placeholder="Type a message..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
