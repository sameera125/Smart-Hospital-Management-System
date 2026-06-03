import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveConsultation } from "../../services/ApiService";
import "../../styles/RealTimeHospital.css";

function BookConsultation() {
  const doctor = useLocation().state;
  const navigate = useNavigate();

  const patientIdFromLogin = localStorage.getItem("patientId");

  const [data, setData] = useState({
    patientId: patientIdFromLogin || "",
    patientMobile: "",
    doctorId: doctor?.doctorId || "",
    consultationDate: "",
    symptoms: "",
    consultationType: "",
    status: "Approved",
    consultationFee: 500,
    paymentStatus: "Pending",
    meetingLink: "https://meet.google.com/smart-care-demo"
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const continuePayment = async (e) => {
    e.preventDefault();

    if (
      data.patientId.trim() === "" ||
      data.patientMobile.trim() === "" ||
      data.consultationDate.trim() === "" ||
      data.symptoms.trim() === "" ||
      data.consultationType.trim() === ""
    ) {
      alert("Please fill all consultation details");
      return;
    }

    if (!/^[0-9]{10}$/.test(data.patientMobile)) {
      alert("Please enter valid 10 digit mobile number");
      return;
    }

    if (data.symptoms.length < 5) {
      alert("Please describe symptoms properly");
      return;
    }

    try {
      const res = await saveConsultation(data);

      navigate("/payment", {
        state: {
          consultation: res.data,
          doctor: doctor
        }
      });
    } catch (error) {
      console.log(error);
      alert("Error booking consultation");
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-card">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h1>Book Online Consultation</h1>

        <div className="selected-doctor">
          <span>👨‍⚕️</span>

          <div>
            <h2>{doctor?.doctorName}</h2>
            <p>{doctor?.specialization}</p>
          </div>
        </div>

        <form onSubmit={continuePayment}>

          <input
            name="patientId"
            placeholder="Patient ID"
            value={data.patientId}
            readOnly
            required
          />

          <input
            name="patientMobile"
            placeholder="Patient Mobile Number"
            value={data.patientMobile}
            maxLength="10"
            required
            onChange={handleChange}
          />

          <textarea
            name="symptoms"
            placeholder="Describe your symptoms"
            value={data.symptoms}
            required
            onChange={handleChange}
          />

          <input
            type="date"
            name="consultationDate"
            value={data.consultationDate}
            required
            onChange={handleChange}
          />

          <select
            name="consultationType"
            value={data.consultationType}
            required
            onChange={handleChange}
          >
            <option value="">Select Consultation Type</option>
            <option value="Video">Video Consultation</option>
            <option value="Chat">Chat Consultation</option>
            <option value="Phone">Phone Consultation</option>
          </select>

          <button type="submit">
            Continue to Payment ₹500
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookConsultation;