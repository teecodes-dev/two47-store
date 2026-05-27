import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ProductCard from "./ProductCard";
import { getNewArrivals } from "../utils/productFilters";

const NewArrivalsPreview = () => {
  const products = getNewArrivals().slice(0, 4);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <p className="text-amber-400 uppercase tracking-[0.3em] text-xs mb-4">
          Latest Drop
        </p>

        <h2 className="text-3xl md:text-5xl font-bold">New Arrivals</h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Discover fresh pieces designed for confidence, movement, and modern
          street identity.
        </p>
      </motion.div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-14">
        <Link to="/new-arrivals">
          <button
            className="
              bg-amber-500
              hover:bg-amber-600
              text-white
              font-semibold
              px-8
              py-3
              rounded-full
              transition
            "
          >
            Shop New Arrivals
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NewArrivalsPreview;
