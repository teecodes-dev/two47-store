import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

import { useCart } from "../Context/CartContext";
import { useTheme } from "../Context/ThemeContext";

function Navbar() {
  const { cartCount, toggleCart } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav
      className="
      sticky top-0 z-50 border-b border-slate-200 bg-white/95
      text-slate-800 shadow-sm backdrop-blur-sm
      dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-100
    "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <MdMenu className="cursor-pointer text-2xl lg:hidden" />

          <Link to="/" className="italic text-3xl font-bold tracking-wide">
            <span className="text-amber-500">Two</span>
            <span>4</span>
            <span className="text-amber-500">7</span>
          </Link>
        </div>

        {/* CENTER NAV */}
        <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
          <Link to="/new-arrivals" className="hover:text-amber-500">
            New Arrivals
          </Link>
          <Link to="/collections" className="hover:text-amber-500">
            Collections
          </Link>
          <Link to="/best-sellers" className="hover:text-amber-500">
            Best Sellers
          </Link>
          <Link to="/essentials" className="hover:text-amber-500">
            Essentials
          </Link>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5 text-sm font-medium">
          <Link to="/about" className="hidden md:block hover:text-amber-500">
            About
          </Link>

          <Link to="/contact" className="hidden md:block hover:text-amber-500">
            Contact
          </Link>

          <button onClick={toggleTheme} className="text-lg">
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* USER DROPDOWN */}
          <div className="relative group hidden md:block">
            <FaUser className="cursor-pointer text-lg hover:text-amber-500" />

            <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition">
              {user ? (
                <>
                  <p className="px-4 py-2 text-sm border-b border-slate-200 dark:border-slate-800">
                    Hi, {user.name}
                  </p>

                  {/* 🧾 NEW: MY ORDERS LINK */}
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    My Orders
                  </Link>

                  <button
                    onClick={() => navigate("/track-order")}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Track Orders
                  </button>

                  <button
                    onClick={() => {
                      signout();
                      navigate("/");
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/signin")}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Sign In
                  </button>

                  <button
                    onClick={() => navigate("/signup")}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>

          {/* WISHLIST */}
          <Link
            to="/wishlist"
            className="hidden md:flex items-center justify-center text-lg text-amber-500 hover:text-red-500"
          >
            <FaHeart />
          </Link>

          {/* CART */}
          <button
            onClick={toggleCart}
            className="relative text-xl hover:scale-110"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-semibold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </button>

          {user?.role === "admin" && (
            <Link to="/admin" className="hidden md:block hover:text-red-500">
              Admin Panel
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
