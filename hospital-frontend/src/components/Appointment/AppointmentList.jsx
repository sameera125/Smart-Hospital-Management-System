import { useEffect, useState } from "react";

import {
  getConsultations,
  getPrescriptions
} from "../../services/ApiService";

import "../../styles/Appointment.css";

function AppointmentList() {
  const [consultations, setConsultations] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    const c = await getConsultations();
    const p = await getPrescriptions();

    setConsultations(c.data);
    setPrescriptions(p.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const isCompleted = (consultationId) => {
    return prescriptions.some(
      (p) => String(p.consultationId) === String(consultationId)
    );
  };

  return (
    <div className="appointment-list">
      <h2>Consultation / Appointment Records</h2>

      <input
        className="search-box"
        placeholder="Search Patient ID / Doctor ID / Type / Symptoms"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient ID</th>
            <th>Doctor ID</th>
            <th>Date</th>
            <th>Type</th>
            <th>Symptoms</th>
            <th>Fee</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {consultations
            .filter((c) =>
              String(c.patientId).includes(search) ||
              String(c.doctorId).includes(search) ||
              (c.consultationType || "")
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              (c.symptoms || "")
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((c) => {
              const completed = isCompleted(c.consultationId);

              return (
                <tr key={c.consultationId}>
                  <td>{c.consultationId}</td>
                  <td>{c.patientId}</td>
                  <td>{c.doctorId}</td>
                  <td>{c.consultationDate}</td>
                  <td>{c.consultationType}</td>
                  <td>{c.symptoms}</td>
                  <td>₹{c.consultationFee}</td>

                  <td>
                    <span className="payment-success">
                      Success
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        completed
                          ? "completed-status"
                          : "approved-status"
                      }
                    >
                      {completed ? "Completed" : "Approved"}
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;