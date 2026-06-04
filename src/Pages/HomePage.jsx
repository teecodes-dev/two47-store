import Herosection from "../Components/Herosection";
import Navbar from "../Components/Navbar";

import FeaturedCollections from "../Components/FeaturedCollections";

import NewArrivalsPreview from "../Components/NewArrivalsPreview";
import BestSellersPreview from "../Components/BestSellersPreview";
import EssentialsPreview from "../Components/EssentialsPreview";

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

      
      <section className="py-12">
        <FeaturedCollections />
      </section>

    
      <section className="space-y-2 py-2">
        <NewArrivalsPreview />
        <BestSellersPreview />
        <EssentialsPreview />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Curated Fashion & Essentials for the Modern Lifestyle
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Two47 is more than a store, it is a refined collection of premium
          essentials designed for style, confidence, and identity.
        </p>
      </section>

      <section className="py-10">
        <CustomerReviews />
      </section>

      <section
        className="
          py-28
          bg-slate-950
          text-white
          dark:bg-slate-950
          dark:text-white
          transition-colors
          duration-300
        "
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Designed for those who value simplicity and excellence
          </h2>

          <p className="mt-4 opacity-80">
            Premium quality. Clean design. Everyday essentials that define your
            style.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
