import axios from "axios";

const BASE_URL = "http://localhost:8080";

// Patient APIs
export const savePatient = (patient) => {
  return axios.post(`${BASE_URL}/patients`, patient);
};

export const getPatients = () => {
  return axios.get(`${BASE_URL}/patients`);
};

export const deletePatient = (id) => {
  return axios.delete(`${BASE_URL}/patients/${id}`);
};

// Doctor APIs
export const saveDoctor = (doctor) => {
  return axios.post(`${BASE_URL}/doctors`, doctor);
};

export const getDoctors = () => {
  return axios.get(`${BASE_URL}/doctors`);
};

export const deleteDoctor = (id) => {
  return axios.delete(`${BASE_URL}/doctors/${id}`);
};
export const doctorLogin = (data) => {
  return axios.post(`${BASE_URL}/doctor-auth/login`, data);
};

export const getDoctorAppointments = (doctorId) => {
  return axios.get(`${BASE_URL}/appointments/doctor/${doctorId}`);
};


// APPOINTMENT APIs

export const saveAppointment = (appointment) => {
    return axios.post(
        `${BASE_URL}/appointments`,
        appointment
    );
};


export const getAppointments = () => {
    return axios.get(
        `${BASE_URL}/appointments`
    );
};


export const deleteAppointment = (id) => {
    return axios.delete(
        `${BASE_URL}/appointments/${id}`
    );
};

export const saveConsultation = (data) => {
  return axios.post(`${BASE_URL}/consultations`, data);
};
export const updateConsultation = (id, data) => {
  return axios.put(`${BASE_URL}/consultations/${id}`, data);
};

export const getConsultations = () => {
  return axios.get(`${BASE_URL}/consultations`);
};

export const savePrescription = (data) => {
  return axios.post(`${BASE_URL}/prescriptions`, data);
};

export const getPrescriptions = () => {
  return axios.get(`${BASE_URL}/prescriptions`);
};

export const saveMedicineOrder = (data) => {
  return axios.post(`${BASE_URL}/medicine-orders`, data);
};

export const getMedicineOrders = () => {
  return axios.get(`${BASE_URL}/medicine-orders`);
};

export const savePayment = (data) => {
  return axios.post(`${BASE_URL}/payments`, data);
};

export const getPayments = () => {
  return axios.get(`${BASE_URL}/payments`);
};


export const getPatientMedicineOrders = (patientId) => {
  return axios.get(`${BASE_URL}/medicine-orders/patient/${patientId}`);
};

export const updateMedicineOrder = (id, data) => {
  return axios.put(`${BASE_URL}/medicine-orders/${id}`, data);
};
