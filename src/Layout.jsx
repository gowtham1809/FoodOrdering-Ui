import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar, NavigationBar } from "./components/Navbar/navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <NavigationBar />
      <Outlet />
      {/* footer */}
      <section className="footer-section mt-5">
        <div className="container">
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Layout;
