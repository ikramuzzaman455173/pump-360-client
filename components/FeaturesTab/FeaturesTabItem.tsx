// import React from "react";
// import { FeatureTab } from "@/types/featureTab";
// import Image from "next/image";

// const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
//   const { title, desc1, desc2, image, imageDark } = featureTab;

//   return (
//     <>
//       <div className="flex items-center gap-8 lg:gap-19">
//         <div className="md:w-1/2">
//           <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
//             {title}
//           </h2>
//           <p className="mb-5">{desc1}</p>
//           <p className="w-11/12">{desc2}</p>
//         </div>
//         <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
//           <Image src={image} alt={title} fill className="dark:hidden" />
//           <Image
//             src={imageDark}
//             alt={title}
//             fill
//             className="hidden dark:block"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeaturesTabItem;


import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import { CheckSquare } from "lucide-react";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc, image, imageDark } = featureTab;

  return (
    <div className="flex items-center gap-8 lg:gap-19">
      <div className="md:w-1/2">
        <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
          {title}
        </h2>
        <ul className="space-y-3">
          {desc.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-800 dark:text-gray-300">
              <CheckSquare className="w-5 h-5 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
        <Image src={image} alt={title} fill className="dark:hidden" />
        <Image src={imageDark} alt={title} fill className="hidden dark:block" />
      </div>
    </div>
  );
};

export default FeaturesTabItem;


