const footerLinks = {
  Shop: [
    "New Arrivals",
    "Best Sellers",
    "Streetwear",
    "Essentials",
    "Limited Edition",
    "Accessories",
    "Gift Cards",
  ],

  "Customer Care": [
    "Track Order",
    "Shipping & Delivery",
    "Returns & Exchanges",
    "Payment Options",
    "Size Guide",
    "FAQs",
    "Contact Us",
  ],

  "About JMK": [
    "Our Story",
    "Journal",
    "Careers",
    "Press & Media",
    "Wholesale",
    "Sustainability",
    "Community",
  ],

  Partnerships: [
    "Corporate Orders",
    "Brand Collaborations",
    "Retail Partners",
    "Influencer Program",
    "Campus Ambassadors",
  ],

  Membership: [
    "Join JMK Circle",
    "Early Access",
    "Exclusive Drops",
    "Birthday Rewards",
    "VIP Benefits",
  ],
};

const Footer = () => {
  return (
    <footer className="">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-5 gap-10">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="font-semibold mb-6 text-amber-400">{title}</h3>

            <ul className="space-y-3">
              {links.map((link) => (
                <li
                  key={link}
                  className="text-sm text-black hover:text-slate-40 dark:text-white cursor-pointer transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-400">
          <p>
            Nigeria • © {new Date().getFullYear()} JMK. All Rights Reserved.
          </p>

          <div className="flex gap-6 flex-wrap">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Shipping</span>
            <span>Returns</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
