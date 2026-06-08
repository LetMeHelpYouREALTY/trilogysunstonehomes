import { ImageResponse } from "next/og";

/** Trilogy Sunstone brand tokens — keep aligned with globals.css */
export const OG_BRAND = {
  navy900: "#003a70",
  navy700: "#1c5087",
  teal500: "#40738d",
  green500: "#8bb63e",
  green600: "#789e35",
  surface: "#eaf0f2",
  ink: "#3d4544",
  white: "#ffffff",
} as const;

export const OG_SIZE = { width: 1200, height: 630 } as const;

/** Resolve TTF from Google Fonts CSS — Satori/ImageResponse requires TTF/OTF, not woff2. */
async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&display=swap`;
  const css = await fetch(cssUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load Google Fonts CSS: ${response.status} ${family}`);
    }
    return response.text();
  });

  const fontUrl =
    css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.ttf)\)/)?.[1] ??
    css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff)\)/)?.[1];
  if (!fontUrl) {
    throw new Error(`No TTF/woff URL found for ${family} ${weight}`);
  }

  return fetch(fontUrl).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load OG font: ${response.status} ${fontUrl}`);
    }
    return response.arrayBuffer();
  });
}

export async function loadOgFonts() {
  const [playfairBold, interSemi, interMedium] = await Promise.all([
    loadGoogleFont("Playfair Display", 700),
    loadGoogleFont("Inter", 600),
    loadGoogleFont("Inter", 500),
  ]);

  return {
    playfairBold,
    interSemi,
    interMedium,
    fontConfig: [
      { name: "Playfair Display", data: playfairBold, weight: 700 as const, style: "normal" as const },
      { name: "Inter", data: interSemi, weight: 600 as const, style: "normal" as const },
      { name: "Inter", data: interMedium, weight: 500 as const, style: "normal" as const },
    ],
  };
}

export type OgImageContent = {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  subline: string;
  badge: string;
  footer: string;
  domain: string;
};

export function renderTrilogyOgImage(
  content: OgImageContent,
  fonts: Awaited<ReturnType<typeof loadOgFonts>>["fontConfig"],
) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${OG_BRAND.navy900} 0%, ${OG_BRAND.navy700} 42%, ${OG_BRAND.teal500} 100%)`,
          color: OG_BRAND.white,
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "18%",
            width: 720,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(217,224,226,0.28) 0%, transparent 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,196,120,0.32) 0%, transparent 72%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "22px 40px",
            background: `linear-gradient(90deg, ${OG_BRAND.green600} 0%, ${OG_BRAND.green500} 100%)`,
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <span>Trilogy Sunstone · Las Vegas 55+</span>
          <span style={{ opacity: 0.95 }}>89143</span>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            padding: "28px 56px 24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 18,
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            {content.eyebrow}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 920,
            }}
          >
            <div
              style={{
                fontFamily: "Playfair Display",
                fontSize: 72,
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                textShadow: "0 8px 32px rgba(0,0,0,0.28)",
              }}
            >
              {content.headline}
            </div>
            {content.headlineAccent ? (
              <div
                style={{
                  fontFamily: "Playfair Display",
                  fontSize: 58,
                  fontWeight: 700,
                  lineHeight: 1.08,
                  marginTop: 4,
                  color: OG_BRAND.surface,
                  textShadow: "0 6px 24px rgba(0,0,0,0.22)",
                }}
              >
                {content.headlineAccent}
              </div>
            ) : null}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 26,
              maxWidth: 880,
              fontSize: 26,
              fontWeight: 500,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.94)",
            }}
          >
            {content.subline}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 22px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.28)",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {content.badge}
            </div>
          </div>
        </div>

        <svg
          viewBox="0 0 1200 220"
          width="1200"
          height="220"
          style={{
            position: "absolute",
            bottom: 52,
            left: 0,
            opacity: 0.55,
          }}
        >
          <path
            d="M0 220V130 L120 70 L210 118 L320 42 L430 96 L560 28 L690 88 L820 36 L940 102 L1080 58 L1200 112 V220Z"
            fill="rgba(0,0,0,0.22)"
          />
          <path
            d="M0 220V168 L180 108 L340 152 L500 92 L660 138 L820 86 L980 128 L1200 156 V220Z"
            fill="rgba(0,0,0,0.14)"
          />
        </svg>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 40px",
            background: "rgba(0,0,0,0.28)",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            fontSize: 17,
            fontWeight: 500,
            color: "rgba(255,255,255,0.92)",
            position: "relative",
            zIndex: 3,
          }}
        >
          <span>{content.footer}</span>
          <span style={{ fontWeight: 600 }}>{content.domain}</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts,
    },
  );
}
