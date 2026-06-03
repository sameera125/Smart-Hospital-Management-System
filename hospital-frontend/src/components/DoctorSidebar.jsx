import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function DoctorSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">👨‍⚕️ Doctor Portal</div>

      <ul>
        <li><Link to="/doctor-dashboard">🩺 Dashboard</Link></li>
        <li><Link to="/doctor-appointments">📅 My Appointments</Link></li>
        <li><Link to="/create-prescription">💊 Create Prescription</Link></li>

        <li style={{ marginTop: "20px" }}>
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            🚪 Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DoctorSidebar;