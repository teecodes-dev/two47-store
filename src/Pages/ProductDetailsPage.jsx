import { useParams } from "react-router-dom";
import { useState } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { products } from "../Data/products";

import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

function ProductDetailsPage() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // ✅ NEW: selected size state
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-3xl object-cover"
            />
          </div>

          <div className="space-y-8">
            <p className="text-amber-400 uppercase tracking-[0.3em] text-xs">
              {product.collection}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold">{product.name}</h1>

            <p className="text-2xl font-semibold text-amber-500">
              ₦{product.price.toLocaleString()}
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              A premium essential designed to blend comfort,
              quality, and modern style. Created for individuals who value
              confidence, simplicity, and everyday versatility, this piece is
              made to fit seamlessly into any wardrobe.
            </p>

            <div>
              <h3 className="font-semibold mb-4">Select Size</h3>

              <div className="flex gap-3 flex-wrap">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      border px-5 py-3 rounded-xl transition
                      ${
                        selectedSize === size
                          ? "bg-amber-500 text-white border-amber-500"
                          : "border-slate-300 dark:border-slate-700 hover:border-amber-500 hover:text-amber-500"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              
              <button
                onClick={() =>
                  addToCart({
                    ...product,
                    size: selectedSize || "M",
                  })
                }
                className="
                  bg-amber-500
                  hover:bg-amber-600
                  text-white
                  px-10
                  py-4
                  rounded-full
                  font-semibold
                  transition
                "
              >
                Add To Cart
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className="
                  border
                  border-slate-300
                  dark:border-slate-700
                  px-10
                  py-4
                  rounded-full
                  hover:bg-slate-100
                  dark:hover:bg-slate-800
                  transition
                "
              >
                {isInWishlist(product.id) ? "Saved ❤️" : "Save"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProductDetailsPage;
