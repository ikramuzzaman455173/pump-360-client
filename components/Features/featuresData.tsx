import { Feature } from "@/types/feature";
import { Gauge, Package, CreditCard, FileSpreadsheet, CalendarDays, TrendingDown, HandCoins, Banknote, ReceiptText, Book } from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Gauge size={32} />,
    title: "Meter Reading",
    description:
      "Accurately record fuel meter readings to monitor consumption and prevent discrepancies.",
  },
  {
    id: 2,
    icon: <Package size={32} />,
    title: "Stock Tracking",
    description:
      "Monitor stock levels in real-time, automate reordering, and prevent shortages or overstocking.",
  },
  {
    id: 3,
    icon: <CreditCard size={32} />,
    title: "Credit Sales",
    description:
      "Manage credit transactions, track outstanding payments, and ensure timely collections.",
  },
  {
    id: 4,
    icon: <FileSpreadsheet size={32} />,
    title: "Various Reports",
    description:
      "Generate customizable reports for sales, expenses, and operational insights to optimize business decisions.",
  },
  {
    id: 5,
    icon: <CalendarDays size={32} />,
    title: "Generate Statement",
    description:
      "Create detailed financial statements for customers, suppliers, and internal audits with ease.",
  },
  {
    id: 6,
    icon: <Book size={32} />,
    title: "Day Book",
    description:
      "Record daily financial transactions systematically for tracking income and expenses.",
  },
  {
    id: 7,
    icon: <TrendingDown size={32} />,
    title: "Day-wise Loss/Gain",
    description:
      "Analyze daily profit or loss trends to improve financial performance and decision-making.",
  },
  {
    id: 8,
    icon: <HandCoins size={32} />,
    title: "Receivable & Payable Loan Management",
    description:
      "Track loans, manage payables and receivables, and streamline financial obligations.",
  },
  {
    id: 9,
    icon: <Banknote size={32} />,
    title: "Cash & Bank Flow",
    description:
      "Monitor cash inflows and outflows, manage bank transactions, and maintain liquidity.",
  },
  {
    id: 10,
    icon: <ReceiptText size={32} />,
    title: "Purchase Invoice & Bill Register",
    description:
      "Maintain records of purchases, track supplier invoices, and manage billing efficiently.",
  },
];

export default featuresData;
