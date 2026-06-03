import { useState } from "react";
import { saveDoctor } from "../../services/ApiService";
import "../../styles/Doctor.css";

function AddDoctor() {
  const [doctor, setDoctor] = useState({
    doctorName: "",
    specialization: "",
    email: "",
    mobile: "",
    experience: "",
    password: ""
  });

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      doctor.doctorName.trim() === "" ||
      doctor.specialization.trim() === "" ||
      doctor.email.trim() === "" ||
      doctor.mobile.trim() === "" ||
      doctor.experience.trim() === "" ||
      doctor.password.trim() === ""
    ) {
      alert("Please fill all doctor details");
      return;
    }

    try {
      await saveDoctor(doctor);

      alert("Doctor Added Successfully");

      setDoctor({
        doctorName: "",
        specialization: "",
        email: "",
        mobile: "",
        experience: "",
        password: ""
      });
    } catch (error) {
      console.log(error);
      alert("Error Saving Doctor");
    }
  };

  return (
    <div className="doctor-form">
      <h2>Add Doctor</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="doctorName"
          placeholder="Doctor Name"
          value={doctor.doctorName}
          onChange={handleChange}
          required
        />

        <select
          name="specialization"
          value={doctor.specialization}
          onChange={handleChange}
          required
        >
          <option value="">Select Specialization</option>
          <option value="General Physician">General Physician</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Orthopedic">Orthopedic</option>
          <option value="ENT Specialist">ENT Specialist</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Psychiatrist">Psychiatrist</option>
          <option value="Dentist">Dentist</option>
          <option value="Ophthalmologist">Ophthalmologist</option>
          <option value="Urologist">Urologist</option>
          <option value="Nephrologist">Nephrologist</option>
          <option value="Gastroenterologist">Gastroenterologist</option>
          <option value="Pulmonologist">Pulmonologist</option>
          <option value="Endocrinologist">Endocrinologist</option>
          <option value="Oncologist">Oncologist</option>
          <option value="Radiologist">Radiologist</option>
          <option value="Pathologist">Pathologist</option>
          <option value="Surgeon">Surgeon</option>
          <option value="Anesthesiologist">Anesthesiologist</option>
          <option value="Physiotherapist">Physiotherapist</option>
        </select>

        <input
          type="email"
          name="email"
          placeholder="Doctor Email"
          value={doctor.email}
          onChange={handleChange}
          required
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={doctor.mobile}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="experience"
          placeholder="Experience"
          value={doctor.experience}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Doctor Login Password"
          value={doctor.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Save Doctor
        </button>
      </form>
    </div>
  );
}

export default AddDoctor;