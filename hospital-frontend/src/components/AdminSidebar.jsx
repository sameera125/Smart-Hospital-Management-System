import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function AdminSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        🏥 Admin Portal
      </div>

      <ul>
        <li>
          <Link to="/">📊 Dashboard</Link>
        </li>

        <li className="menu-title">Patients</li>

        <li>
          <Link to="/patients">🧑 Patient Records</Link>
        </li>

        <li>
          <Link to="/patients/add">➕ Add Patient</Link>
        </li>

        <li className="menu-title">Doctors</li>

        <li>
          <Link to="/doctors">👨‍⚕️ Doctor Records</Link>
        </li>

        <li>
          <Link to="/doctors/add">➕ Add Doctor</Link>
        </li>

        <li className="menu-title">Hospital Operations</li>

        <li>
          <Link to="/appointments">📅 Consultations</Link>
        </li>

        <li>
          <Link to="/medicine-orders-admin">💊 Medicine Orders</Link>
        </li>

        <li className="menu-title">Analytics</li>

        <li>
          <Link to="/reports">📈 Reports</Link>
        </li>

        <li className="logout-space">
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

export default AdminSidebar;