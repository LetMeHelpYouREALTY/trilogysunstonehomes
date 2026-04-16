"use client";

export default function AmenitiesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 py-16">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Something went wrong</h1>
      <p className="text-slate-600 mb-6 text-center max-w-md">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        Try again
      </button>
    </div>
  );
}
