import { useCart } from "../Context/CartContext";

function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div
      className={`
        fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full text-white z-[9999] shadow-lg transition-all
        ${toast.type === "success" ? "bg-green-500" : ""}
        ${toast.type === "error" ? "bg-red-500" : ""}
        ${toast.type === "warning" ? "bg-yellow-500 text-black" : ""}
      `}
    >
      {toast.message}
    </div>
  );
}

export default Toast;
