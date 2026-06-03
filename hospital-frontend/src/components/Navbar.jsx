import "../styles/Navbar.css";

function Navbar() {
  const name = localStorage.getItem("patientName") || "Admin";
  const role = localStorage.getItem("role") || "admin";


let fullName = "Admin";

if (role === "doctor") {
  fullName = localStorage.getItem("doctorName") || "Doctor";
} else if (role === "patient") {
  fullName = localStorage.getItem("patientName") || "Patient";
}

const firstName =
  fullName.startsWith("Dr ")
    ? fullName.replace("Dr ", "").split(" ")[0]
    : fullName.split(" ")[0];
  return (
    <div className="navbar">
      <div>
         <h2>👋 Welcome Back, {firstName}</h2>
    <p>Manage patients, doctors, consultations and medicine orders</p>
      </div>

      <div className="navbar-right">
        <div className="search-bar">
          🔍 Search hospital records
        </div>

        <div className="date-box">
          Today
        </div>

        <div className="admin-profile">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
          />

          <div>
            <span>{name}</span>
            <small>{role}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;