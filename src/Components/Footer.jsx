const footerLinks = {
  Shop: [
    "New Arrivals",
    "Best Sellers",
    "Streetwear",
    "Essentials",
    "Collections",
  ],

  "Customer Care": [
    "Track Order",
    "Shipping & Delivery",
    "Returns & Exchanges",
    "Payment Options",
    "FAQs",
    "Contact Us",
  ],

  "About Two47": ["Our Story", "Wholesale", "Sustainability", "Community"],
};

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      {/* TOP SECTION */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
          py-16
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-12
        "
      >
        {/* BRAND COLUMN */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold italic">
            <span className="text-amber-500">Two</span>
            <span className="text-slate-900 dark:text-white">4</span>
            <span className="text-amber-500">7</span>
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
            Premium streetwear crafted for confidence, comfort, and timeless
            expression.
          </p>
        </div>

        {/* LINKS */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3
              className="
                text-base
                font-semibold
                mb-4
                text-amber-500
              "
            >
              {title}
            </h3>

            <ul className="space-y-3">
              {links.map((link) => (
                <li
                  key={link}
                  className="
                    text-sm
                    text-slate-600
                    dark:text-slate-400
                    hover:text-amber-500
                    cursor-pointer
                    transition-colors
                    duration-300
                  "
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            py-5
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          <p>
            Nigeria • © {new Date().getFullYear()} Two47. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <span className="hover:text-amber-500 cursor-pointer transition">
              Terms
            </span>

            <span className="hover:text-amber-500 cursor-pointer transition">
              Privacy
            </span>

            <span className="hover:text-amber-500 cursor-pointer transition">
              Shipping
            </span>

            <span className="hover:text-amber-500 cursor-pointer transition">
              Returns
            </span>

            <span className="hover:text-amber-500 cursor-pointer transition">
              Accessibility
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
