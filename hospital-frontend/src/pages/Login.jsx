import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { getPatients, doctorLogin } from "../services/ApiService";

import "../styles/Login.css";

function Login() {
  const [role, setRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter email and password");
      return;
    }

    if (role === "admin") {
      if (
        email.trim() === "admin@gmail.com" &&
        password.trim() === "admin123"
      ) {
        localStorage.clear();
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "admin");
        navigate("/");
      } else {
        alert("Invalid Admin Credentials");
      }

      return;
    }

    if (role === "doctor") {
      try {
        const res = await doctorLogin({
          email: email.trim(),
          password: password.trim()
        });

        localStorage.clear();
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "doctor");
        localStorage.setItem("doctorId", res.data.doctorId);
        localStorage.setItem("doctorEmail", res.data.email);

        navigate("/doctor-dashboard");
      } catch (error) {
        alert("Invalid Doctor Credentials");
      }

      return;
    }

    if (role === "patient") {
      try {
        const res = await getPatients();

        const user = res.data.find(
          (p) =>
            p.email === email.trim() &&
            p.password === password.trim()
        );

        if (user) {
          localStorage.clear();
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("role", "patient");
          localStorage.setItem("patientId", user.patientId);
          localStorage.setItem("patientName", user.name);

          navigate("/home");
        } else {
          alert("Invalid Patient Credentials");
        }
      } catch (error) {
        alert("Unable to connect to server");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>🏥 SmartCare</h1>
        <p>Login to continue</p>

        <div className="role-selector">
          <button
            type="button"
            className={role === "patient" ? "active-role" : ""}
            onClick={() => setRole("patient")}
          >
            Patient
          </button>

          <button
            type="button"
            className={role === "doctor" ? "active-role" : ""}
            onClick={() => setRole("doctor")}
          >
            Doctor
          </button>

          <button
            type="button"
            className={role === "admin" ? "active-role" : ""}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
        </div>

        <form onSubmit={login}>

          <input
            type="email"
            placeholder={
              role === "admin"
                ? "Admin Email"
                : role === "doctor"
                ? "Doctor Email"
                : "Patient Email"
            }
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>

        </form>

        {role === "patient" && (
          <p className="register-link">
            New patient?{" "}
            <Link to="/register">
              Register here
            </Link>
          </p>
        )}

        {/* <div className="login-hint">
          {role === "admin" && (
            <small>admin@gmail.com / admin123</small>
          )}

          {role === "doctor" && (
            <small>ramesh@gmail.com / 123456</small>
          )}

          {role === "patient" && (
            <small>Register first, then login</small>
          )}
        </div> */}

      </div>
    </div>
  );
}

export default Login;