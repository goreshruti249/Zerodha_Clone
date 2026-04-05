import React, { useEffect, useState } from "react";
import axios from "axios";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("userId"); // 👈 make sure you store userId at login

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`http://localhost:3002/orders/${userId}`);
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders", error);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div className="orders-container">
      <div style={{ margin: "20px" }}>
        <h2>My Orders</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Stock</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Quantity</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Price</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: order.mode === "BUY" ? "#e8f5e9" : "#ffebee",
                }}
              >
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {order.name}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {order.qty}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {order.price}
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    color: order.mode === "BUY" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {order.mode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default OrdersPage;
