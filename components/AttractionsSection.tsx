"use client"

import { useState } from 'react'
import { attractionOffers, decoyOffers, buyXGetYOffers, payLessNowOffers, trialOffers } from '@/lib/data'
import { AttractionOfferCard } from './AttractionOfferCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Target,
  Gift,
  DollarSign,
  Zap,
  Info
} from 'lucide-react'

export function AttractionsSection() {
  const [selectedType, setSelectedType] = useState<string>('all')

  const offerTypes = [
    { value: 'all', label: 'All Packages', icon: Gift, count: attractionOffers.length },
    { value: 'decoy', label: 'Premium Packages', icon: Target, count: decoyOffers.length },
    { value: 'buy_x_get_y', label: 'Bundle Deals', icon: Gift, count: buyXGetYOffers.length },
    { value: 'pay_less_now', label: 'Early Bird Offers', icon: DollarSign, count: payLessNowOffers.length },
    { value: 'trial', label: 'Trial Packages', icon: Zap, count: trialOffers.length },
  ]

  const getFilteredOffers = () => {
    switch (selectedType) {
      case 'decoy':
        return decoyOffers
      case 'buy_x_get_y':
        return buyXGetYOffers
      case 'pay_less_now':
        return payLessNowOffers
      case 'trial':
        return trialOffers
      default:
        return attractionOffers
    }
  }

  const filteredOffers = getFilteredOffers()

  return (
    <section id="attractions" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
          Special Packages
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Exclusive packages designed to deliver maximum value. Choose from bundles, trials, and flexible payment options.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="px-4 py-2">
            <Gift className="h-4 w-4 mr-2" />
            8 Special Packages
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Target className="h-4 w-4 mr-2" />
            4 Offer Types
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Zap className="h-4 w-4 mr-2" />
            Credit System Included
          </Badge>
        </div>
      </div>

      {/* Offer Type Explanation */}
      <div className="max-w-4xl mx-auto mb-12 p-6 bg-muted/30 rounded-lg border">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold mb-2">About Attraction Offers</h3>
            <p className="text-sm text-muted-foreground mb-4">
              These offers are designed using Hormozi's value ladder principles to attract prospects
              at different commitment levels. Each offer includes upgrade paths with credits applied
              within specified timeframes.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-semibold text-orange-500">🎯 Decoy Offers:</span>{' '}
                <span className="text-muted-foreground">
                  Deliberately limited to make real offers look better
                </span>
              </div>
              <div>
                <span className="font-semibold text-green-500">🎁 Buy X Get Y:</span>{' '}
                <span className="text-muted-foreground">
                  Maximize perceived value with free bonuses
                </span>
              </div>
              <div>
                <span className="font-semibold text-blue-500">💰 Pay Less Now:</span>{' '}
                <span className="text-muted-foreground">
                  Defer payment to reduce cash impact today
                </span>
              </div>
              <div>
                <span className="font-semibold text-purple-500">⚡ Trial Offers:</span>{' '}
                <span className="text-muted-foreground">
                  Low-commitment proof mechanisms
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
          <AttractionOfferCard key={offer.id} offer={offer} />
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

      {/* Value Proposition */}
      <div className="mt-16 pt-12 border-t">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">30-90</div>
            <div className="text-sm text-muted-foreground">
              Days Credit Window for Upgrades
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">£1.2k-£68k</div>
            <div className="text-sm text-muted-foreground">
              Price Range Across All Offers
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">£82k</div>
            <div className="text-sm text-muted-foreground">
              Max Savings with Complete Package
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Note */}
      <div className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-primary/10 via-chart-2/10 to-chart-3/10 rounded-lg border border-primary/20">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Strategic Use
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          These offers are designed to be presented at specific stages of the buyer journey:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">
              <strong>Decoy offers</strong> create contrast to make real offers more attractive
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">
              <strong>Buy X Get Y</strong> maximize perceived value for qualified buyers
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">
              <strong>Pay Less Now</strong> removes cash flow objections while keeping price intact
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">
              <strong>Trial offers</strong> convert skeptics through low-commitment proof
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
