import { UpgradePath, CustomerJourney } from '@/types'

/**
 * Upgrade Paths & Credits
 * Source: SAO_Offers.pdf
 *
 * These define how customers can move between offers
 * and what credits they receive when upgrading
 */

// ============================================
// UPGRADE PATHS WITH CREDIT STRUCTURES
// ============================================

export const upgradePaths: UpgradePath[] = [
  // From Decoy Offers
  {
    fromId: 'analyzer-transcribe-export',
    toId: 'analyzer',
    creditAmount: 1200,
    timeframedays: 30,
    description: 'Upgrade from basic transcription to full Analyzer within 30 days',
  },
  {
    fromId: 'sao-dial-dump-lite',
    toId: 'foundation',
    creditAmount: 12000,
    timeframedays: 60,
    description: 'Upgrade from basic calling to Foundation within 60 days',
  },

  // From Trial Offers
  {
    fromId: 'analyzer-deep-dive',
    toId: 'analyzer',
    creditAmount: 3000,
    timeframedays: 30,
    description: 'Trial converts to annual Analyzer within 30 days',
  },
  {
    fromId: 'analyzer-deep-dive',
    toId: 'complete',
    creditAmount: 3000,
    timeframedays: 60,
    description: 'Trial converts to Complete within 60 days',
  },
  {
    fromId: 'analyzer-deep-dive',
    toId: 'human-insights',
    creditAmount: 3000,
    timeframedays: 30,
    description: 'Trial converts to Human Insights continuity',
  },
  {
    fromId: 'foundation-pilot',
    toId: 'foundation',
    creditAmount: 8000,
    timeframedays: 30,
    description: 'Pilot converts to full Foundation',
  },
  {
    fromId: 'foundation-pilot',
    toId: 'complete',
    creditAmount: 8000,
    timeframedays: 60,
    description: 'Pilot upgrades directly to Complete',
  },

  // From Foundation to Complete
  {
    fromId: 'foundation',
    toId: 'complete',
    creditAmount: 32000,
    timeframedays: 90,
    description: 'Foundation customers upgrading to Complete get full credit',
  },

  // From Downsells to Full Packages
  {
    fromId: 'foundation-downsell',
    toId: 'complete',
    creditAmount: 32000,
    timeframedays: 90,
    description: 'Foundation downsell customers can upgrade with credit',
  },
  {
    fromId: 'insights-only',
    toId: 'analyzer',
    creditAmount: 15000,
    timeframedays: 60,
    description: 'Insights-Only upgrades to full Analyzer',
  },
  {
    fromId: 'insights-only',
    toId: 'foundation',
    creditAmount: 15000,
    timeframedays: 90,
    description: 'Insights-Only adds calling capability',
  },
  {
    fromId: 'analyzer-lite',
    toId: 'analyzer',
    creditAmount: 1200,
    timeframedays: 30,
    description: 'Analyzer Lite upgrades to full Analyzer',
  },

  // From Analyzer to Complete
  {
    fromId: 'analyzer',
    toId: 'complete',
    creditAmount: 15000,
    timeframedays: 90,
    description: 'Analyzer customers adding calling capability',
  },

  // Individual Feature Upsells to Complete
  {
    fromId: 'upsell-knowledge-base',
    toId: 'complete',
    creditAmount: 12000,
    timeframedays: 60,
    description: 'Knowledge Base purchase credits toward Complete',
  },
  {
    fromId: 'upsell-callback-scheduling',
    toId: 'complete',
    creditAmount: 10000,
    timeframedays: 60,
    description: 'Callback Scheduling purchase credits toward Complete',
  },
  {
    fromId: 'upsell-lead-recycling',
    toId: 'complete',
    creditAmount: 20000,
    timeframedays: 90,
    description: 'Lead Recycling purchase credits toward Complete',
  },
  {
    fromId: 'upsell-weekly-reports',
    toId: 'complete',
    creditAmount: 22000,
    timeframedays: 90,
    description: 'Weekly Reports purchase credits toward Complete',
  },
  {
    fromId: 'upsell-dashboard',
    toId: 'complete',
    creditAmount: 12000,
    timeframedays: 60,
    description: 'Dashboard purchase credits toward Complete',
  },
  {
    fromId: 'upsell-ai-lead-scoring',
    toId: 'complete',
    creditAmount: 8000,
    timeframedays: 60,
    description: 'AI Lead Scoring purchase credits toward Complete',
  },

  // Single Features to Foundation
  {
    fromId: 'single-feature-standalone',
    toId: 'foundation',
    creditAmount: 8000, // Minimum feature price
    timeframedays: 60,
    description: 'Single feature purchases credit toward Foundation',
  },
]

