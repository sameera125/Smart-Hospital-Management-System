import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/RealTimeHospital.css";

function VideoRoom() {
  const { consultation, doctor } = useLocation().state;
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(0);

  const meetLink =
    consultation.meetingLink ||
    `https://meet.google.com/smart-care-${consultation.consultationId}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  const copyMeetLink = () => {
    navigator.clipboard.writeText(meetLink);
    alert("Meeting link copied");
  };

  const endVideoCall = () => {
    navigate("/waiting-prescription", {
      state: {
        consultationId: consultation.consultationId
      }
    });
  };

  return (
    <div className="video-page">

      <div className="meet-topbar">
        <div>
          <h2>SmartCare Meet</h2>
          <p>Consultation #{consultation.consultationId}</p>
        </div>

        <div className="meet-timer">
          ⏱ {formatTime()}
        </div>
      </div>

      <div className="meet-link-box">
        <span>{meetLink}</span>

        <button onClick={copyMeetLink}>
          🔗 Copy Link
        </button>

        <a href={meetLink} target="_blank" rel="noreferrer">
          Join Meet
        </a>
      </div>

      <div className="video-header">
        <h1>Online Consultation Room</h1>
        <p>
          Connected with <b>{doctor?.doctorName}</b>
          <span className="online-dot"> ● Online</span>
        </p>
      </div>

      <div className="video-box">
        <div className="doctor-video">
          <span>👨‍⚕️</span>
          <h2>{doctor?.doctorName}</h2>
          <p>Doctor Online</p>
        </div>

        <div className="patient-video">
          <span>🧑</span>
          <h2>You</h2>
          <p>Patient Connected</p>
        </div>
      </div>

      <div className="video-controls">
        <button>🎤 Mute</button>
        <button>📹 Camera</button>

        <button
          className="end-call"
          onClick={endVideoCall}
        >
          End Call & Wait for Prescription
        </button>
      </div>
    </div>
  );
}

export default VideoRoom;