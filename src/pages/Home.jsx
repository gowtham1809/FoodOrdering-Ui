import React from "react";
import Tiffin from "../images/Tiffin/idly.jpg"; // replace with your Tiffin image
import ChettinadChicken from "../images/Fries/chettinadChicken.jpg"; // replace with your Tiffin image
import Menu from "../pages/Menu";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";

const OfferCard = () => {
  return (
    <>
      {/* // offer cards */}
      <div className="container my-4 ">
        {/* Row wrapper for both cards */}
        <div className="row justify-content-center g-4">
          {/* 1st Card */}
          <div className="col-md-6 col-lg-5">
            <div className="card bg-dark text-white border-0 rounded-4 h-100">
              <div className="row g-0 align-items-center">
                <div className="col-md-4 text-center p-3">
                  <div className="border border-warning rounded-circle d-inline-block p-2">
                    <img
                      src={Tiffin}
                      alt="Tasty Thursday"
                      className="rounded-circle img-fluid"
                      style={{
                        width: "130px",
                        height: "130px",
                        objectFit: "cover",
                        fontFamily: "sans-serif",
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-8 text-center text-md-start p-3">
                  <h5
                    className="fw-semibold fst-italic"
                    style={{
                      fontFamily: "serif",
                      fontWeight: 600,
                    }}
                  >
                    Tasty Thursdays
                  </h5>
                  <h1 className="fw-bold mb-3 text-white">
                    10% <span className="fs-5 fw-semibold">Off</span>
                  </h1>
                  <Link to="/menu">
                    <button className="btn btn-warning rounded-pill fw-semibold px-4 py-2">
                      Order Now <i className="bi bi-cart-fill ms-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd Card */}
          <div className="col-md-6 col-lg-5">
            <div className="card bg-dark text-white border-0 rounded-4 shadow-lg h-100">
              <div className="row g-0 align-items-center">
                <div className="col-md-4 text-center p-3">
                  <div className="border border-warning rounded-circle d-inline-block p-2">
                    <img
                      src={ChettinadChicken}
                      alt="chole Bhature"
                      className="rounded-circle img-fluid"
                      style={{
                        width: "130px",
                        height: "130px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-8 text-center text-md-start p-3">
                  <h5
                    className="fw-semibold fst-italic"
                    style={{
                      fontFamily: "serif",
                      fontWeight: 600,
                    }}
                  >
                    Birthday Discounts
                  </h5>
                  <h1 className="fw-bold mb-3 text-white">
                    15% <span className="fs-5 fw-semibold">Off</span>
                  </h1>
                  <Link to="/menu">
                    <button className="btn btn-warning rounded-pill fw-semibold px-4 py-2">
                      Order Now <i className="bi bi-cart-fill ms-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // menu */}
      <section className="food_section layout_padding-bottom my-1">
        <div className="container">
          <Menu />
        </div>
      </section>

      {/* footer */}
      <section className="footer-section mt-5">
        <div className="container">
          <Footer />
        </div>
      </section>
    </>
  );
};
export default OfferCard;
