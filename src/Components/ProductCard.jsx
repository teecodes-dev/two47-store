import { Link } from "react-router-dom";
import { ShoppingBag, Star, Heart } from "lucide-react";
import { useCart } from "../Context/CartContext";

const ProductCard = ({ product, pageTitle }) => {
  const { addToCart } = useCart();

  const getTagLabel = () => {
    if (pageTitle) return pageTitle;

    if (product.tags?.includes("best-seller")) return "Best Seller";
    if (product.tags?.includes("new-arrival")) return "New Arrival";
    if (product.tags?.includes("essentials")) return "Essentials";

    return "Collection";
  };

  const getTagColor = () => {
    if (product.tags?.includes("essentials")) {
      return "bg-blue-500 text-white";
    }

    if (product.tags?.includes("best-seller")) {
      return "bg-amber-500 text-black";
    }

    if (product.tags?.includes("new-arrival")) {
      return "bg-green-500 text-black";
    }

    return "bg-slate-700 text-white";
  };

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
        h-full
        flex flex-col
      "
    >
  
      <button
        className="
          absolute top-3 right-3 z-20
          bg-black/50 backdrop-blur-md
          p-2 rounded-full
          text-white
          hover:text-red-500
          transition
        "
      >
        <Heart size={16} />
      </button>

      <div
        className={`
          absolute top-3 left-3 z-20
          text-[10px]
          font-semibold
          px-2 py-1
          rounded-full
          ${getTagColor()}
        `}
      >
        {getTagLabel()}
      </div>

      <Link to={`/product/${product.id}`} className="flex flex-col flex-grow">
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

        <div className="p-4 flex-grow">
          <p className="text-[11px] uppercase tracking-widest text-slate-400">
            Streetwear
          </p>

          <h3 className="text-white text-base font-semibold mt-2 min-h-[48px] group-hover:text-amber-400 transition">
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
          </div>

          <p className="text-green-400 text-xs mt-1">In Stock</p>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button
          onClick={() => addToCart(product)}
          className="
            w-full flex items-center justify-center gap-2
            bg-amber-500 hover:bg-amber-600
            text-black
            py-3 rounded-xl
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
