import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  const role = localStorage.getItem("role");

  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        🏥 SmartCare
      </div>

      <ul>

        <li>
          <Link to="/home">🏠 Home</Link>
        </li>

        {role === "admin" && (
          <>
            <li>
              <Link to="/">📊 Dashboard</Link>
            </li>

            <li className="menu-title">Patient Management</li>

            <li>
              <Link to="/patients">🧑 Patients</Link>
            </li>

            <li>
              <Link to="/patients/add">➕ Add Patient</Link>
            </li>

            <li className="menu-title">Doctor Management</li>

            <li>
              <Link to="/doctors">👨‍⚕️ Doctors</Link>
            </li>

            <li>
              <Link to="/doctors/add">➕ Add Doctor</Link>
            </li>

            <li className="menu-title">Appointment System</li>

            <li>
              <Link to="/appointments">📅 Appointments</Link>
            </li>

            <li>
              <Link to="/appointments/add">📝 Book Appointment</Link>
            </li>

            <li className="menu-title">Reports</li>

            <li>
              <Link to="/reports">📈 Reports</Link>
            </li>
          </>
        )}

        {role === "patient" && (
          <>
            <li className="menu-title">Patient Services</li>

            <li>
              <Link to="/find-doctors">🔍 Find Doctors</Link>
            </li>

            <li>
              <Link to="/appointments/add">📝 Book Appointment</Link>
            </li>

            <li>
              <Link to="/prescription">💊 My Prescriptions</Link>
            </li>
          </>
        )}

        {role === "doctor" && (
          <>
            <li className="menu-title">Doctor Portal</li>

            <li>
              <Link to="/doctor-dashboard">🩺 Doctor Dashboard</Link>
            </li>

            <li>
              <Link to="/doctor-appointments">📅 My Appointments</Link>
            </li>

            <li>
              <Link to="/create-prescription">💉 Create Prescription</Link>
            </li>

            <li>
              <Link to="/prescription">💊 Prescriptions</Link>
            </li>
          </>
        )}

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

export default Sidebar;