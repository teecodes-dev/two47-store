import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";

function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does delivery take?",
      answer:
        "Orders within Nigeria are typically delivered within 2–7 business days depending on your location.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes. After placing an order, you can visit the Track Order page to view the current status of your order.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We currently accept bank transfers, card payments, and cryptocurrency payments.",
    },
    // {
    //   question: "Can I return or exchange an item?",
    //   answer:
    //     "Yes. Eligible items can be returned or exchanged within our return window provided they are unused and in their original condition.",
    // },
    {
      question: "Do you offer nationwide delivery?",
      answer:
        "Yes. We deliver to customers across Nigeria and are working towards international shipping.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us through our Contact page or by using the support information provided on the website.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />

      <section className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-slate-600 dark:text-slate-400">
            Find answers to the most common questions about shopping with Two47.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  p-5
                  text-left
                  font-medium
                  hover:bg-slate-50
                  dark:hover:bg-slate-900
                  transition
                "
              >
                <span>{faq.question}</span>

                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Our support team is here to help.
          </p>

          <a
            href="/contact"
            className="
              inline-block
              px-6
              py-3
              bg-amber-500
              hover:bg-amber-600
              text-white
              rounded-lg
              transition
            "
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FAQsPage;
