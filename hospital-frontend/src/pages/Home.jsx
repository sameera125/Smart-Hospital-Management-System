import { Link } from "react-router-dom";
import "../styles/RealTimeHospital.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">

        <div className="hero-left">
          <span className="hero-badge">Smart Digital Healthcare</span>

          <h1>
            SmartCare <br />
            Hospital
          </h1>

          <p>
            Book doctors, consult online, get prescriptions,
            order medicines and pay securely in one platform.
          </p>

          <div className="hero-actions">
            <Link to="/find-doctors" className="hero-btn">
              Find Doctors
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="care-card">
            <h2>24/7 Online Care</h2>
            <p>Video • Chat • Phone Consultation</p>

            <div className="care-icons">
              <span>🩺</span>
              <span>💊</span>
              <span>💳</span>
              <span>📹</span>
            </div>
          </div>

          <div className="mini-stats">
            <div>
              <h3>100+</h3>
              <p>Patients</p>
            </div>

            <div>
              <h3>25+</h3>
              <p>Doctors</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>Care</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;