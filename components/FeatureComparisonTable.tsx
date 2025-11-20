"use client"

import React from 'react'
import { features, pricingTiers } from '@/lib/data'
import { Check, X, Info } from 'lucide-react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Badge } from '@/components/ui/badge'

export function FeatureComparisonTable() {
  // Get the main platform tiers
  const mainTiers = pricingTiers.filter(tier =>
    ['complete', 'foundation'].includes(tier.id)
  )

  // Group features by category
  const coreFeatures = features.filter(f => f.category === 'core')
  const premiumFeatures = features.filter(f => f.category === 'premium')
  const analyticsFeatures = features.filter(f => f.category === 'analytics')
  const automationFeatures = features.filter(f => f.category === 'automation')
  const advancedFeatures = features.filter(f => f.category === 'advanced')

  const featureGroups = [
    { name: 'Core Features', features: coreFeatures },
    { name: 'Analytics & Intelligence', features: analyticsFeatures },
    { name: 'Automation', features: automationFeatures },
    { name: 'Premium Add-ons', features: premiumFeatures },
    { name: 'Advanced', features: advancedFeatures },
  ]

  const isFeatureIncluded = (tierId: string, featureId: string): boolean => {
    const tier = mainTiers.find(t => t.id === tierId)
    return tier?.features.includes(featureId) || false
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-3">Feature Comparison</h3>
        <p className="text-muted-foreground">
          See exactly what's included in each package
        </p>
      </div>

      <table className="w-full border-collapse">
        {/* Header */}
        <thead>
          <tr className="border-b-2">
            <th className="text-left p-4 font-semibold">Feature</th>
            {mainTiers.map(tier => (
              <th key={tier.id} className="p-4 text-center min-w-[180px]">
                <div className="space-y-2">
                  <div className="font-bold text-lg">{tier.name}</div>
                  <div className="text-sm text-muted-foreground font-normal">
                    £{tier.setupCost.toLocaleString()} + £{tier.monthlyCost.toLocaleString()}/mo
                  </div>
                  {tier.isPopular && (
                    <Badge className="bg-primary">Most Popular</Badge>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {featureGroups.map((group, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {/* Category Header */}
              <tr className="bg-muted/50">
                <td
                  colSpan={mainTiers.length + 1}
                  className="p-4 font-semibold text-sm uppercase tracking-wide"
                >
                  {group.name}
                </td>
              </tr>

              {/* Features in this category */}
              {group.features.map((feature, featureIndex) => (
                <tr
                  key={feature.id}
                  className={`border-b hover:bg-muted/30 transition-colors ${
                    featureIndex % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                  }`}
                >
                  <td className="p-4">
                    <div className="flex items-start gap-2">
                      <div className="flex-1">
                        <div className="font-medium mb-1">{feature.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {feature.description}
                        </div>
                      </div>
                      {/* Info Hover Card */}
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <button className="text-muted-foreground hover:text-primary transition-colors">
                            <Info className="h-4 w-4" />
                          </button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80" side="right">
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold mb-1">What it is</h4>
                              <p className="text-sm text-muted-foreground">
                                {feature.whatItIs}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">Why it's valuable</h4>
                              <p className="text-sm text-muted-foreground">
                                {feature.whyValuable}
                              </p>
                            </div>
                            {feature.standaloneSellable && (
                              <div className="pt-2 border-t">
                                <div className="text-sm font-semibold text-primary">
                                  Standalone: £{feature.pricing.setup?.toLocaleString()}
                                  {feature.pricing.monthly && ` + £${feature.pricing.monthly.toLocaleString()}/mo`}
                                </div>
                              </div>
                            )}
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </td>

                  {/* Checkmarks for each tier */}
                  {mainTiers.map(tier => (
                    <td key={tier.id} className="p-4 text-center">
                      {isFeatureIncluded(tier.id, feature.id) ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full">
                          <X className="h-5 w-5 text-muted-foreground/40" />
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>

        {/* Footer with CTAs */}
        <tfoot>
          <tr className="border-t-2">
            <td className="p-4"></td>
            {mainTiers.map(tier => (
              <td key={tier.id} className="p-4 text-center">
                <button className="w-full py-3 px-4 rounded-lg font-semibold transition-all hover:scale-105 bg-primary text-primary-foreground hover:opacity-90">
                  {tier.cta}
                </button>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>

      {/* Mobile Notice */}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg md:hidden">
        <p className="text-sm text-muted-foreground text-center">
          💡 Tip: Rotate your device for better table viewing
        </p>
      </div>
    </div>
  )
}
