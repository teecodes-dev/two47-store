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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const showToast = (message, type = "success") => {
    setToast({ message, type });

    if (toastRef.current) clearTimeout(toastRef.current);

    toastRef.current = setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  const addToCart = (product) => {
    const productSize = product.size || "M";

    // ✅ match BOTH id + size (VERY IMPORTANT)
    const exists = cartItems.find(
      (item) => item.id === product.id && item.size === productSize,
    );

    const currentQty = exists ? exists.quantity : 0;

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
          item.id === product.id && item.size === productSize
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          size: productSize, 
          quantity: 1,
        },
      ];
    });

    showToast(`Added to cart (${productSize}) ✔`, "success");
  };
  
  const increaseQty = (id, size) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQty = (id, size) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size)),
    );
  };

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

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
