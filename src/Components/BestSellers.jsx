import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { products } from "../Data/products";
import ProductCard from "./ProductCard";

const BestSellers = () => {
  const bestSellers = products
    .filter((product) => product.bestSeller)
    .slice(0, 4);

  return (
    <section
      className="
      py-24
      px-6
      max-w-7xl
      mx-auto
    "
    >
  
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          text-center
          mb-14
        "
      >
        <p
          className="
          text-amber-400
          uppercase
          tracking-[0.3em]
          text-xs
          mb-4
        "
        >
          Customer Favorites
        </p>

        <h2
          className="
          text-3xl
          md:text-5xl
          font-bold
        "
        >
          Best Sellers
        </h2>
      </motion.div>

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-4
        gap-6
      "
      >
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div
        className="
        flex
        justify-center
        mt-14
      "
      >
        <Link to="/shop">
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

export default BestSellers;
