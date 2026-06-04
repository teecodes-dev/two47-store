import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useAuth } from "../Context/AuthContext";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const userOrders = savedOrders.filter(
      (order) => order.userId === (user?.email || "guest"),
    );

    setOrders(userOrders.reverse());
  }, [user]);

  const clearOrders = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to delete all order history?",
    );

    if (!confirmClear) return;

    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const remainingOrders = savedOrders.filter(
      (order) => order.userId !== (user?.email || "guest"),
    );

    localStorage.setItem("orders", JSON.stringify(remainingOrders));
    setOrders([]);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Orders</h1>
            <p className="text-slate-500 text-sm mt-1">
              View your order history and tracking information
            </p>
          </div>

          {orders.length > 0 && (
            <button
              onClick={clearOrders}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Clear Order History
            </button>
          )}
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">No Orders Yet 🛒</h2>
            <p className="text-slate-500 mt-2">
              Your completed orders will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, index) => (
              <div
                key={order.id}
                className="border border-slate-200 dark:border-slate-800 rounded-xl p-5"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="font-semibold text-lg">
                      Order #{orders.length - index}
                    </h2>

                    <p className="text-xs text-slate-500 mt-1">
                      Order ID: {order.id}
                    </p>

                    <p className="text-xs text-slate-500">
                      Tracking No: {order.trackingNumber || `TWF-${order.id}`}
                    </p>
                  </div>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-500 text-white"
                        : order.status === "Shipped"
                          ? "bg-blue-500 text-white"
                          : "bg-yellow-500 text-black"
                    }`}
                  >
                    {order.status || "Processing"}
                  </span>
                </div>

                
                <div className="grid md:grid-cols-2 gap-4 text-sm mb-5">
                  <div>
                    <p className="text-slate-500">Customer</p>
                    <p className="font-medium">
                      {order.customer?.firstName} {order.customer?.lastName}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">Payment Method</p>
                    <p className="font-medium capitalize">
                      {order.paymentMethod}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">Order Date</p>
                    <p className="font-medium">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">Estimated Delivery</p>
                    <p className="font-medium">2 - 5 Business Days</p>
                  </div>
                </div>

                
                <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-3">
                  <h3 className="font-medium mb-2">Order Items</h3>

                  {order.items.map((item, i) => (
                    <div
                      key={`${item.id}-${item.size || i}`}
                      className="flex justify-between text-sm"
                    >
                      <span>
                        {item.name}
                        {item.size && (
                          <span className="text-slate-500">
                            {" "}
                            (Size: {item.size})
                          </span>
                        )}{" "}
                        × {item.quantity}
                      </span>

                      <span>
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                
                <div className="border-t border-slate-200 dark:border-slate-800 mt-4 pt-4 flex justify-between items-center">
                  <span className="font-semibold">Order Total</span>

                  <span className="font-bold text-lg text-amber-500">
                    ₦{order.total.toLocaleString()}
                  </span>
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

export default OrdersPage;
