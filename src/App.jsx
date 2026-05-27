import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

import { CartProvider } from "./Context/CartContext";
import CartSidebar from "./Components/CartSidebar";
import Toast from "./Components/Toast";
import NewArrivals from "./Components/NewArrivals";
import BestSellers from "./Components/BestSellers";
import Essentials from "./Components/Essentials";


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Toast />
        <CartSidebar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/essentials" element={<Essentials/>} />
          <Route path="/collections" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
