/**
 * Server-rendered copy and verified place list for /amenities (crawlers + fallback map).
 * Only include businesses/locations with a verifiable name and address.
 */
import { ADDRESS_LINE } from "@/lib/site-contact";
import {
  CLUB_NAME,
  COMMUNITY_NAME,
  HIGHWAY_ACCESS,
  SALES_OFFICE,
  ZIP,
} from "@/lib/hyperlocal";

export const NEARBY_AMENITIES_PATH = "/amenities" as const;

export type FeaturedNearbyPlace = {
  name: string;
  schemaType:
    | "Place"
    | "Restaurant"
    | "Park"
    | "Hospital"
    | "GolfCourse"
    | "ShoppingCenter"
    | "Pharmacy"
    | "GroceryStore";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  category: string;
  summary: string;
};

/** Curated list used in fallback UI and ItemList schema */
export const FEATURED_NEARBY_PLACES: readonly FeaturedNearbyPlace[] = [
  {
    name: `${CLUB_NAME} at ${COMMUNITY_NAME}`,
    schemaType: "Place",
    streetAddress: "9560 Lapis Ln",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89143",
    category: "On-site recreation",
    summary:
      "Resort-style club at the Trilogy Sunstone sales center address—fitness, pools, pickleball, dining at Cooper's Kitchen, and resident programming.",
  },
  {
    name: "Skye Canyon Marketplace",
    schemaType: "ShoppingCenter",
    streetAddress: "Skye Canyon Park Dr area",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89143",
    category: "Shopping & dining",
    summary:
      "Retail and restaurant cluster in Skye Canyon—typically the first stop for groceries, pharmacy, and casual dining from Trilogy Sunstone.",
  },
  {
    name: "Smith's Food and Drug",
    schemaType: "GroceryStore",
    streetAddress: "9710 W Skye Canyon Park Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89166",
    category: "Grocery",
    summary:
      "Full-service supermarket in Skye Canyon Marketplace—common weekly grocery run for northwest Las Vegas 55+ buyers.",
  },
  {
    name: "Centennial Hills Hospital Medical Center",
    schemaType: "Hospital",
    streetAddress: "6900 N Durango Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    category: "Healthcare",
    summary:
      "Acute-care hospital in the Centennial Hills area—one of the major medical campuses northwest residents reference for emergencies and specialists.",
  },
  {
    name: "Red Rock Canyon National Conservation Area",
    schemaType: "Park",
    streetAddress: "1000 Scenic Loop Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89161",
    category: "Parks & outdoor recreation",
    summary:
      "Scenic desert conservation area with hiking and driving loops—a signature outdoor draw for Trilogy Sunstone and Skye Canyon homeowners.",
  },
  {
    name: "Lone Mountain Golf Club",
    schemaType: "GolfCourse",
    streetAddress: "10388 W Lone Mountain Pkwy",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89129",
    category: "Golf",
    summary:
      "Public golf course in northwest Las Vegas—buyers comparing active-adult communities often pair on-site pickleball with nearby public golf.",
  },
] as const;

