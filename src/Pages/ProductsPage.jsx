import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import SearchBar from "../Components/SearchBar";
import ResultsSummary from "../Components/ResultsSummary";
import ProductCard from "../Components/ProductCard";
import CategoryFilter from "../Components/CategoryFilter";
import SortDropdown from "../Components/SortDropdown";

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
      {/* NAVBAR */}
      <Navbar />

      {/* SHOP HERO */}
      <section className="bg-black text-white py-24 text-center">
        <p className="text-amber-400 uppercase tracking-[0.3em] text-xs mb-4">
          JMK Collections
        </p>

        <h1 className="text-4xl md:text-6xl font-bold">Shop The Collection</h1>

        <p className="mt-4 text-slate-400 max-w-xl mx-auto px-6">
          Explore premium streetwear, essentials, and limited edition pieces
          designed for bold identity.
        </p>
      </section>

      {/* SHOP CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* SEARCH */}
        <div className="flex justify-center mb-8">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* FILTER + SORT */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <SortDropdown sortOrder={sortOrder} onSortChange={setSortOrder} />
        </div>

        {/* RESULTS */}
        <div className="mb-10">
          <ResultsSummary
            count={filteredProducts.length}
            searchQuery={searchQuery}
          />
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default ProductsPage;
