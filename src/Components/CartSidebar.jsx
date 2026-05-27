import { useCart } from "../Context/CartContext";
import { MdClose } from "react-icons/md";

function CartSidebar() {
  const {
    isOpen,
    closeCart,
    cartItems,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  console.log("Cart isOpen:", isOpen);

  return (
    <>
      {/* 🌑 OVERLAY */}
      {isOpen && (
        <div
          onClick={closeCart}
          className="
            fixed inset-0
            bg-black/60
            backdrop-blur-sm
            z-40
            transition-opacity
          "
        />
      )}

      {/* 🛒 SIDEBAR */}
      <div
        className={`
          fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50
          transform transition-transform duration-300 ease-in-out
        dark:bg-slate-950
        dark:text-slate-100
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex justify-between p-4 border-b">
          <h2 className="font-bold">Cart</h2>

          <button onClick={closeCart}>
            <MdClose size={24} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-4 h-[70%] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
              <p className="text-2xl">🛒</p>
              <p className="mt-2 font-medium">Your cart is empty</p>
              <p className="text-sm">Start adding items to see them here</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="border p-3 rounded">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-amber-500 font-bold">
                  ₦{item.price.toLocaleString()}
                </p>

                <div className="flex gap-2 items-center mt-2">
                  <button onClick={() => decreaseQty(item.id)}>-</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQty(item.id)}>+</button>

                  <button
                    className="ml-auto text-red-500"
                    onClick={() => removeItem(item.id)}
                  >
                    remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <div
            className="absolute bottom-0 w-full p-4 border-t bg-white dark:bg-slate-950
        dark:text-slate-100"
          >
            <h3 className="font-bold">Total: ₦{totalPrice.toLocaleString()}</h3>

            <button className="w-full mt-3 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartSidebar;