export const AMENITIES_PAGE_FAQ = [
  {
    question: `What grocery stores are near ${COMMUNITY_NAME}?`,
    answer: `Smith's Food and Drug at Skye Canyon Marketplace (9710 W Skye Canyon Park Dr) is the closest full grocery run for most ${COMMUNITY_NAME} residents—about a few minutes from ${SALES_OFFICE} via Skye Canyon roads.`,
  },
  {
    question: `How far is ${COMMUNITY_NAME} from the Las Vegas Strip?`,
    answer: `${COMMUNITY_NAME} is in northwest Las Vegas (${ZIP}) off ${HIGHWAY_ACCESS}—approximately 20–25 miles to central Strip resorts depending on route and traffic; plan on roughly 30–45 minutes in typical daytime traffic (approximate).`,
  },
  {
    question: `Are there hospitals near ${COMMUNITY_NAME}?`,
    answer: `Centennial Hills Hospital Medical Center (6900 N Durango Dr) is a major acute-care campus northwest residents use; always confirm current ER and specialty services with the hospital before an emergency.`,
  },
  {
    question: `Where do residents shop and dine outside the community?`,
    answer: `Skye Canyon Marketplace clusters restaurants, Smith's grocery, and services a short drive from ${CLUB_NAME}; the Centennial Hills retail corridor along Durango and Elkhorn is the next tier for big-box and medical offices.`,
  },
  {
    question: `How far is ${COMMUNITY_NAME} from Harry Reid International Airport?`,
    answer: `From ${ADDRESS_LINE}, Harry Reid International Airport is roughly 25–30 miles southeast—often about 35–50 minutes by car depending on time of day (approximate).`,
  },
  {
    question: `What outdoor recreation is near ${COMMUNITY_NAME}?`,
    answer: `Red Rock Canyon National Conservation Area (Scenic Loop visitor access off Charleston Blvd) is the headline hike-and-drive destination; Mount Charleston and Lee Canyon are farther but popular for cooler-season day trips from northwest Las Vegas.`,
  },
  {
    question: `Is there golf near ${COMMUNITY_NAME}?`,
    answer: `On-site, ${COMMUNITY_NAME} emphasizes pickleball and club fitness; public golf options such as Lone Mountain Golf Club are a short northwest Las Vegas drive—confirm tee times and membership policies directly with the course.`,
  },
  {
    question: `How do I tour ${COMMUNITY_NAME} and see nearby amenities?`,
    answer: `Schedule a community tour through Dr. Jan Duffy's Trilogy Sunstone resource—we can pair a Cabochon Club visit with a Skye Canyon errand loop so you see daily-life distances, not just a model home.`,
  },
] as const;

export const AMENITIES_CATEGORY_SECTIONS = [
  {
    id: "dining",
    heading: "Dining near Trilogy Sunstone",
    body: `Inside the gates, Cooper's Kitchen at ${CLUB_NAME} anchors resident dining. For everyday meals out, Skye Canyon Marketplace restaurants and the Centennial Hills corridor along Durango and Elkhorn add casual chains and local spots without driving to Summerlin or the Strip.`,
  },
  {
    id: "parks",
    heading: "Parks & outdoor recreation",
    body: `Pickleball courts and resort pools live at ${CLUB_NAME}. Outside the community, Red Rock Canyon's Scenic Loop and trailheads are the signature desert experience; Tule Springs Fossil Beds and Skye Canyon Park add closer neighborhood open space for walks and events.`,
  },
  {
    id: "golf",
    heading: "Golf & active sports",
    body: `${COMMUNITY_NAME} buyers often prioritize pickleball and club fitness first. Public golf such as Lone Mountain Golf Club supplements on-site sports when you want a traditional 18-hole round in northwest Las Vegas.`,
  },
  {
    id: "healthcare",
    heading: "Healthcare & pharmacies",
    body: `Centennial Hills Hospital Medical Center on Durango is the anchor acute-care reference for northwest Las Vegas. Urgent care, primary care, and pharmacy options cluster along Durango, Elkhorn, and Skye Canyon Marketplace—confirm providers and hours before you move.`,
  },
  {
    id: "shopping",
    heading: "Shopping & errands",
    body: `Skye Canyon Marketplace covers weekly groceries at Smith's plus services and dining. Larger retail runs often continue to Centennial Hills or farther toward Summerlin/Downtown Summerlin when you want specialty shops or regional malls.`,
  },
  {
    id: "commute",
    heading: "Commute & regional access",
    body: `${COMMUNITY_NAME} sits off ${HIGHWAY_ACCESS} in zip ${ZIP}. Approximate drives: Las Vegas Strip 30–45 minutes, Harry Reid International Airport 35–50 minutes, Downtown Summerlin 25–35 minutes—always check a maps app for live traffic before you tour.`,
  },
] as const;
