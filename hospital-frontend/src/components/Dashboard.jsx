import { useEffect, useState } from "react";
import {
  getPatients,
  getDoctors,
  getConsultations,
  getPrescriptions
} from "../services/ApiService";

import "../styles/Dashboard.css";

function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const patientRes = await getPatients();
    const doctorRes = await getDoctors();
    const consultationRes = await getConsultations();
    const prescriptionRes = await getPrescriptions();

    setPatients(patientRes.data);
    setDoctors(doctorRes.data);
    setConsultations(consultationRes.data);
    setPrescriptions(prescriptionRes.data);
  };

  const bookedCount = consultations.length;

  const completedCount = consultations.filter((c) =>
    prescriptions.some(
      (p) => String(p.consultationId) === String(c.consultationId)
    )
  ).length;

  const activeCount = bookedCount - completedCount;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Hospital Dashboard</h1>
        <p>Live overview from MySQL database</p>
      </div>

      <div className="dashboard-cards">
        <div className="card blue-card">
          <h3>Total Patients</h3>
          <h1>{patients.length}</h1>
        </div>

        <div className="card green-card">
          <h3>Total Doctors</h3>
          <h1>{doctors.length}</h1>
        </div>

        <div className="card purple-card">
          <h3>Total Consultations</h3>
          <h1>{bookedCount}</h1>
        </div>

        <div className="card orange-card">
          <h3>Completed</h3>
          <h1>{completedCount}</h1>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="recent-box">
          <h2>Consultation Status</h2>

          <div className="status-row">
            <span>Booked</span>
            <b>{bookedCount}</b>
          </div>

          <div className="status-row">
            <span>Active</span>
            <b>{activeCount}</b>
          </div>

          <div className="status-row">
            <span>Completed</span>
            <b>{completedCount}</b>
          </div>
        </div>

        <div className="recent-box">
          <h2>Recent Patients</h2>

          {patients.slice(-5).reverse().map((p) => (
            <div className="recent-item" key={p.patientId}>
              <span>{p.name}</span>
              <small>{p.email}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;