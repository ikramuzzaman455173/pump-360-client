"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="overflow-hidden pb-20 pt-20 md:pt-28 xl:pb-32 xl:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg text-center lg:text-left"
          >
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🔥 Pump 360 - Complete Accounting POS ERP Solution
            </h4>
            <h1 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl xl:text-6xl">
              Powerful ERP Software for {" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                Accounting
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl">
              Pump 360 - An all-in-one Accounting POS ERP Software designed for seamless business management, featuring robust integrations, real-time analytics, and an intuitive interface.
            </p>
            <div className="mt-10">
              <form onSubmit={handleSubmit} className="flex flex-wrap gap-5 justify-center lg:justify-start">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full sm:w-auto rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  aria-label="get started button"
                  className="w-full sm:w-auto flex items-center justify-center rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Try It Now
                </motion.button>
              </form>
              {submitted && (
                <p className="mt-3 text-green-500">Success! Check your email inbox.</p>
              )}
              <p className="mt-5 text-black dark:text-white">
                Try for free, no credit card required.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg flex justify-center lg:justify-end"
          >
            <div className="relative w-full">
              <Image
                src="/images/header/pump-hero-1.webp"
                alt="header img"
                width={600}
                height={300}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
