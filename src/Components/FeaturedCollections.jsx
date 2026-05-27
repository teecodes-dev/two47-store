import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { products } from "../Data/products";
import ProductCard from "./ProductCard";

const FeaturedCollections = () => {
  const featuredProducts = products
    .filter((product) => product.tags.includes("featured"))
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
          Two47 Showcase
        </p>

        <h2
          className="
            text-3xl
            md:text-5xl
            font-bold
          "
        >
          Featured Collections
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
        {featuredProducts.map((product) => (
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
        <Link to="/collections">
          <button
            className="
              border
              border-slate-300
              dark:border-slate-700
              px-8
              py-3
              rounded-full
              hover:bg-black
              hover:text-white
              dark:hover:bg-white
              dark:hover:text-black
              transition
            "
          >
            View All Collections
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCollections;
