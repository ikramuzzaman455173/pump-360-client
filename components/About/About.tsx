"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const aboutData = {
  title: "Pump 360 ERP & POS Software",
  description:
    "Pump 360 offers a comprehensive ERP, POS, and accounting software solution to streamline your business operations effectively.",
  highlights: [
    {
      id: "01",
      title: "Comprehensive Account Management",
      description:
        "Manage all your financial transactions, accounts, and ledgers seamlessly with real-time insights."
    },
    {
      id: "02",
      title: "Expense Tracking and Reporting",
      description:
        "Monitor and categorize expenses effectively with detailed financial reports for better decision-making."
    },
    {
      id: "03",
      title: "Shift Management",
      description:
        "Efficiently manage employee shifts, track attendance, and streamline workforce scheduling."
    },
    {
      id: "04",
      title: "POS Seal Management",
      description:
        "Ensure secure and efficient Point-of-Sale operations with robust seal management features."
    }
  ]
};


const About = () => {
  return (
    <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="flex items-center gap-8 lg:gap-32.5">
          {/* Image Section */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
          >
            <Image src="/images/about/about-light-01.png" alt="Pump 360" className="dark:hidden" fill />
            <Image src="/images/about/about-dark-01.png" alt="Pump 360" className="hidden dark:block" fill />
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right md:w-1/2"
          >
            <span className="font-medium uppercase text-black dark:text-white">
              <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white">
                New
              </span>{" "}
              {aboutData.title}
            </span>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              A Complete Solution for
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                Your Business Management
              </span>
            </h2>
            <p>{aboutData.description}</p>

            {aboutData.highlights.map((item) => (
              <div key={item.id} className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">{item.id}</p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;