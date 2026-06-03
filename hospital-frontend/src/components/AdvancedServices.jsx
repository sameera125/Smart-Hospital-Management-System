import { useState } from "react";
import {
  saveConsultation,
  savePrescription,
  saveMedicineOrder,
  savePayment
} from "../services/ApiService";

import "../styles/AdvancedServices.css";

function AdvancedServices() {
  const [consultation, setConsultation] = useState({
    patientId: "",
    doctorId: "",
    consultationDate: "",
    symptoms: "",
    consultationType: "Video",
    status: "Approved",
    consultationFee: 500,
    paymentStatus: "Pending",
    meetingLink: "https://meet.google.com/demo-link"
  });

  const [prescription, setPrescription] = useState({
    consultationId: "",
    patientId: "",
    doctorId: "",
    medicineName: "",
    dosage: "",
    duration: "",
    instructions: ""
  });

  const [order, setOrder] = useState({
    prescriptionId: "",
    patientId: "",
    medicineName: "",
    quantity: "",
    deliveryAddress: "",
    orderStatus: "Ordered"
  });

  const [payment, setPayment] = useState({
    consultationId: "",
    patientId: "",
    amount: 500,
    paymentMode: "UPI",
    transactionId: "",
    paymentStatus: "Success"
  });

  const handleChange = (e, setter, state) => {
    setter({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="advanced-container">
      <h1>Online Healthcare Services</h1>

      <div className="advanced-grid">

        <div className="advanced-card">
          <h2>Online Consultation</h2>

          <input name="patientId" placeholder="Patient ID" onChange={(e) => handleChange(e, setConsultation, consultation)} />
          <input name="doctorId" placeholder="Doctor ID" onChange={(e) => handleChange(e, setConsultation, consultation)} />
          <input type="date" name="consultationDate" onChange={(e) => handleChange(e, setConsultation, consultation)} />
          <input name="symptoms" placeholder="Symptoms" onChange={(e) => handleChange(e, setConsultation, consultation)} />

          <select name="consultationType" onChange={(e) => handleChange(e, setConsultation, consultation)}>
            <option>Video</option>
            <option>Chat</option>
            <option>Phone</option>
          </select>

          <button onClick={async () => {
            await saveConsultation(consultation);
            alert("Consultation Saved");
          }}>
            Book Consultation
          </button>
        </div>

        <div className="advanced-card">
          <h2>E-Prescription</h2>

          <input name="consultationId" placeholder="Consultation ID" onChange={(e) => handleChange(e, setPrescription, prescription)} />
          <input name="patientId" placeholder="Patient ID" onChange={(e) => handleChange(e, setPrescription, prescription)} />
          <input name="doctorId" placeholder="Doctor ID" onChange={(e) => handleChange(e, setPrescription, prescription)} />
          <input name="medicineName" placeholder="Medicine Name" onChange={(e) => handleChange(e, setPrescription, prescription)} />
          <input name="dosage" placeholder="Dosage" onChange={(e) => handleChange(e, setPrescription, prescription)} />
          <input name="duration" placeholder="Duration" onChange={(e) => handleChange(e, setPrescription, prescription)} />
          <input name="instructions" placeholder="Instructions" onChange={(e) => handleChange(e, setPrescription, prescription)} />

          <button onClick={async () => {
            await savePrescription(prescription);
            alert("Prescription Added");
          }}>
            Add Prescription
          </button>
        </div>

        <div className="advanced-card">
          <h2>Medicine Order</h2>

          <input name="prescriptionId" placeholder="Prescription ID" onChange={(e) => handleChange(e, setOrder, order)} />
          <input name="patientId" placeholder="Patient ID" onChange={(e) => handleChange(e, setOrder, order)} />
          <input name="medicineName" placeholder="Medicine Name" onChange={(e) => handleChange(e, setOrder, order)} />
          <input name="quantity" placeholder="Quantity" onChange={(e) => handleChange(e, setOrder, order)} />
          <input name="deliveryAddress" placeholder="Delivery Address" onChange={(e) => handleChange(e, setOrder, order)} />

          <button onClick={async () => {
            await saveMedicineOrder(order);
            alert("Medicine Ordered");
          }}>
            Order Medicine
          </button>
        </div>

        <div className="advanced-card">
          <h2>Online Payment</h2>

          <input name="consultationId" placeholder="Consultation ID" onChange={(e) => handleChange(e, setPayment, payment)} />
          <input name="patientId" placeholder="Patient ID" onChange={(e) => handleChange(e, setPayment, payment)} />
          <input name="amount" placeholder="Amount" onChange={(e) => handleChange(e, setPayment, payment)} />

          <select name="paymentMode" onChange={(e) => handleChange(e, setPayment, payment)}>
            <option>UPI</option>
            <option>Card</option>
            <option>Net Banking</option>
          </select>

          <input name="transactionId" placeholder="Transaction ID" onChange={(e) => handleChange(e, setPayment, payment)} />

          <button onClick={async () => {
            await savePayment(payment);
            alert("Payment Saved");
          }}>
            Pay Fee
          </button>
        </div>

      </div>
    </div>
  );
}

export default AdvancedServices;