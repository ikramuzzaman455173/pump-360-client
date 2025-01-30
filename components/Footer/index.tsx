"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  ShieldCheck,
  LifeBuoy
} from "lucide-react";
import Link from "next/link";
const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Testimonial", href: "/testimonial" },
    { name: "Team Member", href: "/team" },
    { name: "Contact Us", href: "/contact" }
  ];
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="py-20 lg:py-25">
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:gap-[100px] gap-8 p-5 md:p-10">
            {/* Logo and Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 lg:w-1/4 text-center md:text-left"
            >
              <a href="/">
                <Image
                  width={110}
                  height={80}
                  src="/images/logo/logo.png"
                  alt="Logo"
                />
              </a>
              <p className="mb-6 mt-4">
                Transform your refueling station management with Pump360.
                Experience enhanced efficiency, accuracy, and profitability.
              </p>
              <p className="mb-2 text-sectiontitle uppercase tracking-[5px]">
                Contact
              </p>
              <a
                href="mailto:info@thepump360.com"
                className="text-itemtitle font-medium text-black dark:text-white flex items-center justify-center md:justify-start gap-2"
              >
                <Mail size={18} /> info@thepump360.com
              </a>
            </motion.div>

            {/* Quick Links Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-auto text-center md:text-left"
            >
              <h4 className="mb-6 text-itemtitle2 font-medium text-black dark:text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-auto text-center md:text-left"
            >
              <h4 className="mb-6 text-itemtitle2 font-medium text-black dark:text-white">
                Newsletter
              </h4>
              <p className="mb-4">Subscribe to receive future updates</p>
              <form action="#">
                <div className="relative flex justify-center md:justify-start">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full max-w-[300px] rounded-full border border-stroke px-6 py-3 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black"
                  />
                  <button
                    aria-label="Signup to newsletter"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <Mail
                      size={20}
                      className="text-gray-500 hover:text-primary"
                    />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ul className="flex items-center gap-8">
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-1"
                >
                  <Globe size={18} /> English
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ShieldCheck size={18} /> Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-1"
                >
                  <LifeBuoy size={18} /> Support
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>
              &copy; {new Date().getFullYear()} Pump360. All rights reserved
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ul className="flex items-center gap-5">
              <li>
                <a
                  href="https://www.facebook.com/mdrakib.khan444/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <Facebook
                    size={24}
                    className="text-gray-500 hover:text-primary"
                  />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <Twitter
                    size={24}
                    className="text-gray-500 hover:text-primary"
                  />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin
                    size={24}
                    className="text-gray-500 hover:text-primary"
                  />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
