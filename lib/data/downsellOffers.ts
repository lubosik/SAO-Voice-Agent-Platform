import {
  PaymentPlanDownsell,
  FeatureDownsell,
  OfferType,
} from '@/types'

/**
 * Downsell Offers - Presented When Prospect Hesitates or Rejects
 * Source: SAO_Offers.pdf
 */

// ============================================
// PAYMENT PLAN DOWNSELLS (Keep Price Intact)
// ============================================

export const paymentPlanDownsells: PaymentPlanDownsell[] = [
  {
    id: 'complete-6month-payment',
    name: 'Complete: 6-Month Payment Plan',
    type: OfferType.DOWNSELL,
    subType: 'payment_plan',
    description: 'Spread £68k over 6 months with no interest',
    pricing: {
      setup: 0,
      monthly: 4500, // Plus payment installment
      currency: 'GBP',
    },
    originalPrice: 68000,
    paymentSchedule: [
      { amount: 11333, timing: 'Day 1', milestone: 'Contract signing' },
      { amount: 11333, timing: 'Month 2', milestone: 'After 30 days' },
      { amount: 11333, timing: 'Month 3', milestone: 'After 60 days' },
      { amount: 11333, timing: 'Month 4', milestone: 'After 90 days' },
      { amount: 11333, timing: 'Month 5', milestone: 'After 120 days' },
      { amount: 11335, timing: 'Month 6', milestone: 'After 150 days' },
    ],
    keepsPriceIntact: true,
    whenToPresent: 'When Complete is right fit but cash flow is concern',
    targetAudience: 'Qualified buyers with budget approval but cash flow constraints',
  },
  {
    id: 'complete-milestone-payment',
    name: 'Complete: Milestone-Based Payment',
    type: OfferType.DOWNSELL,
    subType: 'payment_plan',
    description: 'Pay as we hit agreed performance milestones',
    pricing: {
      setup: 0,
      monthly: 4500,
      currency: 'GBP',
    },
    originalPrice: 68000,
    paymentSchedule: [
      { amount: 20000, timing: 'Day 1', milestone: 'Contract signing & setup start' },
      { amount: 16000, timing: 'Day 14', milestone: 'First campaign live' },
      { amount: 16000, timing: 'Day 30', milestone: '100 calls completed' },
      { amount: 16000, timing: 'Day 60', milestone: '10 qualified meetings booked' },
    ],
    keepsPriceIntact: true,
    whenToPresent: 'When prospect wants to tie payment to results',
    targetAudience: 'Risk-averse buyers who need proof of performance',
  },
  {
    id: 'complete-quarterly-payment',
    name: 'Complete: Quarterly Payment (12 months)',
    type: OfferType.DOWNSELL,
    subType: 'payment_plan',
    description: 'Spread over year with quarterly payments',
    pricing: {
      setup: 0,
      monthly: 4500,
      currency: 'GBP',
    },
    originalPrice: 68000,
    paymentSchedule: [
      { amount: 17000, timing: 'Q1', milestone: 'Contract signing' },
      { amount: 17000, timing: 'Q2', milestone: 'After 90 days' },
      { amount: 17000, timing: 'Q3', milestone: 'After 180 days' },
      { amount: 17000, timing: 'Q4', milestone: 'After 270 days' },
    ],
    keepsPriceIntact: true,
    whenToPresent: 'For larger organizations with quarterly budget cycles',
    targetAudience: 'Enterprise buyers with quarterly budget allocation',
  },
  {
    id: 'foundation-4month-payment',
    name: 'Foundation: 4-Month Payment Plan',
    type: OfferType.DOWNSELL,
    subType: 'payment_plan',
    description: 'Spread £32k over 4 months',
    pricing: {
      setup: 0,
      monthly: 2400,
      currency: 'GBP',
    },
    originalPrice: 32000,
    paymentSchedule: [
      { amount: 8000, timing: 'Day 1', milestone: 'Contract signing' },
      { amount: 8000, timing: 'Month 2', milestone: 'After 30 days' },
      { amount: 8000, timing: 'Month 3', milestone: 'After 60 days' },
      { amount: 8000, timing: 'Month 4', milestone: 'After 90 days' },
    ],
    keepsPriceIntact: true,
    whenToPresent: 'When Foundation is right but upfront cost is barrier',
    targetAudience: 'SMBs with monthly budget constraints',
  },
  {
    id: 'foundation-results-payment',
    name: 'Foundation: Pay-As-Results',
    type: OfferType.DOWNSELL,
    subType: 'payment_plan',
    description: 'Pay more upfront, discount balance if we hit targets',
    pricing: {
      setup: 0,
      monthly: 2400,
      currency: 'GBP',
    },
    originalPrice: 32000,
    paymentSchedule: [
      { amount: 12000, timing: 'Day 1', milestone: 'Contract signing' },
      { amount: 10000, timing: 'Day 30', milestone: 'If 50 calls completed' },
      { amount: 10000, timing: 'Day 60', milestone: 'If 5 qualified meetings booked' },
    ],
    keepsPriceIntact: true,
    whenToPresent: 'When buyer wants performance guarantee',
    targetAudience: 'First-time AI voice buyers needing confidence',
  },
  {
    id: 'analyzer-monthly-payment',
    name: 'Analyzer: Monthly Payment (12 months)',
    type: OfferType.DOWNSELL,
    subType: 'payment_plan',
    description: 'Pay £1,250/month instead of £15k annual',
    pricing: {
      monthly: 1250,
      currency: 'GBP',
    },
    originalPrice: 15000,
    paymentSchedule: [
      { amount: 1250, timing: 'Monthly', milestone: 'Ongoing service' },
    ],
    keepsPriceIntact: true,
    whenToPresent: 'When annual commitment is too large',
    targetAudience: 'Teams wanting intelligence but hesitant on annual payment',
  },
]

