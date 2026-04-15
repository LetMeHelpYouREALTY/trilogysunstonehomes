import { CALENDLY_INLINE_URL } from "@/lib/calendly";

type CalendlyInlineWidgetProps = {
  className?: string;
  title?: string;
};

export function CalendlyInlineWidget({ className, title = "Schedule a home tour" }: CalendlyInlineWidgetProps) {
  return (
    <div className={className}>
      <div
        className="calendly-inline-widget rounded-xl border border-[#d9e0e2] bg-white"
        data-url={CALENDLY_INLINE_URL}
        style={{ minWidth: "320px", height: "700px" }}
        role="region"
        aria-label={title}
      />
    </div>
  );
}
