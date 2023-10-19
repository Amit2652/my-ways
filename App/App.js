import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  // Simulated data source (in real-world, this would be a WebSocket connection or an API).
  const simulatedData = [
    { text: 'Hello', sender: 'user' },
    { text: 'Hi there!', sender: 'bot' },
    { text: 'How can I help you?', sender: 'bot' },
  ];

  // Simulated function to send a message (in real-world, this would send the message to the server).
  const sendMessage = () => {
    if (messageInput.trim() === '') return;
    setMessages([...messages, { text: messageInput, sender: 'user' }]);
    setMessageInput('');
  };

  useEffect(() => {
    // Simulate receiving messages over time (in real-world, this would come from a server).
    const messageInterval = setInterval(() => {
      const message = simulatedData.shift();
      if (message) {
        setMessages([...messages, message]);
      } else {
        clearInterval(messageInterval);
      }
    }, 1000);

    return () => {
      clearInterval(messageInterval);
    };
  }, [messages]);

  return (
    <div className="App">
      <div className="chat-box">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-box">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
