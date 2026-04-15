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
      "55+ home buying guidance for Trilogy Sunstone and Las Vegas active adult communities with Dr. Jan Duffy.",
    h1: "55+ Home Buying Resources",
    intro:
      "Explore practical guidance for purchasing, financing, and living well in a 55+ community in Las Vegas, including Trilogy Sunstone.",
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
    ],
    related: ["/resources/trilogy-sunstone-homes-by-dr-jan-duffy-resources", "/buyers-guide", "/contact"],
  },
  {
    slug: ["berkshire-hathaway-home-services-resources"],
    title: "Berkshire Hathaway HomeServices Resources",
    description:
      "Berkshire Hathaway HomeServices buying and ownership resources for Trilogy Sunstone clients in Las Vegas.",
    h1: "Berkshire Hathaway HomeServices Resources",
    intro:
      "These resources help clients work confidently with a Berkshire Hathaway HomeServices-backed process from search to close.",
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
    ],
    related: ["/resources/berkshire-hathaway-home-services-resources/home-buyer-resources", "/resources/mortgage-calculator", "/contact"],
  },
  {
    slug: ["berkshire-hathaway-home-services-resources", "home-buyer-resources"],
    title: "Home Buyer Resources",
    description:
      "Home buyer resources for Trilogy Sunstone and Las Vegas buyers including prep, financing, and offer strategy.",
    h1: "Home Buyer Resources",
    intro:
      "Use this guide to understand the major decisions in your home purchase and avoid costly mistakes.",
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
    ],
    related: ["/buyers-guide", "/resources/five-step-mortgage-process", "/contact"],
  },
  {
    slug: ["trilogy-sunstone-homes-by-dr-jan-duffy-resources"],
    title: "Trilogy Sunstone Homes by Dr. Jan Duffy Resources",
    description:
      "Resource center for Trilogy Sunstone buyers working with Dr. Jan Duffy in Las Vegas, Nevada.",
    h1: "Trilogy Sunstone Homes by Dr. Jan Duffy Resources",
    intro:
      "Everything in one place for Trilogy Sunstone buyers: planning, financing, contracts, design, and move-in guidance.",
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
    ],
    related: ["/resources/trilogy-buying-resources-for-dr-jan-duffy-clients", "/resources/the-homebuyers-journey-with-dr-jan-duffy", "/contact"],
  },
  {
    slug: ["buying-a-trilogy-sunstone-new-home-with-dr-jan-duffy"],
    title: "Buying a Trilogy Sunstone New Home with Dr. Jan Duffy",
    description:
      "How to buy a new construction home at Trilogy Sunstone with a clear strategy from Dr. Jan Duffy.",
    h1: "Buying a Trilogy Sunstone New Home with Dr. Jan Duffy",
    intro:
      "A practical new-construction buying path for Trilogy Sunstone clients who want clarity on timing, pricing, and builder decisions.",
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
    ],
    related: ["/resources/the-dr-jan-duffy-homes-building-process", "/resources/secure-a-mortgage-with-partners", "/contact"],
  },
  {
    slug: ["trilogy-buying-resources-for-dr-jan-duffy-clients"],
    title: "Trilogy Buying Resources for Dr. Jan Duffy Clients",
    description:
      "Buyer resources for Dr. Jan Duffy clients purchasing in Trilogy Sunstone and nearby Las Vegas communities.",
    h1: "Trilogy Buying Resources for Dr. Jan Duffy Clients",
    intro:
      "These resources simplify each buying phase and help you stay confident from first showing to final walkthrough.",
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
    ],
    related: ["/resources/the-homebuyers-journey-with-dr-jan-duffy", "/resources/contract-terms", "/contact"],
  },
  {
    slug: ["the-homebuyers-journey-with-dr-jan-duffy"],
    title: "The Homebuyer’s Journey with Dr. Jan Duffy",
    description:
      "A clear homebuyer journey from planning and financing through closing with Dr. Jan Duffy.",
    h1: "The Homebuyer’s Journey with Dr. Jan Duffy",
    intro:
      "Follow this journey map to stay organized and make confident decisions at each stage of your purchase.",
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
    ],
    related: ["/buyers-guide", "/resources/five-step-mortgage-process", "/contact"],
  },
  {
    slug: ["home-ownership-with-dr-jan-duffy"],
    title: "Home Ownership with Dr. Jan Duffy",
    description:
      "Guidance for successful ownership after closing, from upkeep to long-term planning in Las Vegas.",
    h1: "Home Ownership with Dr. Jan Duffy",
    intro:
      "Homeownership success starts after closing. Use this guide to protect value and enjoy the lifestyle you purchased.",
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
    ],
    related: ["/resources/living-in-a-new-home", "/resources/contract-terms", "/contact"],
  },
  {
    slug: ["benefits-of-buying-new"],
    title: "Benefits of Buying New",
    description:
      "Discover the key benefits of buying new construction in Trilogy Sunstone and Las Vegas active-adult communities.",
    h1: "Benefits of Buying New",
    intro:
      "New construction can deliver design flexibility, modern efficiency, and lower early maintenance needs for 55+ buyers.",
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
    ],
    related: ["/resources/building-a-new-home", "/resources/choosing-a-floor-plan", "/contact"],
  },
  {
    slug: ["rent-vs-own"],
    title: "Rent vs Own",
    description:
      "Compare renting vs owning in Las Vegas with practical guidance for 55+ and Trilogy Sunstone buyers.",
    h1: "Rent vs Own",
    intro:
      "Use this framework to compare flexibility, costs, and long-term value before deciding whether to rent or buy.",
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
    ],
    related: ["/resources/mortgage-calculator", "/resources/the-best-loan-for-you", "/contact"],
  },
  {
    slug: ["secure-a-mortgage-with-partners"],
    title: "Secure a Mortgage with Partners",
    description:
      "How to secure a mortgage with trusted lending partners when buying in Trilogy Sunstone or Las Vegas.",
    h1: "Secure a Mortgage with Partners",
    intro:
      "A strong lending partnership helps you compare options, improve speed to close, and reduce financing stress.",
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
    ],
    related: ["/resources/five-step-mortgage-process", "/resources/the-best-loan-for-you", "/contact"],
  },
  {
    slug: ["five-step-mortgage-process"],
    title: "Five Step Mortgage Process",
    description:
      "A five-step mortgage process guide for Trilogy Sunstone and Las Vegas homebuyers.",
    h1: "Five Step Mortgage Process",
    intro:
      "Use this five-step framework to move from pre-approval to clear-to-close with fewer surprises.",
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
    ],
    related: ["/resources/secure-a-mortgage-with-partners", "/resources/mortgage-calculator", "/contact"],
  },
  {
    slug: ["the-best-loan-for-you"],
    title: "The Best Loan for You",
    description:
      "Compare loan options to identify the best mortgage fit for your goals and timeline.",
    h1: "The Best Loan for You",
    intro:
      "Choosing the right loan means balancing payment comfort, risk tolerance, and how long you plan to stay in the home.",
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
    ],
    related: ["/resources/mortgage-calculator", "/resources/five-step-mortgage-process", "/contact"],
  },
  {
    slug: ["mortgage-calculator"],
    title: "Mortgage Calculator Guide",
    description:
      "Mortgage calculator guidance for estimating payments on Trilogy Sunstone and Las Vegas homes.",
    h1: "Mortgage Calculator Guide",
    intro:
      "Use mortgage calculations to estimate principal, interest, taxes, insurance, and HOA impact before you make an offer.",
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
    ],
    related: ["/resources/the-best-loan-for-you", "/resources/rent-vs-own", "/contact"],
  },
  {
    slug: ["one-five-eleven-service-program-for-the-home-builder"],
    title: "1-5-11 Service Program for the Home Builder",
    description:
      "Understand the 1-5-11 builder service concept and what it means for long-term home care.",
    h1: "1-5-11 Service Program for the Home Builder",
    intro:
      "The 1-5-11 concept is a service-minded framework for long-term care milestones after move-in.",
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
    ],
    related: ["/resources/the-dr-jan-duffy-homes-building-process", "/resources/living-in-a-new-home", "/contact"],
  },
  {
    slug: ["building-resources"],
    title: "Building Resources",
    description:
      "Building resources for new construction buyers in Trilogy Sunstone and Las Vegas.",
    h1: "Building Resources",
    intro:
      "From lot selection to final walkthrough, these building resources help you navigate new-construction decisions with confidence.",
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
    ],
    related: ["/resources/building-a-new-home", "/resources/the-dr-jan-duffy-homes-building-process", "/contact"],
  },
  {
    slug: ["building-a-new-home"],
    title: "Building a New Home",
    description:
      "A practical guide to building a new home in Trilogy Sunstone and nearby Las Vegas communities.",
    h1: "Building a New Home",
    intro:
      "Building new gives you flexibility and control, but it requires sequencing decisions correctly from day one.",
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
    ],
    related: ["/resources/choosing-a-floor-plan", "/resources/designing-a-new-home-using-a-consultant", "/contact"],
  },
  {
    slug: ["the-dr-jan-duffy-homes-building-process"],
    title: "The Dr Jan Duffy Homes Building Process",
    description:
      "Step-by-step building process guidance for Dr. Jan Duffy clients buying new homes.",
    h1: "The Dr Jan Duffy Homes Building Process",
    intro:
      "A transparent process framework to keep your build organized, documented, and aligned with your target move date.",
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
    ],
    related: ["/resources/building-a-new-home", "/resources/one-five-eleven-service-program-for-the-home-builder", "/contact"],
  },
  {
    slug: ["choosing-a-floor-plan"],
    title: "Choosing a Floor Plan",
    description:
      "How to choose the right floor plan for comfort, accessibility, and long-term value.",
    h1: "Choosing A Floor Plan",
    intro:
      "The best floor plan supports your daily routines now and remains functional as your needs evolve.",
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
    ],
    related: ["/resources/20-must-have-features-in-your-new-construction-home", "/resources/designing-a-new-home-using-a-consultant", "/contact"],
  },
  {
    slug: ["designing-resources"],
    title: "Designing Resources",
    description:
      "Design-focused resources for selecting finishes, options, and design priorities in new construction.",
    h1: "Designing Resources",
    intro:
      "Use these design resources to make confident selections that balance style, budget, and long-term usability.",
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
    ],
    related: ["/resources/designing-a-new-home-using-a-consultant", "/resources/the-berkshire-hathaway-home-services-design-studio", "/contact"],
  },
  {
    slug: ["designing-a-new-home-using-a-consultant"],
    title: "Designing a New Home using a Consultant",
    description:
      "How to work with a design consultant when building a new home in Trilogy Sunstone.",
    h1: "Designing a New Home using a Consultant",
    intro:
      "A design consultant can streamline selections and keep your choices aligned with both lifestyle goals and budget.",
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
    ],
    related: ["/resources/designing-resources", "/resources/choosing-a-floor-plan", "/contact"],
  },
  {
    slug: ["20-must-have-features-in-your-new-construction-home"],
    title: "20 Must-Have Features In Your New Construction Home",
    description:
      "A practical list of must-have features to consider when purchasing new construction.",
    h1: "20 Must-Have Features In Your New Construction Home",
    intro:
      "This checklist helps you prioritize features that improve comfort, accessibility, efficiency, and long-term value.",
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
    ],
    related: ["/resources/designing-resources", "/resources/the-best-loan-for-you", "/contact"],
  },
  {
    slug: ["the-berkshire-hathaway-home-services-design-studio"],
    title: "The Berkshire Hathaway Home Services Design Studio",
    description:
      "Design studio guidance for selecting finishes and upgrades with confidence.",
    h1: "The Berkshire Hathway Home Servies Design Studio",
    intro:
      "Use this design studio framework to make selections efficiently while staying aligned with budget and timeline.",
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
    ],
    related: ["/resources/designing-a-new-home-using-a-consultant", "/resources/20-must-have-features-in-your-new-construction-home", "/contact"],
  },
  {
    slug: ["living-in-a-new-home"],
    title: "Living in a New Home",
    description:
      "Transition smoothly into new-home ownership with practical setup and maintenance guidance.",
    h1: "Living in a New Home",
    intro:
      "Your first year in a new home sets the foundation for maintenance habits, comfort, and long-term value.",
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
    ],
    related: ["/resources/home-ownership-with-dr-jan-duffy", "/resources/one-five-eleven-service-program-for-the-home-builder", "/contact"],
  },
  {
    slug: ["condos-townhomes"],
    title: "Condos & Townhomes",
    description:
      "Condos and townhomes guidance for Las Vegas and Trilogy-area buyers evaluating ownership options.",
    h1: "Condos & Townhomes",
    intro:
      "Compare condos and townhomes based on HOA structure, maintenance responsibilities, and lifestyle fit.",
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
    ],
    related: ["/resources/rent-vs-own", "/resources/contract-terms", "/contact"],
  },
  {
    slug: ["contract-terms"],
    title: "Contract Terms",
    description:
      "Contract term guidance for Las Vegas and Trilogy Sunstone buyers navigating offers and escrow.",
    h1: "Contract Terms",
    intro:
      "Clear contract terms protect your timeline, financing, and due diligence rights during a purchase.",
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
    ],
    related: ["/buyers-guide", "/resources/the-homebuyers-journey-with-dr-jan-duffy", "/contact"],
  },
  {
    slug: ["faqs"],
    title: "Resources FAQs",
    description:
      "Frequently asked questions related to Dr. Jan Duffy resource topics and the Trilogy Sunstone buying process.",
    h1: "FAQS",
    intro:
      "These supporting FAQs answer common process questions and complement the main site FAQ page.",
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
