import React, { useEffect, useState } from "react";
import "./OrderHistory.css";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    try {
      setLoading(true);
      // Get userId from localStorage (it should be stored during login)
      const token = localStorage.getItem("token");
      const userStr = localStorage.getItem("user");

      if (!userStr) {
        setError("User not logged in. Please log in first.");
        setLoading(false);
        return;
      }

      const user = JSON.parse(userStr);
      const userId = user._id || user.id;

      if (!userId) {
        setError("User ID not found. Please log in again.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${BASE}/api/orders/user/${userId}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch order history");
      }

      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("Error loading order history: " + err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <p>Loading your orders...</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="text-center " style={{ marginTop: "5rem" }}>
        Order History
      </h1>

      {error && <div className="alert alert-danger">{error}</div>}

      {orders.length === 0 ? (
        <div className="alert alert-info text-center">
          No orders found. Start ordering now!
        </div>
      ) : (
        <div className="row">
          {orders.map((order) => (
            <div key={order._id} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm border-0 rounded">
                <div className="card-body">
                  <h5 className="card-title">
                    Order #{order._id.substring(0, 8)}
                  </h5>
                  <p className="card-text">
                    <strong>Date:</strong>{" "}
                    {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong>{" "}
                    <span
                      className={`badge ${
                        order.status === "Delivered"
                          ? "bg-success"
                          : order.status === "Cancelled"
                          ? "bg-danger"
                          : "bg-warning"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>
                  <p className="card-text">
                    <strong>Total:</strong> ₹{order.totalPrice}
                  </p>
                  <p className="card-text">
                    <strong>Items:</strong> {order.items.length}
                  </p>

                  <div className="mt-3">
                    <h6>Ordered Items:</h6>
                    <ul className="list-unstyled">
                      {order.items.map((item, idx) => (
                        <li key={idx} className="text-muted small">
                          {item.name} x {item.quantity} - ₹
                          {item.price * item.quantity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {order.deliveryAddress && (
                    <p className="card-text mt-2">
                      <strong>Delivery Address:</strong> {order.deliveryAddress}
                    </p>
                  )}

                  {order.notes && (
                    <p className="card-text">
                      <strong>Notes:</strong> {order.notes}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-4">
        <a href="/menu" className="btn btn-primary">
          Continue Shopping
        </a>
      </div>
    </div>
  );
}
