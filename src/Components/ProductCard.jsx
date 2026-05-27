import { Link } from "react-router-dom";
import { ShoppingBag, Star, Heart } from "lucide-react";
import { useCart } from "../Context/CartContext";

const ProductCard = ({ product, pageTitle }) => {
  const { addToCart } = useCart();

  return (
    <div
      className="
        bg-[#111111]
        rounded-2xl
        overflow-hidden
        border border-white/10
        hover:border-amber-500/40
        transition-all duration-500
        group
        relative
        shadow-lg hover:shadow-amber-500/10
        max-w-[320px]
      "
    >
      {/* Wishlist */}
      <button
        className="
          absolute top-3 right-3 z-20
          bg-black/50 backdrop-blur-md
          p-2 rounded-full
          text-white hover:text-red-500
          transition
        "
      >
        <Heart size={16} />
      </button>

      {/* TAG BADGES */}
      <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-2">
        {pageTitle ? (
          <span className="bg-amber-500 text-black text-[10px] font-semibold px-2 py-1 rounded-full">
            {pageTitle}
          </span>
        ) : (
          <>
            {product.tags?.includes("best-seller") && (
              <span className="bg-amber-500 text-black text-[10px] font-semibold px-2 py-1 rounded-full">
                Best Seller
              </span>
            )}

            {product.tags?.includes("new-arrival") && (
              <span className="bg-green-500 text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                New Arrival
              </span>
            )}

            {product.tags?.includes("essentials") && (
              <span className="bg-blue-500 text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                Essentials
              </span>
            )}
          </>
        )}
      </div>

      {/* PRODUCT LINK */}
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full h-[180px]
              object-cover
              transition-transform duration-700
              group-hover:scale-105
            "
          />
        </div>

        <div className="p-4">
          <p className="text-[11px] uppercase tracking-widest text-slate-400">
            Streetwear
          </p>

          <h3 className="text-white text-base font-semibold mt-2 group-hover:text-amber-400 transition">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={13}
                className="fill-white text-amber-400"
              />
            ))}
            <span className="text-slate-400 text-xs ml-1">(4.9)</span>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <p className="text-amber-400 text-base font-bold">
              ₦{product.price.toLocaleString()}
            </p>
            <p className="text-slate-500 line-through text-xs">₦80,000</p>
          </div>

          <p className="text-green-400 text-xs mt-1">In Stock</p>
        </div>
      </Link>

      {/* ADD TO CART */}
      <div className="px-4 pb-4">
        <button
          onClick={() => addToCart(product)}
          className="
            w-full flex items-center justify-center gap-2
            bg-amber-500 hover:bg-amber-600
            text-black py-3 rounded-xl
            transition-all duration-300
            font-semibold text-sm
            hover:scale-[1.01]
            active:scale-[0.98]
          "
        >
          <ShoppingBag size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
