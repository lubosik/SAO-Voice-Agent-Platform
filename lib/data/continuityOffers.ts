import {
  ContinuityOffer,
  SupportTier,
  CoachingTier,
  OfferType,
} from '@/types'

/**
 * Continuity Offers - Ongoing Monthly Revenue Streams
 * Source: SAO_Offers.pdf
 */

// ============================================
// PLATFORM CONTINUITY (Monthly Retainers)
// ============================================

export const platformContinuity: ContinuityOffer[] = [
  {
    id: 'sao-complete-rolling',
    name: 'SAO Complete Rolling',
    type: OfferType.CONTINUITY,
    category: 'platform',
    description: 'Complete platform access on rolling monthly basis',
    pricing: {
      monthly: 4500,
      currency: 'GBP',
    },
    recurringPrice: 4500,
    billingCycle: 'monthly',
    includedServices: [
      'Full platform access (all Complete features)',
      'Unlimited calling',
      'Weekly human intelligence reports',
      'Real-time dashboard',
      'CRM integration maintenance',
      'Priority support (4-hour response)',
      'Quarterly strategy reviews',
    ],
    minimumCommitment: undefined,
    whenToPresent: 'After initial setup fee paid, this is the ongoing retainer',
    targetAudience: 'All Complete package customers',
  },
  {
    id: 'foundation-rolling',
    name: 'Foundation Rolling',
    type: OfferType.CONTINUITY,
    category: 'platform',
    description: 'Core features on rolling monthly basis',
    pricing: {
      monthly: 2400,
      currency: 'GBP',
    },
    recurringPrice: 2400,
    billingCycle: 'monthly',
    includedServices: [
      'Premium Voice Engine access',
      'CRM integration maintenance',
      'AI call analysis',
      'Multi-attempt retry logic',
      'Basic support (business hours)',
    ],
    minimumCommitment: undefined,
    whenToPresent: 'After initial Foundation setup fee paid',
    targetAudience: 'All Foundation package customers',
  },
  {
    id: 'human-insights-continuity',
    name: 'Human Insights (Standalone)',
    type: OfferType.CONTINUITY,
    category: 'platform',
    description: 'Weekly human analyst reports as standalone service',
    pricing: {
      monthly: 3000,
      currency: 'GBP',
    },
    recurringPrice: 3000,
    billingCycle: 'monthly',
    includedServices: [
      'Weekly human-compiled intelligence reports',
      'Strategic recommendations',
      'Objection pattern analysis',
      'Pitch optimization suggestions',
      'Competitive intelligence extraction',
    ],
    minimumCommitment: 3,
    whenToPresent: 'For customers with own calling setup who want strategic intelligence',
    targetAudience: 'Teams using other voice platforms (Vapi, Bland, Air.ai)',
  },
]

// ============================================
// CAMPAIGN LICENSING CONTINUITY
// ============================================

export const campaignContinuity: ContinuityOffer[] = [
  {
    id: 'campaign-scale-each',
    name: 'Additional Campaign License',
    type: OfferType.CONTINUITY,
    category: 'campaign',
    description: 'Per-campaign monthly fee for additional campaigns',
    pricing: {
      setup: 15000, // Per additional campaign
      monthly: 3200, // Per campaign
      currency: 'GBP',
    },
    recurringPrice: 3200,
    billingCycle: 'monthly',
    includedServices: [
      'Dedicated campaign playbook',
      'Separate tracking and reporting',
      'Campaign-specific CRM sync',
      'Independent optimization',
    ],
    whenToPresent: 'When customer wants to run multiple simultaneous campaigns',
    targetAudience: 'Multi-product or multi-market customers',
  },
  {
    id: 'campaign-scale-bundle',
    name: 'Campaign Scale Bundle (3 campaigns)',
    type: OfferType.CONTINUITY,
    category: 'campaign',
    description: 'Bundle pricing for multiple campaigns',
    pricing: {
      setup: 35000, // £10k savings vs individual
      monthly: 9600, // 3 × £3,200
      currency: 'GBP',
    },
    recurringPrice: 9600,
    billingCycle: 'monthly',
    includedServices: [
      'Three additional campaign licenses',
      'Shared dashboard view',
      'Cross-campaign analytics',
      'Bundle discount on setup',
    ],
    whenToPresent: 'For aggressive expansion across multiple products/markets',
    targetAudience: 'Enterprise or high-growth companies',
  },
]

