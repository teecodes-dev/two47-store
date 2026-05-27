import React from "react";
import { IoBagHandle } from "react-icons/io5";

function CartButton({ count, openCart }) {
 
  return (
    <button onClick={openCart} className="relative cursor-pointer">
      <IoBagHandle className="text-2xl" />

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}

export default CartButton;