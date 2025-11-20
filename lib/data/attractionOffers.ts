import {
  DecoyOffer,
  BuyXGetYOffer,
  PayLessNowOffer,
  TrialOffer,
  OfferType,
} from '@/types'

/**
 * Attraction Offers - Front Door Offers to Get Customers In
 * Source: SAO_Offers.pdf
 */

// ============================================
// DECOY OFFERS
// ============================================

export const decoyOffers: DecoyOffer[] = [
  {
    id: 'analyzer-transcribe-export',
    name: 'Analyzer: Transcribe + Export',
    type: OfferType.ATTRACTION,
    subType: 'decoy',
    description: 'Basic transcription service - deliberately limited to make Analyzer look better',
    pricing: {
      annual: 1200,
      currency: 'GBP',
    },
    whatBuyerGets: [
      'Basic call transcription',
      'Text export to CSV',
      'Up to 500 calls/month',
    ],
    deliberatelyMissing: [
      'No sentiment analysis',
      'No AI insights',
      'No dashboard visibility',
      'No human analyst reports',
      'No pattern recognition',
    ],
    limitations: [
      '500 call limit per month',
      'Text-only exports',
      'No advanced analytics',
      'Email delivery only (no dashboard)',
    ],
    upgradeTarget: {
      offerId: 'analyzer',
      pricing: {
        annual: 15000,
        currency: 'GBP',
      },
      creditsApplied: 1200,
      timeframe: 30,
    },
    whenToPresent: 'Initial attraction phase for price-sensitive prospects',
    targetAudience: 'Teams with existing call recordings who need basic transcription',
  },
  {
    id: 'sao-dial-dump-lite',
    name: 'SAO Dial-&-Dump Lite',
    type: OfferType.ATTRACTION,
    subType: 'decoy',
    description: 'Barebones calling with no intelligence - makes Foundation look essential',
    pricing: {
      setup: 12000,
      monthly: 1250,
      currency: 'GBP',
    },
    whatBuyerGets: [
      'Basic AI calling',
      'Simple script playback',
      'CSV upload for lists',
    ],
    deliberatelyMissing: [
      'No CRM integration',
      'No call analysis',
      'No retry logic',
      'No reporting',
      'No human support',
    ],
    limitations: [
      'Basic voice quality (not ElevenLabs)',
      'Single-attempt calling only',
      'No callback scheduling',
      'Manual list management',
    ],
    upgradeTarget: {
      offerId: 'foundation',
      pricing: {
        setup: 32000,
        monthly: 2400,
        currency: 'GBP',
      },
      creditsApplied: 12000,
      timeframe: 60,
    },
    whenToPresent: 'When prospect asks for cheapest possible option',
    targetAudience: 'Budget-focused teams who don\'t understand the value of intelligence',
  },
]

// ============================================
// BUY X GET Y OFFERS
// ============================================

export const buyXGetYOffers: BuyXGetYOffer[] = [
  {
    id: 'complete-now-earned-visibility',
    name: 'Complete Now + Earned Visibility',
    type: OfferType.ATTRACTION,
    subType: 'buy_x_get_y',
    description: 'Buy Complete, get Dashboard + Reports + Analyzer pass free',
    pricing: {
      setup: 68000,
      monthly: 4500,
      currency: 'GBP',
    },
    buyItems: [
      {
        item: 'SAO Complete Package',
        price: 68000,
      },
    ],
    freeItems: [
      {
        item: 'Real-Time Dashboard (normally £12,000 setup)',
        value: 12000,
      },
      {
        item: '4 Weeks of Human Reports (normally £1,800)',
        value: 1800,
      },
      {
        item: 'Analyzer Historical Pass (200 calls, normally £3,000)',
        value: 3000,
      },
    ],
    totalSavings: 16800,
    whenToPresent: 'Primary front-door offer for qualified prospects',
    targetAudience: 'Serious buyers who need the full system and respond to immediate value',
  },
  {
    id: 'foundation-plus-growth-path',
    name: 'Foundation + Growth Path Bundle',
    type: OfferType.ATTRACTION,
    subType: 'buy_x_get_y',
    description: 'Buy Foundation, get free callback scheduling + first month human reports',
    pricing: {
      setup: 32000,
      monthly: 2400,
      currency: 'GBP',
    },
    buyItems: [
      {
        item: 'SAO Foundation Package',
        price: 32000,
      },
    ],
    freeItems: [
      {
        item: 'Callback Scheduling Setup (normally £10,000)',
        value: 10000,
      },
      {
        item: 'First Month Human Reports (normally £500)',
        value: 500,
      },
    ],
    totalSavings: 10500,
    whenToPresent: 'For prospects who hesitate at Complete pricing but are qualified',
    targetAudience: 'Growing teams who need core functionality with room to expand',
  },
]