// ============================================
// SUPPORT & MAINTENANCE TIERS
// ============================================

export const supportTiers: SupportTier[] = [
  {
    id: 'support-essential',
    name: 'Essential Support',
    price: 0, // Included in Foundation
    coverage: 'Business hours (9am-6pm UK time, Mon-Fri)',
    severityLevels: [
      {
        severity: 'P1',
        description: 'System down, no calling possible',
        responseTime: '4 hours',
        resolutionTarget: '8 hours',
      },
      {
        severity: 'P2',
        description: 'Major feature not working',
        responseTime: '8 hours',
        resolutionTarget: '24 hours',
      },
      {
        severity: 'P3',
        description: 'Minor issues, questions',
        responseTime: '24 hours',
        resolutionTarget: '72 hours',
      },
    ],
    includedChanges: {
      minor: 2, // per month
      medium: 0,
    },
    additionalBenefits: [
      'Email support',
      'Knowledge base access',
      'Monthly platform updates',
    ],
  },
  {
    id: 'support-pro',
    name: 'Pro Support',
    price: 750, // per month, additive to platform fee
    coverage: 'Extended hours (7am-10pm UK time, Mon-Sat)',
    severityLevels: [
      {
        severity: 'P1',
        description: 'System down, no calling possible',
        responseTime: '2 hours',
        resolutionTarget: '4 hours',
      },
      {
        severity: 'P2',
        description: 'Major feature not working',
        responseTime: '4 hours',
        resolutionTarget: '12 hours',
      },
      {
        severity: 'P3',
        description: 'Minor issues, questions',
        responseTime: '8 hours',
        resolutionTarget: '48 hours',
      },
    ],
    includedChanges: {
      minor: 4, // per month
      medium: 1,
    },
    additionalBenefits: [
      'Phone support',
      'Dedicated Slack channel',
      'Priority feature requests',
      'Bi-weekly check-ins',
    ],
  },
  {
    id: 'support-enterprise',
    name: 'Enterprise Support',
    price: 2000, // per month
    coverage: '24/7/365',
    severityLevels: [
      {
        severity: 'P1',
        description: 'System down, no calling possible',
        responseTime: '30 minutes',
        resolutionTarget: '2 hours',
      },
      {
        severity: 'P2',
        description: 'Major feature not working',
        responseTime: '2 hours',
        resolutionTarget: '6 hours',
      },
      {
        severity: 'P3',
        description: 'Minor issues, questions',
        responseTime: '4 hours',
        resolutionTarget: '24 hours',
      },
    ],
    includedChanges: {
      minor: 8, // per month
      medium: 3,
    },
    additionalBenefits: [
      'Dedicated account manager',
      'Direct engineer access',
      'Custom SLA agreements',
      'Weekly optimization reviews',
      'Priority development queue',
    ],
  },
  {
    id: 'support-mission-critical',
    name: 'Mission-Critical Support',
    price: 5000, // per month
    coverage: '24/7/365 with named team',
    severityLevels: [
      {
        severity: 'P1',
        description: 'System down, no calling possible',
        responseTime: '15 minutes',
        resolutionTarget: '1 hour',
      },
      {
        severity: 'P2',
        description: 'Major feature not working',
        responseTime: '1 hour',
        resolutionTarget: '3 hours',
      },
      {
        severity: 'P3',
        description: 'Minor issues, questions',
        responseTime: '2 hours',
        resolutionTarget: '12 hours',
      },
    ],
    includedChanges: {
      minor: 15, // per month
      medium: 6,
    },
    additionalBenefits: [
      'Named support team (3 people)',
      'Direct mobile numbers',
      'Custom development hours included',
      'Daily platform monitoring',
      'Proactive optimization',
      'White-glove onboarding for new features',
    ],
  },
]

