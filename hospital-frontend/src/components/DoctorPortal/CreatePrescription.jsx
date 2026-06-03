import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { savePrescription } from "../../services/ApiService";
import "./DoctorPortal.css";

function CreatePrescription() {
  const navigate = useNavigate();
  const location = useLocation();

  const doctorId =
    location.state?.doctorId || localStorage.getItem("doctorId");

  const patientId =
    location.state?.patientId || "";

  const [prescription, setPrescription] = useState({
    consultationId: "",
    patientId: patientId,
    doctorId: doctorId,
    medicineName: "",
    dosage: "",
    duration: "",
    instructions: ""
  });

  const handleChange = (e) => {
    setPrescription({
      ...prescription,
      [e.target.name]: e.target.value
    });
  };

  const submitPrescription = async (e) => {
    e.preventDefault();

    if (
      prescription.patientId === "" ||
      prescription.doctorId === "" ||
      prescription.medicineName === "" ||
      prescription.dosage === "" ||
      prescription.duration === "" ||
      prescription.instructions === ""
    ) {
      alert("Please fill all required prescription details");
      return;
    }

    try {
      await savePrescription(prescription);

      alert("Prescription Saved Successfully");

      navigate("/doctor-appointments");
    } catch (error) {
      console.log(error);
      alert("Error saving prescription");
    }
  };

  return (
    <div className="doctor-portal-page">
      <button className="doctor-back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="prescription-form-card">
        <h1>Create E-Prescription</h1>

        <form onSubmit={submitPrescription}>

          <input
            name="consultationId"
            placeholder="Consultation ID Optional"
            value={prescription.consultationId}
            onChange={handleChange}
          />

          <input
            name="patientId"
            placeholder="Patient ID"
            value={prescription.patientId}
            onChange={handleChange}
            required
          />

          <input
            name="doctorId"
            placeholder="Doctor ID"
            value={prescription.doctorId}
            onChange={handleChange}
            required
          />

          <input
            name="medicineName"
            placeholder="Medicine Name"
            value={prescription.medicineName}
            onChange={handleChange}
            required
          />

          <input
            name="dosage"
            placeholder="Dosage"
            value={prescription.dosage}
            onChange={handleChange}
            required
          />

          <input
            name="duration"
            placeholder="Duration"
            value={prescription.duration}
            onChange={handleChange}
            required
          />

          <textarea
            name="instructions"
            placeholder="Instructions"
            value={prescription.instructions}
            onChange={handleChange}
            required
          />

          <button className="doctor-btn" type="submit">
            Save Prescription
          </button>

        </form>
      </div>
    </div>
  );
}

export default CreatePrescription;