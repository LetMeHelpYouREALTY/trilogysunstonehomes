const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";
const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";

let loadPromise: Promise<void> | null = null;

function calendlyReady(): boolean {
  return typeof window !== "undefined" && Boolean(window.Calendly?.initPopupWidget);
}

/**
 * Loads Calendly widget CSS + JS once (for popup/badge APIs). Safe to call from any client component.
 */
export function loadCalendlyWidget(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }
  if (calendlyReady()) {
    return Promise.resolve();
  }
  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise((resolve, reject) => {
    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = WIDGET_CSS;
      document.head.appendChild(link);
    }

    const existing = document.querySelector(`script[src="${WIDGET_JS}"]`) as HTMLScriptElement | null;
    if (existing) {
      if (calendlyReady()) {
        resolve();
        return;
      }
      const onLoad = () => {
        if (calendlyReady()) resolve();
        else reject(new Error("Calendly API not available"));
      };
      existing.addEventListener("load", onLoad, { once: true });
      existing.addEventListener("error", () => reject(new Error("Calendly script failed")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = WIDGET_JS;
    script.async = true;
    script.onload = () => {
      if (calendlyReady()) resolve();
      else reject(new Error("Calendly API not available after load"));
    };
    script.onerror = () => reject(new Error("Calendly widget script failed to load"));
    document.body.appendChild(script);
  });

  return loadPromise;
}
