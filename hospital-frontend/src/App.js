import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import AdminSidebar from "./components/AdminSidebar";
import PatientSidebar from "./components/PatientSidebar";
import DoctorSidebar from "./components/DoctorSidebar";

import Dashboard from "./components/Dashboard";
import Reports from "./components/Reports";

import AddPatient from "./components/Patient/AddPatient";
import PatientList from "./components/Patient/PatientList";

import AddDoctor from "./components/Doctor/AddDoctor";
import DoctorList from "./components/Doctor/DoctorList";

import AddAppointment from "./components/Appointment/AddAppointment";
import AppointmentList from "./components/Appointment/AppointmentList";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

import DoctorSearch from "./components/Consultation/DoctorSearch";
import BookConsultation from "./components/Consultation/BookConsultation";
import PaymentPage from "./components/Payment/PaymentPage";
import VideoRoom from "./components/Consultation/VideoRoom";
import ChatRoom from "./components/Consultation/ChatRoom";
import PhoneRoom from "./components/Consultation/PhoneRoom";

import ViewPrescription from "./components/Prescription/ViewPrescription";
import OrderMedicine from "./components/Medicine/OrderMedicine";
import MyMedicineOrders from "./components/Medicine/MyMedicineOrders";
import MedicineOrdersAdmin from "./components/Medicine/MedicineOrdersAdmin";
import DoctorLogin from "./components/DoctorPortal/DoctorLogin";
import DoctorDashboard from "./components/DoctorPortal/DoctorDashboard";
import DoctorAppointments from "./components/DoctorPortal/DoctorAppointments";
import CreatePrescription from "./components/DoctorPortal/CreatePrescription";
import WaitingPrescription from "./components/Prescription/WaitingPrescription";
function Layout() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  let SidebarComponent = PatientSidebar;

  if (role === "admin") {
    SidebarComponent = AdminSidebar;
  } else if (role === "doctor") {
    SidebarComponent = DoctorSidebar;
  } else {
    SidebarComponent = PatientSidebar;
  }

  return (
    <div className="app-layout">
      <SidebarComponent />

      <div className="main-section">
        <Navbar />

        <Routes>
          {/* Admin Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/patients/add" element={<AddPatient />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/doctors/add" element={<AddDoctor />} />
          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/reports" element={<Reports />} />

          {/* Patient Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/find-doctors" element={<DoctorSearch />} />
          <Route path="/appointments/add" element={<AddAppointment />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/video-room" element={<VideoRoom />} />
          <Route path="/chat-room" element={<ChatRoom />} />
          <Route path="/phone-room" element={<PhoneRoom />} />
          <Route path="/prescription" element={<ViewPrescription />} />
          <Route path="/waiting-prescription" element={<WaitingPrescription />} />
          {/* Doctor Routes */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor-appointments" element={<DoctorAppointments />} />
          <Route path="/create-prescription" element={<CreatePrescription />} />

          <Route
            path="*"
            element={
              role === "admin" ? (
                <Dashboard />
              ) : role === "doctor" ? (
                <DoctorDashboard />
              ) : (
                <Home />
              )
            }
          />
          <Route path="/order-medicine" element={<OrderMedicine />} />
<Route path="/my-medicine-orders" element={<MyMedicineOrders />} />
<Route path="/medicine-orders-admin" element={<MedicineOrdersAdmin />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />

        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;