/**
 * Hyperlocal facts for Trilogy Sunstone — single source for page copy and schema.
 * Verify HOA/SID figures at contract; cite "as of" dates in published content.
 */
import { POSTAL_CODE, SITE_NAME_SHORT } from "@/lib/site-contact";

export const COMMUNITY_NAME = "Trilogy Sunstone";
export const COMMUNITY_NAME_ALT = "Trilogy at Sunstone";
export const MASTER_PLAN = "Sunstone";
export const BUILDER = "Shea Homes / Trilogy by Shea Homes";
export const AGE_RESTRICTION = "55+";
export const SALES_OFFICE = "9560 Lapis Ln, Las Vegas, NV 89143";
export const CLUB_NAME = "Cabochon Club";
export const ZIP = POSTAL_CODE;
export const AREA_LABEL = "Northwest Las Vegas";
export const HIGHWAY_ACCESS = "US-95, Kyle Canyon Rd. (Exit 96)";

export const NEARBY_LANDMARKS = [
  "Skye Canyon Marketplace",
  "Red Rock Canyon National Conservation Area",
  "Mount Charleston & Lee Canyon",
  "Tule Springs Fossil Beds National Monument",
  "Centennial Hills Hospital Medical Center",
] as const;

export const HOME_COLLECTIONS = [
  "Resort Collection",
  "Freedom 35",
  "Freedom 40",
  "Freedom 50",
  "Modern Collection (condos/townhomes)",
] as const;

export const COMPETING_COMMUNITIES = [
  "Sun City Summerlin",
  "Del Webb at North Ranch",
  "Regency at Summerlin",
  "Sun City Aliante",
  "Heritage at Stonebridge",
] as const;

/** Short geo line for hero subheads and metadata suffixes */
export const GEO_SUBHEAD = `${AREA_LABEL} · ${AGE_RESTRICTION} Active Adult · ${COMMUNITY_NAME_ALT}`;

/** Realtor positioning line — use on service-focused pages */
export const REALTOR_POSITIONING = `${SITE_NAME_SHORT} is Dr. Jan Duffy's dedicated Trilogy Sunstone real estate resource — buyer representation, resale and new construction guidance, and community tours in zip ${ZIP}.`;

/** Hyperlocal paragraph for resource and secondary pages */
export const LOCAL_CONTEXT_PARAGRAPH = `${COMMUNITY_NAME} is a staff-gated ${AGE_RESTRICTION} neighborhood inside the ${MASTER_PLAN} master plan in ${AREA_LABEL} (${ZIP}), built by ${BUILDER}. The sales center and ${CLUB_NAME} are at ${SALES_OFFICE}, with access via ${HIGHWAY_ACCESS}. Dr. Jan Duffy helps buyers and sellers navigate Shea Homes new construction, resale inventory, HOA layers, and the first-visit agent registration process.`;

/** Northwest lifestyle paragraph for guides and blog context */
export const LIFESTYLE_CONTEXT = `Daily errands run through Skye Canyon Marketplace (~2 minutes) and the Centennial Hills retail corridor (~15 minutes). Outdoor recreation toward Red Rock Canyon and Mount Charleston is a major draw for northwest Las Vegas 55+ buyers comparing ${COMMUNITY_NAME} to Summerlin and North Las Vegas alternatives.`;

/** SEO keyword cluster for metadata descriptions */
export const SEO_KEYWORDS =
  "Trilogy Sunstone homes for sale, Trilogy Sunstone realtor, Las Vegas 55+ community 89143, Shea Homes Trilogy Sunstone, Cabochon Club";

/** Standard hyperlocal section for resource library pages */
export const RESOURCE_LOCAL_SECTION = {
  heading: `Why this matters at ${COMMUNITY_NAME}`,
  body: [
    LOCAL_CONTEXT_PARAGRAPH,
    `Whether you are buying resale on Lapis Ln., selecting a Freedom Collection floor plan, or comparing ${COMMUNITY_NAME} HOA fees to Del Webb or Sun City options, local context changes every decision. Use this guide alongside our ${COMMUNITY_NAME} community page, buyers guide, and FAQ before scheduling a tour.`,
    LIFESTYLE_CONTEXT,
  ],
} as const;
