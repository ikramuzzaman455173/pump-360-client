// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import SectionHeader from "../Common/SectionHeader";

// const Integration = () => {
//   return (
//     <>
//       <section>
//         <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
//           {/* <!-- Section Title Start --> */}
//           <SectionHeader
//             headerInfo={{
//               title: `INTEGRATIONS`,
//               subtitle: `Remotely Maintain Your Data, From Anywhere, Anytime.`,
//               description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
//             }}
//           />

//           {/* <!-- Section Title End --> */}
//         </div>

//         <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
//           <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
//             <Image
//               width={1200}
//               height={400}
//               sizes="(max-width: 768px) 100vw"
//               src="/images/shape/shape-dotted-light.svg"
//               alt="Dotted"
//               className="dark:hidden"
//               style={{ position: "static" }}
//             />
//             <Image
//               fill
//               src="/images/shape/shape-dotted-dark.svg"
//               alt="Dotted"
//               className="hidden dark:block"
//             />
//           </div>
//           <div className="flex flex-wrap justify-around gap-y-10">
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-1/6"
//             >
//               <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
//                 <Image
//                   width={50}
//                   height={50}
//                   src="./images/brand/brand-07.svg"
//                   alt="Brand"
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-1/6"
//             ></motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-1/6"
//             >
//               <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
//                 <Image
//                   width={50}
//                   height={50}
//                   src="./images/brand/brand-08.svg"
//                   alt="Brand"
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-1/6"
//             >
//               <div className="h-[11px] w-[11px] rounded-full bg-[#FFDB26]"></div>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-1/6"
//             >
//               <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
//                 <Image
//                   width={50}
//                   height={50}
//                   src="./images/brand/brand-09.svg"
//                   alt="Brand"
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-1/6"
//             ></motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-1/6"
//             >
//               <div className="h-[15px] w-[15px] rounded-full bg-[#62E888]"></div>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-1/6"
//             >
//               <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
//                 <Image
//                   width={50}
//                   height={50}
//                   src="./images/brand/brand-10.svg"
//                   alt="Brand"
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-1/6"
//             >
//               <div className="h-[23px] w-[23px] rounded-full bg-[#EF5C00]"></div>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-1/6"
//             >
//               <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
//                 <Image
//                   width={50}
//                   height={50}
//                   src="./images/brand/brand-11.svg"
//                   alt="Brand"
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-1/6"
//             >
//               <div className="h-[15px] w-[15px] rounded-full bg-[#016BFF]"></div>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-1/6"
//             >
//               <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
//                 <Image
//                   width={50}
//                   height={50}
//                   src="./images/brand/brand-12.svg"
//                   alt="Brand"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Integration;



"use client";
import { motion } from "framer-motion";
import { Server, Database, ShieldCheck } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-[#F8F9FF] to-[#DEE7FF] dark:from-black dark:to-gray-900">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <SectionHeader
            headerInfo={{
              title: `INTEGRATIONS`,
              subtitle: `Seamlessly Integrate Pump 360 with Your Existing Systems`,
              description: `Pump 360 offers robust integrations with various platforms, ensuring smooth data synchronization and operational efficiency.`,
            }}
          />
        </div>

        <div className="relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full opacity-20">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-16">
            {[
              { icon: Server, color: "#016BFF", title: "Cloud Integration" },
              { icon: Database, color: "#62E888", title: "Database Management" },
              { icon: ShieldCheck, color: "#EF5C00", title: "Security Compliance" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center w-1/4 transform hover:scale-105 transition-all duration-500"
              >
                <div className="inline-block rounded-xl bg-white p-6 shadow-lg dark:bg-btndark">
                  <item.icon size={60} color={item.color} className="animate-pulse" />
                </div>
                <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;