// ============================================
// CUSTOMER JOURNEY STAGES
// ============================================

export const customerJourneys: CustomerJourney[] = [
  {
    stage: 'Cold Prospect (Awareness)',
    recommendedOffers: [
      'complete-now-earned-visibility', // Primary attraction
      'analyzer-deep-dive', // For skeptics
      'foundation-pilot', // For risk-averse
    ],
    upgradePaths: [
      {
        fromId: 'analyzer-deep-dive',
        toId: 'complete',
        creditAmount: 3000,
        timeframedays: 60,
        description: 'Prove value with trial, upgrade to full platform',
      },
      {
        fromId: 'foundation-pilot',
        toId: 'complete',
        creditAmount: 8000,
        timeframedays: 60,
        description: 'Start small, expand after seeing results',
      },
    ],
  },
  {
    stage: 'Price Objection',
    recommendedOffers: [
      'complete-6month-payment', // Spread cash impact
      'complete-deferred-setup', // Pay less now
      'foundation-from-complete', // Feature downsell
    ],
    upgradePaths: [
      {
        fromId: 'foundation-from-complete',
        toId: 'complete',
        creditAmount: 32000,
        timeframedays: 90,
        description: 'Start with Foundation, upgrade when seeing ROI',
      },
    ],
  },
  {
    stage: 'Active Customer (Foundation)',
    recommendedOffers: [
      'upsell-weekly-reports', // Add intelligence at 45 days
      'upsell-dashboard', // Add visibility at 30 days
      'upsell-knowledge-base', // When agent struggles with questions
      'upsell-callback-scheduling', // When manually booking meetings
    ],
    upgradePaths: [
      {
        fromId: 'foundation',
        toId: 'complete',
        creditAmount: 32000,
        timeframedays: 90,
        description: 'Natural progression as needs grow',
      },
    ],
  },
  {
    stage: 'Active Customer (Complete) - Scaling',
    recommendedOffers: [
      'upsell-additional-campaign', // After 60 days of success
      'upsell-campaign-scale-package', // For aggressive expansion
      'upsell-multilingual', // For international markets
      'coaching-revenue-war-room', // For high performers
    ],
    upgradePaths: [], // Already at top tier
  },
  {
    stage: 'Active Customer (Analyzer Only)',
    recommendedOffers: [
      'upsell-weekly-reports', // Add human intelligence
      'complete', // Add calling capability
    ],
    upgradePaths: [
      {
        fromId: 'analyzer',
        toId: 'complete',
        creditAmount: 15000,
        timeframedays: 90,
        description: 'Add calling to existing intelligence',
      },
    ],
  },
  {
    stage: 'Churn Risk (Low Usage)',
    recommendedOffers: [
      'coaching-monthly-strategy', // Help them succeed
      'downsell-to-insights-only', // Reduce commitment
      'foundation-from-complete', // Downgrade to keep them
    ],
    upgradePaths: [], // Focus on retention, not upgrades
  },
  {
    stage: 'Successful & Growing',
    recommendedOffers: [
      'support-enterprise', // Better support
      'coaching-revenue-war-room', // Strategic guidance
      'custom-development-retainer', // Custom builds
      'upsell-campaign-scale-package', // Multi-campaign expansion
    ],
    upgradePaths: [], // Already maximized, focus on expansion
  },
]

// ============================================
// FEATURE DEPENDENCIES FOR UPSELLING
// ============================================

export const featureDependencies = {
  'weekly-reports': {
    requires: ['ai-call-analysis'],
    naturalUpsellFrom: ['foundation'],
    presentAfterDays: 45,
    trigger: 'Customer has >1,000 calls analyzed',
  },
  'dashboard': {
    requires: [],
    naturalUpsellFrom: ['foundation', 'analyzer'],
    presentAfterDays: 30,
    trigger: 'Customer asks about campaign visibility',
  },
  'knowledge-base-rag': {
    requires: ['premium-voice-playbook'],
    naturalUpsellFrom: ['foundation'],
    presentAfterDays: 30,
    trigger: 'Agent struggles with complex questions (detected in transcripts)',
  },
  'callback-scheduling': {
    requires: ['premium-voice-playbook'],
    naturalUpsellFrom: ['foundation'],
    presentAfterDays: 30,
    trigger: 'Customer mentions manual follow-up for bookings',
  },
  'lead-recycling': {
    requires: ['premium-voice-playbook', 'crm-integration'],
    naturalUpsellFrom: ['foundation'],
    presentAfterDays: 60,
    trigger: 'Customer has >500 "not interested" leads',
  },
  'ai-lead-scoring': {
    requires: ['ai-call-analysis'],
    naturalUpsellFrom: ['foundation'],
    presentAfterDays: 45,
    trigger: 'Customer has human sales team handling leads',
  },
  'multilingual': {
    requires: ['premium-voice-playbook'],
    naturalUpsellFrom: ['foundation', 'complete'],
    presentAfterDays: 90,
    trigger: 'Customer mentions international markets or non-English leads',
  },
  'voice-cloning': {
    requires: ['premium-voice-playbook'],
    naturalUpsellFrom: ['foundation', 'complete'],
    presentAfterDays: 60,
    trigger: 'Customer concerned about sounding too AI or generic',
  },
}

// ============================================
// OFFER POSITIONING NOTES
// ============================================

export const offerPositioning = {
  complete: {
    positioning: 'Default recommendation for qualified buyers',
    priceAnchor: '£150,000 total if purchased individually',
    valueProof: '£16,800 in immediate bonuses',
    idealCustomer: 'Established businesses doing £500k+ annual revenue',
  },
  foundation: {
    positioning: 'Entry point for smaller teams or first-time AI buyers',
    priceAnchor: 'Complete at £68,000',
    valueProof: 'Core features that drive 80% of results',
    idealCustomer: 'Growing businesses £200k-£500k revenue',
  },
  analyzer: {
    positioning: 'For teams with existing voice solutions',
    priceAnchor: 'Complete at £68,000',
    valueProof: 'Add intelligence without replacing what works',
    idealCustomer: 'Vapi, Bland, Air.ai customers needing better insights',
  },
  decoyOffers: {
    positioning: 'Make real offers look better by comparison',
    usage: 'Present briefly, then contrast with real value',
    intention: 'Deliberately limited to create contrast',
  },
  trialOffers: {
    positioning: 'Proof mechanisms for skeptical buyers',
    usage: 'Low commitment to demonstrate value',
    intention: 'Convert skeptics through experience',
  },
  paymentPlans: {
    positioning: 'Remove cash flow objection while keeping price intact',
    usage: 'Present when buyer is qualified but cash-constrained',
    intention: 'Preserve value, spread payment',
  },
  featureDownsells: {
    positioning: 'Last resort to close deal at reduced scope',
    usage: 'Only after payment plans fail',
    intention: 'Get customer in the door for later upsells',
  },
}
