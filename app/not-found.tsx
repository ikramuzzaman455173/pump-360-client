import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Pum360",
  description:
    "The page you are looking for does not exist or has been moved. Return to the homepage for more information.",
  keywords: "404 error, page not found, fuel station software, Pum360",
};

const ErrorPage = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900 px-6">
      <div className="animate-fadeIn max-w-lg">
        <Image
          src="/images/shape/404.svg"
          alt="404 Error"
          className="mx-auto mb-8"
          width={400}
          height={400}
          priority
        />

        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-6xl">
          Oops! Page Not Found
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300 text-lg">
          The page you’re looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 text-white text-lg font-medium shadow-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          aria-label="Return to Home"
        >
          Return to Home
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;