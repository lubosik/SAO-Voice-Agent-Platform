import { PricingTier } from '@/types'

/**
 * Main Pricing Tiers for SAO Voice Agent Platform
 * Source: SAO_Offers.pdf and SAO_Features.pdf
 */

export const pricingTiers: PricingTier[] = [
  // ============================================
  // FOUNDATION TIER
  // ============================================
  {
    id: 'foundation',
    name: 'Foundation',
    tagline: 'Essential AI calling with core intelligence',
    setupCost: 32000,
    monthlyCost: 2400,
    isPopular: false,
    features: [
      'premium-voice-playbook',
      'crm-integration',
      'ai-call-analysis',
      'multi-attempt-retry',
    ],
    includedFeatures: [
      'Premium Voice Engine + Playbook',
      'CRM Integration (HubSpot/Salesforce/Pipedrive)',
      'AI Call Analysis & Transcription',
      'Multi-Attempt Retry Logic',
      'Basic support (business hours)',
    ],
    excludedFeatures: [
      'No Weekly Human Reports',
      'No Dashboard visibility',
      'No Lead Scoring',
      'No Advanced automation',
    ],
    callLimit: undefined,
    description: 'Perfect for teams testing AI calling or running focused campaigns under 1,000 calls/month',
    cta: 'Start with Foundation',
    upgradePath: 'complete',
  },

  // ============================================
  // COMPLETE TIER (Most Popular)
  // ============================================
  {
    id: 'complete',
    name: 'Complete',
    tagline: 'Full-featured voice agent with human intelligence',
    setupCost: 68000,
    monthlyCost: 4500,
    isPopular: true,
    features: [
      'premium-voice-playbook',
      'crm-integration',
      'ai-call-analysis',
      'knowledge-base-rag',
      'weekly-reports',
      'multi-attempt-retry',
      'callback-scheduling',
      'lead-recycling',
      'dashboard',
      'ai-lead-scoring',
    ],
    includedFeatures: [
      'Everything in Foundation',
      'Knowledge Base RAG',
      'Weekly Human-Compiled Reports',
      'Real-Time Dashboard',
      'AI Lead Scoring',
      'Callback Scheduling + Calendar Integration',
      'Lead Recycling & Nurture Sequences',
      'Priority support (4-hour response)',
      'Quarterly strategy reviews',
    ],
    callLimit: undefined,
    description: 'The complete package for serious sales teams. Most popular for scaling revenue generation.',
    cta: 'Get Complete Access',
    upgradePath: undefined,
  },

  // ============================================
  // ANALYZER TIER (Annual)
  // ============================================
  {
    id: 'analyzer',
    name: 'Analyzer',
    tagline: 'Intelligence-only for existing voice systems',
    setupCost: 15000,
    monthlyCost: 1250, // £15,000/year = £1,250/month
    isPopular: false,
    features: [
      'ai-call-analysis',
      'weekly-reports',
      'dashboard',
    ],
    includedFeatures: [
      'AI Call Analysis on your existing recordings',
      'Weekly Human-Compiled Intelligence Reports',
      'Dashboard access for insights',
      'Transcription and sentiment analysis',
      'Works with any voice system',
    ],
    excludedFeatures: [
      'No calling capability',
      'No CRM integration',
      'No automation features',
    ],
    callLimit: undefined,
    description: 'Perfect for teams with existing voice agents who need better intelligence and reporting.',
    cta: 'Add Intelligence Layer',
    upgradePath: 'complete',
  },

  // ============================================
  // HUMAN INSIGHTS CONTINUITY
  // ============================================
  {
    id: 'human-insights',
    name: 'Human Insights',
    tagline: 'Ongoing human analyst support',
    setupCost: 0,
    monthlyCost: 3000,
    isPopular: false,
    features: [
      'weekly-reports',
    ],
    includedFeatures: [
      'Weekly human-compiled intelligence reports',
      'Strategic recommendations',
      'Objection pattern analysis',
      'Pitch optimization suggestions',
      'Competitive intelligence extraction',
    ],
    callLimit: undefined,
    description: 'Standalone continuity for teams who want ongoing strategic intelligence on their calls.',
    cta: 'Get Human Insights',
    upgradePath: undefined,
  },
]

/**
 * Feature Downsell Tiers
 * These are reduced-feature versions offered during downsell sequences
 */
export const downsellTiers: PricingTier[] = [
  {
    id: 'foundation-downsell',
    name: 'Foundation (Downsell)',
    tagline: 'Reduced feature set for budget-conscious buyers',
    setupCost: 32000,
    monthlyCost: 2400,
    isPopular: false,
    features: [
      'premium-voice-playbook',
      'crm-integration',
      'ai-call-analysis',
      'multi-attempt-retry',
    ],
    includedFeatures: [
      'Premium Voice Engine + Playbook',
      'CRM Integration',
      'AI Call Analysis',
      'Multi-Attempt Retry Logic',
    ],
    excludedFeatures: [
      'No Weekly Reports',
      'No Dashboard',
      'No Lead Scoring',
      'No Advanced Features',
    ],
    description: 'Entry-level package with core functionality',
    cta: 'Accept Foundation',
    upgradePath: 'complete',
  },
  {
    id: 'insights-only',
    name: 'Insights-Only',
    tagline: 'Analytics without calling',
    setupCost: 15000,
    monthlyCost: 500, // Base tier, can scale to £1,500
    isPopular: false,
    features: [
      'ai-call-analysis',
      'dashboard',
    ],
    includedFeatures: [
      'AI Call Analysis',
      'Real-Time Dashboard',
      'Transcription service',
      'Basic reporting',
    ],
    excludedFeatures: [
      'No calling capability',
      'No CRM integration',
      'No automation',
      'No human analyst reports',
    ],
    callLimit: 1000,
    description: 'Perfect for teams wanting to analyze existing call recordings',
    cta: 'Get Insights Package',
    upgradePath: 'analyzer',
  },
]
