import React from "react";
import resort1 from "../images/aboutPage/resort1.jpg";
import resort2 from "../images/aboutPage/resort2.jpg";
import resort3 from "../images/aboutPage/resort3.jpg";
import resort4 from "../images/aboutPage/resort4.jpg";
import resort5 from "../images/aboutPage/resort5.jpg";
import resort6 from "../images/aboutPage/resort6.jpg";
import resort7 from "../images/aboutPage/resort7.jpg";
import resort8 from "../images/aboutPage/resort8.jpg";
import resort9 from "../images/aboutPage/resort9.jpg";
import resort10 from "../images/aboutPage/resort10.jpg";
import resort11 from "../images/aboutPage/resort11.jpg";
import resort12 from "../images/aboutPage/resort12.webp";
import resort13 from "../images/aboutPage/resort13.jpg";
import resort14 from "../images/aboutPage/resort14.jpg";
import "../pages/pages.css";
import Footer from "../components/Footer/Footer";

const images = [
  resort1,
  resort10,
  resort12,
  resort14,
  resort2,
  resort3,
  resort4,
  resort5,
  resort6,
  resort7,
  resort8,
  resort9,
];
const About = () => {
  return (
    <>
      <div
        className="about-section py-5 my-5"
        style={{ backgroundColor: "#111" }}
      >
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            {/* Text Section */}
            <div className="col-lg-6 text-light mt-4 mt-lg-0">
              <h2 className="fw-bold mb-3" style={{ color: "#ffcc00" }}>
                About Us
              </h2>
              <p className="mb-3" style={{ lineHeight: "1.7" }}>
                Welcome to our Restaurant. We serve joy in every flavor and
                warmth in every bite. Our chefs carefully craft each dish with
                premium ingredients and authentic tastes.
              </p>
              <p className="mb-4" style={{ lineHeight: "1.7" }}>
                Whether you're here to enjoy a quiet evening, celebrate with
                friends, or simply indulge in something sweet—our doors are
                always open.
              </p>

              <a href="/menu">
                <button className="btn btn-warning rounded-pill fw-semibold px-4 py-2">
                  Eat & Enjoy <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </a>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 text-center">
              <div
                id="aboutCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner rounded-4 shadow-lg">
                  <div className="carousel-item active">
                    <img
                      src={resort11}
                      className="d-block w-100"
                      alt="..."
                      style={{ height: "420px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={resort12}
                      className="d-block w-100"
                      alt="..."
                      style={{ height: "420px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={resort13}
                      className="d-block w-100"
                      alt="..."
                      style={{ height: "420px", objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#aboutCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#aboutCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cafe gallery */}
      <div className="gallery-section ">
        <div className="container">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "3rem",
              color: "#362d09ff",
            }}
          >
            Restaurant Gallery
          </h2>

          <div className="gallery-grid">
            {images.map((img, index) => (
              <div className="gallery-item" key={2}>
                <img src={img} alt="Cafe" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <section className="footer-section mt-5">
        <div className="container">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default About;
