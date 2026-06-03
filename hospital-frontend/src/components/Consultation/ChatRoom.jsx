import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/RealTimeHospital.css";

function ChatRoom() {
  const { consultation, doctor } = useLocation().state;
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    { sender: "doctor", text: "Hello, please explain your problem." }
  ]);

  const [text, setText] = useState("");

  const sendMessage = () => {
    if (text.trim() === "") return;

    setMessages((prev) => [
      ...prev,
      { sender: "patient", text: text }
    ]);

    setText("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "doctor",
          text: "I understood your symptoms. I will prepare your prescription."
        }
      ]);
    }, 1000);
  };

  const endChat = () => {
    navigate("/waiting-prescription", {
      state: {
        consultationId: consultation.consultationId
      }
    });
  };

  return (
    <div className="chat-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="chat-box">
        <h1>Live Chat Consultation</h1>

        <p>Connected with {doctor?.doctorName}</p>

        <div className="chat-window">
          {messages.map((m, index) => (
            <div
              key={index}
              className={m.sender === "doctor" ? "doctor-msg" : "patient-msg"}
            >
              {m.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            placeholder="Type your message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button onClick={sendMessage}>
            Send
          </button>
        </div>

        <button
          className="end-chat-btn"
          onClick={endChat}
        >
          End Chat & Wait for Prescription
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;