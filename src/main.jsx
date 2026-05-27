import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";

import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
