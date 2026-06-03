import { useEffect, useState } from "react";

import {
  getDoctors,
  deleteDoctor
} from "../../services/ApiService";

import "../../styles/Doctor.css";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  const loadDoctors = async () => {
    const response = await getDoctors();
    setDoctors(response.data);
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      await deleteDoctor(id);
      loadDoctors();
    }
  };

  return (
    <div className="doctor-table-container">
      <h2>Doctors List</h2>

      <input
        className="doctor-search"
        placeholder="Search Doctor"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {doctors
            .filter((d) =>
              (d.doctorName || "")
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((d) => (
              <tr key={d.doctorId}>
                <td>{d.doctorId}</td>
                <td>{d.doctorName}</td>
                <td>{d.specialization}</td>
                <td>{d.email}</td>
                <td>{d.experience}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(d.doctorId)}
                  >
                  Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorList;