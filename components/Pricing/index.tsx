// "use client";
// import Image from "next/image";
// import SectionHeader from "../Common/SectionHeader";

// const Pricing = () => {
//   return (
//     <>
//       {/* <!-- ===== Pricing Table Start ===== --> */}
//       <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
//         <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
//           {/* <!-- Section Title Start --> */}
//           <div className="animate_top mx-auto text-center">
//             <SectionHeader
//               headerInfo={{
//                 title: `PRICING PLANS`,
//                 subtitle: `Simple Pricing`,
//                 description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
//               }}
//             />
//           </div>
//           {/* <!-- Section Title End --> */}
//         </div>

//         <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
//           <div className="absolute -bottom-15 -z-1 h-full w-full">
//             <Image
//               fill
//               src="./images/shape/shape-dotted-light.svg"
//               alt="Dotted"
//               className="dark:hidden"
//             />
//           </div>
//           <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
//             {/* <!-- Pricing Item --> */}
//             <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
//               <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
//                 $10{" "}
//                 <span className="text-regular text-waterloo dark:text-manatee">
//                   /month
//                 </span>
//               </h3>
//               <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
//                 Small Pack
//               </h4>
//               <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

//               <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
//                 <ul>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     300 GB Storage
//                   </li>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     Unlimited Photos and Videos
//                   </li>
//                   <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
//                     Exclusive Support
//                   </li>
//                   <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
//                     Custom Branding Strategy
//                   </li>
//                 </ul>
//               </div>

//               <button
//                 aria-label="Get the Plan button"
//                 className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
//               >
//                 <span className="duration-300 group-hover/btn:pr-2">
//                   Get the Plan
//                 </span>
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 14 14"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* <!-- Pricing Item --> */}
//             <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
//               <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
//                 popular
//               </div>

//               <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
//                 $59{" "}
//                 <span className="text-regular text-waterloo dark:text-manatee">
//                   /month
//                 </span>
//               </h3>
//               <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
//                 Medium Pack
//               </h4>
//               <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

//               <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
//                 <ul>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     300 GB Storage
//                   </li>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     Unlimited Photos and Videos
//                   </li>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     Exclusive Support
//                   </li>
//                   <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
//                     Custom Branding Strategy
//                   </li>
//                 </ul>
//               </div>

//               <button
//                 aria-label="Get the Plan button"
//                 className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
//               >
//                 <span className="duration-300 group-hover/btn:pr-2">
//                   Get the Plan
//                 </span>
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 14 14"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* <!-- Pricing Item --> */}
//             <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
//               <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
//                 $189{" "}
//                 <span className="text-regular text-waterloo dark:text-manatee">
//                   /month
//                 </span>
//               </h3>
//               <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
//                 Large Pack
//               </h4>
//               <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

//               <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
//                 <ul>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     300 GB Storage
//                   </li>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     Unlimited Photos and Videos
//                   </li>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     Exclusive Support
//                   </li>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     Custom Branding Strategy
//                   </li>
//                 </ul>
//               </div>

//               <button
//                 aria-label="Get the Plan button"
//                 className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
//               >
//                 <span className="duration-300 group-hover/btn:pr-2">
//                   Get the Plan
//                 </span>
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 14 14"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <!-- ===== Pricing Table End ===== --> */}
//     </>
//   );
// };

// export default Pricing;

"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

// const Switch = ({ checked, onCheckedChange }) => {
//   return (
//     <label className="relative inline-flex items-center cursor-pointer">
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={onCheckedChange}
//         className="sr-only peer"
//       />
//       <div className="w-16 h-8 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-400 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:absolute after:top-1 after:left-1 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
//     </label>
//   );
// };

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Switch: React.FC<SwitchProps> = ({ checked, onCheckedChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onCheckedChange}
        className="sr-only peer"
      />
      <div className="w-16 h-8 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-400 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:absolute after:top-1 after:left-1 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
    </label>
  );
};


const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Starter",
      monthlyPrice: 15,
      yearlyPrice: 150,
      features: [
        "500 GB Storage",
        "24/7 Support",
        "Basic Analytics",
        "Email Notifications",
      ],
    },
    {
      name: "Professional",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "1 TB Storage",
        "Premium Support",
        "Advanced Analytics",
        "Custom Branding",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "Unlimited Storage",
        "Dedicated Support",
        "Full API Access",
        "Enterprise Security",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-100 to-blue-200 dark:from-gray-900 dark:to-gray-700 py-24">
      <div className="mx-auto max-w-6xl px-8 text-center">
        <SectionHeader
          headerInfo={{
            title: `INFO PUMP 360 PRICING PLANS`,
            subtitle: `Choose the Best Plan for Your Business`,
            description: `Flexible pricing options tailored to your needs, with modern features and dedicated support.`,
          }}
        />

        <div className="mt-10 flex items-center justify-center space-x-6">
          <span className="text-lg font-semibold text-gray-800 dark:text-white">Monthly</span>
          <Switch checked={isYearly} onCheckedChange={() => setIsYearly(!isYearly)} />
          <span className="text-lg font-semibold text-gray-800 dark:text-white">Yearly (Save 20%)</span>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="group relative rounded-lg border border-gray-200 bg-white dark:bg-gray-800 p-10 shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              <span className="text-xl font-medium text-gray-500">{isYearly ? "/year" : "/month"}</span>
            </h3>
            <h4 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">{plan.name}</h4>
            <p className="text-gray-600 dark:text-gray-300">Ideal for businesses of all sizes.</p>

            <div className="mt-6 border-t border-gray-300 dark:border-gray-600 pt-6">
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-400 flex items-center">
                    <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              aria-label="Get the Plan button"
              className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg font-medium text-lg transition-all hover:bg-indigo-700 dark:hover:bg-indigo-500"
            >
              Get the Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
