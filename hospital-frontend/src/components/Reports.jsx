import { useEffect, useState } from "react";
import {
  getPatients,
  getDoctors,
  getConsultations,
  getPrescriptions
} from "../services/ApiService";

import "../styles/Reports.css";

function Reports() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [selected, setSelected] = useState("patients");

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const p = await getPatients();
    const d = await getDoctors();
    const c = await getConsultations();
    const pr = await getPrescriptions();

    setPatients(p.data);
    setDoctors(d.data);
    setConsultations(c.data);
    setPrescriptions(pr.data);
  };

  const isCompleted = (consultationId) =>
    prescriptions.some(
      (p) => String(p.consultationId) === String(consultationId)
    );

  const activeConsultations = consultations.filter(
    (c) => !isCompleted(c.consultationId)
  );

  const completedConsultations = consultations.filter(
    (c) => isCompleted(c.consultationId)
  );

  return (
    <div className="reports-container">
      <h1>Hospital Reports</h1>

      <div className="report-grid">
        <div className="report-card blue" onClick={() => setSelected("patients")}>
          <h3>Total Patients</h3>
          <h2>{patients.length}</h2>
        </div>

        <div className="report-card green" onClick={() => setSelected("doctors")}>
          <h3>Total Doctors</h3>
          <h2>{doctors.length}</h2>
        </div>

        <div className="report-card purple" onClick={() => setSelected("consultations")}>
          <h3>Total Consultations</h3>
          <h2>{consultations.length}</h2>
        </div>

        <div className="report-card orange" onClick={() => setSelected("active")}>
          <h3>Active Cases</h3>
          <h2>{activeConsultations.length}</h2>
        </div>

        <div className="report-card teal" onClick={() => setSelected("completed")}>
          <h3>Completed Cases</h3>
          <h2>{completedConsultations.length}</h2>
        </div>

        <div className="report-card red" onClick={() => setSelected("prescriptions")}>
          <h3>Total Prescriptions</h3>
          <h2>{prescriptions.length}</h2>
        </div>
      </div>

      <div className="summary-box">
        <h2>Selected Report Details</h2>

        {selected === "patients" && (
          <table className="selected-report-table">
            <thead>
              <tr><th>ID</th><th>Name</th><th>Email</th><th>Mobile</th></tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.patientId}>
                  <td>{p.patientId}</td>
                  <td>{p.name}</td>
                  <td>{p.email}</td>
                  <td>{p.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {selected === "doctors" && (
          <table className="selected-report-table">
            <thead>
              <tr><th>ID</th><th>Name</th><th>Specialization</th><th>Email</th></tr>
            </thead>
            <tbody>
              {doctors.map((d) => (
                <tr key={d.doctorId}>
                  <td>{d.doctorId}</td>
                  <td>{d.doctorName}</td>
                  <td>{d.specialization}</td>
                  <td>{d.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {["consultations", "active", "completed"].includes(selected) && (
          <table className="selected-report-table">
            <thead>
              <tr>
                <th>ID</th><th>Patient ID</th><th>Doctor ID</th>
                <th>Date</th><th>Type</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {(selected === "active"
                ? activeConsultations
                : selected === "completed"
                ? completedConsultations
                : consultations
              ).map((c) => (
                <tr key={c.consultationId}>
                  <td>{c.consultationId}</td>
                  <td>{c.patientId}</td>
                  <td>{c.doctorId}</td>
                  <td>{c.consultationDate}</td>
                  <td>{c.consultationType}</td>
                  <td>{isCompleted(c.consultationId) ? "Completed" : "Active"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {selected === "prescriptions" && (
          <table className="selected-report-table">
            <thead>
              <tr>
                <th>ID</th><th>Consultation ID</th><th>Patient ID</th>
                <th>Doctor ID</th><th>Medicine</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((p) => (
                <tr key={p.prescriptionId}>
                  <td>{p.prescriptionId}</td>
                  <td>{p.consultationId}</td>
                  <td>{p.patientId}</td>
                  <td>{p.doctorId}</td>
                  <td>{p.medicineName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Reports;