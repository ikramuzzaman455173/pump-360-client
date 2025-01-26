import { Feature } from "@/types/feature";
import { ShoppingCart, BarChart, Shield, CreditCard, Users, FileText } from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <ShoppingCart size={32} />,
    title: "Point of Sale (POS)",
    description:
      "Efficiently manage sales transactions, track inventory, and generate real-time invoices with Pump 360's powerful POS system.",
  },
  {
    id: 2,
    icon: <BarChart size={32} />,
    title: "Financial Reporting",
    description:
      "Get detailed financial insights with customizable reports, ensuring better decision-making and compliance.",
  },
  {
    id: 3,
    icon: <Shield size={32} />,
    title: "Data Security",
    description:
      "Pump 360 ensures data security with role-based access, encryption, and secure cloud backups.",
  },
  {
    id: 4,
    icon: <CreditCard size={32} />,
    title: "Payment Processing",
    description:
      "Seamlessly process multiple payment methods, including credit/debit cards, mobile wallets, and bank transfers.",
  },
  {
    id: 5,
    icon: <Users size={32} />,
    title: "Customer Management",
    description:
      "Track customer interactions, manage loyalty programs, and provide personalized services with an integrated CRM.",
  },
  {
    id: 6,
    icon: <FileText size={32} />,
    title: "Inventory Management",
    description:
      "Keep track of stock levels, automate reordering, and prevent stockouts with real-time inventory management.",
  },
];

export default featuresData;
