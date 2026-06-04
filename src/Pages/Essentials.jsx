import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { products } from "../Data/products";
import ProductCard from "../Components/ProductCard";
import AppLayout from "../Layout/AppLayout";
import Herob2 from "../assets/Herob2.avif";

const Essentials = ({ limit }) => {
  const essentials = products.filter((p) => p.tags?.includes("essentials"));

  const displayedProducts = limit ? essentials.slice(0, limit) : essentials;

  return (
    <AppLayout>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        
        <section className="relative h-[65vh] flex items-center justify-center text-center overflow-hidden">

          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Herob2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

          <div className="relative z-10 px-6 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-amber-400 tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
            >
              Two47 • Everyday Foundation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-white dark:text-slate-100 text-4xl md:text-6xl font-bold"
            >
              Essentials
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 text-slate-200 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto"
            >
              Clean, versatile, and built for everyday use. These are the
              foundation pieces that define your daily style.
            </motion.p>
          </div>
        </section>

        {!limit && (
          <section className="max-w-4xl mx-auto text-center px-6 py-16">
            <h2 className="text-2xl md:text-4xl font-bold">
              Built for Every Day
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Essentials are the core of your wardrobe and designed to work with everything you wear.
            </p>
          </section>
        )}

        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                pageTitle="Essentials"
              />
            ))}
          </div>

          {limit && (
            <div className="flex justify-center mt-14">
              <Link to="/essentials">
                <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full font-semibold transition">
                  Explore Essentials
                </button>
              </Link>
            </div>
          )}
        </section>

        {!limit && (
          <section className="py-16 bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-center transition-colors duration-300">
            <h2 className="text-2xl md:text-4xl font-bold">
              Simplicity is the Foundation of Style
            </h2>

            <p className="mt-3 text-slate-300 dark:text-slate-600 max-w-2xl mx-auto">
              Essentials are designed to work silently in the background of your
              wardrobe, reliable, repeatable, and timeless.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/new-arrivals">
                <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition">
                  New Arrivals
                </button>
              </Link>

              <Link to="/best-sellers">
                <button className="px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-full hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition">
                  Best Sellers
                </button>
              </Link>
            </div>
          </section>
        )}
      </div>
    </AppLayout>
  );
};

export default Essentials;
