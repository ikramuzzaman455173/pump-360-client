// import React from "react";
// import { Feature } from "@/types/feature";
// import { motion } from "framer-motion";

// const SingleFeature = ({ feature }: { feature: Feature }) => {
//   const { icon, title, description } = feature;

//   return (
//     <>
//       <motion.div
//         variants={{
//           hidden: {
//             opacity: 0,
//             y: -10,
//           },
//           visible: {
//             opacity: 1,
//             y: 0,
//           },
//         }}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
//       >
//         <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary text-white text-3xl">
//           {icon}
//         </div>
//         <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
//           {title}
//         </h3>
//         <p>{description}</p>
//       </motion.div>
//     </>
//   );
// };

// export default SingleFeature;



import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
          scale: 0.9,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        animate_top
        z-40
        rounded-2xl
        border border-transparent
        bg-white
        p-8
        shadow-lg
        transition-all
        hover:border-gray-400
        hover:shadow-2xl
        dark:bg-blacksection
        dark:hover:bg-hoverdark
        dark:hover:border-gray-700
        xl:p-14
      "
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="relative flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primaryho text-white text-4xl shadow-2xl"
      >
        {icon}
      </motion.div>
      <h3 className="mb-6 mt-8 text-2xl font-bold text-gray-900 dark:text-white xl:text-3xl">
        {title}
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default SingleFeature;
