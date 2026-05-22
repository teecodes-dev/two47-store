import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { products } from "../Data/products";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  const newArrivals = products
    .filter((product) => product.category === "new-drop")
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
      {/* Header */}
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
          Latest Drop
        </p>

        <h2
          className="
          text-3xl
          md:text-5xl
          font-bold
        "
        >
          New Arrivals
        </h2>
      </motion.div>

      {/* Products */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-4
        gap-6
      "
      >
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* CTA */}
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
            Shop New Drop
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
