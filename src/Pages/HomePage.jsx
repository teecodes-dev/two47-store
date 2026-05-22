import Herosection from "../Components/Herosection";
import Navbar from "../Components/Navbar";

import FeaturedCollections from "../Components/FeaturedCollections";
import BestSellers from "../Components/BestSellers";
import NewArrivals from "../Components/NewArrivals";

import CustomerReviews from "../Components/CustomerReviews";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
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
      <Navbar />

      <Herosection />

      <FeaturedCollections />

      <NewArrivals />

      <BestSellers />

      <section
        className="
        max-w-7xl
        mx-auto
        px-6
        py-16
        text-center
      "
      >
        <h2
          className="
          text-3xl
          md:text-5xl
          font-bold
          tracking-tight
        "
        >
          Curated Fashion & Essentials for the Modern Lifestyle
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
          JMK is more than a store, it is a refined collection of premium
          essentials designed for style, confidence, and identity.
        </p>
      </section>

      <CustomerReviews />

      <section
        className="
        py-20
        bg-black
        text-white
        dark:bg-white
        dark:text-black
      "
      >
        <div
          className="
          max-w-4xl
          mx-auto
          text-center
          px-6
        "
        >
          <h2
            className="
            text-3xl
            md:text-4xl
            font-bold
          "
          >
            Designed for those who value simplicity and excellence
          </h2>

          <p
            className="
            mt-4
            opacity-80
          "
          >
            Premium quality. Clean design. Everyday essentials that define your
            style.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default HomePage;
