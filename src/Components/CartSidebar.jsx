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

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between p-4 border-b">
        <h2 className="font-bold">Cart</h2>
        <button onClick={closeCart}>
          <MdClose size={24} />
        </button>
      </div>

      <div className="p-4 space-y-4 h-[70%] overflow-y-auto">
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="border p-3 rounded">
              <h3>{item.name}</h3>
              <p>${item.price}</p>

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

      <div className="absolute bottom-0 w-full p-4 border-t">
        <h3 className="font-bold">Total: ${totalPrice.toFixed(2)}</h3>

        <button className="w-full mt-3 bg-orange-500 text-white py-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSidebar;
