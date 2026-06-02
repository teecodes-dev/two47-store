import { useNavigate } from "react-router-dom";

function OrderSuccessPage() {
  const navigate = useNavigate();

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const latestOrder = orders[orders.length - 1];

  if (!latestOrder) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        <h1 className="text-2xl font-bold">No Order Found</h1>

        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-amber-500 px-6 py-2 rounded text-white"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white px-6">
      <div className="max-w-xl w-full text-center">
        {/* SUCCESS ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl">
            ✓
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-green-500">Order Confirmed</h1>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Thank you {latestOrder.customer.firstName}, your order has been
          received.
        </p>

        {/* ORDER CARD */}
        <div className="mt-8 border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-left bg-white dark:bg-slate-900/40">
          <div className="flex justify-between mb-4">
            <p className="text-sm text-slate-500">Order ID</p>
            <span className="text-sm font-semibold">{latestOrder.id}</span>
          </div>

          <div className="flex justify-between mb-4">
            <p className="text-sm text-slate-500">Status</p>
            <span className="text-xs px-3 py-1 rounded-full bg-yellow-500 text-black">
              Processing
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <p className="text-sm text-slate-500">Total Paid</p>
            <span className="font-bold text-amber-500">
              ₦{latestOrder.total.toLocaleString()}
            </span>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mt-4">
            <p className="text-sm font-semibold mb-2">Items</p>

            {latestOrder.items.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-sm text-slate-600 dark:text-slate-300"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>₦{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* NEXT STEPS */}
        <div className="mt-6 text-sm text-slate-500 space-y-2">
          <p>📦 We are preparing your order</p>
          <p>🚚 You will receive updates via email</p>
          <p>⏱ Delivery usually takes 2–5 business days</p>
        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/orders")}
            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            View My Orders
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccessPage;
