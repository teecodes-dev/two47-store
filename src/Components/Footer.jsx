import { Link } from "react-router-dom";

const footerLinks = {
  Shop: ["New Arrivals", "Best Sellers", "Essentials", "Collections"],

  "Customer Care": ["Track Order", "Returns & Exchanges", "FAQs", "Contact Us"],

  "About Two47": ["Our Story", "New Arrivals", "Best Sellers", "Essentials"],
};

const footerRoutes = {
  "New Arrivals": "/new-arrivals",
  "Best Sellers": "/best-sellers",
  Essentials: "/essentials",
  Collections: "/collections",

  "Track Order": "/orders",
  "Returns & Exchanges": "/contact",
  FAQs: "/faqs",
  "Contact Us": "/contact",

  "Our Story": "/about",
};

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      
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
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold italic">
            <span className="text-amber-500">Two</span>
            <span className="text-slate-900 dark:text-white">4</span>
            <span className="text-amber-500">7</span>
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
            Where you get Premium streetwear that gives confidence, comfort, and timeless
            expression.
          </p>
        </div>

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
                <li key={link}>
                  <Link
                    to={footerRoutes[link] || "#"}
                    className="
                      text-sm
                      text-slate-600
                      dark:text-slate-400
                      hover:text-amber-500
                      transition-colors
                      duration-300
                    "
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

     
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
            justify-center
            gap-4
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          <p>
            Nigeria • © {new Date().getFullYear()} Two47. All Rights Reserved.
          </p>

          {/* <div className="flex flex-wrap gap-6">
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
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
