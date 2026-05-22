import { FaUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

import CartButton from "./CartButton";

import { useCart } from "../Context/CartContext";
import { useTheme } from "../Context/ThemeContext";

function Navbar() {
  const { cartCount, openCart } = useCart();
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav
      className="
      sticky
      top-0
      z-50
      border-b
      border-slate-200
      bg-white/95
      text-slate-800
      shadow-sm
      backdrop-blur-sm
      transition-colors
      duration-300
      dark:border-slate-800
      dark:bg-slate-950/95
      dark:text-slate-100
    "
    >
      <div
        className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-6
        py-4
        md:px-10
      "
      >
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <MdMenu
            className="
            cursor-pointer
            text-2xl
            transition-colors
            hover:text-amber-500
            lg:hidden
          "
          />

          {/* JMK Logo */}
          <Link
            to="/"
            className="
              italic
              text-3xl
              font-bold
              tracking-wide
            "
          >
            <span
              className="
              text-amber-500
              transition-colors
            "
            >
              Two
            </span>

            <span
              className="
              text-slate-800
              dark:text-slate-100
            "
            >
              4
            </span>

            <span
              className="
              text-amber-500
            "
            >
              7
            </span>
          </Link>
        </div>

        {/* CENTER */}
        <ul
          className="
          hidden
          items-center
          gap-8
          text-sm
          font-medium
          lg:flex
        "
        >
          <Link
            to="/shop"
            className="
              transition-transform
              hover:scale-110
              hover:text-amber-500
            "
          >
            New Arrivals
          </Link>

          <Link
            to="/shop"
            className="
              transition-transform
              hover:scale-110
              hover:text-amber-500
            "
          >
            Collections
          </Link>

          <Link
            to="/shop"
            className="
              transition-transform
              hover:scale-110
              hover:text-amber-500
            "
          >
            Best Sellers
          </Link>

          <Link
            to="/shop"
            className="
              transition-transform
              hover:scale-110
              hover:text-amber-500
            "
          >
            Essentials
          </Link>
        </ul>

        {/* RIGHT */}
        <div
          className="
          flex
          items-center
          gap-5
          text-sm
          font-medium
        "
        >
          {/* About */}
          <Link
            to="/about"
            className="
              hidden
              md:block
              transition-transform
              hover:scale-110
              hover:text-amber-500
            "
          >
            About
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className="
              hidden
              md:block
              transition-transform
              hover:scale-110
              hover:text-amber-500
            "
          >
            Contact
          </Link>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="
              text-lg
              transition-transform
              hover:scale-110
            "
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* User */}
          <FaUser
            className="
            hidden
            md:block
            cursor-pointer
            text-lg
            transition-transform
            hover:scale-110
            hover:text-amber-500
          "
          />

          {/* Cart */}
          <button
            onClick={openCart}
            className="
              relative
              cursor-pointer
              text-xl
              transition-transform
              hover:scale-110
            "
          >
            🛒
            {cartCount > 0 && (
              <span
                className="
                absolute
                -right-2
                -top-2
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-amber-500
                text-xs
                font-semibold
                text-white
              "
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
