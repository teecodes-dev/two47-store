import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useAuth } from "../Context/AuthContext";

function TrackOrderPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const userOrders = allOrders.filter(
      (order) => order.userId === (user?.email || "guest"),
    );

    setOrders(userOrders);
  }, [user]);

  // 🔥 SIMULATE LIVE STATUS UPDATE (for demo / frontend only)
  const updateStatus = (orderId, newStatus) => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const updated = allOrders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });

    localStorage.setItem("orders", JSON.stringify(updated));

    // refresh UI
    const userOrders = updated.filter(
      (order) => order.userId === (user?.email || "guest"),
    );

    setOrders(userOrders);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Processing":
        return "bg-yellow-500";
      case "Shipped":
        return "bg-blue-500";
      case "Delivered":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Track Your Orders</h1>

        {orders.length === 0 ? (
          <p className="text-center text-slate-500">No orders to track</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-slate-200 dark:border-slate-800 p-5 rounded-xl"
              >
                {/* HEADER */}
                <div className="flex justify-between mb-3">
                  <p className="font-semibold">
                    Tracking #: {order.trackingNumber}
                  </p>

                  <span
                    className={`text-xs px-3 py-1 rounded-full text-white ${getStatusColor(
                      order.status,
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>

                {/* ITEMS */}
                <div className="space-y-2 text-sm">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* TOTAL */}
                <div className="mt-4 font-bold">
                  Total: ₦{order.total.toLocaleString()}
                </div>

                {/* DEMO BUTTONS (REMOVE LATER FOR ADMIN PANEL) */}
                <div className="flex gap-3 mt-4 text-xs">
                  <button
                    onClick={() => updateStatus(order.id, "Processing")}
                    className="px-3 py-1 bg-yellow-500 text-black rounded"
                  >
                    Processing
                  </button>

                  <button
                    onClick={() => updateStatus(order.id, "Shipped")}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    Shipped
                  </button>

                  <button
                    onClick={() => updateStatus(order.id, "Delivered")}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    Delivered
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default TrackOrderPage;
