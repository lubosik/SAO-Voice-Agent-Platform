"use client"

import { useState } from 'react'
import { downsellOffers, paymentPlanDownsells, featureDownsells } from '@/lib/data'
import { DownsellOfferCard } from './DownsellOfferCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  TrendingDown,
  CreditCard,
  Minus,
  Info,
  AlertCircle,
} from 'lucide-react'

export function DownsellsSection() {
  const [selectedType, setSelectedType] = useState<string>('all')

  const offerTypes = [
    { value: 'all', label: 'All Options', icon: CreditCard, count: downsellOffers.length },
    { value: 'payment_plan', label: 'Payment Plans', icon: CreditCard, count: paymentPlanDownsells.length },
    { value: 'feature_reduction', label: 'Starter Packages', icon: Minus, count: featureDownsells.length },
  ]

  const getFilteredOffers = () => {
    switch (selectedType) {
      case 'payment_plan':
        return paymentPlanDownsells
      case 'feature_reduction':
        return featureDownsells
      default:
        return downsellOffers
    }
  }

  const filteredOffers = getFilteredOffers()

  return (
    <section id="downsells" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
          Flexible Payment Options
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Choose from flexible payment plans and right-sized packages to match your budget and needs.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="px-4 py-2">
            <CreditCard className="h-4 w-4 mr-2" />
            11 Flexible Options
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <TrendingDown className="h-4 w-4 mr-2" />
            2 Option Types
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <AlertCircle className="h-4 w-4 mr-2" />
            Budget-Friendly
          </Badge>
        </div>
      </div>

      {/* Downsell Type Explanation */}
      <div className="max-w-4xl mx-auto mb-12 p-6 bg-muted/30 rounded-lg border">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold mb-2">About Downsell Offers</h3>
            <p className="text-sm text-muted-foreground mb-4">
              These offers help overcome objections without devaluing the product. Payment plans preserve
              full pricing while addressing cash flow concerns. Feature reductions maintain integrity by
              removing specific capabilities rather than arbitrary discounting.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-semibold text-blue-500">💰 Payment Plans:</span>{' '}
                <span className="text-muted-foreground">
                  Spread payments over time - keeps price intact, solves cash flow
                </span>
              </div>
              <div>
                <span className="font-semibold text-orange-500">📉 Feature Reductions:</span>{' '}
                <span className="text-muted-foreground">
                  Remove features, reduce price - honest value alignment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {offerTypes.map((type) => {
            const Icon = type.icon
            return (
              <Button
                key={type.value}
                variant={selectedType === type.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType(type.value)}
                className="gap-2"
              >
                <Icon className="h-4 w-4" />
                {type.label}
                <Badge variant="secondary" className="ml-1">
                  {type.count}
                </Badge>
              </Button>
            )
          })}
        </div>
      </div>

      {/* Offers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {filteredOffers.map((offer) => (
          <DownsellOfferCard key={offer.id} offer={offer} />
        ))}
      </div>

      {/* No Results */}
      {filteredOffers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No offers in this category</p>
          <Button variant="outline" onClick={() => setSelectedType('all')}>
            View All Offers
          </Button>
        </div>
      )}

      {/* Strategic Guidelines */}
      <div className="mt-16 pt-12 border-t">
        <h3 className="text-2xl font-bold text-center mb-8">When to Use Downsells</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="h-5 w-5 text-blue-500" />
              <h4 className="font-bold text-blue-500">Payment Plans</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Cash flow concerns:</strong> They want it but can't pay upfront
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Budget cycles:</strong> Need to spread across quarters
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Risk mitigation:</strong> Want to tie payments to milestones
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Keep full value:</strong> No discount needed, just payment structure
                </span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-orange-500/10 border border-orange-500/20 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Minus className="h-5 w-5 text-orange-500" />
              <h4 className="font-bold text-orange-500">Feature Reductions</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Budget limitations:</strong> They genuinely can't afford full package
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Limited needs:</strong> Don't actually need all features
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Testing waters:</strong> Want to start small and expand later
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Honest pricing:</strong> Align price with reduced value
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Warning About Discounts */}
      <div className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-lg border border-orange-500/20">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-2 text-orange-500">Important: Avoid Arbitrary Discounts</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Never offer "10% off" or random price cuts without removing features or changing terms.
              This destroys perceived value and trains customers to always ask for discounts.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-500">✓</span>
                <span className="text-muted-foreground">
                  <strong>Good:</strong> "I can offer payment terms" or "I can remove these features"
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">✗</span>
                <span className="text-muted-foreground">
                  <strong>Bad:</strong> "I can give you 15% off" without removing anything
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Value Stats */}
      <div className="mt-16 pt-12 border-t">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-sm text-muted-foreground">
              Payment Plans Available
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">
              Feature Reduction Options
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">
              Price Integrity Maintained
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
