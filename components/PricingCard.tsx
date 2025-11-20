"use client"

import { PricingTier } from '@/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, X, ArrowRight } from 'lucide-react'

interface PricingCardProps {
  tier: PricingTier
  showComparison?: boolean
}

export function PricingCard({ tier, showComparison = false }: PricingCardProps) {
  const firstYearTotal = tier.setupCost + (tier.monthlyCost * 12)

  return (
    <Card
      className={`relative flex flex-col p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
        tier.isPopular
          ? 'border-2 border-primary shadow-xl ring-2 ring-primary/20'
          : 'border hover:border-primary/50'
      }`}
    >
      {/* Popular Badge */}
      {tier.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-primary to-chart-2 text-white px-4 py-1 text-sm font-semibold">
            Most Popular
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
        <p className="text-muted-foreground text-sm">{tier.tagline}</p>
      </div>

      {/* Pricing */}
      <div className="text-center mb-6 pb-6 border-b">
        {tier.setupCost > 0 && (
          <div className="mb-4">
            <div className="text-sm text-muted-foreground mb-1">Setup</div>
            <div className="text-3xl font-bold">
              £{tier.setupCost.toLocaleString()}
            </div>
          </div>
        )}

        <div>
          <div className="text-sm text-muted-foreground mb-1">
            {tier.setupCost === 0 ? 'Monthly' : 'Then'}
          </div>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold">
              £{tier.monthlyCost.toLocaleString()}
            </span>
            <span className="text-muted-foreground">/month</span>
          </div>
        </div>

        {/* First Year Total */}
        {tier.setupCost > 0 && (
          <div className="mt-4 pt-4 border-t">
            <div className="text-xs text-muted-foreground">First Year Total</div>
            <div className="text-lg font-semibold text-primary">
              £{firstYearTotal.toLocaleString()}
            </div>
          </div>
        )}
      </div>

      {/* Features Included */}
      <div className="flex-1 mb-6">
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
          What's Included
        </h4>
        <ul className="space-y-2.5">
          {tier.includedFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Excluded Features (if comparison mode) */}
        {showComparison && tier.excludedFeatures && tier.excludedFeatures.length > 0 && (
          <div className="mt-4 pt-4 border-t">
            <ul className="space-y-2">
              {tier.excludedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <X className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Call Limit (if applicable) */}
      {tier.callLimit && (
        <div className="mb-4 p-3 bg-muted rounded-lg">
          <div className="text-xs text-muted-foreground">Call Limit</div>
          <div className="font-semibold">
            Up to {tier.callLimit.toLocaleString()} calls/month
          </div>
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6">
        {tier.description}
      </p>

      {/* CTA Button */}
      <Button
        size="lg"
        className={`w-full group ${
          tier.isPopular
            ? 'bg-gradient-to-r from-primary to-chart-2 hover:opacity-90'
            : ''
        }`}
        variant={tier.isPopular ? 'default' : 'outline'}
      >
        {tier.cta}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>

      {/* Upgrade Path */}
      {tier.upgradePath && (
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            Easy upgrade path available
          </p>
        </div>
      )}
    </Card>
  )
}
