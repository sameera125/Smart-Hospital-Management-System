import { useEffect, useState } from "react";
import { getPatientMedicineOrders } from "../../services/ApiService";
import "../../styles/Medicine.css";

function MyMedicineOrders() {
  const [orders, setOrders] = useState([]);
  const patientId = localStorage.getItem("patientId");

  useEffect(() => {
    getPatientMedicineOrders(patientId)
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, [patientId]);

  return (
    <div className="medicine-page">
      <h1>My Medicine Orders</h1>

      {orders.length === 0 ? (
        <div className="medicine-card">
          <h2>No medicine orders found</h2>
          <p>Order medicines from your prescription page.</p>
        </div>
      ) : (
        <div className="medicine-grid">
          {orders.map((o) => (
            <div className="medicine-card" key={o.orderId}>
              <h2>Order #{o.orderId}</h2>
              <p><b>Medicine:</b> {o.medicineName}</p>
              <p><b>Quantity:</b> {o.quantity}</p>
              <p><b>Amount:</b> ₹{o.amount}</p>
              <p><b>Date:</b> {o.orderDate}</p>

              <p>
                <b>Status:</b>{" "}
                <span className="medicine-status">
                  {o.orderStatus}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyMedicineOrders;