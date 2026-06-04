import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <Navbar />

      <section className="text-center py-24 px-6 max-w-5xl mx-auto">
        <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">
          About Two47
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Redefining Modern Streetwear
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          Two47 is a modern online fashion destination built for individuals who
          value confidence, style, and self-expression. We bring together
          carefully selected fashion pieces, everyday essentials, and
          trend-driven collections that help you look your best for every
          occasion.
        </p>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900">
          <h3 className="text-xl font-bold mb-3">Our Vision</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            To become a trusted fashion destination where style meets
            accessibility, offering customers a seamless shopping experience and
            products that inspire confidence.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900">
          <h3 className="text-xl font-bold mb-3">Our Mission</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            To provide quality fashion, modern essentials, and standout pieces
            that combine comfort, affordability, and contemporary style.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900">
          <h3 className="text-xl font-bold mb-3">Our Promise</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            At Two47, we are committed to offering carefully curated products,
            reliable service, and a shopping experience that puts our customers
            first.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Two47 was created from a simple belief that fashion should be
          accessible, expressive, and effortless. Inspired by modern trends,
          street culture, and everyday lifestyle, we set out to build an online
          store where customers can discover quality fashion pieces that fit
          their personality and lifestyle.
          <br />
          <br />
          Whether you're looking for everyday essentials, outfits, or the latest
          arrivals, Two47 is dedicated to helping you shop with confidence and
          elevate your style.
        </p>
      </section>

      <section className="py-12 bg-slate-900 text-white dark:bg-white dark:text-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center px-6">
          <div>
            <h3 className="text-2xl font-bold">Premium Quality</h3>
            <p className="text-sm mt-2 opacity-80">Built to Last</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Fast Delivery</h3>
            <p className="text-sm mt-2 opacity-80">Reliable shipping </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Secure Shopping</h3>
            <p className="text-sm mt-2 opacity-80">Safe & trusted checkout</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Customer First</h3>
            <p className="text-sm mt-2 opacity-80">Support always available</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
