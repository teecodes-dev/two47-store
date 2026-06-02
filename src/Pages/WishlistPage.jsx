import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { useWishlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CartContext";

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">My Wishlist</h1>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Your saved fashion pieces.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">💔</p>

            <h2 className="text-2xl font-semibold mb-2">
              Your wishlist is empty
            </h2>

            <p className="text-slate-500 dark:text-slate-400">
              Save items you love to view them later.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="
                  border
                  border-slate-200
                  dark:border-slate-800
                  rounded-3xl
                  overflow-hidden
                  bg-white
                  dark:bg-slate-900
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover"
                />

                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-amber-500">
                      {item.collection}
                    </p>

                    <h2 className="text-xl font-semibold mt-1">{item.name}</h2>

                    <p className="text-amber-500 font-bold mt-2">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => addToCart(item)}
                      className="
                        flex-1
                        bg-amber-500
                        hover:bg-amber-600
                        text-white
                        py-3
                        rounded-full
                        transition
                      "
                    >
                      Add To Cart
                    </button>

                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="
                        flex-1
                        border
                        border-slate-300
                        dark:border-slate-700
                        hover:bg-slate-100
                        dark:hover:bg-slate-800
                        py-3
                        rounded-full
                        transition
                      "
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default WishlistPage;
