import React from "react";
import { useState } from "react";
import { API } from "../api";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!userName | !email | !message) alert("please fill the Details to submit.")
    console.log({ userName, email, message })
    try {
      await API.post(`/contacts/`, { userName, email, message });
      alert("Thank you For Your Response.");
    } catch (e) {
      console.log(e)
    }
    
  };
  return (
    <div
      className="contact-container container py-5 rounded-4"
      style={{ maxWidth: "800px", marginTop: "2rem" }}
    >
      <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
      <p className="text-center text-muted mb-5">
        Have questions or want to book a table? We’d love to hear from you!
      </p>

      <form className="row g-3 contact-box" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            onChange={(e)=>setUserName(e.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Your Message"
            onChange={(e)=>setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-warning px-4 fw-semibold">
            Send Message
          </button>
        </div>
      </form>

      {/* Contact Details */}
      <div className="text-center mt-5">
        <p className="mb-1">
          <strong>Phone:</strong> +91 979-171-2345
        </p>
        <p className="mb-1">
          <strong>Email:</strong> salem@restaurant.com
        </p>
        <p>
          <strong>Location:</strong> New Bus Stand Road, Salem, Tamil Nadu
        </p>
      </div>
    </div>
  );
};

export default Contact;
