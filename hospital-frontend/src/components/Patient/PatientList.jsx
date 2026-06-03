import { useEffect, useState } from "react";
import {
  getPatients,
  deletePatient
} from "../../services/ApiService";

import "../../styles/Patient.css";

function PatientList() {

  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  const loadPatients = async () => {

    const response = await getPatients();

    setPatients(response.data);

  };

  useEffect(() => {

    loadPatients();

  }, []);

  const handleDelete = async(id) => {

    await deletePatient(id);

    loadPatients();

  };

  return (

    <div className="patient-list-container">

      <h2>Patient Records</h2>

      <input
        className="search-box"
        placeholder="Search Patient"
        onChange={(e)=>setSearch(e.target.value)}
      />

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

        {
          patients
          .filter((p)=>
            p.name.toLowerCase()
            .includes(search.toLowerCase())
          )
          .map((p)=>(

            <tr key={p.patientId}>

              <td>{p.patientId}</td>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.mobile}</td>
              <td>{p.age}</td>
              <td>{p.gender}</td>

              <td>

                <button
                  className="delete-btn"
                  onClick={()=>
                    handleDelete(p.patientId)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))
        }

        </tbody>

      </table>

    </div>
  );
}

export default PatientList;