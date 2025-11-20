// ============================================
// CORE ENUMS & CONSTANTS
// ============================================

export enum DependencyType {
  PAIRED = "paired",
  CRITICAL = "critical",
  STANDALONE = "standalone",
}

export enum OfferType {
  ATTRACTION = "attraction",
  UPSELL = "upsell",
  DOWNSELL = "downsell",
  CONTINUITY = "continuity",
}

export enum PricingModel {
  ONE_TIME = "one_time",
  MONTHLY = "monthly",
  ANNUAL = "annual",
  VOLUME_BASED = "volume_based",
}

// ============================================
// FEATURE TYPES
// ============================================

export interface Pricing {
  setup?: number; // One-time setup cost
  monthly?: number;
  annual?: number;
  volumeTiers?: VolumeTier[];
  currency: string;
}

export interface VolumeTier {
  minCalls: number;
  maxCalls: number | null; // null means unlimited
  price: number;
  label: string;
}

export interface Dependency {
  type: DependencyType;
  requiredFeatures?: string[];
  description: string;
}

export interface MarketComparison {
  competitors: string[];
  priceRange: string;
  positioning: string;
}

export interface Feature {
  id: string;
  name: string;
  category: "core" | "premium" | "automation" | "analytics" | "advanced";
  description: string;
  whatItIs: string;
  whyValuable: string;
  capabilities: string[];
  pricing: Pricing;
  dependency: Dependency;
  marketComparison: MarketComparison;
  hormoziApplication: string;
  standaloneSellable: boolean;
}

// ============================================
// PRICING TIER TYPES
// ============================================

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  setupCost: number;
  monthlyCost: number;
  isPopular: boolean;
  features: string[]; // Array of feature IDs
  includedFeatures: string[]; // Human-readable feature list
  excludedFeatures?: string[];
  callLimit?: number;
  description: string;
  cta: string;
  upgradePath?: string; // ID of tier to upgrade to
}

// ============================================
// OFFER TYPES
// ============================================

export interface BaseOffer {
  id: string;
  name: string;
  type: OfferType;
  description: string;
  pricing: Pricing;
  whenToPresent: string;
  targetAudience: string;
}

export interface DecoyOffer extends BaseOffer {
  type: OfferType.ATTRACTION;
  subType: "decoy";
  whatBuyerGets: string[];
  deliberatelyMissing: string[];
  limitations: string[];
  upgradeTarget: {
    offerId: string;
    pricing: Pricing;
    creditsApplied: number;
    timeframe: number; // days
  };
}

export interface BuyXGetYOffer extends BaseOffer {
  type: OfferType.ATTRACTION;
  subType: "buy_x_get_y";
  buyItems: Array<{
    item: string;
    price: number;
  }>;
  freeItems: Array<{
    item: string;
    value: number;
  }>;
  totalSavings: number;
}

export interface PayLessNowOffer extends BaseOffer {
  type: OfferType.ATTRACTION;
  subType: "pay_less_now";
  upfrontPayment: number;
  deferredPayment: number;
  waiverCondition: string;
  freeItems: Array<{
    item: string;
    value: number;
  }>;
}

export interface TrialOffer extends BaseOffer {
  type: OfferType.ATTRACTION;
  subType: "trial";
  trialPrice: number;
  deliveryTime: number; // days
  scope: string;
  deliverables: string[];
  continuationPaths: Array<{
    pathName: string;
    pricing: Pricing;
    credits: number;
  }>;
}

export interface UpsellOffer extends BaseOffer {
  type: OfferType.UPSELL;
  category: "capability" | "intelligence" | "pipeline" | "coaching";
  improvements: string[];
  roiJustification: string;
  creditIfUpgrade?: {
    upgradeToId: string;
    creditAmount: number;
    timeframe: number; // days
  };
}

export interface PaymentPlanDownsell extends BaseOffer {
  type: OfferType.DOWNSELL;
  subType: "payment_plan";
  originalPrice: number;
  paymentSchedule: Array<{
    amount: number;
    timing: string;
    milestone?: string;
  }>;
  keepsPriceIntact: boolean;
}

export interface FeatureDownsell extends BaseOffer {
  type: OfferType.DOWNSELL;
  subType: "feature_reduction";
  reducedPrice: number;
  removedFeatures: string[];
  includedFeatures: string[];
  upgradePath: {
    targetId: string;
    additionalCost: number;
  };
}

export interface ContinuityOffer extends BaseOffer {
  type: OfferType.CONTINUITY;
  category: "platform" | "campaign" | "maintenance" | "coaching";
  recurringPrice: number;
  billingCycle: "monthly" | "quarterly" | "annual";
  includedServices: string[];
  slas?: ServiceLevel[];
  minimumCommitment?: number; // months
}

export interface ServiceLevel {
  severity: "P1" | "P2" | "P3";
  description: string;
  responseTime: string;
  resolutionTarget: string;
}

// ============================================
// UNIFIED OFFER TYPE
// ============================================

export type Offer =
  | DecoyOffer
  | BuyXGetYOffer
  | PayLessNowOffer
  | TrialOffer
  | UpsellOffer
  | PaymentPlanDownsell
  | FeatureDownsell
  | ContinuityOffer;

// ============================================
// UPGRADE PATH & JOURNEY TYPES
// ============================================

export interface UpgradePath {
  fromId: string;
  toId: string;
  creditAmount: number;
  timeframedays: number;
  description: string;
}

export interface CustomerJourney {
  stage: string;
  recommendedOffers: string[]; // Array of offer IDs
  upgradePaths: UpgradePath[];
}

// ============================================
// SUPPORT & MAINTENANCE TYPES
// ============================================

export interface SupportTier {
  id: string;
  name: string;
  price: number; // per month
  coverage: string; // e.g., "Business hours" or "24/7"
  severityLevels: ServiceLevel[];
  includedChanges: {
    minor: number; // per month
    medium: number; // per month
  };
  additionalBenefits: string[];
}

// ============================================
// COACHING TYPES
// ============================================

export interface CoachingTier {
  id: string;
  name: string;
  price: number; // per month
  sessionFrequency: string;
  sessionDuration: number; // minutes
  includedServices: string[];
  minimumCommitment: number; // months
  targetAudience: string;
}

// ============================================
// DASHBOARD DATA TYPES
// ============================================

export interface ComparisonData {
  tierName: string;
  setup: number;
  monthly: number;
  features: Record<string, boolean>; // featureId -> included
  totalFirstYear: number;
}
