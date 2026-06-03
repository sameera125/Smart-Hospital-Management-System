import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function PatientSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">🏥 Patient Portal</div>

      <ul>
        <li>
          <Link to="/home">🏠 Home</Link>
        </li>

        <li className="menu-title">Online Care</li>

        <li>
          <Link to="/find-doctors">🔍 Find Doctors</Link>
        </li>

        <li>
          <Link to="/prescription">📄 My Prescriptions</Link>
        </li>
        <li>
  <Link to="/my-medicine-orders">💊 Medicine Orders</Link>
</li>
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

export default PatientSidebar;