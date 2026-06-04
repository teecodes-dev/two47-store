import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useAuth } from "../Context/AuthContext";

function AdminDashboard() {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");

  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl font-bold">
        Access Denied 🚫
      </div>
    );
  }

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(allOrders);
  }, []);

  const updateStatus = (orderId, status) => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const updated = allOrders.map((order) =>
      order.id === orderId ? { ...order, status } : order,
    );

    localStorage.setItem("orders", JSON.stringify(updated));
    setOrders(updated);
  };

  const deleteOrder = (orderId) => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const updated = allOrders.filter((o) => o.id !== orderId);

    localStorage.setItem("orders", JSON.stringify(updated));
    setOrders(updated);
  };

  const filteredOrders =
    filter === "all" ? orders : orders.filter((o) => o.status === filter);

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <p className="text-amber-500 mt-2">₦{totalRevenue.toLocaleString()}</p>

        <div className="flex gap-3 my-5">
          {["all", "Processing", "Shipped", "Delivered"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded"
            >
              {s}
            </button>
          ))}
        </div>

        {filteredOrders.map((order) => (
          <div key={order.id} className="p-5 border rounded-xl mb-5">
            <p>Order #{order.id}</p>
            <p>User: {order.userId}</p>
            <p>Status: {order.status || "Processing"}</p>

            <div className="mt-2">
              {order.items.map((item) => (
                <p key={item.id}>
                  {item.name} × {item.quantity}
                </p>
              ))}
            </div>

            <p className="font-bold mt-2">₦{order.total}</p>

            <div className="flex gap-2 mt-3">
              <button onClick={() => updateStatus(order.id, "Processing")}>
                Processing
              </button>
              <button onClick={() => updateStatus(order.id, "Shipped")}>
                Shipped
              </button>
              <button onClick={() => updateStatus(order.id, "Delivered")}>
                Delivered
              </button>
              <button onClick={() => deleteOrder(order.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default AdminDashboard;
