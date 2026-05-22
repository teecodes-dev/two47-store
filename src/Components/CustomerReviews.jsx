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
];

const CustomerReviews = () => {
  return (
    <section className=" py-24 px-6">
      
      <div className="text-center mb-16">
        <p className="text-amber-400 font-semibold uppercase tracking-[0.3em] text-sm mb-4">
          Community Voices
        </p>

        <h2 className="text-black dark:text-white text-3xl md:text-5xl font-bold">
          Loved By Our Customers
        </h2>
      </div>

      {/* Reviews */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            className="bg-slate-900 p-8 rounded-3xl"
          >
            <p className="text-slate-300 leading-relaxed mb-6">
              “{review.comment}”
            </p>

            <h4 className="text-amber-400 font-semibold">{review.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
