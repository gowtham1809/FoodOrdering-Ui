import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { useLocation, Link } from "react-router-dom";
import frontPhoto from "../../images/foodOfTamilNadu.png";
import { useCart } from "../../context/cartContext";

export const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const username = loggedUser?.username || "";
  const firstLetter = username?.charAt(0).toUpperCase();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    window.location.href = "/login";
  };

  const closeProfile = () => {
    setShowDropdown(false);
  }

  // <i className="fa-solid fa-check"></i> Hide dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar bg-light sticky-top shadow-sm">
      <div className="container-fluid d-flex flex-wrap justify-content-center justify-content-md-between align-items-center py-1">
        {/* Left Info */}
        <div className="text-center flex-grow-1 order-1 order-md-1">
          <i className="fa-regular fa-clock me-2 text-warning"></i>
          <span className="me-3 fw-semibold">Order Food 24/7</span>
          <i className="fa-solid fa-phone text-warning me-2"></i>
          <span className="fw-semibold">+91 12345-12345</span>
        </div>

        {/* Right Section */}
        <div
          className="d-flex align-items-center order-3 order-md-2 mt-2 mt-md-0 position-relative"
          ref={dropdownRef}
        >
          {!isLoggedIn ? (
            // If not logged in
            <Link to="/login" className="btn btn-outline-primary ms-2">
              Login / Sign Up
            </Link>
          ) : (
            // If logged in
            <div className="d-flex align-items-center">
              {/* Avatar Circle */}

              <span className="fw-semibold me-4 text-dark my-2">
                Hello, {username.split(" ")[0]}
              </span>
              <div
                className="avatar-circle bg-danger text-white fw-bold d-flex align-items-center justify-content-center "
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  fontSize: "18px",
                  cursor: "pointer",
                  boxShadow: "0 1px 6px rgba(20, 18, 18, 0.2)",
                }}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {firstLetter}
              </div>
              {/* Dropdown Menu */}
              {showDropdown && (
                <div
                  className="position-absolute end-0 mt-5 bg-white border rounded shadow-sm py-2"
                  style={{ width: "200px", zIndex: 1000, top: 0 }}
                >
                  <Link
                    to="/profile"
                    onClick={closeProfile}
                    className="dropdown-item text-dark px-3 py-2"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <i className="fa-solid fa-user me-2"></i>Profile
                  </Link>
                  <Link
                    to="/orderHistory"
                    onClick={closeProfile}
                    className="dropdown-item text-dark px-3 py-2"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <i className="fa-solid fa-receipt me-2"></i>Order History
                  </Link>
                  <Link
                    to="/terms"
                    onClick={closeProfile}
                    className="dropdown-item text-dark px-3 py-2"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <i className="fa-solid fa-scroll me-2"></i>Terms &
                    Conditions
                  </Link>
                  <hr className="my-1" />
                  <button
                    onClick={handleLogout}
                    className="dropdown-item text-danger px-3 py-2 border-0 bg-white w-100 text-start"
                  >
                    <i className="fa-solid fa-right-from-bracket me-2"></i>
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export const NavigationBar = () => {
  const location = useLocation();
  const { cart } = useCart();

  const pageColor = {
    "/": "rgba(0, 0, 0, 0.6)",
    "/menu": "#1b1707ff",
    "/about": "#2b2120ff",
    "/offers": "#2b2120ff",
    "/contact": "#2b2120ff",
  };
  const navColor = pageColor[location.pathname] || "#070303ff";

  return (
    <div className="position-relative top-0 start-0 w-100 overlay">
      {location.pathname === "/" && (
        <>
          <img
            src={frontPhoto}
            className="img-fluid w-100"
            alt="front"
            style={{ height: "70vh", objectFit: "cover" }}
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-2">
            <h1 className="Foodylover display-2 fw-bold text-white">
              Foody Love
            </h1>
            <p className="lead mt-2" style={{ fontWeight: 500 }}>
              "Where every meal is a masterpiece"
            </p>
          </div>
        </>
      )}

      <ul
        className="navM nav justify-content-center gap-3 gap-md-5 flex-wrap p-2 border-top position-absolute top-0 start-0 w-100"
        style={{ backgroundColor: navColor, transition: "0.4s ease" }}
      >
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link text-white">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link text-white">
            Menu
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link text-white">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/TableBooking">
            <button className="btn btn-outline-light">Table Booking</button>
          </Link>
        </li>

        {/*  Cart Button */}
        <Link to="/cart" className="btn btn-outline-warning position-relative">
          <i className="bi bi-cart"></i>
          {cart.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          )}
        </Link>
      </ul>
    </div>
  );
};
