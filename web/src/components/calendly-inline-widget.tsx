import { CALENDLY_INLINE_URL } from "@/lib/calendly";

type CalendlyInlineWidgetProps = {
  className?: string;
  title?: string;
};

export function CalendlyInlineWidget({ className, title = "Schedule a home tour" }: CalendlyInlineWidgetProps) {
  const iframeUrl = `${CALENDLY_INLINE_URL}&hide_gdpr_banner=1`;

  return (
    <div className={className} role="region" aria-label={title}>
      <iframe
        title={title}
        src={iframeUrl}
        className="w-full rounded-xl border border-[#d9e0e2] bg-white"
        style={{ minWidth: "320px", height: "700px" }}
        loading="lazy"
      />
    </div>
  );
}
