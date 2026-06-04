import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <Navbar />

      <section className="text-center py-24 px-6 max-w-5xl mx-auto">
        <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">
          Contact Two47
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          We’re Here to Help
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Need help with an order, delivery, return, or product inquiry? Our
          support team is ready to assist you with fast and reliable responses.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 text-center">
          <h3 className="text-xl font-bold mb-3">Live Support</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Chat with our support team for real-time assistance.
          </p>
          <a
            href="https://wa.me/2347034130016"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-amber-500 text-white rounded-full"
          >
            Start Chat
          </a>
        </div>

        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 text-center">
          <h3 className="text-xl font-bold mb-3">Email Support</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Send us a message and we’ll respond within 24 hours.
          </p>
          <p className="mt-4 text-amber-500 font-medium">support@two47.com</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 text-center">
          <h3 className="text-xl font-bold mb-3">Call Support</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Speak directly with our support team during working hours.
          </p>
          <p className="mt-4 text-amber-500 font-medium">+234 703 413 0016</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Help Center
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {[
            "Orders & Tracking",
            "Shipping & Delivery",
            "Returns & Exchanges",
            "Payments & Security",
            "Product & Sizing",
            "Promotions & Discounts",
          ].map((item) => (
            <div
              key={item}
              className="p-5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:scale-[1.02] transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Fast Support. Real People. Real Help.
        </h2>

        <p className="mt-3 text-sm opacity-80 max-w-xl mx-auto">
          We respond quickly because your experience matters. Every message is
          handled with priority and care.
        </p>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
