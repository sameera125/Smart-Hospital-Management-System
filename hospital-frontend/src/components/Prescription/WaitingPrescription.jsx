import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/RealTimeHospital.css";

function WaitingPrescription() {
  const navigate = useNavigate();
  const location = useLocation();

  const consultationId = location.state?.consultationId;

  return (
    <div className="prescription-page">
      <div className="empty-box">
        <h1>⏳ Waiting for Doctor Prescription</h1>

        <p>
          Your consultation is completed. Please wait until the doctor creates
          your e-prescription.
        </p>

        <button
          className="hero-btn"
          onClick={() =>
            navigate("/prescription", {
              state: {
                consultationId: consultationId
              }
            })
          }
        >
          Check Prescription
        </button>
      </div>
    </div>
  );
}

export default WaitingPrescription;