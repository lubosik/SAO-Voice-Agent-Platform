"use client"

import { useState } from 'react'
import { PricingCard } from './PricingCard'
import { pricingTiers } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function PricingTiers() {
  const [showComparison, setShowComparison] = useState(false)

  // Get main tiers (excluding downsell tiers for now)
  const mainTiers = pricingTiers.filter(tier =>
    ['complete', 'foundation', 'analyzer', 'human-insights'].includes(tier.id)
  )

  // Separate tiers by category
  const platformTiers = mainTiers.filter(tier =>
    ['complete', 'foundation'].includes(tier.id)
  )
  const specialtyTiers = mainTiers.filter(tier =>
    ['analyzer', 'human-insights'].includes(tier.id)
  )

  return (
    <section id="pricing" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
          Choose Your Package
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Professional AI voice agents with transparent pricing. No hidden fees, cancel anytime with 30 days notice.
        </p>

        {/* Comparison Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <Button
            variant={showComparison ? 'outline' : 'default'}
            size="sm"
            onClick={() => setShowComparison(false)}
          >
            Simple View
          </Button>
          <Button
            variant={showComparison ? 'default' : 'outline'}
            size="sm"
            onClick={() => setShowComparison(true)}
          >
            Compare Features
          </Button>
        </div>
      </div>

      <Tabs defaultValue="platform" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
          <TabsTrigger value="platform">Full Platform</TabsTrigger>
          <TabsTrigger value="specialty">Specialty Packages</TabsTrigger>
        </TabsList>

        {/* Full Platform Tiers */}
        <TabsContent value="platform">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {platformTiers.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                showComparison={showComparison}
              />
            ))}
          </div>

          {/* Value Proposition */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-primary/10 via-chart-2/10 to-chart-3/10 rounded-lg border border-primary/20">
              <p className="text-lg font-semibold mb-2">
                💰 Save £82,000 with Complete
              </p>
              <p className="text-muted-foreground">
                Individual features total £150,000. Get Complete for £68,000 + bonuses.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Specialty Packages */}
        <TabsContent value="specialty">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {specialtyTiers.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                showComparison={showComparison}
              />
            ))}
          </div>

          {/* Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              <strong>Analyzer</strong> is perfect for teams with existing voice solutions who need intelligence.
              <br />
              <strong>Human Insights</strong> provides ongoing strategic analysis from human experts.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Trust Indicators */}
      <div className="mt-16 pt-12 border-t">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">12</div>
            <div className="text-sm text-muted-foreground">
              Separately-Sellable Features
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">£82k</div>
            <div className="text-sm text-muted-foreground">
              Savings with Complete vs Individual
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
            <div className="text-sm text-muted-foreground">
              Notice to Cancel (No Lock-In)
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">90 Days</div>
            <div className="text-sm text-muted-foreground">
              Credit Window for Upgrades
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Prompt */}
      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Questions about which package is right for you?
        </p>
        <Button size="lg" variant="outline">
          Book a Strategy Call
        </Button>
      </div>
    </section>
  )
}
