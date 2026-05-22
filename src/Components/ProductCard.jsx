import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div
        className="
        bg-slate-900
        rounded-2xl
        overflow-hidden
        cursor-pointer
        group
      "
      >
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full
              h-[350px]
              object-cover
              transition
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3
            className="
            text-white
            font-semibold
            group-hover:text-amber-400
            transition
          "
          >
            {product.name}
          </h3>

          <p className="text-amber-400 mt-2">
            ₦{product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
