import { Outlet } from "react-router-dom";
import { Navbar, NavigationBar } from "./components/Navbar/navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Layout() {
  return (
    <>
      <Navbar></Navbar>
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
