import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useTheme } from "../Context/ThemeContext";
import { useAuth } from "../Context/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();

  const { isDark, toggleTheme } = useTheme();
  const { signin } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = signin(form.email, form.password);

    if (!res.success) {
      alert(res.message);
      return;
    }

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-300 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg"
      >
        {/* THEME TOGGLE */}
        <div className="flex justify-end mb-2">
          <button
            onClick={toggleTheme}
            className="text-sm px-3 py-1 rounded-full border border-slate-300 dark:border-slate-700"
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* BRAND */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            <span className="text-amber-500">Two</span>
            <span className="text-slate-900 dark:text-white">4</span>
            <span className="text-amber-500">7</span>
          </h1>

          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
            Welcome back — sign in to continue
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-amber-500"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-amber-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-amber-500 font-medium">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignIn;
