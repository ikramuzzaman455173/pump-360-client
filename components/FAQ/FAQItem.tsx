import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqItem = ({ faq, activeFaq, handleFaqToggle }: {
  faq: any;
  activeFaq: number | null;
  handleFaqToggle: (id: number) => void;
}) => {
  const isActive = activeFaq === faq.id;

  return (
    <div className="h-auto border border-gray-300 dark:border-gray-700 rounded-xl shadow-md bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
      <button
        className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
        onClick={() => handleFaqToggle(faq.id)}
      >
        <span className="text-lg">{faq.question}</span>
        <motion.div animate={{ rotate: isActive ? 180 : 0 }}>
          {isActive ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden w-full h-[150px]"
          >
            <p className="px-6 py-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
