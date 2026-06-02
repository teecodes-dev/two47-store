import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const toastRef = useRef(null);

  // 💾 Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // 🛒 Cart controls
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  // 🔔 Toast system
  const showToast = (message, type = "success") => {
    setToast({ message, type });

    if (toastRef.current) clearTimeout(toastRef.current);

    toastRef.current = setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  // ➕ Add to cart (FIXED VERSION)
  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    const currentQty = exists ? exists.quantity : 0;

    // ✅ SAFE STOCK CHECK (prevents undefined crash)
    if (product.stock !== undefined) {
      if (product.stock === 0) {
        showToast("Out of stock ❌", "error");
        return;
      }

      if (currentQty >= product.stock) {
        showToast("Stock limit reached ❌", "error");
        return;
      }
    }

    setCartItems((prev) => {
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    showToast("Item added to cart ✔", "success");
  };

  // 🔼 Increase qty
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // 🔽 Decrease qty
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // ❌ Remove item
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🧮 Cart count
  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  // 💰 Total price
  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        totalPrice,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        toast,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
