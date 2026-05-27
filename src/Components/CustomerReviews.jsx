import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Daniel A.",
    comment:
      "Two47 quality exceeded my expectations. The fit, fabric, and finishing feel premium.",
  },
  {
    id: 2,
    name: "Sarah M.",
    comment:
      "Finally found a fashion brand that combines luxury with everyday comfort.",
  },
  {
    id: 3,
    name: "Michael K.",
    comment: "The hoodie I got from Two47 instantly became my favorite piece.",
  },
  {
    id: 4,
    name: "Ayo T.",
    comment:
      "Clean design, perfect fit. You can tell attention to detail is serious.",
  },
  {
    id: 5,
    name: "James O.",
    comment:
      "Every drop feels exclusive. This brand understands modern streetwear.",
  },
  {
    id: 6,
    name: "Linda P.",
    comment:
      "I love how minimal yet premium everything feels. Definitely coming back.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-10 overflow-hidden bg-slate-950">
      {/* HEADER */}
      <div className="text-center mb-10">
        <p className="text-amber-400 font-semibold uppercase tracking-[0.3em] text-sm mb-4">
          Community Voices
        </p>

        <h2 className="text-white dark:text-white text-3xl md:text-5xl font-bold">
          Loved By Our Customers
        </h2>
      </div>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="
                min-w-[320px]
                max-w-[320px]
                h-[170px]
                p-6
                rounded-2xl
                bg-slate-900
                text-white
                border
                border-slate-800
                shadow-sm
                flex
                flex-col
              "
            >
              {/* COMMENT (takes available space) */}
              <p className="text-slate-300 leading-relaxed flex-1">
                “{review.comment}”
              </p>

              {/* NAME FIXED TO BOTTOM */}
              <h4 className="text-amber-400 font-semibold mt-4">
                {review.name}
              </h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;