// ============================================
// COACHING & ADVISORY TIERS
// ============================================

export const coachingTiers: CoachingTier[] = [
  {
    id: 'coaching-quarterly',
    name: 'Quarterly Check-In',
    price: 750,
    sessionFrequency: 'Quarterly (4x per year)',
    sessionDuration: 60,
    includedServices: [
      'Quarterly 60-minute strategy sessions',
      'Campaign performance review',
      'Offer optimization recommendations',
      'Market positioning guidance',
    ],
    minimumCommitment: 12, // months
    targetAudience: 'Self-sufficient teams wanting periodic expert input',
  },
  {
    id: 'coaching-monthly-strategy',
    name: 'Monthly Strategy Coaching',
    price: 1500,
    sessionFrequency: 'Monthly',
    sessionDuration: 90,
    includedServices: [
      'Monthly 90-minute deep-dive sessions',
      'Offer design and optimization',
      'Hormozi framework application',
      'Pitch and playbook refinement',
      'Email support between sessions',
    ],
    minimumCommitment: 6,
    targetAudience: 'Growing teams optimizing their offer stack',
  },
  {
    id: 'coaching-revenue-war-room',
    name: 'Revenue War-Room',
    price: 3000,
    sessionFrequency: 'Weekly',
    sessionDuration: 60,
    includedServices: [
      'Weekly 60-minute war-room sessions',
      'Rapid testing and iteration support',
      'Direct access between sessions (Slack)',
      'Campaign teardown and rebuilds',
      'Real-time optimization guidance',
    ],
    minimumCommitment: 3,
    targetAudience: 'High-performing teams doing £50k+/month revenue',
  },
  {
    id: 'coaching-executive-advisory',
    name: 'Executive Advisory',
    price: 6000,
    sessionFrequency: 'Bi-weekly + on-demand',
    sessionDuration: 90,
    includedServices: [
      'Bi-weekly 90-minute executive sessions',
      'Unlimited asynchronous access',
      'Strategic planning and forecasting',
      'Market expansion guidance',
      'M&A and scaling advisory',
      'Direct founder/CEO access',
    ],
    minimumCommitment: 12,
    targetAudience: 'Enterprise or PE-backed companies scaling aggressively',
  },
]

// ============================================
// MAINTENANCE CONTINUITY
// ============================================

export const maintenanceContinuity: ContinuityOffer[] = [
  {
    id: 'platform-maintenance',
    name: 'Platform Maintenance & Updates',
    type: OfferType.CONTINUITY,
    category: 'maintenance',
    description: 'Ongoing platform improvements and feature releases',
    pricing: {
      monthly: 0, // Included in all platform fees
      currency: 'GBP',
    },
    recurringPrice: 0,
    billingCycle: 'monthly',
    includedServices: [
      'Monthly platform updates',
      'New feature releases',
      'Security patches',
      'Performance optimization',
      'API maintenance',
      'Integration updates',
    ],
    whenToPresent: 'Included benefit, not standalone offer',
    targetAudience: 'All platform customers',
  },
  {
    id: 'custom-development-retainer',
    name: 'Custom Development Retainer',
    type: OfferType.CONTINUITY,
    category: 'maintenance',
    description: 'Monthly hours for custom development and integrations',
    pricing: {
      monthly: 4000, // 20 hours at £200/hour
      currency: 'GBP',
    },
    recurringPrice: 4000,
    billingCycle: 'monthly',
    includedServices: [
      '20 hours of development time per month',
      'Custom feature builds',
      'Bespoke integrations',
      'Workflow automation',
      'Rollover up to 10 hours/month',
    ],
    minimumCommitment: 3,
    whenToPresent: 'For enterprises needing ongoing custom work',
    targetAudience: 'Large enterprises with unique requirements',
  },
]

// ============================================
// COMBINED EXPORTS
// ============================================

export const continuityOffers = [
  ...platformContinuity,
  ...campaignContinuity,
  ...maintenanceContinuity,
]
