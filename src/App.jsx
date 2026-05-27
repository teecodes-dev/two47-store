import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

import CartSidebar from "./Components/CartSidebar";
import Toast from "./Components/Toast";

import NewArrivals from "./Pages/NewArrivals";
import BestSellers from "./Pages/BestSellers";
import Essentials from "./Pages/Essentials";

import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Toast />
      <CartSidebar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/new-arrivals" element={<NewArrivals />} />

        <Route path="/best-sellers" element={<BestSellers />} />

        <Route path="/essentials" element={<Essentials />} />

        <Route path="/collections" element={<ProductsPage />} />

        <Route path="/product/:id" element={<ProductDetailsPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/signin" element={<SignIn />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
