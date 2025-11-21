import { Outlet } from "react-router-dom";
import { Navbar, NavigationBar } from "./components/Navbar/navbar.jsx";

function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default Layout;
