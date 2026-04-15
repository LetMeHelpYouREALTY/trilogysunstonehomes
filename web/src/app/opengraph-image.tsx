import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_NAME_SHORT } from "@/lib/site-contact";

export const alt = `${SITE_NAME_SHORT} — ${SITE_NAME}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const line1 = SITE_NAME_SHORT;
  const line2 = SITE_NAME.includes(" | ")
    ? SITE_NAME.split(" | ").slice(1).join(" | ")
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #2563eb 45%, #172554 100%)",
          color: "white",
          padding: 48,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 52, fontWeight: 800, textAlign: "center", lineHeight: 1.15 }}>
          {line1}
        </div>
        {line2 ? (
          <div
            style={{
              marginTop: 16,
              fontSize: 40,
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.2,
              opacity: 0.98,
            }}
          >
            {line2}
          </div>
        ) : null}
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            fontWeight: 500,
            opacity: 0.95,
            textAlign: "center",
          }}
        >
          Las Vegas 55+ active adult community
        </div>
      </div>
    ),
    { ...size },
  );
}
