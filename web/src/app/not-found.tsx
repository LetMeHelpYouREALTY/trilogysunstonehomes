import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 py-16">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Page not found</h1>
      <p className="text-slate-600 mb-6 text-center max-w-md">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        Back to home
      </Link>
    </div>
  );
}
