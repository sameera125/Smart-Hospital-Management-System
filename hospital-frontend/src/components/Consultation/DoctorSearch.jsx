import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDoctors } from "../../services/ApiService";
import "../../styles/RealTimeHospital.css";

function DoctorSearch() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDoctors().then(res => setDoctors(res.data));
  }, []);

  return (
    <div className="doctor-search-page">
      <h1>Find Your Doctor</h1>
      <p className="sub-text">Choose a specialist and book online consultation</p>

      <div className="doctor-grid">
        {doctors.map((d) => (
          <div className="doctor-card" key={d.doctorId}>
            <div className="doctor-avatar">👨‍⚕️</div>

            <h2>{d.doctorName}</h2>
            <p>{d.specialization}</p>

            <div className="doctor-info">
              <span>{d.experience} Years Exp</span>
              <span>₹500 Fee</span>
            </div>

            <button
              onClick={() =>
                navigate("/book-consultation", { state: d })
              }
            >
              Book Consultation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorSearch;