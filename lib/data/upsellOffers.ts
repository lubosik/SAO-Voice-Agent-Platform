import { UpsellOffer, OfferType } from '@/types'

/**
 * Upsell Offers - Presented After Initial Purchase
 * Source: SAO_Offers.pdf
 */

export const upsellOffers: UpsellOffer[] = [
  // ============================================
  // CAPABILITY UPSELLS
  // ============================================
  {
    id: 'upsell-knowledge-base',
    name: 'Add Knowledge Base RAG',
    type: OfferType.UPSELL,
    category: 'capability',
    description: 'Make your agent smarter with dynamic knowledge retrieval',
    pricing: {
      setup: 12000,
      currency: 'GBP',
    },
    improvements: [
      'Agent can answer complex product questions accurately',
      'No more "I don\'t know" responses',
      'Pull from your docs, FAQs, pricing sheets in real-time',
      'Eliminate hallucinations with source attribution',
    ],
    roiJustification: 'Increases conversion by handling objections that currently end calls',
    whenToPresent: 'After 30 days when they see basic calling works but agent struggles with questions',
    targetAudience: 'Foundation customers with complex products',
    creditIfUpgrade: {
      upgradeToId: 'complete',
      creditAmount: 12000,
      timeframe: 60,
    },
  },
  {
    id: 'upsell-callback-scheduling',
    name: 'Add Callback Scheduling',
    type: OfferType.UPSELL,
    category: 'capability',
    description: 'Automatically book meetings into your calendar',
    pricing: {
      setup: 10000,
      currency: 'GBP',
    },
    improvements: [
      'Instant booking without back-and-forth',
      'Reduces no-shows with automated reminders',
      'Frees up human time from scheduling',
      'Captures interest at peak moment',
    ],
    roiJustification: 'Converts 20-30% more interested prospects by removing scheduling friction',
    whenToPresent: 'When they mention manually following up to book meetings',
    targetAudience: 'Foundation customers booking demos or consultations',
    creditIfUpgrade: {
      upgradeToId: 'complete',
      creditAmount: 10000,
      timeframe: 60,
    },
  },
  {
    id: 'upsell-lead-recycling',
    name: 'Add Lead Recycling & Nurture',
    type: OfferType.UPSELL,
    category: 'capability',
    description: 'Automatically re-engage cold leads with new angles',
    pricing: {
      setup: 20000,
      currency: 'GBP',
    },
    improvements: [
      'Extract value from "not interested" leads',
      'Automated nurture sequences with new offers',
      'Timing-based re-engagement (30/60/90 days)',
      'Increases lifetime value per contact by 40%+',
    ],
    roiJustification: 'Dead leads become opportunities again - typical 15% recovery rate',
    whenToPresent: 'After 60 days when they have a pile of cold leads',
    targetAudience: 'Customers with large lead databases',
    creditIfUpgrade: {
      upgradeToId: 'complete',
      creditAmount: 20000,
      timeframe: 90,
    },
  },
  {
    id: 'upsell-multilingual',
    name: 'Add Multilingual Support',
    type: OfferType.UPSELL,
    category: 'capability',
    description: 'Expand to 20+ languages with native pronunciation',
    pricing: {
      setup: 18000,
      currency: 'GBP',
    },
    improvements: [
      'Access international markets instantly',
      'Native-quality pronunciation in 20+ languages',
      'Culturally appropriate conversation flows',
      'No need to hire multilingual reps',
    ],
    roiJustification: 'Opens entire new markets without hiring costs',
    whenToPresent: 'When they mention international expansion or non-English markets',
    targetAudience: 'Companies targeting multiple countries',
  },
  {
    id: 'upsell-voice-cloning',
    name: 'Add Custom Voice Cloning',
    type: OfferType.UPSELL,
    category: 'capability',
    description: 'Clone founder or top rep voice for ultimate authenticity',
    pricing: {
      setup: 15000,
      currency: 'GBP',
    },
    improvements: [
      'Sounds exactly like your founder or top rep',
      'Ultimate authenticity for high-value prospects',
      'Maintain brand personality at scale',
      'Differentiate from generic AI voices',
    ],
    roiJustification: 'Increases trust and connection, particularly for high-ticket sales',
    whenToPresent: 'When they express concern about sounding too "AI" or generic',
    targetAudience: 'Personal brands or companies where founder voice matters',
  },

  // ============================================
  // INTELLIGENCE UPSELLS
  // ============================================
  {
    id: 'upsell-weekly-reports',
    name: 'Add Weekly Human Intelligence Reports',
    type: OfferType.UPSELL,
    category: 'intelligence',
    description: 'Human analysts provide strategic insights from your calls',
    pricing: {
      setup: 22000,
      monthly: 500, // Base tier, scales to £1,500
      currency: 'GBP',
    },
    improvements: [
      'Human analysts review your calls weekly',
      'Strategic recommendations, not just data',
      'Objection patterns identified and solved',
      'Continuous pitch optimization',
    ],
    roiJustification: 'Typical 20% conversion increase from implementing weekly recommendations',
    whenToPresent: 'After 45 days when they have enough call data to analyze',
    targetAudience: 'Foundation customers doing over 1,000 calls/month',
    creditIfUpgrade: {
      upgradeToId: 'complete',
      creditAmount: 22000,
      timeframe: 90,
    },
  },
  {
    id: 'upsell-dashboard',
    name: 'Add Real-Time Dashboard',
    type: OfferType.UPSELL,
    category: 'intelligence',
    description: 'Live visibility into all campaign activity',
    pricing: {
      setup: 12000,
      currency: 'GBP',
    },
    improvements: [
      'See active calls in real-time',
      'Track outcomes as they happen',
      'Make instant campaign adjustments',
      'Team visibility and accountability',
    ],
    roiJustification: 'Visibility enables rapid iteration - typical 30% faster optimization',
    whenToPresent: 'When they complain about waiting for reports or not knowing what\'s happening',
    targetAudience: 'Foundation customers with multiple campaigns or team members',
    creditIfUpgrade: {
      upgradeToId: 'complete',
      creditAmount: 12000,
      timeframe: 60,
    },
  },
  {
    id: 'upsell-ai-lead-scoring',
    name: 'Add AI Lead Scoring',
    type: OfferType.UPSELL,
    category: 'intelligence',
    description: 'Automatically prioritize best opportunities',
    pricing: {
      setup: 8000,
      currency: 'GBP',
    },
    improvements: [
      'Automatically score every prospect based on conversation signals',
      'Focus human follow-up on highest-probability deals',
      'Understand why scores change',
      'Predictive intelligence for pipeline management',
    ],
    roiJustification: 'Sales team becomes 40% more efficient by focusing on best leads',
    whenToPresent: 'When they mention overwhelming volume or difficulty prioritizing follow-up',
    targetAudience: 'Customers with human sales teams handling AI-generated leads',
    creditIfUpgrade: {
      upgradeToId: 'complete',
      creditAmount: 8000,
      timeframe: 60,
    },
  },

  // ============================================
  // PIPELINE UPSELLS
  // ============================================
  {
    id: 'upsell-additional-campaign',
    name: 'Add Second Campaign',
    type: OfferType.UPSELL,
    category: 'pipeline',
    description: 'Launch additional product line or market segment',
    pricing: {
      setup: 15000,
      monthly: 1500,
      currency: 'GBP',
    },
    improvements: [
      'Separate playbook for different product/audience',
      'Dedicated campaign tracking',
      'A/B test different approaches',
      'Expand revenue without expanding team',
    ],
    roiJustification: 'Typical 80% revenue increase from second campaign (lower conversion but new audience)',
    whenToPresent: 'After first campaign proves successful (60+ days, positive ROI)',
    targetAudience: 'Multi-product companies or those expanding to new segments',
  },
  {
    id: 'upsell-campaign-scale-package',
    name: 'Campaign Scale Package (3 Additional Campaigns)',
    type: OfferType.UPSELL,
    category: 'pipeline',
    description: 'Bundle pricing for multiple campaigns',
    pricing: {
      setup: 35000, // Save £10k vs 3x individual
      monthly: 3200, // Per campaign
      currency: 'GBP',
    },
    improvements: [
      'Three additional campaigns at bundle pricing',
      'Test multiple markets simultaneously',
      'Product line coverage',
      'Enterprise-scale outbound',
    ],
    roiJustification: 'Save £10,000 on setup vs buying individually, expand revenue by 2-3x',
    whenToPresent: 'When they mention wanting to scale to multiple products/markets',
    targetAudience: 'Enterprises or aggressive growth companies',
  },

  // ============================================
  // COACHING UPSELLS
  // ============================================
  {
    id: 'upsell-monthly-strategy',
    name: 'Add Monthly Strategy Coaching',
    type: OfferType.UPSELL,
    category: 'coaching',
    description: 'Monthly 1:1 coaching on offer design and campaign optimization',
    pricing: {
      monthly: 1500,
      currency: 'GBP',
    },
    improvements: [
      'Monthly 90-minute strategy sessions',
      'Review campaign performance with expert',
      'Optimize offers and messaging',
      'Learn Hormozi frameworks applied to your business',
    ],
    roiJustification: 'Expert guidance typically doubles conversion rates within 3 months',
    whenToPresent: 'When customer is getting results but hitting plateau',
    targetAudience: 'Founder-led sales teams or those new to offer science',
  },
  {
    id: 'upsell-revenue-war-room',
    name: 'Add Revenue War-Room Coaching',
    type: OfferType.UPSELL,
    category: 'coaching',
    description: 'Weekly intensive coaching for aggressive growth',
    pricing: {
      monthly: 3000,
      currency: 'GBP',
    },
    improvements: [
      'Weekly 60-minute war-room sessions',
      'Rapid iteration and testing',
      'Direct access between sessions',
      'Campaign teardowns and rebuilds',
    ],
    roiJustification: 'For teams generating £50k+/month where 20% improvement = £10k/month gain',
    whenToPresent: 'When customer is scaling rapidly and needs frequent guidance',
    targetAudience: 'High-performing teams doing £50k+ monthly revenue',
  },
]
