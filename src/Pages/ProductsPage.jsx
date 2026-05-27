import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import SearchBar from "../Components/SearchBar";
import ResultsSummary from "../Components/ResultsSummary";
import ProductCard from "../Components/ProductCard";
import CategoryFilter from "../Components/CategoryFilter";
import SortDropdown from "../Components/SortDropdown";
import Herob2 from "../assets/Herob2.avif";

import { useProducts } from "../Hooks/useProducts";

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
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />

      <section className="bg-white text-black dark:bg-slate-950 dark:text-black relative py-24 text-center">
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
        <p className="text-amber-400 uppercase tracking-[0.3em] text-xs mb-4">
          Collections
        </p>

        <h1 className="text-4xl md:text-6xl font-bold">Shop The Collection</h1>

        <p className="mt-4 text-slate-400 max-w-xl mx-auto px-6">
          Explore premium streetwear, essentials, and limited edition pieces
          designed for bold identity.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
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

        <div className="mb-10">
          <ResultsSummary
            count={filteredProducts.length}
            searchQuery={searchQuery}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProductsPage;
