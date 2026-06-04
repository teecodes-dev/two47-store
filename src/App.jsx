import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import NewArrivals from "./Pages/NewArrivals";
import BestSellers from "./Pages/BestSellers";
import Essentials from "./Pages/Essentials";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

import CartSidebar from "./Components/CartSidebar";
import Toast from "./Components/Toast";
import WishlistPage from "./Pages/WishlistPage";
import CheckoutPage from "./Pages/CheckoutPage";
import OrderSuccessPage from "./Pages/OrderSuccessPage";
import OrdersPage from "./Pages/OrdersPage";
import TrackOrderPage from "./Pages/TrackOrderPage";
import AdminDashboard from "./Pages/AdminDashboard";

import ProtectedRoute from "./Components/ProtectedRoute";
import AdminRoute from "./Components/AdminRoute";
import FAQsPage from "./Pages/FAQsPage";

const App = () => {
  return (
    <>
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
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/faqs" element={<FAQsPage />} />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/track-order"
          element={
            <ProtectedRoute>
              <TrackOrderPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-success"
          element={
            <ProtectedRoute>
              <OrderSuccessPage />
            </ProtectedRoute>
          }
        />

      
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
