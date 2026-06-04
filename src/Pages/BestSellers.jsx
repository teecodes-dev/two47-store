import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { products } from "../Data/products";
import ProductCard from "../Components/ProductCard";
import AppLayout from "../Layout/AppLayout";
import Herob2 from "../assets/Herob2.avif";

const BestSellers = ({ limit }) => {
  const bestSellers = products.filter((product) =>
    product.tags?.includes("best-seller"),
  );

  const displayedProducts = limit ? bestSellers.slice(0, limit) : bestSellers;

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
              Two47 • Customer Favorites
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-white dark:text-slate-100 text-4xl md:text-6xl font-bold"
            >
              Best Sellers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 text-slate-200 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto"
            >
              These are the pieces our community trusts the most. Tried, worn,
              and proven, this is where style meets consistency.
            </motion.p>
          </div>
        </section>

        {!limit && (
          <section className="max-w-4xl mx-auto text-center px-6 py-16">
            <h2 className="text-2xl md:text-4xl font-bold">
              Worn the Most. Trusted the Most.
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Best Sellers represent real customer choice not trends, not
              hype. If you're unsure where to start, start here.
            </p>
          </section>
        )}

        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                pageTitle="Best Seller"
              />
            ))}
          </div>

          {limit && (
            <div className="flex justify-center mt-14">
              <Link to="/best-sellers">
                <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full font-semibold transition">
                  Explore Best Sellers
                </button>
              </Link>
            </div>
          )}
        </section>

        {!limit && (
          <section className="py-16 bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-center transition-colors duration-300">
            <h2 className="text-2xl md:text-4xl font-bold">
              Built on Real Customer Choice
            </h2>

            <p className="mt-3 text-slate-300 dark:text-slate-600 max-w-2xl mx-auto">
              Every item here earned its place through repeat purchases and
              consistent demand.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/new-arrivals">
                <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition">
                  Shop New Arrivals
                </button>
              </Link>

              <Link to="/collections">
                <button className="px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-full hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition">
                  View Collections
                </button>
              </Link>
            </div>
          </section>
        )}
      </div>
    </AppLayout>
  );
};

export default BestSellers;
