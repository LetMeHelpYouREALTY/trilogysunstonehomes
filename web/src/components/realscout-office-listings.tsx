import { REALSCOUT_AGENT_ENCODED_ID } from "@/lib/site-contact";

/**
 * RealScout web component markup — script is loaded once in root layout.
 */
export function RealScoutOfficeListings() {
  const html = `<realscout-office-listings agent-encoded-id="${REALSCOUT_AGENT_ENCODED_ID}" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF" price-min="500000" price-max="700000"></realscout-office-listings>`;
  return (
    <div
      className="realscout-wrapper w-full min-h-[400px] flex items-center justify-center rounded-lg bg-white shadow border border-slate-200"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
