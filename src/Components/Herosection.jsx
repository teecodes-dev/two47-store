import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Herob2 from "../assets/Herob2.avif"

const Herosection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
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

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-amber-400 tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
        >
          Two47 • Luxury Streetwear
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white text-4xl md:text-6xl font-bold leading-tight"
        >
          Elevate Your Style.
          <br />
          <span className="text-amber-400">Wear Identity.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-slate-300 text-base md:text-lg max-w-2xl mx-auto"
        >
          A modern fashion label inspired by confidence, culture, and timeless
          street luxury. Designed for individuals who define their own presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <Link to="/new-arrivals">
            <button
              className="
        bg-amber-500
        hover:bg-amber-600
        text-white
        font-semibold
        px-8 py-3
        rounded-full
        transition-all
        duration-300
        shadow-lg
        hover:shadow-amber-500/30
      "
            >
              Shop New Drop
            </button>
          </Link>

          <Link to="/collections">
            <button
              className="
        border
        border-white/20
        text-white
        px-8 py-3
        rounded-full
        hover:bg-white
        hover:text-black
        transition-all
        duration-300
      "
            >
              View Collection
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
