import { useEffect, useState } from "react";
import {
  getMedicineOrders,
  updateMedicineOrder
} from "../../services/ApiService";
import "../../styles/Medicine.css";

function MedicineOrdersAdmin() {
  const [orders, setOrders] = useState([]);

  const loadOrders = () => {
    getMedicineOrders()
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const updateStatus = async (order, status) => {
    await updateMedicineOrder(order.orderId, {
      ...order,
      orderStatus: status
    });

    loadOrders();
  };

  return (
    <div className="medicine-page">
      <h1>Medicine Orders</h1>

      <table className="medicine-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Patient ID</th>
            <th>Medicine</th>
            <th>Address</th>
            <th>Order Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.orderId}>
              <td>{o.orderId}</td>
              <td>{o.patientId}</td>
              <td>{o.medicineName}</td>
              <td>{o.address || "Not Provided"}</td>
              <td>{o.orderDate || "Not Available"}</td>
              <td>₹{o.amount}</td>
              <td>{o.orderStatus}</td>

              <td>
                {o.orderStatus === "Delivered" ? (
                  <span className="delivered-badge">
                    ✅ Delivered
                  </span>
                ) : (
                  <select
                    className="status-dropdown"
                    value={o.orderStatus}
                    onChange={(e) => updateStatus(o, e.target.value)}
                  >
                    <option value="Ordered">📋 Ordered</option>
                    <option value="Packed">📦 Packed</option>
                    <option value="Shipped">🚚 Shipped</option>
                    <option value="Delivered">✅ Delivered</option>
                  </select>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicineOrdersAdmin;