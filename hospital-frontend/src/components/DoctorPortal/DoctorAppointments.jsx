import { useEffect, useState } from "react";
import { getConsultations, getPrescriptions } from "../../services/ApiService";
import { useNavigate } from "react-router-dom";
import "./DoctorPortal.css";

function DoctorAppointments() {
  const [consultations, setConsultations] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);

  const navigate = useNavigate();
  const doctorId = localStorage.getItem("doctorId");

  useEffect(() => {
    const loadData = async () => {
      try {
        const consultationRes = await getConsultations();
        const prescriptionRes = await getPrescriptions();

        const myConsultations = consultationRes.data.filter(
          (c) => String(c.doctorId) === String(doctorId)
        );

        setConsultations(myConsultations);
        setPrescriptions(prescriptionRes.data);
      } catch (error) {
        console.log(error);
        alert("Error loading doctor consultations");
      }
    };

    loadData();
  }, [doctorId]);

  const isSubmitted = (consultationId) => {
  return prescriptions.some((p) => {
    const savedConsultationId =
      p.consultationId || p.consultation_id || p.consultationID;

    return String(savedConsultationId) === String(consultationId);
  });
};
  return (
    <div className="doctor-portal-page">
      <button className="doctor-back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>My Consultations</h1>

      {consultations.length === 0 ? (
        <div className="doctor-empty-box">
          No consultations booked for this doctor.
        </div>
      ) : (
        <div className="doctor-appointment-grid">
          {consultations.map((c) => {
            const submitted = isSubmitted(c.consultationId);

            return (
              <div className="doctor-appointment-card" key={c.consultationId}>
                <h2>Consultation #{c.consultationId}</h2>

                <p><b>Patient ID:</b> {c.patientId}</p>
                <p><b>Mobile:</b> {c.patientMobile}</p>
                <p><b>Doctor ID:</b> {c.doctorId}</p>
                <p><b>Date:</b> {c.consultationDate}</p>
                <p><b>Type:</b> {c.consultationType}</p>
                <p><b>Symptoms:</b> {c.symptoms}</p>

                <p>
                  <b>Status:</b>{" "}
                  <span className={submitted ? "submitted-badge" : "active-badge"}>
                    {submitted ? "Submitted" : "Active"}
                  </span>
                </p>

                {!submitted && (
                  <button
                    className="doctor-card-btn"
                    onClick={() =>
                      navigate("/create-prescription", {
                        state: {
                          consultationId: c.consultationId,
                          patientId: c.patientId,
                          doctorId: c.doctorId
                        }
                      })
                    }
                  >
                    Create Prescription
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DoctorAppointments;