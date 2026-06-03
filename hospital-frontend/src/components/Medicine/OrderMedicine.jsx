import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveMedicineOrder } from "../../services/ApiService";
import "../../styles/Medicine.css";

function OrderMedicine() {
  const navigate = useNavigate();
  const { prescription } = useLocation().state;

  const [address, setAddress] = useState("");

  const orderMedicine = async () => {
    if (address.trim() === "") {
      alert("Please enter delivery address");
      return;
    }

    const order = {
      patientId: prescription.patientId,
      prescriptionId: prescription.prescriptionId,
      medicineName: prescription.medicineName,
      quantity: 1,
      amount: 120,
      address: address,
      orderStatus: "Ordered",
      orderDate: new Date().toISOString().split("T")[0]
    };

    try {
      await saveMedicineOrder(order);

      alert("Medicine ordered successfully");

      navigate("/my-medicine-orders");
    } catch (error) {
      console.log(error);
      alert("Medicine order failed");
    }
  };

  return (
    <div className="medicine-page">
      <div className="medicine-card">
        <h1>Order Medicine</h1>

        <p><b>Medicine:</b> {prescription.medicineName}</p>
        <p><b>Dosage:</b> {prescription.dosage}</p>
        <p><b>Duration:</b> {prescription.duration}</p>
        <p><b>Amount:</b> ₹120</p>

        <div className="address-box">
          <label>Delivery Address</label>

          <textarea
            rows="4"
            placeholder="Enter complete delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button className="order-success-btn" onClick={orderMedicine}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default OrderMedicine;