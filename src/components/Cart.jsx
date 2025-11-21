import React, { useState } from "react";
import { useCart } from "../context/cartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } =
    useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  // 🧮 Total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ✅ Checkout handler
  const handleCheckout = async () => {
    if (cart.length === 0) return;

    try {
      const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const userStr = localStorage.getItem("user");

      if (!userStr) {
        alert("Please log in to place an order");
        return;
      }

      const user = JSON.parse(userStr);
      const userId = user._id || user.id;

      // Save order to MongoDB
      const res = await fetch(`${BASE}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          items: cart,
          totalPrice: total,
          paymentMethod: "Cash on Delivery",
          deliveryAddress: "Home Delivery",
          notes: "New Order",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Error placing order: " + (data.message || "Unknown error"));
        return;
      }

      // Also save in localStorage for quick access
      const pastOrders = JSON.parse(localStorage.getItem("orders")) || [];
      const newOrder = {
        id: data.order._id,
        items: cart,
        total,
        date: new Date().toLocaleString(),
      };
      localStorage.setItem("orders", JSON.stringify([...pastOrders, newOrder]));

      // Clear cart and show popup
      clearCart();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Error placing order: " + err.message);
    }
  };

  return (
    <div className="container py-5 my-5">
      {/* ✅ Success animation */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="position-fixed top-50 start-50 translate-middle bg-light rounded-4 shadow-lg text-center p-5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ zIndex: 2000 }}
          >
            <motion.div
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <i
                className="bi bi-check-circle-fill text-success"
                style={{ fontSize: "3rem" }}
              ></i>
            </motion.div>
            <h4 className="fw-bold mt-3">Order Placed Successfully!</h4>
            <p className="text-secondary">
              Thank you for ordering with Foody Love ❤️
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🛒 Empty cart view */}
      {cart.length === 0 ? (
        <div
          className="text-center d-flex flex-column align-items-center justify-content-center"
          style={{ height: "60vh" }}
        >
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm"
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "#fff9e6",
            }}
          >
            <i
              className="bi bi-cart-x"
              style={{ fontSize: "4rem", color: "#ffc107" }}
            ></i>
          </div>
          <h4 className="fw-bold mb-2 text-dark">Your cart is empty</h4>
          <p className="text-secondary mb-4">
            Add some delicious items to get started!
          </p>
          <Link
            to="/menu"
            className="btn btn-warning rounded-pill px-4 py-2 fw-semibold shadow-sm"
          >
            Explore Menu <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      ) : (
        <>
          {/* 🧾 Cart list */}
          <ul className="list-group mb-4 shadow-sm rounded-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h6 className="my-0 fw-semibold">{item.name}</h6>
                  <small className="text-muted">₹{item.price} each</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <span className="fw-bold">{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* 💰 Total & checkout */}
          <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded-3 shadow-sm">
            <h5 className="fw-bold mb-0">Total: ₹{total}</h5>
            <div>
              <button
                className="btn btn-outline-danger me-2 fw-semibold"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button
                className="btn btn-warning fw-semibold text-dark"
                onClick={handleCheckout}
              >
                Checkout <i className="bi bi-credit-card ms-1"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
