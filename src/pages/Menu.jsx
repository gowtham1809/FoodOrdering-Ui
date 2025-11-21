import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "../context/cartContext";
import MenuData from "./MenuData";
import "../pages/pages.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Track added items
  const [addedItems, setAddedItems] = useState([]);

  // Unique categories
  const categories = ["All", ...new Set(MenuData.map((item) => item.category))];

  // Filter items
  const filteredItems =
    selectedCategory === "All"
      ? MenuData
      : MenuData.filter((item) => item.category === selectedCategory);

  // Handle Add to Cart Click
  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems((prev) => [...prev, item.id]); // store item ID
  };

  return (
    <>
      <div className="menucontainer container py-5 my-4">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "'Great Vibes', cursive", fontSize: "2.5rem" }}
        >
          Our Menu
        </h2>

        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn ${
                selectedCategory === cat
                  ? "btn-warning text-dark"
                  : "btn-outline-warning"
              } fw-semibold rounded-pill px-4`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card border-0 shadow-lg rounded-4 h-100 text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top rounded-top-4 mx-auto mt-2"
                  style={{ height: "180px", width: "70%" }}
                />
                <div className="card-body">
                  <h5 className="fw-semibold">{item.name}</h5>
                  <p className="text-muted mb-2">₹{item.price}</p>

                  {addedItems.includes(item.id) ? (
                    <button
                      className="btn btn-success rounded-pill w-100"
                      disabled
                    >
                      Added ✓
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning fw-semibold rounded-pill w-100"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart <i className="bi bi-cart-plus ms-2"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link
            to="/cart"
            className="btn btn-outline-dark rounded-pill px-4 py-2 fw-semibold"
          >
            Go to Cart <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
