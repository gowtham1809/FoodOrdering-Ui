import React, { useState, useEffect } from "react";
import "./TableBooking.css";
import { motion, AnimatePresence } from "framer-motion";

const TableBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });
  const [showPopup, setShowPopup] = useState(false);

  // Store all bookings in localStorage
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("bookings");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      alert("Please fill in all fields!");
      return;
    }

    setBookings([...bookings, formData]);
    setShowPopup(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
    });

    // Hide popup automatically after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Reserve Your Table 🍽️</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num} Guest{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="book-btn">
          Book Table
        </button>
      </form>

      {/* Success Popup with Animation */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="popup"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="popup-content"
            >
              <i className="bi bi-check-circle-fill success-icon"></i>
              <h4>Booking Confirmed!</h4>
              <p>We’ve saved your reservation successfully.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TableBooking;
