import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPrescriptions } from "../../services/ApiService";
import "../../styles/RealTimeHospital.css";

function ViewPrescription() {
  const [prescriptions, setPrescriptions] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const patientId = localStorage.getItem("patientId");
  const role = localStorage.getItem("role");
  const consultationId = location.state?.consultationId;

  useEffect(() => {
    getPrescriptions()
      .then((res) => setPrescriptions(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredPrescriptions =
    role === "admin" || role === "doctor"
      ? prescriptions
      : prescriptions.filter((p) => {
          const savedConsultationId =
            p.consultationId || p.consultation_id;

          const samePatient =
            String(p.patientId) === String(patientId);

          const sameConsultation =
            consultationId
              ? String(savedConsultationId) === String(consultationId)
              : true;

          return samePatient && sameConsultation;
        });

  return (
    <div className="prescription-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>E-Prescriptions</h1>

      {filteredPrescriptions.length === 0 ? (
        <div className="empty-box">
          <h2>No Prescription Found</h2>
          <p>No prescription is available for this consultation yet.</p>
        </div>
      ) : (
        <div className="prescription-grid">
          {filteredPrescriptions.map((p) => (
            <div className="prescription-card" key={p.prescriptionId}>
              <h2>Prescription #{p.prescriptionId}</h2>

              <p><b>Consultation ID:</b> {p.consultationId}</p>
              <p><b>Patient ID:</b> {p.patientId}</p>
              <p><b>Doctor ID:</b> {p.doctorId}</p>

              <hr />

              <p><b>Medicine:</b> {p.medicineName}</p>
              <p><b>Dosage:</b> {p.dosage}</p>
              <p><b>Duration:</b> {p.duration}</p>
              <p><b>Instructions:</b> {p.instructions}</p>
<div className="prescription-actions">
  <button
    className="print-btn"
    onClick={() => window.print()}
  >
    🖨 Print
  </button>

  <button
    className="order-btn"
    onClick={() =>
      navigate("/order-medicine", {
        state: { prescription: p }
      })
    }
  >
    💊 Order
  </button>
</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewPrescription;