import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../Data/products";
import ProductCard from "./ProductCard";


const Essentials = ({ limit }) => {
  const essentials = products.filter((p) => p.tags.includes("essentials"));

  const displayedProducts = limit ? essentials.slice(0, limit) : essentials;

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
          Everyday Wear
        </p>

        <h2 className="text-3xl md:text-5xl font-bold">Essentials</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {limit && (
        <div className="flex justify-center mt-14">
          <Link to="/essentials">
            <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full font-semibold transition">
              Shop Essentials
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Essentials;
