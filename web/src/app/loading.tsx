export default function Loading() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[40vh] gap-4 py-16"
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="h-10 w-10 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" />
      <span className="sr-only">Loading page content</span>
    </div>
  );
}
