import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6 max-w-5xl mx-auto">
        <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">
          About Two47
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Redefining Modern Streetwear
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          Two47 is a contemporary fashion brand built on identity, confidence,
          and culture. We exist to deliver premium streetwear and essentials
          that empower individuals to express themselves boldly and
          effortlessly.
        </p>
      </section>

      {/* WHAT WE ARE */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900">
          <h3 className="text-xl font-bold mb-3">Our Vision</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            To become a globally recognized streetwear brand that defines modern
            identity through simplicity, quality, and culture.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900">
          <h3 className="text-xl font-bold mb-3">Our Mission</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            To design and deliver premium fashion pieces that blend comfort,
            luxury, and everyday wearability at a global standard.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900">
          <h3 className="text-xl font-bold mb-3">Our Promise</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Every piece is crafted with attention to detail, ensuring quality,
            durability, and timeless style in every collection.
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Two47 was created from a simple idea — that fashion should not just be
          worn, but experienced. Inspired by global street culture and modern
          luxury aesthetics, we set out to build a brand that reflects
          confidence, identity, and everyday excellence.
          <br />
          <br />
          From essential wear to statement pieces, every collection is designed
          to fit seamlessly into modern lifestyles while maintaining a strong
          sense of individuality.
        </p>
      </section>

      {/* TRUST / VALUE STRIP */}
      <section className="py-12 bg-slate-900 text-white dark:bg-white dark:text-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center px-6">
          <div>
            <h3 className="text-2xl font-bold">Premium Quality</h3>
            <p className="text-sm mt-2 opacity-80">Crafted for durability</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Fast Delivery</h3>
            <p className="text-sm mt-2 opacity-80">Reliable shipping network</p>
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

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default AboutPage;
