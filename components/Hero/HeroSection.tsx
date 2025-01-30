"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source
            src="https://petrolbunksoftware.com/assets/images/mobile-banner-video2.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Dark overlay for better contrast */}
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-lg font-semibold text-HIGHLIGHT_HOVER_COLOR uppercase tracking-wider"
        >
          🔥 Welcome to Pum360
        </motion.h4>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight"
        >
          Experience The Power of{" "}
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-1 h-4 bg-HIGHLIGHT_COLOR -z-10"></span>
            Pump360
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed"
        >
          Transform how refueling stations operate with cutting-edge solutions.
          Optimize efficiency, track sales in real time, and simplify financial
          management with Pum360.
        </motion.p>

        {/* Contact Us Button */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          href="#contact"
          className="mt-8 inline-block bg-HIGHLIGHT_COLOR text-black font-semibold text-lg px-6 py-3 rounded-full transition-all duration-300 hover:bg-HIGHLIGHT_HOVER_COLOR hover:scale-105"
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
