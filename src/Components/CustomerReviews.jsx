import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Daniel",
    comment:
      "Two47 products are of top quality and exceeded my expectations. The fit and fabric feel premium.",
  },
  {
    id: 2,
    name: "Sarah",
    comment:
      "Finally found a fashion store that combines luxury with everyday comfort.",
  },
  {
    id: 3,
    name: "Michael",
    comment: "The hoodie I got from Two47 instantly became my favorite piece.",
  },
  {
    id: 4,
    name: "Ayo",
    comment:
      "I love the fit i got, everything fit perfectly. You can tell attention to detail is serious.",
  },
  {
    id: 5,
    name: "James",
    comment:
      "Every purchase feels exclusive.",
  },
  {
    id: 6,
    name: "Linda",
    comment:
      "I love how minimal yet premium everything feels. Definitely coming back.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-10 overflow-hidden bg-slate-950">
      
      <div className="text-center mb-10">
        <p className="text-amber-400 font-semibold uppercase tracking-[0.3em] text-sm mb-4">
          Community Voices
        </p>

        <h2 className="text-white dark:text-white text-3xl md:text-5xl font-bold">
          Loved By Our Customers
        </h2>
      </div>

      
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
              
              <p className="text-slate-300 leading-relaxed flex-1">
                “{review.comment}”
              </p>

              
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
