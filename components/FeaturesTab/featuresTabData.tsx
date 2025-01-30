
// import { FeatureTab } from "@/types/featureTab";

// const featuresTabData: FeatureTab[] = [
//   {
//     id: "tabOne",
//     title: "Accounts / Finance",
//     desc1: `Manage financial transactions, track income and expenses, and generate reports for better financial insights.`,
//     desc2: `Automate bookkeeping, tax calculations, and budgeting to ensure smooth financial management.`,
//     image: "/images/features/features-light-01.png",
//     imageDark: "/images/features/features-dark-01.svg",
//   },
//   {
//     id: "tabTwo",
//     title: "Inventory & Sales Management",
//     desc1: `Monitor stock levels, track product movements, and manage sales efficiently with real-time data.`,
//     desc2: `Generate invoices, handle customer orders, and automate purchase management for seamless operations.`,
//     image: "/images/features/features-light-01.png",
//     imageDark: "/images/features/features-dark-01.svg",
//   },
//   {
//     id: "tabThree",
//     title: "Salient Features",
//     desc1: `User-friendly dashboard, multi-user access, role-based permissions, and real-time analytics for better decision-making.`,
//     desc2: `Integrated payment processing, cloud backup, and seamless third-party integrations to enhance efficiency.`,
//     image: "/images/features/features-light-01.png",
//     imageDark: "/images/features/features-dark-01.svg",
//   },
// ];

// export default featuresTabData;

import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Accounts / Finance",
    desc: [
      "Track income and expenses with detailed financial reports.",
      "Automate bookkeeping, tax calculations, and budgeting.",
      "Generate invoices, receipts, and payment records effortlessly.",
      "Manage payroll, employee salaries, and tax deductions.",
      "Gain financial insights with interactive dashboards and analytics."
    ],
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Inventory & Sales Management",
    desc: [
      "Real-time inventory tracking and automated stock updates.",
      "Barcode scanning for fast product management.",
      "Generate invoices, sales orders, and purchase orders instantly.",
      "Monitor low stock alerts and optimize restocking.",
      "Analyze sales performance with reports and dashboards."
    ],
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "Salient Features",
    desc: [
      "Intuitive user-friendly interface with easy navigation.",
      "Multi-user access with role-based permissions.",
      "Cloud backup and secure data storage for peace of mind.",
      "Seamless third-party integrations (payment gateways, CRM, etc.).",
      "Real-time analytics and reporting for better decision-making."
    ],
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default featuresTabData;
