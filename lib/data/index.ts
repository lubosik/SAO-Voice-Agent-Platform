/**
 * SAO Voice Agent Platform - Complete Data Export
 *
 * This file aggregates ALL pricing, features, offers, and relationships
 * from the SAO_Features.pdf and SAO_Offers.pdf documents.
 *
 * Total Value Represented:
 * - 12 Individual Features: £150,000 if purchased separately
 * - Complete Package: £68,000 setup + £4,500/month (saves £82,000)
 * - Foundation Package: £32,000 setup + £2,400/month
 * - 20+ Attraction Offers, Upsells, Downsells, and Continuity Streams
 */

// Features
export { features } from './features'

// Pricing Tiers
export { pricingTiers, downsellTiers } from './pricingTiers'

// Attraction Offers
export {
  attractionOffers,
  decoyOffers,
  buyXGetYOffers,
  payLessNowOffers,
  trialOffers,
} from './attractionOffers'

// Upsell Offers
export { upsellOffers } from './upsellOffers'

// Downsell Offers
export {
  downsellOffers,
  paymentPlanDownsells,
  featureDownsells,
} from './downsellOffers'

// Continuity Offers
export {
  continuityOffers,
  platformContinuity,
  campaignContinuity,
  maintenanceContinuity,
  supportTiers,
  coachingTiers,
} from './continuityOffers'

// Upgrade Paths & Journeys
export {
  upgradePaths,
  customerJourneys,
  featureDependencies,
  offerPositioning,
} from './upgradePaths'

// ============================================
// QUICK REFERENCE SUMMARIES
// ============================================

export const pricingSummary = {
  complete: {
    setup: 68000,
    monthly: 4500,
    firstYearTotal: 122000,
    savings: 82000, // vs buying individually
    features: 10,
  },
  foundation: {
    setup: 32000,
    monthly: 2400,
    firstYearTotal: 60800,
    features: 4,
  },
  analyzer: {
    annual: 15000,
    monthly: 1250,
    features: 3,
  },
}

export const featureCounts = {
  core: 4, // Voice, CRM, Analysis, Knowledge Base
  premium: 8, // Reports, Retry, Callback, Recycling, Dashboard, Scoring, Voice Clone, Multilingual
  total: 12,
  totalValueIndividual: 150000,
}

export const offerCounts = {
  attraction: 8, // 2 decoys + 2 buy X get Y + 1 pay less now + 2 trials
  upsell: 12, // Capabilities + Intelligence + Pipeline + Coaching
  downsell: 11, // 6 payment plans + 5 feature reductions
  continuity: 9, // Platform + Campaign + Maintenance
  total: 40,
}

export const creditStructure = {
  description: 'Customers can upgrade within timeframes and receive credit',
  examples: [
    'Analyzer Trial (£3k) → Complete (£68k) with £3k credit in 60 days',
    'Foundation (£32k) → Complete (£68k) with £32k credit in 90 days',
    'Any feature upsell → Complete with feature cost credited in 60-90 days',
  ],
  policy: 'All credits expire if not used within specified timeframes',
}

export const supportOverview = {
  essential: { cost: 0, coverage: 'Business hours', response: '4 hours' },
  pro: { cost: 750, coverage: 'Extended hours', response: '2 hours' },
  enterprise: { cost: 2000, coverage: '24/7', response: '30 minutes' },
  missionCritical: { cost: 5000, coverage: '24/7 + named team', response: '15 minutes' },
}

export const coachingOverview = {
  quarterly: { cost: 750, frequency: 'Quarterly', duration: 60 },
  monthly: { cost: 1500, frequency: 'Monthly', duration: 90 },
  warRoom: { cost: 3000, frequency: 'Weekly', duration: 60 },
  executive: { cost: 6000, frequency: 'Bi-weekly + on-demand', duration: 90 },
}
