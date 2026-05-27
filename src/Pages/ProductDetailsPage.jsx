import { useParams } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { products } from "../Data/products";

function ProductDetailsPage() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
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
              Designed for confidence, comfort, and timeless expression. Every
              Two47 piece is crafted with premium materials and clean detailing.
            </p>

            <div>
              <h3 className="font-semibold mb-4">Select Size</h3>

              <div className="flex gap-3">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="
                        border
                        px-5 py-3
                        rounded-xl
                        hover:border-amber-500
                        transition
                      "
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button
                className="
                bg-amber-500
                hover:bg-amber-600
                text-white
                px-10 py-4
                rounded-full
                font-semibold
                transition
              "
              >
                Add To Cart
              </button>

              <button
                className="
                border
                px-10 py-4
                rounded-full
                hover:bg-slate-100
                dark:hover:bg-slate-800
                transition
              "
              >
                Save
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
