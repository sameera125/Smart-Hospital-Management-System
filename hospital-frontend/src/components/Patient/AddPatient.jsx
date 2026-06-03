import { useState } from "react";
import { savePatient } from "../../services/ApiService";
import "../../styles/Patient.css";

function AddPatient() {
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

  const handleSubmit = async (e) => {
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
      alert("Please fill all patient details");
      return;
    }

    try {
      await savePatient(patient);

      alert("Patient Added Successfully");

      setPatient({
        name: "",
        email: "",
        password: "",
        mobile: "",
        age: "",
        gender: "",
        address: ""
      });
    } catch (error) {
      alert("Error Saving Patient");
      console.log(error);
    }
  };

  return (
    <div className="patient-form-container">
      <h2>Add New Patient</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Patient Name"
          value={patient.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={patient.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Patient Login Password"
          value={patient.password}
          onChange={handleChange}
          required
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={patient.mobile}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={patient.age}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={patient.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          name="address"
          placeholder="Address"
          value={patient.address}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Patient
        </button>
      </form>
    </div>
  );
}

export default AddPatient;