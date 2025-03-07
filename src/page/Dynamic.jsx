import React, { useState } from "react";
import "../style/ui.css"

const ui = () => {
    const [messages, setMessages] = useState([
        { text: "Hello!", sender: "me" },
        { text: "Hey, how are you?", sender: "other" },
      ]);
      const [input, setInput] = useState("");
    
      const sendMessage = () => {
        if (input.trim()) {
          setMessages([...messages, { text: input, sender: "me" }]);
          setInput("");
        }
      };
    
      return (
        <div className="whatsapp-ui">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-header">
              <img src="https://via.placeholder.com/50" alt="Profile" className="profile-pic" />
              <h2>WhatsApp Clone</h2>
            </div>
            <div className="chat-list">
              <div className="chat">
                <img src="https://via.placeholder.com/40" alt="User" />
                <div className="chat-info">
                  <h3>John Doe</h3>
                  <p>Hey, how are you?</p>
                </div>
              </div>
              <div className="chat">
                <img src="https://via.placeholder.com/40" alt="User" />
                <div className="chat-info">
                  <h3>Jane Smith</h3>
                  <p>See you soon!</p>
                </div>
              </div>
            </div>
          </div>
    
          {/* Chat Window */}
          <div className="chat-window">
            <div className="chat-header">Chat with John Doe</div>
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender === "me" ? "sent" : "received"}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            <div className="input-area">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        </div>
      );
    };
    
export default ui
