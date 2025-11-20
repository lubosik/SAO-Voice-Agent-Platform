"use client"

import { useState } from 'react'
import {
  continuityOffers,
  platformContinuity,
  campaignContinuity,
  maintenanceContinuity,
  supportTiers,
  coachingTiers,
} from '@/lib/data'
import { ContinuityOfferCard } from './ContinuityOfferCard'
import { SupportTierTable } from './SupportTierTable'
import { CoachingTierCard } from './CoachingTierCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  Repeat,
  TrendingUp,
  Wrench,
  Users,
  Info,
  DollarSign,
  BarChart3,
} from 'lucide-react'

export function ContinuitySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { value: 'all', label: 'All Services', icon: Repeat, count: continuityOffers.length },
    { value: 'platform', label: 'Platform', icon: TrendingUp, count: platformContinuity.length },
    { value: 'campaign', label: 'Campaigns', icon: BarChart3, count: campaignContinuity.length },
    { value: 'maintenance', label: 'Maintenance', icon: Wrench, count: maintenanceContinuity.length },
  ]

  const getFilteredOffers = () => {
    switch (selectedCategory) {
      case 'platform':
        return platformContinuity
      case 'campaign':
        return campaignContinuity
      case 'maintenance':
        return maintenanceContinuity
      default:
        return continuityOffers
    }
  }

  const filteredOffers = getFilteredOffers()

  // Calculate total MRR potential
  const calculateMaxMRR = () => {
    const platformMax = 4500 // Complete rolling
    const campaignMax = 9600 // 3 campaigns bundle
    const maintenanceMax = 4000 // Custom dev retainer
    const supportMax = 5000 // Mission-critical
    const coachingMax = 6000 // Executive advisory
    return platformMax + campaignMax + maintenanceMax + supportMax + coachingMax
  }

  const maxMRR = calculateMaxMRR()

  return (
    <section id="continuity" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
          Ongoing Support & Services
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Monthly services and support packages designed for long-term success with ongoing maintenance, updates, and expert guidance.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="px-4 py-2">
            <Repeat className="h-4 w-4 mr-2" />
            7 Monthly Services
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Wrench className="h-4 w-4 mr-2" />
            4 Support Tiers
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Users className="h-4 w-4 mr-2" />
            4 Coaching Tiers
          </Badge>
        </div>
      </div>

      {/* Services Explanation */}
      <div className="max-w-4xl mx-auto mb-12 p-6 bg-muted/30 rounded-lg border">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold mb-2">About Monthly Services</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Keep your platform running smoothly with ongoing monthly services including platform access,
              campaign management, technical support, and expert coaching to ensure long-term success.
            </p>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div>
                <span className="font-semibold text-blue-500">🔄 Platform:</span>{' '}
                <span className="text-muted-foreground">
                  Monthly retainers for platform access and features
                </span>
              </div>
              <div>
                <span className="font-semibold text-green-500">📈 Campaigns:</span>{' '}
                <span className="text-muted-foreground">
                  Per-campaign licensing for scaling customers
                </span>
              </div>
              <div>
                <span className="font-semibold text-purple-500">🔧 Maintenance:</span>{' '}
                <span className="text-muted-foreground">
                  Ongoing development and custom work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Category Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="gap-2"
              >
                <Icon className="h-4 w-4" />
                {category.label}
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            )
          })}
        </div>
      </div>

      {/* Continuity Offers Grid */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center mb-8">Continuity Offers</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <ContinuityOfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>

      {/* Support Tiers Section */}
      <div className="mb-16 pt-12 border-t">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            Support & Maintenance Tiers
          </h3>
          <p className="text-muted-foreground">
            Tiered support levels with SLA guarantees and response times
          </p>
        </div>
        <Card className="p-6">
          <SupportTierTable />
        </Card>
      </div>

      {/* Coaching Tiers Section */}
      <div className="mb-16 pt-12 border-t">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Coaching & Advisory Tiers
          </h3>
          <p className="text-muted-foreground">
            Strategic coaching from light-touch quarterly to intensive executive advisory
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coachingTiers.map((tier, idx) => (
            <CoachingTierCard
              key={tier.id}
              tier={tier}
              isPopular={idx === 1} // Monthly Strategy Coaching
            />
          ))}
        </div>
      </div>

      {/* Continuity Strategy */}
      <div className="mt-16 pt-12 border-t">
        <h3 className="text-2xl font-bold text-center mb-8">Continuity Strategy</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-blue-500/5 border-blue-500/20">
            <h4 className="font-bold text-lg mb-3 text-blue-500">Why Continuity Matters</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Predictable revenue:</strong> Know your income 12 months ahead
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Higher valuations:</strong> Recurring revenue valued 3-5x annual
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Customer success:</strong> Monthly contact ensures they succeed
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Compounding growth:</strong> New customers add to base, not replace
                </span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-green-500/5 border-green-500/20">
            <h4 className="font-bold text-lg mb-3 text-green-500">Expansion Revenue Model</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Start small:</strong> Foundation at £2,400/mo gets them in
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Add campaigns:</strong> £3,200/mo per additional campaign
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Upgrade support:</strong> £750-£5,000/mo based on needs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Layer coaching:</strong> £1,500-£6,000/mo for strategic guidance
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Churn Prevention */}
      <div className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-primary/10 via-chart-2/10 to-chart-3/10 rounded-lg border border-primary/20">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <Repeat className="h-5 w-5 text-primary" />
          Reducing Churn
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Continuity revenue only works if customers stay. Key retention strategies:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">
              <strong>Regular check-ins:</strong> Support and coaching keep them engaged
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">
              <strong>Prove ROI monthly:</strong> Reports show ongoing value
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">
              <strong>Expand usage:</strong> More campaigns = deeper integration
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">
              <strong>Lock-in periods:</strong> 3-12 month commitments reduce impulse cancellations
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
