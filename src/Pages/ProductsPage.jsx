import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Herob2 from "../assets/Herob2.avif";

import SearchBar from "../Components/SearchBar";
import ResultsSummary from "../Components/ResultsSummary";
import ProductCard from "../Components/ProductCard";
import CategoryFilter from "../Components/CategoryFilter";
import SortDropdown from "../Components/SortDropdown";

import { useProducts } from "../Hooks/useProducts";
import AppLayout from "../Layout/AppLayout";

function ProductsPage() {
  const {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortOrder,
    setSortOrder,
  } = useProducts();

  return (
    <AppLayout>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        {/* ================= HERO ================= */}
        <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
          {/* background */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Herob2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* overlay (dark mode safe) */}
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

          {/* content */}
          <div className="relative z-10 px-6 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-amber-400 tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
            >
              Two47 Collections
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-white dark:text-slate-100 text-4xl md:text-6xl font-bold"
            >
              Shop The Full Collection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 text-slate-200 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto"
            >
              Explore premium streetwear, essentials, and limited edition pieces
              designed for bold identity.
            </motion.p>
          </div>
        </section>

        {/* ================= FILTER ================= */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-center mb-8">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <SortDropdown sortOrder={sortOrder} onSortChange={setSortOrder} />
          </div>

          <div className="mb-8">
            <ResultsSummary
              count={filteredProducts.length}
              searchQuery={searchQuery}
            />
          </div>

          {/* ================= PRODUCTS ================= */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500 dark:text-slate-400">
              No products found matching your search.
            </div>
          )}
        </section>

        {/* ================= PROMO SECTION ================= */}
        <section className="py-16 bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-center transition-colors duration-300">
          <h2 className="text-2xl md:text-4xl font-bold">
            New drops every week
          </h2>

          <p className="mt-3 text-slate-300 dark:text-slate-600">
            Stay ahead with exclusive releases and limited collections.
          </p>

          {/* NEW BUTTON (requested) */}
          <div className="mt-8">
            <Link to="/new-arrivals">
              <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition">
                Explore New Arrivals
              </button>
            </Link>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}

export default ProductsPage;