// ============================================
// PAY LESS NOW OFFERS
// ============================================

export const payLessNowOffers: PayLessNowOffer[] = [
  {
    id: 'complete-deferred-setup',
    name: 'Complete: Pay £28k Now, £40k in 90 Days',
    type: OfferType.ATTRACTION,
    subType: 'pay_less_now',
    description: 'Reduce cash impact today, pay balance after seeing results',
    pricing: {
      setup: 68000,
      monthly: 4500,
      currency: 'GBP',
    },
    upfrontPayment: 28000,
    deferredPayment: 40000,
    waiverCondition: 'If we generate 20 qualified meetings in first 90 days, £40k is waived',
    freeItems: [
      {
        item: 'Dashboard Setup (£12,000 value)',
        value: 12000,
      },
      {
        item: 'First 90 Days Human Reports (£4,500 value)',
        value: 4500,
      },
    ],
    whenToPresent: 'When prospect is qualified but has cash flow concerns',
    targetAudience: 'CFO-types who need results before full investment',
  },
]

// ============================================
// TRIAL OFFERS
// ============================================

export const trialOffers: TrialOffer[] = [
  {
    id: 'analyzer-deep-dive',
    name: 'Analyzer Deep-Dive Trial',
    type: OfferType.ATTRACTION,
    subType: 'trial',
    description: 'One-time deep analysis of 200 calls to prove intelligence value',
    pricing: {
      setup: 3000,
      currency: 'GBP',
    },
    trialPrice: 3000,
    deliveryTime: 7, // days
    scope: '200 call recordings analyzed with full human intelligence report',
    deliverables: [
      'AI transcription + sentiment analysis on 200 calls',
      'Human-compiled strategic report',
      'Top objection patterns identified',
      'Conversion factor breakdown',
      'Pitch optimization recommendations',
    ],
    continuationPaths: [
      {
        pathName: 'Analyzer Annual',
        pricing: {
          annual: 15000,
          currency: 'GBP',
        },
        credits: 3000,
      },
      {
        pathName: 'SAO Complete',
        pricing: {
          setup: 68000,
          monthly: 4500,
          currency: 'GBP',
        },
        credits: 3000,
      },
      {
        pathName: 'Human Insights Continuity',
        pricing: {
          monthly: 3000,
          currency: 'GBP',
        },
        credits: 3000,
      },
    ],
    whenToPresent: 'For prospects skeptical about AI analysis value',
    targetAudience: 'Teams with existing call recordings who need proof before commitment',
  },
  {
    id: 'foundation-pilot',
    name: 'Foundation 30-Day Pilot',
    type: OfferType.ATTRACTION,
    subType: 'trial',
    description: '30-day pilot program with limited setup to prove calling works',
    pricing: {
      setup: 8000,
      monthly: 2400,
      currency: 'GBP',
    },
    trialPrice: 8000,
    deliveryTime: 14, // days to setup
    scope: 'Full Foundation capabilities for 30 days on single campaign',
    deliverables: [
      'Basic voice agent setup (single script)',
      'CRM integration (one CRM)',
      'AI call analysis enabled',
      'Up to 500 calls in 30 days',
      'Performance report at end',
    ],
    continuationPaths: [
      {
        pathName: 'Foundation Full',
        pricing: {
          setup: 32000,
          monthly: 2400,
          currency: 'GBP',
        },
        credits: 8000,
      },
      {
        pathName: 'Complete Full',
        pricing: {
          setup: 68000,
          monthly: 4500,
          currency: 'GBP',
        },
        credits: 8000,
      },
    ],
    whenToPresent: 'For prospects who need to see it work before full commitment',
    targetAudience: 'Risk-averse buyers or teams new to AI calling',
  },
]

// ============================================
// COMBINED EXPORT
// ============================================

export const attractionOffers = [
  ...decoyOffers,
  ...buyXGetYOffers,
  ...payLessNowOffers,
  ...trialOffers,
]
