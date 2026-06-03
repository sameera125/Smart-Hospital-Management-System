import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { savePatient } from "../services/ApiService";
import "../styles/Login.css";

function Register() {
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    age: "",
    gender: "",
    address: ""
  });

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    });
  };

  const register = async (e) => {
    e.preventDefault();

    if (
      patient.name.trim() === "" ||
      patient.email.trim() === "" ||
      patient.password.trim() === "" ||
      patient.mobile.trim() === "" ||
      patient.age.trim() === "" ||
      patient.gender.trim() === "" ||
      patient.address.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (patient.mobile.length !== 10) {
      alert("Mobile number must be 10 digits");
      return;
    }

    if (patient.password.length < 6) {
      alert("Password must contain at least 6 characters");
      return;
    }

    if (Number(patient.age) < 1 || Number(patient.age) > 120) {
      alert("Enter valid age");
      return;
    }

    try {
      await savePatient(patient);
      alert("Registration successful. Please login.");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card register-card">

        <div className="auth-header">
          <h1>🏥 Create Account</h1>
          <p>Register as a patient to access SmartCare services</p>
        </div>

        <form className="register-form" onSubmit={register}>

          <input
            name="name"
            placeholder="Full Name"
            value={patient.name}
            required
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={patient.email}
            required
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Create Password"
            value={patient.password}
            required
            onChange={handleChange}
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            value={patient.mobile}
            maxLength="10"
            required
            onChange={handleChange}
          />

          <input
            name="age"
            type="number"
            placeholder="Age"
            value={patient.age}
            required
            onChange={handleChange}
          />

          <select
            name="gender"
            value={patient.gender}
            required
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>

          <textarea
            name="address"
            placeholder="Address"
            value={patient.address}
            required
            onChange={handleChange}
          />

          <button type="submit">
            Register Now
          </button>

        </form>

        <p className="auth-link">
          Already registered? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;