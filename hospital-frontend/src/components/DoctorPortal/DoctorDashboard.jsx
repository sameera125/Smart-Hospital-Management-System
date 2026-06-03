import { Link } from "react-router-dom";
import "./DoctorPortal.css";

function DoctorDashboard() {
  const doctorId = localStorage.getItem("doctorId");
  const doctorEmail = localStorage.getItem("doctorEmail");

  return (
    <div className="doctor-portal-page">
      <div className="doctor-welcome-card">
        <h1>Doctor Dashboard</h1>
        <p>Welcome, {doctorEmail}</p>
        <span>Doctor ID: {doctorId}</span>
      </div>

      <div className="doctor-action-grid">

        <Link to="/doctor-appointments" className="doctor-action-card">
          <h2>📅 My Appointments</h2>
          <p>View only patients booked for your consultation.</p>
        </Link>

        <Link to="/create-prescription" className="doctor-action-card">
          <h2>💊 Create Prescription</h2>
          <p>Create and save digital prescriptions.</p>
        </Link>

      </div>
    </div>
  );
}

export default DoctorDashboard;