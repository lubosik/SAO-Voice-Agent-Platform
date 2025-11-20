import { Feature, DependencyType } from '@/types'

/**
 * All 12 Separately-Sellable Features
 * Source: SAO_Features.pdf
 * Total if purchased individually: £150,000
 */

export const features: Feature[] = [
  // ============================================
  // CORE FEATURES (4)
  // ============================================
  {
    id: 'premium-voice-playbook',
    name: 'Premium Voice Engine + Playbook',
    category: 'core',
    description: 'ElevenLabs voices with custom sales scripts and conversation flows',
    whatItIs: 'Professionally-built AI agent with premium voices and proven sales playbook',
    whyValuable: 'Sounds human, follows proven sales methodology, consistently delivers your pitch',
    capabilities: [
      'ElevenLabs premium voice generation',
      'Custom sales script development',
      'Conversation flow optimization',
      'Objection handling protocols',
      'Tone and pacing calibration',
    ],
    pricing: {
      setup: 25000,
      currency: 'GBP',
    },
    dependency: {
      type: DependencyType.CRITICAL,
      description: 'Required foundation - all other features build on this',
    },
    marketComparison: {
      competitors: ['Vapi', 'Bland.ai', 'Air.ai'],
      priceRange: '£15,000 - £35,000',
      positioning: 'Premium positioning with proven playbook methodology',
    },
    hormoziApplication: 'This is the core product that makes everything else possible',
    standaloneSellable: true,
  },
  {
    id: 'crm-integration',
    name: 'CRM Integration',
    category: 'core',
    description: 'Two-way sync with your CRM system (HubSpot, Salesforce, Pipedrive)',
    whatItIs: 'Automated data flow between SAO and your existing CRM',
    whyValuable: 'No manual data entry, instant lead updates, seamless workflow integration',
    capabilities: [
      'Bi-directional data sync',
      'Custom field mapping',
      'Real-time updates',
      'Multi-CRM support (HubSpot, Salesforce, Pipedrive)',
      'Activity logging and tracking',
    ],
    pricing: {
      setup: 18000,
      currency: 'GBP',
    },
    dependency: {
      type: DependencyType.PAIRED,
      requiredFeatures: ['premium-voice-playbook'],
      description: 'Requires Premium Voice Engine to generate data to sync',
    },
    marketComparison: {
      competitors: ['Zapier', 'Custom API development'],
      priceRange: '£8,000 - £25,000',
      positioning: 'Native integration vs third-party middleware',
    },
    hormoziApplication: 'Increases value by making the core product seamlessly integrate with existing tools',
    standaloneSellable: true,
  },
  {
    id: 'ai-call-analysis',
    name: 'AI Call Analysis',
    category: 'core',
    description: 'Automated transcription, sentiment analysis, and insight extraction',
    whatItIs: 'AI-powered analysis of every call with actionable insights',
    whyValuable: 'Know exactly why prospects say yes or no, optimize your pitch data-driven',
    capabilities: [
      'Automatic call transcription',
      'Sentiment analysis (positive/neutral/negative)',
      'Key moment identification',
      'Objection pattern recognition',
      'Conversion factor analysis',
    ],
    pricing: {
      setup: 15000,
      currency: 'GBP',
    },
    dependency: {
      type: DependencyType.PAIRED,
      requiredFeatures: ['premium-voice-playbook'],
      description: 'Needs calls to analyze',
    },
    marketComparison: {
      competitors: ['Gong', 'Chorus.ai', 'CallRail'],
      priceRange: '£10,000 - £30,000 setup + monthly fees',
      positioning: 'Purpose-built for AI voice agents vs general sales calls',
    },
    hormoziApplication: 'Intelligence layer that increases perceived value dramatically',
    standaloneSellable: true,
  },
  {
    id: 'knowledge-base-rag',
    name: 'Knowledge Base RAG',
    category: 'core',
    description: 'Upload docs, FAQs, product info - agent pulls accurate answers in real-time',
    whatItIs: 'Dynamic knowledge retrieval system powered by RAG (Retrieval Augmented Generation)',
    whyValuable: 'Agent always has correct answers, no hallucinations, handles complex questions',
    capabilities: [
      'Document ingestion (PDFs, Word, web pages)',
      'Semantic search and retrieval',
      'Real-time answer generation',
      'Source attribution and verification',
      'Knowledge base versioning',
    ],
    pricing: {
      setup: 12000,
      currency: 'GBP',
    },
    dependency: {
      type: DependencyType.PAIRED,
      requiredFeatures: ['premium-voice-playbook'],
      description: 'Enhances agent with dynamic knowledge',
    },
    marketComparison: {
      competitors: ['Custom RAG builds', 'Langchain solutions'],
      priceRange: '£15,000 - £40,000',
      positioning: 'Pre-integrated vs build-your-own complexity',
    },
    hormoziApplication: 'Makes the core product smarter and more valuable',
    standaloneSellable: true,
  },

  // ============================================
  // PREMIUM ADD-ONS (8)
  // ============================================
  {
    id: 'weekly-reports',
    name: 'Weekly Reports (Human-Compiled Intelligence)',
    category: 'analytics',
    description: 'Human analysts review your calls weekly and provide strategic insights',
    whatItIs: 'Weekly strategic reports compiled by human intelligence analysts',
    whyValuable: 'AI finds patterns, humans provide strategy - the perfect combination',
    capabilities: [
      'Human analyst call review',
      'Strategic recommendation reports',
      'Objection pattern summaries',
      'Pitch optimization suggestions',
      'Competitive intelligence extraction',
    ],
    pricing: {
      setup: 22000,
      monthly: undefined,
      volumeTiers: [
        {
          minCalls: 0,
          maxCalls: 999,
          price: 500,
          label: 'Up to 1,000 calls/month',
        },
        {
          minCalls: 1000,
          maxCalls: 2499,
          price: 1000,
          label: '1,000-2,500 calls/month',
        },
        {
          minCalls: 2500,
          maxCalls: null,
          price: 1500,
          label: '2,500+ calls/month',
        },
      ],
      currency: 'GBP',
    },
    dependency: {
      type: DependencyType.PAIRED,
      requiredFeatures: ['ai-call-analysis'],
      description: 'Humans analyze the AI transcriptions and insights',
    },
    marketComparison: {
      competitors: ['Hiring in-house analysts', 'Consulting firms'],
      priceRange: '£3,000 - £8,000/month',
      positioning: 'Dedicated intelligence service at fraction of in-house cost',
    },
    hormoziApplication: 'High-margin service add-on, scales without much cost increase',
    standaloneSellable: true,
  },
  {
    id: 'multi-attempt-retry',
    name: 'Multi-Attempt Retry Logic',
    category: 'automation',
    description: 'Automatically retry unanswered calls with smart timing and cadence',
    whatItIs: 'Intelligent retry system that persists until contact is made',
    whyValuable: 'Dramatically increases contact rates - turn 15% pickup into 40%+',
    capabilities: [
      'Configurable retry attempts (3-10 tries)',
      'Smart timing optimization',
      'Time-of-day personalization',
      'DNQ (Do Not Queue) rule handling',
      'Automatic stop on contact/request',
    ],
    pricing: {
      setup: 8000,
      currency: 'GBP',
    },
    dependency: {
      type: DependencyType.PAIRED,
      requiredFeatures: ['premium-voice-playbook'],
      description: 'Requires base calling capability',
    },
    marketComparison: {
      competitors: ['Power dialers with retry', 'Outreach.io'],
      priceRange: '£5,000 - £12,000',
      positioning: 'Purpose-built for AI calling vs adapted email sequencing',
    },
    hormoziApplication: 'Increases effectiveness dramatically with minimal cost',
    standaloneSellable: true,
  },
  {
    id: 'callback-scheduling',
    name: 'Callback Scheduling + Calendar Integration',
    category: 'automation',
    description: 'Agent books callbacks directly into your calendar with confirmation',
    whatItIs: 'Automated appointment booking with calendar sync',
    whyValuable: 'No back-and-forth, instant booking, reduces no-shows',
    capabilities: [
      'Calendar availability checking',
      'Direct appointment booking',
      'Automated confirmation emails',
      'Reminder sequences',
      'Reschedule handling',
    ],
    pricing: {
      setup: 10000,
      currency: 'GBP',
    },
    dependency: {
      type: DependencyType.PAIRED,
      requiredFeatures: ['premium-voice-playbook'],
      description: 'Agent needs to handle scheduling conversations',
    },
    marketComparison: {
      competitors: ['Calendly', 'Chili Piper', 'ScheduleOnce'],
      priceRange: '£3,000 - £15,000',
      positioning: 'Voice-first booking vs form-based scheduling',
    },
    hormoziApplication: 'Converts interest to meetings automatically',
    standaloneSellable: true,
  },
  {
    id: 'lead-recycling',
    name: 'Lead Recycling & Nurture Sequences',
    category: 'automation',
    description: 'Automatically re-engage cold leads after set periods with new angles',
    whatItIs: 'Automated lead warming and re-engagement campaigns',
    whyValuable: 'Extract value from "dead" leads, increase lifetime ROI per contact',
    capabilities: [
      'Configurable nurture sequences',
      'Time-delayed re-engagement',
      'New angle/offer presentation',
      'Lead temperature scoring',
      'Automatic campaign assignment',
    ],
    pricing: {
      setup: 20000,
      currency: 'GBP',
    },
    dependency: {
      type: DependencyType.PAIRED,
      requiredFeatures: ['premium-voice-playbook', 'crm-integration'],
      description: 'Needs CRM to track lead status and history',
    },
    marketComparison: {
      competitors: ['HubSpot workflows', 'ActiveCampaign', 'Marketo'],
      priceRange: '£8,000 - £25,000',
      positioning: 'Voice-based nurture vs email-only sequences',
    },
    hormoziApplication: 'Monetizes the back-end, increases customer LTV',
    standaloneSellable: true,
  },
  {
    id: 'dashboard',
    name: 'Real-Time Dashboard',
    category: 'analytics',
    description: 'Live visibility into active calls, outcomes, pipeline movement',
    whatItIs: 'Web-based dashboard showing all campaign activity in real-time',
    whyValuable: 'Know exactly what is happening right now, make instant decisions',
    capabilities: [
      'Live call monitoring',
      'Real-time outcome tracking',
      'Pipeline visualization',
      'Performance metrics',
      'Team activity views',
    ],
    pricing: {
      setup: 12000,
      currency: 'GBP',
    },
    dependency: {
      type: DependencyType.STANDALONE,
      description: 'Valuable on its own but maximized with other features',
    },
    marketComparison: {
      competitors: ['Custom dashboards', 'Tableau', 'Looker'],
      priceRange: '£15,000 - £40,000',
      positioning: 'Purpose-built for voice agents vs generic BI tools',
    },
    hormoziApplication: 'Visibility creates perceived control and value',
    standaloneSellable: true,
  },
  {
    id: 'ai-lead-scoring',
    name: 'AI Lead Scoring',
    category: 'analytics',
    description: 'Automatically score and prioritize leads based on conversation signals',
    whatItIs: 'Predictive scoring based on what prospects actually say',
    whyValuable: 'Focus human follow-up on highest-probability opportunities',
    capabilities: [
      'Conversation signal analysis',
      'Buying intent detection',
      'Automatic score calculation',
      'Priority ranking',
      'Score reason attribution',
    ],
    pricing: {
      setup: 8000,
      currency: 'GBP',
    },
    dependency: {
      type: DependencyType.PAIRED,
      requiredFeatures: ['ai-call-analysis'],
      description: 'Needs transcription and analysis to score',
    },
    marketComparison: {
      competitors: ['6sense', 'Bombora', 'MadKudu'],
      priceRange: '£10,000 - £30,000/year',
      positioning: 'Conversation-based vs firmographic/behavioral scoring',
    },
    hormoziApplication: 'Increases efficiency of human sales team',
    standaloneSellable: true,
  },
  {
    id: 'voice-cloning',
    name: 'Custom Voice Cloning',
    category: 'advanced',
    description: 'Clone your voice or a founder\'s voice for authentic representation',
    whatItIs: 'AI voice trained on your actual voice recordings',
    whyValuable: 'Ultimate personalization, sounds exactly like you or your chosen rep',
    capabilities: [
      'Voice sample recording',
      'AI voice model training',
      'Tone and style matching',
      'Multiple voice profiles',
      'Voice quality optimization',
    ],
    pricing: {
      setup: 15000,
      currency: 'GBP',
    },
    dependency: {
      type: DependencyType.PAIRED,
      requiredFeatures: ['premium-voice-playbook'],
      description: 'Enhances the base voice engine',
    },
    marketComparison: {
      competitors: ['ElevenLabs direct', 'Resemble.ai', 'Descript'],
      priceRange: '£5,000 - £20,000',
      positioning: 'Fully integrated vs standalone voice cloning',
    },
    hormoziApplication: 'Premium differentiation feature',
    standaloneSellable: true,
  },
  {
    id: 'multilingual',
    name: 'Multilingual Support',
    category: 'advanced',
    description: 'Support for 20+ languages with native-quality pronunciation',
    whatItIs: 'Full multi-language calling capability with accurate translations',
    whyValuable: 'Access global markets with culturally appropriate conversations',
    capabilities: [
      '20+ language support',
      'Native pronunciation',
      'Cultural customization',
      'Language-specific playbooks',
      'Automatic language detection',
    ],
    pricing: {
      setup: 18000,
      currency: 'GBP',
    },
    dependency: {
      type: DependencyType.PAIRED,
      requiredFeatures: ['premium-voice-playbook'],
      description: 'Extends core agent capabilities',
    },
    marketComparison: {
      competitors: ['Hiring multilingual reps', 'Translation services'],
      priceRange: '£20,000 - £50,000',
      positioning: 'Instant multilingual vs hiring and training',
    },
    hormoziApplication: 'Expands addressable market massively',
    standaloneSellable: true,
  },
]
