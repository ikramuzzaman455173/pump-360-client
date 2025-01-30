"use client";

import { useState } from "react";
import faqData from "./faqData";
import FaqItem from "./FaqItem";

const Faq = () => {
  // Managing separate states for each column
  const [activeFaqLeft, setActiveFaqLeft] = useState<number | null>(null);
  const [activeFaqRight, setActiveFaqRight] = useState<number | null>(null);

  const handleFaqToggle = (id: number, isLeftColumn: boolean) => {
    if (isLeftColumn) {
      setActiveFaqLeft((prev) => (prev === id ? null : id));
    } else {
      setActiveFaqRight((prev) => (prev === id ? null : id));
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-black dark:to-gray-800 mb-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
          Frequently Asked Questions
        </h2>
        <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-3">
          Unlock the Full Potential of Pump360
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Find answers to the most commonly asked questions and get the most out of Pump360.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {faqData.slice(0, 5).map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              activeFaq={activeFaqLeft}
              handleFaqToggle={(id) => handleFaqToggle(id, true)}
            />
          ))}
        </div>
        {/* Right Column */}
        <div className="space-y-6">
          {faqData.slice(5).map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              activeFaq={activeFaqRight}
              handleFaqToggle={(id) => handleFaqToggle(id, false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Faq;
