import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  savePayment,
  updateConsultation
} from "../../services/ApiService";

import "../../styles/RealTimeHospital.css";

function PaymentPage() {
  const { consultation, doctor } = useLocation().state;
  const navigate = useNavigate();

  const [paymentMode, setPaymentMode] = useState("UPI");

  const goToConsultationRoom = (updatedConsultation) => {
    if (consultation.consultationType === "Video") {
      navigate("/video-room", {
        state: {
          consultation: updatedConsultation,
          doctor: doctor
        }
      });
    } else if (consultation.consultationType === "Chat") {
      navigate("/chat-room", {
        state: {
          consultation: updatedConsultation,
          doctor: doctor
        }
      });
    } else {
      navigate("/phone-room", {
        state: {
          consultation: updatedConsultation,
          doctor: doctor
        }
      });
    }
  };

  const payNow = async () => {
    const updatedConsultation = {
      ...consultation,
      paymentStatus: "Success"
    };

    const payment = {
      consultationId: consultation.consultationId,
      patientId: consultation.patientId,
      amount: consultation.consultationFee,
      paymentMode: paymentMode,
      transactionId: "TXN" + Date.now(),
      paymentStatus: "Success"
    };

    try {
      await savePayment(payment);

      try {
        await updateConsultation(
          consultation.consultationId,
          updatedConsultation
        );
      } catch (updateError) {
        console.log("Consultation payment status update failed:", updateError);
      }

      alert("Payment Successful");

      goToConsultationRoom(updatedConsultation);

    } catch (error) {
      console.log(error);
      alert("Payment save failed. Check payment backend.");
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-card">

        <h1>Secure Payment</h1>

        <div className="payment-summary">
          <p>Doctor</p>
          <h2>{doctor?.doctorName}</h2>

          <p>Consultation Type</p>
          <h2>{consultation.consultationType}</h2>

          <p>Consultation Fee</p>
          <h1>₹{consultation.consultationFee}</h1>
        </div>

        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="paymentMode"
              value="UPI"
              checked={paymentMode === "UPI"}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            UPI
          </label>

          <label>
            <input
              type="radio"
              name="paymentMode"
              value="Card"
              checked={paymentMode === "Card"}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            Card
          </label>

          <label>
            <input
              type="radio"
              name="paymentMode"
              value="Net Banking"
              checked={paymentMode === "Net Banking"}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            Net Banking
          </label>
        </div>

        <button onClick={payNow}>
          Pay & Continue
        </button>

      </div>
    </div>
  );
}

export default PaymentPage;