// ============================================
// FEATURE REDUCTION DOWNSELLS
// ============================================

export const featureDownsells: FeatureDownsell[] = [
  {
    id: 'foundation-from-complete',
    name: 'Foundation (Downsell from Complete)',
    type: OfferType.DOWNSELL,
    subType: 'feature_reduction',
    description: 'Strip down to core features, cut price in half',
    pricing: {
      setup: 32000,
      monthly: 2400,
      currency: 'GBP',
    },
    reducedPrice: 32000,
    removedFeatures: [
      'Knowledge Base RAG',
      'Weekly Human Reports',
      'Real-Time Dashboard',
      'AI Lead Scoring',
      'Callback Scheduling',
      'Lead Recycling',
    ],
    includedFeatures: [
      'Premium Voice Engine + Playbook',
      'CRM Integration',
      'AI Call Analysis',
      'Multi-Attempt Retry Logic',
    ],
    upgradePath: {
      targetId: 'complete',
      additionalCost: 36000,
    },
    whenToPresent: 'When Complete is too expensive but buyer is qualified',
    targetAudience: 'Smaller teams or limited budgets who need core calling',
  },
  {
    id: 'insights-only-downsell',
    name: 'Insights-Only (No Calling)',
    type: OfferType.DOWNSELL,
    subType: 'feature_reduction',
    description: 'Just analytics and intelligence, no calling capability',
    pricing: {
      setup: 15000,
      monthly: 500, // Base tier, scales with volume
      currency: 'GBP',
    },
    reducedPrice: 15000,
    removedFeatures: [
      'Premium Voice Engine',
      'Calling capability',
      'CRM Integration',
      'Multi-Attempt Retry',
      'Callback Scheduling',
      'Lead Recycling',
    ],
    includedFeatures: [
      'AI Call Analysis on existing recordings',
      'Basic Dashboard',
      'Transcription service',
      'Sentiment analysis',
    ],
    upgradePath: {
      targetId: 'analyzer',
      additionalCost: 0, // Same price
    },
    whenToPresent: 'When buyer already has calling solution but needs intelligence',
    targetAudience: 'Teams with existing voice systems (Vapi, Bland, etc.)',
  },
  {
    id: 'voice-only-no-intelligence',
    name: 'Voice-Only (No Intelligence)',
    type: OfferType.DOWNSELL,
    subType: 'feature_reduction',
    description: 'Just calling, no analysis or reporting',
    pricing: {
      setup: 18000,
      monthly: 1200,
      currency: 'GBP',
    },
    reducedPrice: 18000,
    removedFeatures: [
      'AI Call Analysis',
      'Weekly Reports',
      'Dashboard',
      'Lead Scoring',
      'Advanced automation',
    ],
    includedFeatures: [
      'Premium Voice Engine + Playbook',
      'Basic CRM sync',
      'Multi-Attempt Retry',
    ],
    upgradePath: {
      targetId: 'foundation',
      additionalCost: 14000,
    },
    whenToPresent: 'When buyer ONLY wants calling and refuses intelligence value',
    targetAudience: 'Extremely price-sensitive buyers (rare, not recommended)',
  },
  {
    id: 'single-feature-standalone',
    name: 'Single Feature Standalone',
    type: OfferType.DOWNSELL,
    subType: 'feature_reduction',
    description: 'Buy just one feature à la carte',
    pricing: {
      setup: 8000, // Minimum single feature
      currency: 'GBP',
    },
    reducedPrice: 8000,
    removedFeatures: [
      'Full platform access',
      'Bundled features',
      'Platform support',
    ],
    includedFeatures: [
      'Single selected feature',
      'Basic setup and training',
      'Email support only',
    ],
    upgradePath: {
      targetId: 'foundation',
      additionalCost: 24000, // Varies by feature
    },
    whenToPresent: 'Last resort when buyer refuses packages but wants one specific capability',
    targetAudience: 'Buyers with very specific needs (e.g., only want lead scoring)',
  },
  {
    id: 'analyzer-lite',
    name: 'Analyzer Lite (Transcribe Only)',
    type: OfferType.DOWNSELL,
    subType: 'feature_reduction',
    description: 'Basic transcription without AI insights',
    pricing: {
      annual: 1200,
      currency: 'GBP',
    },
    reducedPrice: 1200,
    removedFeatures: [
      'Sentiment analysis',
      'Human intelligence reports',
      'Dashboard access',
      'Pattern recognition',
    ],
    includedFeatures: [
      'Basic call transcription',
      'CSV export',
      'Up to 500 calls/month',
    ],
    upgradePath: {
      targetId: 'analyzer',
      additionalCost: 13800,
    },
    whenToPresent: 'When buyer only wants transcription service',
    targetAudience: 'Teams with compliance needs or basic documentation requirements',
  },
]

// ============================================
// COMBINED EXPORT
// ============================================

export const downsellOffers = [
  ...paymentPlanDownsells,
  ...featureDownsells,
]
