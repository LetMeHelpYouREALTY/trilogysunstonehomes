import {
  AREA_LABEL,
  CLUB_NAME,
  COMMUNITY_NAME,
  HOME_COLLECTIONS,
  LOCAL_CONTEXT_PARAGRAPH,
  ZIP,
} from "@/lib/hyperlocal";

export type ResourcePage = {
  slug: string[];
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  related: string[]; // canonical paths
};

const resourcePages: ResourcePage[] = [
  {
    slug: ["55-plus"],
    title: "55+ Home Buying Resources",
    description:
      "55+ home buying guidance for Trilogy Sunstone (89143) and northwest Las Vegas active adult communities with Dr. Jan Duffy realtor services.",
    h1: "55+ Home Buying Resources",
    intro:
      `Explore practical guidance for purchasing, financing, and living well in a 55+ community in ${AREA_LABEL}—including age-qualified rules, HOA layers, and lifestyle fit at ${COMMUNITY_NAME} (${ZIP}). Dr. Jan Duffy provides buyer representation and community tours throughout the Sunstone master plan.`,
    sections: [
      {
        heading: "What makes 55+ buying different",
        body: [
          "Age-qualified communities include occupancy and lifestyle requirements that should be reviewed before contract.",
          "Many buyers prioritize low-maintenance design, social amenities, healthcare access, and long-term accessibility.",
        ],
      },
      {
        heading: "Planning your next move",
        body: [
          "Define goals early: downsizing, lock-and-leave convenience, or stronger lifestyle amenities.",
          "Use local market data and neighborhood tours to compare options before selecting a floor plan.",
        ],
      },
      {
        heading: `55+ buying at ${COMMUNITY_NAME}`,
        body: [
          `${COMMUNITY_NAME} is a staff-gated 55+ neighborhood in ${AREA_LABEL} (${ZIP}) where at least one household member must meet age requirements before closing.`,
          "Compare Trilogy Sunstone to Sun City Summerlin, Del Webb at North Ranch, and other Las Vegas alternatives using the same checklist: HOA dues, amenity access, and resale inventory—not just brochure amenities.",
          "Dr. Jan Duffy helps buyers verify occupancy rules, tour resale and new construction inventory, and register as your agent on the first visit to the sales center at 9560 Lapis Ln.",
        ],
      },
    ],
    related: ["/resources/trilogy-sunstone-homes-by-dr-jan-duffy-resources", "/buyers-guide", "/contact"],
  },
  {
    slug: ["berkshire-hathaway-home-services-resources"],
    title: "Berkshire Hathaway HomeServices Resources",
    description:
      "Berkshire Hathaway HomeServices buying and ownership resources for Trilogy Sunstone clients in northwest Las Vegas (89143) with Dr. Jan Duffy.",
    h1: "Berkshire Hathaway HomeServices Resources",
    intro:
      `These resources help clients work confidently with a Berkshire Hathaway HomeServices Nevada Properties-backed process from search to close—tailored for ${COMMUNITY_NAME} buyers in ${ZIP} and the broader ${AREA_LABEL} market.`,
    sections: [
      {
        heading: "Client-first process",
        body: [
          "Expect structured guidance, transparent communication, and step-by-step support through financing, offers, and closing.",
          "Resources are tailored for active-adult buyers and Las Vegas market realities.",
        ],
      },
      {
        heading: "How to use this library",
        body: [
          "Start with homebuyer fundamentals, then review financing and contract guidance relevant to your timeline.",
          "Schedule a planning conversation for personalized recommendations.",
        ],
      },
      {
        heading: `BHHS support for ${COMMUNITY_NAME} buyers`,
        body: [
          `Dr. Jan Duffy represents buyers through Berkshire Hathaway HomeServices Nevada Properties with local expertise in ${COMMUNITY_NAME}, Shea Homes new construction, and resale listings on Lapis Ln. and surrounding streets.`,
          "BHHS tools complement hyperlocal knowledge: comparable sales in 89143, contract review for builder and resale transactions, and coordination with lenders familiar with active-adult communities.",
          "Pair these resources with our Trilogy Sunstone community page and buyers guide before scheduling a tour at the sales office.",
        ],
      },
    ],
    related: ["/resources/berkshire-hathaway-home-services-resources/home-buyer-resources", "/resources/mortgage-calculator", "/contact"],
  },
  {
    slug: ["berkshire-hathaway-home-services-resources", "home-buyer-resources"],
    title: "Home Buyer Resources",
    description:
      "Home buyer resources for Trilogy Sunstone (89143) and northwest Las Vegas buyers—prep, financing, and offer strategy with Dr. Jan Duffy.",
    h1: "Home Buyer Resources",
    intro:
      `Use this guide to understand the major decisions in your home purchase at ${COMMUNITY_NAME} or elsewhere in ${AREA_LABEL} (${ZIP})—and avoid costly mistakes before you write an offer.`,
    sections: [
      {
        heading: "Before you shop",
        body: [
          "Establish budget, ideal location, and must-have home features before touring properties.",
          "Get pre-approved and gather required documents early so your offer is competitive.",
        ],
      },
      {
        heading: "From offer to closing",
        body: [
          "Review contingencies, inspection windows, and timeline milestones with your agent.",
          "Coordinate lender, title, and appraisal tasks to keep your closing on schedule.",
        ],
      },
      {
        heading: `Buyer prep for ${ZIP} inventory`,
        body: [
          `Before touring ${COMMUNITY_NAME}, confirm whether you are shopping Shea Homes new construction, resale inventory, or both—and register Dr. Jan Duffy as your agent on the first sales-center visit.`,
          "Northwest Las Vegas buyers often compare Skye Canyon Marketplace convenience (~2 minutes) with Centennial Hills healthcare and retail (~15 minutes) when setting location priorities.",
          "Bring a ranked must-have list: single-level flow, guest suite, pickleball access at Cabochon Club, and HOA budget comfort for master-plan and community layers.",
        ],
      },
    ],
    related: ["/buyers-guide", "/resources/five-step-mortgage-process", "/contact"],
  },
  {
    slug: ["trilogy-sunstone-homes-by-dr-jan-duffy-resources"],
    title: "Trilogy Sunstone Homes by Dr. Jan Duffy Resources",
    description:
      `Resource center for Trilogy Sunstone (89143) buyers working with Dr. Jan Duffy—northwest Las Vegas realtor services, financing, and move-in guidance.`,
    h1: "Trilogy Sunstone Homes by Dr. Jan Duffy Resources",
    intro:
      `Everything in one place for ${COMMUNITY_NAME} buyers in ${AREA_LABEL} (${ZIP}): planning, financing, Shea Homes contracts, design selections, and move-in guidance with Dr. Jan Duffy's dedicated realtor support.`,
    sections: [
      {
        heading: "Focused on Trilogy Sunstone clients",
        body: [
          "Content is tailored to 55+ buyer priorities, local market conditions, and builder-process realities.",
          "Use these pages as a roadmap from first tour to homeownership.",
        ],
      },
      {
        heading: "Next steps",
        body: [
          "Browse the buying and mortgage guides, then schedule time to build your personal game plan.",
          "Keep this resource center bookmarked as you move through each phase.",
        ],
      },
      {
        heading: `Your ${COMMUNITY_NAME} resource hub`,
        body: [
          LOCAL_CONTEXT_PARAGRAPH,
          `This library covers Freedom Collection and Resort Collection floor plans, Modern Collection townhomes, Cabochon Club amenities, and resale comparables across the Sunstone master plan.`,
          "Start with the buyers guide and community page, then drill into mortgage, building, and design resources matched to your timeline.",
        ],
      },
    ],
    related: ["/resources/trilogy-buying-resources-for-dr-jan-duffy-clients", "/resources/the-homebuyers-journey-with-dr-jan-duffy", "/contact"],
  },
  {
    slug: ["buying-a-trilogy-sunstone-new-home-with-dr-jan-duffy"],
    title: "Buying a Trilogy Sunstone New Home with Dr. Jan Duffy",
    description:
      `How to buy a new Shea Homes construction home at Trilogy Sunstone (89143) with a clear strategy from Dr. Jan Duffy in northwest Las Vegas.`,
    h1: "Buying a Trilogy Sunstone New Home with Dr. Jan Duffy",
    intro:
      `A practical new-construction buying path for ${COMMUNITY_NAME} clients in ${ZIP} who want clarity on Shea Homes timing, pricing, lot selection, and builder decisions—with Dr. Jan Duffy protecting your interests from first visit through closing.`,
    sections: [
      {
        heading: "Build your buying strategy",
        body: [
          "Clarify budget, lot preferences, and timeline before selecting a plan.",
          "Compare builder inventory opportunities and to-be-built options based on your priorities.",
        ],
      },
      {
        heading: "Protect your interests",
        body: [
          "Understand contract milestones, upgrade costs, and financing deadlines before you sign.",
          "Use regular check-ins to keep your builder process and closing aligned.",
        ],
      },
      {
        heading: "Shea Homes new construction at Sunstone",
        body: [
          `Shea Homes / Trilogy builds across the Sunstone master plan in ${AREA_LABEL} (${ZIP}) with quick-move-in homes and to-be-built lots on streets like Lapis Ln.`,
          "Register your agent on the first sales-center visit—Dr. Jan Duffy coordinates lot holds, design appointments, pre-drywall walkthroughs, and lender milestone dates tied to construction progress.",
          "Compare Resort Collection and Freedom Collection plans for single-level living, outdoor space, and Cabochon Club proximity before locking structural options.",
        ],
      },
    ],
    related: ["/resources/the-dr-jan-duffy-homes-building-process", "/resources/secure-a-mortgage-with-partners", "/contact"],
  },
  {
    slug: ["trilogy-buying-resources-for-dr-jan-duffy-clients"],
    title: "Trilogy Buying Resources for Dr. Jan Duffy Clients",
    description:
      `Buyer resources for Dr. Jan Duffy clients purchasing in Trilogy Sunstone (89143) and nearby northwest Las Vegas 55+ communities.`,
    h1: "Trilogy Buying Resources for Dr. Jan Duffy Clients",
    intro:
      `These resources simplify each buying phase for ${COMMUNITY_NAME} clients in ${ZIP} and help you stay confident from first showing at the sales center to final walkthrough on Lapis Ln.`,
    sections: [
      {
        heading: "Core buying tools",
        body: [
          "Use mortgage prep, contract terms, and timeline guides to reduce uncertainty.",
          "Prioritize resources based on your stage: planning, offer, escrow, or move-in.",
        ],
      },
      {
        heading: "Client support workflow",
        body: [
          "Pair each resource page with one action step to keep momentum.",
          "Schedule strategy calls at key milestones for faster decisions.",
        ],
      },
      {
        heading: "Client workflow in 89143",
        body: [
          `Dr. Jan Duffy clients receive step-by-step guidance tailored to ${COMMUNITY_NAME}: agent registration, inventory alerts for resale and new construction, and contract review before deposits.`,
          "Use the mortgage checklist and five-step process pages early—northwest Las Vegas 55+ inventory can move quickly when rates shift or quick-move-in homes release.",
          "Bookmark the community page and Cabochon Club amenity guide to align lifestyle priorities with floor-plan selection.",
        ],
      },
    ],
    related: ["/resources/the-homebuyers-journey-with-dr-jan-duffy", "/resources/contract-terms", "/contact"],
  },
  {
    slug: ["the-homebuyers-journey-with-dr-jan-duffy"],
    title: "The Homebuyer’s Journey with Dr. Jan Duffy",
    description:
      `A clear homebuyer journey from planning and financing through closing at Trilogy Sunstone (89143) with Dr. Jan Duffy realtor services in northwest Las Vegas.`,
    h1: "The Homebuyer’s Journey with Dr. Jan Duffy",
    intro:
      `Follow this journey map to stay organized and make confident decisions at each stage of your ${COMMUNITY_NAME} purchase in ${AREA_LABEL} (${ZIP})—from first tour to keys at closing.`,
    sections: [
      {
        heading: "Phase 1: Prepare",
        body: [
          "Define goals, budget, and location fit before reviewing inventory.",
          "Get financing pre-approval and build your must-have checklist.",
        ],
      },
      {
        heading: "Phase 2: Purchase and close",
        body: [
          "Tour homes, write a strategic offer, and manage due diligence.",
          "Complete inspections, appraisal, and title tasks through closing day.",
        ],
      },
      {
        heading: `Journey milestones at ${COMMUNITY_NAME}`,
        body: [
          "Phase 1 includes touring the sales center at 9560 Lapis Ln., comparing Freedom and Resort Collection plans, and modeling payments with master-plan and HOA dues in 89143.",
          "Phase 2 covers offer strategy on resale or new construction, Shea Homes design selections, pre-drywall inspection, and final walkthrough before recording.",
          "Dr. Jan Duffy provides written summaries after each milestone so lender, builder, and client stay aligned on northwest Las Vegas closing timelines.",
        ],
      },
    ],
    related: ["/buyers-guide", "/resources/five-step-mortgage-process", "/contact"],
  },
  {
    slug: ["home-ownership-with-dr-jan-duffy"],
    title: "Home Ownership with Dr. Jan Duffy",
    description:
      `Guidance for successful ownership after closing at Trilogy Sunstone (89143)—upkeep, HOA compliance, and long-term planning with Dr. Jan Duffy in northwest Las Vegas.`,
    h1: "Home Ownership with Dr. Jan Duffy",
    intro:
      `Homeownership success starts after closing at ${COMMUNITY_NAME}. Use this guide to protect value, navigate HOA layers in ${ZIP}, and enjoy the active-adult lifestyle you purchased in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "First 90 days in your new home",
        body: [
          "Track utility setup, warranty details, and maintenance priorities.",
          "Create a simple annual maintenance schedule to preserve home condition.",
        ],
      },
      {
        heading: "Long-term planning",
        body: [
          "Review insurance, tax, and renovation goals annually.",
          "Stay informed about neighborhood trends and resale positioning.",
        ],
      },
      {
        heading: `Ownership in the ${COMMUNITY_NAME} community`,
        body: [
          `${COMMUNITY_NAME} owners manage Shea Homes warranty items alongside master-plan and community HOA obligations—budget for both annual assessments and special assessments in 89143.`,
          "Register for Cabochon Club access, pickleball courts, and fitness programming early; amenity familiarity helps you settle in during the first 90 days.",
          "Dr. Jan Duffy remains available for resale positioning, neighbor referrals, and northwest Las Vegas market updates after you move in.",
        ],
      },
    ],
    related: ["/resources/living-in-a-new-home", "/resources/contract-terms", "/contact"],
  },
  {
    slug: ["benefits-of-buying-new"],
    title: "Benefits of Buying New",
    description:
      `Discover the benefits of buying new Shea Homes construction at Trilogy Sunstone (89143) and northwest Las Vegas 55+ communities with Dr. Jan Duffy.`,
    h1: "Benefits of Buying New",
    intro:
      `New construction at ${COMMUNITY_NAME} in ${ZIP} can deliver design flexibility, modern efficiency, and lower early maintenance needs for 55+ buyers comparing resale inventory in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "Modern features and efficiency",
        body: [
          "New homes typically include updated layouts, energy-saving systems, and current building standards.",
          "Buyers can often choose finishes and options that match their daily lifestyle.",
        ],
      },
      {
        heading: "Builder-backed confidence",
        body: [
          "Warranties and structured construction timelines provide more visibility than many resale transactions.",
          "A clear pre-drywall and final walkthrough process helps align expectations before move-in.",
        ],
      },
      {
        heading: `Why buy new at ${COMMUNITY_NAME}`,
        body: [
          `Shea Homes new builds in the Sunstone master plan (${ZIP}) include current building codes, selectable finishes, and warranty coverage that resale homes on Lapis Ln. may not offer.`,
          "Quick-move-in inventory lets you compare completed specs against to-be-built lots before committing—Dr. Jan Duffy helps evaluate which path fits your timeline and budget.",
          "New construction pairs well with Cabochon Club move-in: less deferred maintenance means more time for pickleball, pools, and northwest Las Vegas recreation.",
        ],
      },
    ],
    related: ["/resources/building-a-new-home", "/resources/choosing-a-floor-plan", "/contact"],
  },
  {
    slug: ["rent-vs-own"],
    title: "Rent vs Own",
    description:
      `Compare renting vs owning in northwest Las Vegas (89143) with practical guidance for 55+ and ${COMMUNITY_NAME} buyers from Dr. Jan Duffy.`,
    h1: "Rent vs Own",
    intro:
      `Use this framework to compare flexibility, costs, and long-term value before deciding whether to rent or buy at ${COMMUNITY_NAME} or elsewhere in ${AREA_LABEL} (${ZIP}).`,
    sections: [
      {
        heading: "Cost and control",
        body: [
          "Ownership can create stability in housing payments over time, while renting may offer short-term flexibility.",
          "Evaluate total monthly cost, maintenance responsibility, and expected time in the home.",
        ],
      },
      {
        heading: "Lifestyle fit",
        body: [
          "If you want personalization, community roots, and long-term planning, ownership may align better.",
          "If your timeline is uncertain, renting can provide breathing room before committing.",
        ],
      },
      {
        heading: `Rent vs own near ${COMMUNITY_NAME}`,
        body: [
          `Active-adult rentals are limited near ${COMMUNITY_NAME} (${ZIP}); most buyers choosing the Cabochon Club lifestyle purchase resale or new construction to access amenities and age-qualified community rules.`,
          "Ownership at Trilogy Sunstone includes HOA dues for master-plan and community layers—factor both into your comparison against renting in Skye Canyon or Centennial Hills.",
          "Dr. Jan Duffy models five-year cost scenarios with taxes, insurance, and HOA so northwest Las Vegas buyers make informed rent-vs-own decisions.",
        ],
      },
    ],
    related: ["/resources/mortgage-calculator", "/resources/the-best-loan-for-you", "/contact"],
  },
  {
    slug: ["secure-a-mortgage-with-partners"],
    title: "Secure a Mortgage with Partners",
    description:
      `How to secure a mortgage with trusted lending partners when buying at Trilogy Sunstone (89143) in northwest Las Vegas with Dr. Jan Duffy.`,
    h1: "Secure a Mortgage with Partners",
    intro:
      `A strong lending partnership helps ${COMMUNITY_NAME} buyers in ${ZIP} compare options, improve speed to close on Shea Homes timelines, and reduce financing stress in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "Build the right lender team",
        body: [
          "Compare responsiveness, transparency, and product range in addition to rate.",
          "Ask for scenario planning to understand best-case and conservative payment options.",
        ],
      },
      {
        heading: "Prepare your file early",
        body: [
          "Gather income, asset, and credit documents before active touring.",
          "Proactive underwriting reduces delays once your offer is accepted.",
        ],
      },
      {
        heading: "Lender coordination for 89143 purchases",
        body: [
          `Lenders familiar with ${COMMUNITY_NAME} understand new-construction draw schedules, HOA documentation for master-plan and community layers, and appraisal patterns in northwest Las Vegas.`,
          "Share your target payment range—including HOA, taxes, and insurance for 89143—before pre-approval so offers on Lapis Ln. resale or Shea quick-move-in homes are realistic.",
          "Dr. Jan Duffy connects clients with lending partners who have closed Trilogy Sunstone transactions and can meet builder milestone deadlines.",
        ],
      },
    ],
    related: ["/resources/five-step-mortgage-process", "/resources/the-best-loan-for-you", "/contact"],
  },
  {
    slug: ["five-step-mortgage-process"],
    title: "Five Step Mortgage Process",
    description:
      `A five-step mortgage process guide for Trilogy Sunstone (89143) and northwest Las Vegas homebuyers working with Dr. Jan Duffy.`,
    h1: "Five Step Mortgage Process",
    intro:
      `Use this five-step framework to move from pre-approval to clear-to-close on your ${COMMUNITY_NAME} purchase in ${ZIP}—with fewer surprises on Shea Homes or resale timelines.`,
    sections: [
      {
        heading: "The five steps",
        body: [
          "Step 1: Consultation and pre-approval. Step 2: Document collection and application.",
          "Step 3: Processing and underwriting. Step 4: Appraisal and final approval. Step 5: Closing and funding.",
        ],
      },
      {
        heading: "How to keep momentum",
        body: [
          "Respond quickly to lender requests and maintain consistent financial behavior during escrow.",
          "Coordinate contract dates with your lender to protect closing timelines.",
        ],
      },
      {
        heading: "Mortgage timing for Sunstone builds",
        body: [
          `New construction at ${COMMUNITY_NAME} ties loan milestones to Shea Homes phases—rate locks and appraisal orders must align with slab, frame, and completion dates in 89143.`,
          "Resale purchases on Lapis Ln. typically follow a faster escrow; confirm your lender can close within northwest Las Vegas market norms before removing loan contingencies.",
          "Dr. Jan Duffy syncs contract dates with your loan officer so underwriting does not delay your move-in or builder walkthrough appointments.",
        ],
      },
    ],
    related: ["/resources/secure-a-mortgage-with-partners", "/resources/mortgage-calculator", "/contact"],
  },
  {
    slug: ["the-best-loan-for-you"],
    title: "The Best Loan for You",
    description:
      `Compare loan options to identify the best mortgage fit for Trilogy Sunstone (89143) buyers—goals, timeline, and Dr. Jan Duffy realtor guidance in northwest Las Vegas.`,
    h1: "The Best Loan for You",
    intro:
      `Choosing the right loan for a ${COMMUNITY_NAME} home in ${ZIP} means balancing payment comfort, risk tolerance, HOA layers, and how long you plan to stay in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "Compare loan structures",
        body: [
          "Review fixed vs adjustable products, down-payment strategies, and reserve requirements.",
          "Consider total loan cost over your expected ownership timeline, not only initial payment.",
        ],
      },
      {
        heading: "Decision checklist",
        body: [
          "Confirm your target monthly payment range before selecting loan terms.",
          "Stress-test your payment against future lifestyle or retirement plans.",
        ],
      },
      {
        heading: "Loan fit for 55+ buyers in 89143",
        body: [
          `Many ${COMMUNITY_NAME} buyers use fixed-rate products for payment stability in retirement—model PITI plus master-plan and community HOA dues before selecting terms.`,
          "Down-payment strategies should leave reserves for design upgrades on new builds or immediate improvements on Lapis Ln. resale homes.",
          "Dr. Jan Duffy recommends stress-testing payments against Skye Canyon and Centennial Hills alternatives so your loan choice matches northwest Las Vegas long-term plans.",
        ],
      },
    ],
    related: ["/resources/mortgage-calculator", "/resources/five-step-mortgage-process", "/contact"],
  },
  {
    slug: ["mortgage-calculator"],
    title: "Mortgage Calculator Guide",
    description:
      `Mortgage calculator guidance for estimating payments on Trilogy Sunstone (89143) homes—including HOA layers—with Dr. Jan Duffy in northwest Las Vegas.`,
    h1: "Mortgage Calculator Guide",
    intro:
      `Use mortgage calculations to estimate principal, interest, taxes, insurance, and HOA impact on ${COMMUNITY_NAME} homes in ${ZIP} before you make an offer in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "What to include",
        body: [
          "Include rate assumptions, property taxes, homeowners insurance, HOA dues, and reserves.",
          "Run multiple scenarios for down payment and interest-rate changes.",
        ],
      },
      {
        heading: "Use results strategically",
        body: [
          "Use calculator outputs to define your price ceiling and comfort zone.",
          "Share your preferred payment range with your lender before final pre-approval.",
        ],
      },
      {
        heading: `Payment math for ${COMMUNITY_NAME}`,
        body: [
          `${COMMUNITY_NAME} buyers should include both master-plan and community HOA assessments in monthly payment models—89143 tax rates and insurance quotes vary by lot and plan.`,
          "Compare Resort Collection and Freedom Collection price points with identical down payments to see how HOA and Mello-Roos (if applicable) change affordability.",
          "Dr. Jan Duffy provides current HOA ranges and comparable closed sales so your calculator assumptions match northwest Las Vegas market reality—not generic national defaults.",
        ],
      },
    ],
    related: ["/resources/the-best-loan-for-you", "/resources/rent-vs-own", "/contact"],
  },
  {
    slug: ["one-five-eleven-service-program-for-the-home-builder"],
    title: "1-5-11 Service Program for the Home Builder",
    description:
      `Understand the 1-5-11 Shea Homes service program and what it means for long-term care at Trilogy Sunstone (89143) with Dr. Jan Duffy.`,
    h1: "1-5-11 Service Program for the Home Builder",
    intro:
      `The 1-5-11 concept is a service-minded framework for long-term care milestones after move-in at ${COMMUNITY_NAME} new construction in ${AREA_LABEL} (${ZIP}).`,
    sections: [
      {
        heading: "How service timelines help buyers",
        body: [
          "A phased service model can clarify expectations for warranty checks and maintenance timing.",
          "Document milestones to keep communication clear with builder support teams.",
        ],
      },
      {
        heading: "Ownership readiness",
        body: [
          "Track issues early and maintain records for any service requests.",
          "Pair builder guidance with independent maintenance planning for better results.",
        ],
      },
      {
        heading: "Shea Homes warranty at Sunstone",
        body: [
          `Shea Homes buyers at ${COMMUNITY_NAME} (${ZIP}) receive structured warranty checkpoints—use the 1-5-11 framework to schedule walkthroughs before each phase expires.`,
          "Log cosmetic and systems items during the first year; desert climate in northwest Las Vegas can affect stucco, landscaping, and HVAC performance differently than coastal markets.",
          "Dr. Jan Duffy helps new owners document warranty requests and distinguish builder items from HOA or homeowner maintenance responsibilities.",
        ],
      },
    ],
    related: ["/resources/the-dr-jan-duffy-homes-building-process", "/resources/living-in-a-new-home", "/contact"],
  },
  {
    slug: ["building-resources"],
    title: "Building Resources",
    description:
      `Building resources for new Shea Homes construction buyers at Trilogy Sunstone (89143) in northwest Las Vegas with Dr. Jan Duffy.`,
    h1: "Building Resources",
    intro:
      `From lot selection to final walkthrough, these building resources help you navigate new-construction decisions at ${COMMUNITY_NAME} in ${ZIP} with confidence.`,
    sections: [
      {
        heading: "Build smarter",
        body: [
          "Understand construction phases, change-order policies, and decision deadlines before contract.",
          "Prioritize choices that affect daily comfort, resale appeal, and long-term cost.",
        ],
      },
      {
        heading: "Stay on schedule",
        body: [
          "Use milestone checklists to align financing, inspections, and move planning.",
          "Ask for regular update points to reduce surprises near completion.",
        ],
      },
      {
        heading: `Construction phases at ${COMMUNITY_NAME}`,
        body: [
          `Shea Homes builds across the Sunstone master plan in ${AREA_LABEL} (${ZIP}) with defined phases: lot release, foundation, frame, mechanicals, drywall, and finish—each with decision cutoffs.`,
          "Coordinate pre-drywall inspections with your agent; northwest Las Vegas soil and grading conditions make this walkthrough especially important on sloped lots.",
          "Dr. Jan Duffy tracks construction updates and aligns your lender draw schedule with Shea milestone dates on Lapis Ln. and surrounding streets.",
        ],
      },
    ],
    related: ["/resources/building-a-new-home", "/resources/the-dr-jan-duffy-homes-building-process", "/contact"],
  },
  {
    slug: ["building-a-new-home"],
    title: "Building a New Home",
    description:
      `A practical guide to building a new Shea Homes home at Trilogy Sunstone (89143) and nearby northwest Las Vegas communities with Dr. Jan Duffy.`,
    h1: "Building a New Home",
    intro:
      `Building new at ${COMMUNITY_NAME} in ${ZIP} gives you flexibility and control, but it requires sequencing Shea Homes decisions correctly from your first visit to the sales center in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "Before construction starts",
        body: [
          "Select lot, plan, and base options with resale and lifestyle needs in mind.",
          "Review contract terms tied to pricing, completion windows, and optional upgrades.",
        ],
      },
      {
        heading: "During construction",
        body: [
          "Track milestone visits and verify key options before phase cutoffs.",
          "Coordinate lender updates and move planning in parallel with build progress.",
        ],
      },
      {
        heading: `New build decisions in the Sunstone master plan`,
        body: [
          `Lot orientation at ${COMMUNITY_NAME} affects afternoon sun, views toward Red Rock Canyon, and proximity to Cabochon Club—tour comparable completed homes on Lapis Ln. before choosing.`,
          "Structural options (casitas, extended patios, garage configuration) must be finalized before phase deadlines; finish selections follow at the design studio.",
          "Dr. Jan Duffy attends key walkthroughs and keeps your northwest Las Vegas move-in timeline realistic relative to construction backlog.",
        ],
      },
    ],
    related: ["/resources/choosing-a-floor-plan", "/resources/designing-a-new-home-using-a-consultant", "/contact"],
  },
  {
    slug: ["the-dr-jan-duffy-homes-building-process"],
    title: "The Dr Jan Duffy Homes Building Process",
    description:
      `Step-by-step building process guidance for Dr. Jan Duffy clients buying new homes at Trilogy Sunstone (89143) in northwest Las Vegas.`,
    h1: "The Dr Jan Duffy Homes Building Process",
    intro:
      `A transparent process framework to keep your ${COMMUNITY_NAME} build in ${ZIP} organized, documented, and aligned with your target move date in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "Process milestones",
        body: [
          "Pre-contract planning, contract review, design selections, construction updates, and closing prep.",
          "Each phase includes decision checkpoints to prevent rework and avoid delays.",
        ],
      },
      {
        heading: "Communication standards",
        body: [
          "Set expectations for status updates, lender coordination, and change request turnaround.",
          "Use written summaries after milestone meetings to keep everyone aligned.",
        ],
      },
      {
        heading: "Agent oversight on Shea builds",
        body: [
          `Dr. Jan Duffy's building process for ${COMMUNITY_NAME} clients includes contract review before deposit, lot and plan comparison across ${HOME_COLLECTIONS.join(", ")}, and attendance at pre-drywall and final walkthroughs.`,
          "Written milestone summaries go to you, your lender, and Shea contacts so 89143 closing dates stay synchronized with construction progress.",
          "This local oversight is especially valuable for out-of-state buyers relocating to northwest Las Vegas who cannot visit the site every week.",
        ],
      },
    ],
    related: ["/resources/building-a-new-home", "/resources/one-five-eleven-service-program-for-the-home-builder", "/contact"],
  },
  {
    slug: ["choosing-a-floor-plan"],
    title: "Choosing a Floor Plan",
    description:
      `How to choose the right Shea Homes floor plan at Trilogy Sunstone (89143)—comfort, accessibility, and value with Dr. Jan Duffy in northwest Las Vegas.`,
    h1: "Choosing A Floor Plan",
    intro:
      `The best floor plan at ${COMMUNITY_NAME} in ${ZIP} supports your daily routines now and remains functional as your needs evolve—whether you select from the Freedom or Resort collections in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "Function first",
        body: [
          "Evaluate bedroom placement, storage, kitchen workflow, and outdoor access.",
          "Prioritize layouts that support mobility and guest flexibility over purely cosmetic features.",
        ],
      },
      {
        heading: "Resale and adaptability",
        body: [
          "Choose broadly appealing layouts that hold value in future market conditions.",
          "Consider office/flex spaces and practical circulation for long-term comfort.",
        ],
      },
      {
        heading: `Freedom & Resort collections at ${COMMUNITY_NAME}`,
        body: [
          `Resort Collection plans emphasize open entertaining and indoor-outdoor flow near Cabochon Club; Freedom Collection plans (Freedom 35, 40, 50) target efficient single-level living with varied square footage in 89143.`,
          "Tour furnished models on Lapis Ln. to test kitchen workflow, primary-suite privacy, and guest-suite placement—not just square footage on paper.",
          "Dr. Jan Duffy compares plan premiums and resale history so your ${COMMUNITY_NAME} floor-plan choice balances lifestyle and northwest Las Vegas market appeal.",
        ],
      },
    ],
    related: ["/resources/20-must-have-features-in-your-new-construction-home", "/resources/designing-a-new-home-using-a-consultant", "/contact"],
  },
  {
    slug: ["designing-resources"],
    title: "Designing Resources",
    description:
      `Design-focused resources for selecting finishes and options at Trilogy Sunstone (89143) new construction with Dr. Jan Duffy in northwest Las Vegas.`,
    h1: "Designing Resources",
    intro:
      `Use these design resources to make confident selections at the Shea Homes design studio for your ${COMMUNITY_NAME} build in ${ZIP}—balancing style, desert-climate durability, and budget.`,
    sections: [
      {
        heading: "Design with purpose",
        body: [
          "Prioritize upgrades that improve day-to-day functionality and future resale appeal.",
          "Align materials and finishes with maintenance expectations and local climate realities.",
        ],
      },
      {
        heading: "Stay budget aware",
        body: [
          "Track upgrade costs in real time and compare package choices to avoid surprise overages.",
          "Separate must-haves from nice-to-haves before your design appointment.",
        ],
      },
      {
        heading: `Design studio prep for ${ZIP} builds`,
        body: [
          `Shea Homes design appointments for ${COMMUNITY_NAME} are scheduled after structural choices lock—bring inspiration photos and a tiered budget before visiting the studio near the sales center.`,
          "Northwest Las Vegas sun and low humidity favor durable flooring, lighter exterior palettes, and window treatments that reduce afternoon heat on west-facing lots.",
          "Dr. Jan Duffy reviews upgrade lists against comparable resale sales in 89143 so personalization does not outpace neighborhood expectations.",
        ],
      },
    ],
    related: ["/resources/designing-a-new-home-using-a-consultant", "/resources/the-berkshire-hathaway-home-services-design-studio", "/contact"],
  },
  {
    slug: ["designing-a-new-home-using-a-consultant"],
    title: "Designing a New Home using a Consultant",
    description:
      `How to work with a design consultant when building at Trilogy Sunstone (89143) with Dr. Jan Duffy realtor services in northwest Las Vegas.`,
    h1: "Designing a New Home using a Consultant",
    intro:
      `A design consultant can streamline Shea Homes selections at ${COMMUNITY_NAME} in ${ZIP} and keep your choices aligned with both lifestyle goals and budget in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "Prepare for design meetings",
        body: [
          "Bring inspiration, budget guardrails, and a ranked list of must-have upgrades.",
          "Ask for practical durability guidance for high-use spaces like kitchens and baths.",
        ],
      },
      {
        heading: "Make selection decisions",
        body: [
          "Confirm lead times and change deadlines before finalizing options.",
          "Document all chosen materials and finishes in a single selection summary.",
        ],
      },
      {
        heading: `Consultant workflow at Shea Sunstone`,
        body: [
          `Design consultants at the ${COMMUNITY_NAME} sales center help narrow countertop, cabinet, and flooring packages—arrive with measurements from your selected Freedom or Resort Collection plan.`,
          "Confirm which upgrades are structural vs finish-only; late changes on 89143 builds can delay northwest Las Vegas closing timelines.",
          "Dr. Jan Duffy can join design sessions to flag resale-sensitive choices and keep spending aligned with your pre-approved payment range.",
        ],
      },
    ],
    related: ["/resources/designing-resources", "/resources/choosing-a-floor-plan", "/contact"],
  },
  {
    slug: ["20-must-have-features-in-your-new-construction-home"],
    title: "20 Must-Have Features In Your New Construction Home",
    description:
      `A practical list of must-have features for Trilogy Sunstone (89143) new construction buyers with Dr. Jan Duffy in northwest Las Vegas.`,
    h1: "20 Must-Have Features In Your New Construction Home",
    intro:
      `This checklist helps ${COMMUNITY_NAME} buyers in ${ZIP} prioritize features that improve comfort, accessibility, efficiency, and long-term value in ${AREA_LABEL} new builds.`,
    sections: [
      {
        heading: "High-value feature categories",
        body: [
          "Focus on livability upgrades: storage, lighting, kitchen workflow, and low-threshold transitions.",
          "Include energy and technology considerations that reduce long-term operating costs.",
        ],
      },
      {
        heading: "Avoid common over-upgrading",
        body: [
          "Spend first on layout and systems before decorative finishes with lower resale impact.",
          "Balance personalization with broad buyer appeal if resale is part of your long-term plan.",
        ],
      },
      {
        heading: `Features that perform in 89143`,
        body: [
          `Popular ${COMMUNITY_NAME} upgrades include extended covered patios for northwest Las Vegas entertaining, soft-close cabinetry, LED lighting, and garage storage systems for lock-and-leave travel.`,
          "Accessibility features—zero-threshold showers, wider doorways, lever handles—align with 55+ buyer demand and resale appeal on Lapis Ln.",
          "Dr. Jan Duffy flags which upgrades Shea includes in base plans vs packages so you spend on items that matter in the Sunstone master plan market.",
        ],
      },
    ],
    related: ["/resources/designing-resources", "/resources/the-best-loan-for-you", "/contact"],
  },
  {
    slug: ["the-berkshire-hathaway-home-services-design-studio"],
    title: "The Berkshire Hathaway Home Services Design Studio",
    description:
      `Design studio guidance for Trilogy Sunstone (89143) finish selections with Dr. Jan Duffy—northwest Las Vegas new construction buyers.`,
    h1: "The Berkshire Hathaway HomeServices Design Studio",
    intro:
      `Use this design studio framework to make Shea Homes selections efficiently at ${COMMUNITY_NAME} in ${ZIP} while staying aligned with budget, desert-climate durability, and your northwest Las Vegas move timeline.`,
    sections: [
      {
        heading: "Studio session strategy",
        body: [
          "Arrive with a ranked selection plan and realistic budget limits.",
          "Ask for side-by-side comparisons of durability, maintenance, and long-term value.",
        ],
      },
      {
        heading: "Decision tracking",
        body: [
          "Capture all choices and upgrade totals before final sign-off.",
          "Confirm timelines for installation, substitutions, and change requests.",
        ],
      },
      {
        heading: `Studio sessions at ${COMMUNITY_NAME}`,
        body: [
          `The Berkshire Hathaway HomeServices design studio experience supports ${COMMUNITY_NAME} buyers selecting finishes for Resort and Freedom Collection plans—schedule after your lot and elevation are confirmed in 89143.`,
          "Bundle selections into tiers: structural lighting and electrical first, then surfaces, then decorative items with lower resale impact in northwest Las Vegas.",
          "Dr. Jan Duffy reviews your final upgrade total against payment models that include HOA, taxes, and insurance for your Lapis Ln. address.",
        ],
      },
    ],
    related: ["/resources/designing-a-new-home-using-a-consultant", "/resources/20-must-have-features-in-your-new-construction-home", "/contact"],
  },
  {
    slug: ["living-in-a-new-home"],
    title: "Living in a New Home",
    description:
      `Transition smoothly into new-home ownership at Trilogy Sunstone (89143) with Dr. Jan Duffy—setup, maintenance, and Cabochon Club life in northwest Las Vegas.`,
    h1: "Living in a New Home",
    intro:
      `Your first year in a new ${COMMUNITY_NAME} home in ${ZIP} sets the foundation for maintenance habits, Cabochon Club integration, and long-term value in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "Move-in success checklist",
        body: [
          "Set up utilities, warranties, and service contacts before move-in day.",
          "Walk every system and record notes for future maintenance tracking.",
        ],
      },
      {
        heading: "First-year ownership habits",
        body: [
          "Schedule seasonal maintenance and monitor high-use systems consistently.",
          "Keep documents organized for warranty and resale readiness.",
        ],
      },
      {
        heading: `Settling into ${COMMUNITY_NAME}`,
        body: [
          `Register for ${CLUB_NAME} amenities—pickleball, pools, fitness, and social clubs—during your first month so northwest Las Vegas recreation becomes part of your weekly routine.`,
          "Desert landscaping and irrigation at 89143 need seasonal attention; coordinate with HOA guidelines for front-yard standards on Lapis Ln. and nearby streets.",
          "Dr. Jan Duffy shares neighbor resources and local vendor referrals so your first year at Trilogy Sunstone feels connected, not overwhelming.",
        ],
      },
    ],
    related: ["/resources/home-ownership-with-dr-jan-duffy", "/resources/one-five-eleven-service-program-for-the-home-builder", "/contact"],
  },
  {
    slug: ["condos-townhomes"],
    title: "Condos & Townhomes",
    description:
      `Condos and townhomes guidance for Trilogy Sunstone Modern Collection buyers (89143) in northwest Las Vegas with Dr. Jan Duffy realtor services.`,
    h1: "Condos & Townhomes",
    intro:
      `Compare condos and townhomes at ${COMMUNITY_NAME}'s Modern Collection in ${ZIP} based on HOA structure, maintenance responsibilities, and 55+ lifestyle fit in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "Ownership and HOA considerations",
        body: [
          "Review HOA rules, dues, reserves, and included services before committing.",
          "Understand which structures and systems are owner vs HOA responsibility.",
        ],
      },
      {
        heading: "Fit for 55+ buyers",
        body: [
          "Low-maintenance living can align well with active-adult lifestyle priorities.",
          "Evaluate accessibility, parking, and guest convenience when comparing options.",
        ],
      },
      {
        heading: `Modern Collection at ${COMMUNITY_NAME}`,
        body: [
          `${COMMUNITY_NAME}'s Modern Collection (condos/townhomes) offers lower-maintenance footprints in 89143 with access to ${CLUB_NAME} amenities—ideal for travel-heavy northwest Las Vegas buyers.`,
          "Review exterior maintenance, parking assignment, and guest parking rules alongside master-plan HOA assessments before comparing to Freedom or Resort single-family plans.",
          "Dr. Jan Duffy tours Modern Collection inventory and explains resale dynamics relative to detached homes on Lapis Ln.",
        ],
      },
    ],
    related: ["/resources/rent-vs-own", "/resources/contract-terms", "/contact"],
  },
  {
    slug: ["contract-terms"],
    title: "Contract Terms",
    description:
      `Contract term guidance for Trilogy Sunstone (89143) buyers navigating Shea Homes and resale offers with Dr. Jan Duffy in northwest Las Vegas.`,
    h1: "Contract Terms",
    intro:
      `Clear contract terms protect your timeline, financing, and due diligence rights during a ${COMMUNITY_NAME} purchase in ${ZIP}—whether you buy new construction or resale in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "Key terms to review",
        body: [
          "Focus on contingencies, deposit timelines, repair requests, and closing dates.",
          "Confirm deadlines for inspections, loan milestones, and appraisal-related actions.",
        ],
      },
      {
        heading: "Negotiation strategy",
        body: [
          "A well-structured offer balances competitiveness with protection.",
          "Document all negotiated changes and confirm signatures on final addenda.",
        ],
      },
      {
        heading: `Contracts at ${COMMUNITY_NAME}`,
        body: [
          `Shea Homes purchase agreements for ${COMMUNITY_NAME} (${ZIP}) include construction timelines, upgrade deadlines, and deposit schedules that differ from standard northwest Las Vegas resale contracts.`,
          "Resale offers on Lapis Ln. should address HOA transfer fees, age-qualification verification, and any staff-gated community disclosure requirements.",
          "Dr. Jan Duffy reviews every addendum before you sign—protecting inspection, financing, and appraisal contingencies on 89143 transactions.",
        ],
      },
    ],
    related: ["/buyers-guide", "/resources/the-homebuyers-journey-with-dr-jan-duffy", "/contact"],
  },
  {
    slug: ["faqs"],
    title: "Resources FAQs",
    description:
      `Frequently asked questions about Dr. Jan Duffy resource topics and the Trilogy Sunstone (89143) buying process in northwest Las Vegas.`,
    h1: "Resources FAQs",
    intro:
      `These supporting FAQs answer common planning questions for ${COMMUNITY_NAME} buyers in ${ZIP} and complement the main site FAQ page—covering resources, financing, and Shea Homes workflows in ${AREA_LABEL}.`,
    sections: [
      {
        heading: "How this FAQ differs",
        body: [
          "This page focuses on resource-library questions and planning workflows.",
          "For broader Trilogy Sunstone community questions, use the main FAQ page.",
        ],
      },
      {
        heading: "Getting personalized answers",
        body: [
          "If your timeline or financing scenario is unique, schedule a direct planning call.",
          "You will receive actionable next steps tailored to your goals.",
        ],
      },
      {
        heading: `Resource FAQ context for ${ZIP}`,
        body: [
          `Common resource-library questions from ${COMMUNITY_NAME} buyers cover agent registration at the sales center, HOA payment estimates, Freedom vs Resort Collection differences, and lender timelines for 89143 closings.`,
          "For community-specific topics—Cabochon Club hours, age restrictions, SID assessments—visit the Trilogy Sunstone community page and main FAQ.",
          "Dr. Jan Duffy provides personalized answers by phone or Calendly when your scenario goes beyond these resource guides.",
        ],
      },
    ],
    related: ["/faq", "/resources/the-best-loan-for-you", "/contact"],
  },
];

type ResourceLookup = Record<string, ResourcePage>;

function keyFromSlug(slug: string[]) {
  return slug.join("/");
}

const resourceLookup: ResourceLookup = Object.fromEntries(
  resourcePages.map((page) => [keyFromSlug(page.slug), page]),
);

export function getAllResourcePages() {
  return resourcePages;
}

export function getResourcePageBySlug(slug: string[]) {
  return resourceLookup[keyFromSlug(slug)];
}

export function getAllResourcePaths() {
  return resourcePages.map((page) => `/resources/${page.slug.join("/")}`);
}
