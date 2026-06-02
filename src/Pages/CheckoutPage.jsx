import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { useCart } from "../Context/CartContext";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../Context/AuthContext";

function CheckoutPage() {
  const { cartItems, totalPrice, clearCart, removeItem } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("bank");

  const [cardForm, setCardForm] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [cryptoTxHash, setCryptoTxHash] = useState("");

  // Auto-fill user info (optional improvement)
  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCardChange = (e) => {
    setCardForm({ ...cardForm, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!cartItems.length) {
      alert("Your cart is empty");
      return;
    }

    if (!form.firstName || !form.email || !form.address) {
      alert("Please fill required shipping details");
      return;
    }

    if (paymentMethod === "crypto" && !cryptoTxHash.trim()) {
      alert("Please enter your transaction hash");
      return;
    }

    const newOrder = {
      id: Date.now(),

      // 👇 IMPORTANT: user separation fix
      userId: user?.email || "guest",

      items: cartItems,
      total: totalPrice,
      customer: form,
      paymentMethod,
      cryptoTxHash: paymentMethod === "crypto" ? cryptoTxHash : null,

      // 👇 tracking system
      status: "Processing",
      trackingNumber: "TWF-" + Math.floor(100000 + Math.random() * 900000),

      date: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder]),
    );

    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div className="space-y-10">
          {/* SHIPPING */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>

            <div className="space-y-3">
              <input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-100 dark:bg-slate-800"
              />

              <input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-100 dark:bg-slate-800"
              />

              <input
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-100 dark:bg-slate-800"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-100 dark:bg-slate-800"
              />

              <input
                name="address"
                placeholder="Home Address"
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-100 dark:bg-slate-800"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  className="p-3 rounded bg-slate-100 dark:bg-slate-800"
                />

                <input
                  name="state"
                  placeholder="State"
                  onChange={handleChange}
                  className="p-3 rounded bg-slate-100 dark:bg-slate-800"
                />
              </div>
            </div>
          </section>

          {/* PAYMENT */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Payment Method</h2>

            <div className="space-y-3">
              {["bank", "card", "crypto"].map((method) => (
                <label key={method} className="flex gap-2 items-center">
                  <input
                    type="radio"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  {method.toUpperCase()}
                </label>
              ))}
            </div>

            {/* BANK */}
            {paymentMethod === "bank" && (
              <div className="mt-4 p-4 rounded bg-slate-100 dark:bg-slate-900 text-sm">
                <p>
                  <b>Account Name:</b> Adeyanju Ayotomide
                </p>
                <p>
                  <b>Account Number:</b> 2114032155
                </p>
                <p>
                  <b>Bank:</b> United Bank for Africa (UBA)
                </p>
              </div>
            )}

            {/* CARD */}
            {paymentMethod === "card" && (
              <div className="mt-4 space-y-3">
                <input
                  name="cardName"
                  placeholder="Name on Card"
                  onChange={handleCardChange}
                  className="w-full p-3 rounded bg-slate-100 dark:bg-slate-800"
                />

                <input
                  name="cardNumber"
                  placeholder="Card Number"
                  onChange={handleCardChange}
                  className="w-full p-3 rounded bg-slate-100 dark:bg-slate-800"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="expiry"
                    placeholder="MM/YY"
                    onChange={handleCardChange}
                    className="p-3 rounded bg-slate-100 dark:bg-slate-800"
                  />

                  <input
                    name="cvv"
                    placeholder="CVV"
                    onChange={handleCardChange}
                    className="p-3 rounded bg-slate-100 dark:bg-slate-800"
                  />
                </div>

                <p className="text-xs text-yellow-500">
                  Secure payment handled by provider.
                </p>
              </div>
            )}

            {/* CRYPTO */}
            {paymentMethod === "crypto" && (
              <div className="mt-4 space-y-3 p-4 rounded bg-slate-100 dark:bg-slate-900 text-sm">
                <p>
                  <b>USDT / USDC (ETH / BSC)</b>
                </p>
                <p className="break-all">
                  0xef2C2d6957E9cED16CEf2ED50d307FCacc96ADe8
                </p>

                <p className="mt-2">
                  <b>BTC</b>
                </p>
                <p className="break-all">13jNJg2ZgknEHGJNQJ7taX9VPW1TZBmN8S</p>

                <input
                  placeholder="Transaction Hash / ID"
                  value={cryptoTxHash}
                  onChange={(e) => setCryptoTxHash(e.target.value)}
                  className="w-full p-3 mt-3 rounded bg-white dark:bg-slate-800"
                />
              </div>
            )}
          </section>
        </div>

        {/* RIGHT SIDE */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-3 max-h-60 overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm border-b pb-2"
              >
                <div>
                  <p>
                    {item.name} × {item.quantity}
                  </p>
                  <p className="text-amber-500">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500"
                >
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₦{totalPrice.toLocaleString()}</span>
          </div>

          <button
            onClick={handleOrder}
            className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg"
          >
            Place Order
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CheckoutPage;
