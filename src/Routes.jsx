import { createBrowserRouter, Navigate, Link } from "react-router-dom";

import Layout from "./Layout.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Menu from "./pages/Menu.jsx";
import Cart from "./components/Cart.jsx";
import TableBooking from "./components/TableBooking/TableBooking.jsx";
import OrderHistory from "./components/OrderHistory/OrderHistory.jsx";

// Protected route wrapper
function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) alert("Please Login to access this page.");
  return isLoggedIn ? children : <Navigate to="/login" />;
}

// routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "menu", element: <Menu /> },
      { path: "cart", element: <Cart /> },
      // { path: "tableBooking", element: <TableBooking /> },
      { path: "orderHistory", element: <OrderHistory /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "*",
    element: (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center p-3">
        <h4 className="mb-3">404 - Page Not Found</h4>
        <p className="mb-4">Sorry, we couldn't find the page you're looking for.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    ),
  },
]);

export default router;
