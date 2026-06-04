import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ProductCard from "./ProductCard";
import { getBestSellers } from "../utils/productFilters";

const BestSellersPreview = () => {
  const products = getBestSellers().slice(0, 4);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <p className="text-amber-400 uppercase tracking-[0.3em] text-xs mb-4">
          Customer Favorites
        </p>

        <h2 className="text-3xl md:text-5xl font-bold">Best Sellers</h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          The most loved pieces from the Two47 collection, trusted for quality,
          comfort, and timeless style.
        </p>
      </motion.div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            pageTitle="Best Seller"
          />
        ))}
      </div>

     
      <div className="flex justify-center mt-14">
        <Link to="/best-sellers">
          <button
            className="
              border
              border-amber-500
              text-amber-500
              hover:bg-amber-500
              hover:text-white
              px-8
              py-3
              rounded-full
              font-semibold
              transition
            "
          >
            Shop Best Sellers
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BestSellersPreview;
