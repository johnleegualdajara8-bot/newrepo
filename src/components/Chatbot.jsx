import React, { useState, useEffect, useRef } from 'react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm your Movie Scout. Ask me for a recommendation (Action, Horror, or Romance)!" }
  ]);
  
  const chatEndRef = useRef(null);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) reRturn;

    const userMessage = { role: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    // Simple Logic for Movie Recommendations
    setTimeout(() => {
      let botResponse = "I'm not sure about that. Try asking for 'Action', 'Horror', or 'Romance' movies!";
      const query = input.toLowerCase();

      if (query.includes("action")) {
        botResponse = "For Action, I recommend Avengers or John Wick! Check out the Action section above.";
      } else if (query.includes("horror")) {
        botResponse = "Feeling brave? Try The Conjuring or Insidious in our Horror gallery.";
      } else if (query.includes("romance")) {
        botResponse = "In the mood for love? You can't go wrong with Titanic or La La Land.";
      } else if (query.includes("hello") || query.includes("hi")) {
        botResponse = "Hello! Looking for a movie tonight?";
      }

      setMessages(prev => [...prev, { role: "bot", text: botResponse }]);
    }, 600); // 0.6s delay to feel "natural"

    setInput("");
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={styles.launcher}
      >
        {isOpen ? "✖" : "💬 Movie Bot"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.header}>Movie Scout AI</div>
          
          <div style={styles.messageList}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.bubble,
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  background: msg.role === "user" ? "#e50914" : "#444",
                }}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSend} style={styles.inputArea}>
            <input 
              style={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a genre..."
            />
            <button type="submit" style={styles.sendBtn}>Send</button>
          </form>
        </div>
      )}
    </>
  );
}

// Internal CSS Objects
const styles = {
  launcher: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "12px 20px",
    borderRadius: "25px",
    backgroundColor: "#e50914",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 1000
  },
  chatWindow: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "300px",
    height: "400px",
    backgroundColor: "#222",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
    zIndex: 1000,
    border: "1px solid #444"
  },
  header: {
    background: "#333",
    padding: "15px",
    fontWeight: "bold",
    color: "#e50914",
    borderBottom: "1px solid #444",
    textAlign: "center"
  },
  messageList: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  bubble: {
    padding: "8px 12px",
    borderRadius: "12px",
    color: "white",
    fontSize: "0.9rem",
    maxWidth: "80%",
    wordWrap: "break-word"
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    background: "#333"
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    background: "#444",
    color: "white",
    outline: "none"
  },
  sendBtn: {
    marginLeft: "5px",
    padding: "8px 12px",
    background: "#e50914",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Chatbot;