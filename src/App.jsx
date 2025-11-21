
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/cartContext.jsx"; // ✅ import cart context
import router from "./Routes.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css"; // ✅ for cart icons

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
