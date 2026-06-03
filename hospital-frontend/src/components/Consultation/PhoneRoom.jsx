import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/RealTimeHospital.css";

function PhoneRoom() {
  const { consultation, doctor } = useLocation().state;
  const navigate = useNavigate();

  const endCall = () => {
    navigate("/waiting-prescription", {
      state: {
        consultationId: consultation.consultationId
      }
    });
  };

  return (
    <div className="phone-page">
      <div className="phone-card">

        <div className="phone-icon">📞</div>

        <h1>Phone Consultation</h1>

        <h2>{doctor?.doctorName}</h2>

        <p>
          Doctor will call:
          <strong> {consultation.patientMobile}</strong>
        </p>

        <div className="call-status">
          Call Status: Active
        </div>

        <button onClick={endCall}>
          End Call & View Prescription
        </button>

      </div>
    </div>
  );
}

export default PhoneRoom;