import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doctorLogin } from "../../services/ApiService";
import "./DoctorPortal.css";

function DoctorLogin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const login = async (e) => {
    e.preventDefault();

    if (
      loginData.email.trim() === "" ||
      loginData.password.trim() === ""
    ) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await doctorLogin(loginData);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "doctor");
      localStorage.setItem("doctorId", res.data.doctorId);
      localStorage.setItem("doctorEmail", res.data.email);

      alert("Doctor Login Successful");
      navigate("/doctor-dashboard");
    } catch (error) {
      alert("Invalid Doctor Credentials");
    }
  };

  return (
    <div className="doctor-login-page">
      <div className="doctor-login-box">
        <h1>👨‍⚕️ Doctor Login</h1>
        <p>Access your consultation dashboard</p>

        <form onSubmit={login}>
          <input
            name="email"
            type="email"
            placeholder="Doctor Email"
            value={loginData.email}
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default DoctorLogin;