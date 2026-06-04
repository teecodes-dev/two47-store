import AppLayout from "../Layout/AppLayout";
import Herob2 from "../assets/Herob2.avif";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ProductCard from "../Components/ProductCard";

import { getNewArrivals } from "../utils/productFilters";

const NewArrivalsPage = () => {
  const products = getNewArrivals();

  return (
    <AppLayout>
      <div
        className="
          min-h-screen
          bg-white
          text-slate-900
          dark:bg-slate-950
          dark:text-slate-100
          transition-colors
          duration-300
        "
      >
        <section
          className="
            relative
            h-[70vh]
            flex
            items-center
            justify-center
            text-center
            overflow-hidden
          "
        >
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Herob2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="absolute inset-0 bg-black/65 dark:bg-black/75" />

          <div className="relative z-10 px-6 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                text-amber-400
                tracking-[0.3em]
                uppercase
                text-xs
                md:text-sm
                mb-6
              "
            >
              Two47 • Fresh Drop Series
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="
                text-white
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
              "
            >
              New Arrivals
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="
                mt-6
                text-slate-300
                text-base
                md:text-lg
                max-w-2xl
                mx-auto
              "
            >
              Discover the newest drops in modern streetwear, everyday
              essentials, and clean identity pieces designed for confidence and
              daily wear.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="
                mt-10
                flex
                justify-center
                gap-4
                flex-wrap
              "
            ></motion.div>
          </div>
        </section>

        <section
          className="
            py-24
            px-6
            max-w-7xl
            mx-auto
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
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
              Latest Additions
            </p>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-bold
              "
            >
              Fresh For The Streets
            </h2>

            <p
              className="
                mt-4
                text-slate-600
                dark:text-slate-400
                max-w-2xl
                mx-auto
              "
            >
              Explore the newest drops, curated for modern style, clean
              simplicity, and elevated streetwear culture.
            </p>
          </motion.div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-8
            "
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        
        <section
          className="
            py-20
            bg-black
            text-white
            dark:bg-white
            dark:text-black
            transition-colors
            duration-300
          "
        >
          <div
            className="
              max-w-5xl
              mx-auto
              text-center
              px-6
            "
          >
            <h2
              className="
                text-3xl
                md:text-5xl
                font-bold
              "
            >
              Designed For Everyday Presence
            </h2>

            <p
              className="
                mt-6
                opacity-80
                max-w-2xl
                mx-auto
              "
            >
              Every new release is built with premium quality, timeless design,
              and the confidence to stand out without saying too much.
            </p>

            <div
              className="
                mt-10
                flex
                justify-center
                gap-4
                flex-wrap
              "
            >
              <Link to="/collections">
                <button
                  className="
                    bg-amber-500
                    hover:bg-amber-600
                    text-white
                    px-8
                    py-3
                    rounded-full
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  Shop Collection
                </button>
              </Link>

              <Link to="/essentials">
                <button
                  className="
                    border
                    border-white/20
                    dark:border-black/20
                    px-8
                    py-3
                    rounded-full
                    font-semibold
                    hover:bg-white
                    hover:text-black
                    dark:hover:bg-black
                    dark:hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  Explore Essentials
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default NewArrivalsPage;
