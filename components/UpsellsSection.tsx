"use client"

import { useState } from 'react'
import { upsellOffers } from '@/lib/data'
import { UpsellOfferCard } from './UpsellOfferCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  Sparkles,
  BarChart,
  Users,
  Info,
} from 'lucide-react'

export function UpsellsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { value: 'all', label: 'All Services', icon: TrendingUp },
    { value: 'capability', label: 'Capability', icon: Sparkles },
    { value: 'intelligence', label: 'Intelligence', icon: BarChart },
    { value: 'pipeline', label: 'Pipeline', icon: TrendingUp },
    { value: 'coaching', label: 'Coaching', icon: Users },
  ]

  const filteredOffers = selectedCategory === 'all'
    ? upsellOffers
    : upsellOffers.filter(offer => offer.category === selectedCategory)

  // Count by category
  const categoryCounts = {
    capability: upsellOffers.filter(o => o.category === 'capability').length,
    intelligence: upsellOffers.filter(o => o.category === 'intelligence').length,
    pipeline: upsellOffers.filter(o => o.category === 'pipeline').length,
    coaching: upsellOffers.filter(o => o.category === 'coaching').length,
  }

  return (
    <section id="upsells" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
          Add-On Services
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Expand your platform capabilities with premium add-ons designed to scale your success.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="px-4 py-2">
            <TrendingUp className="h-4 w-4 mr-2" />
            12 Add-On Services
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            4 Categories
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <BarChart className="h-4 w-4 mr-2" />
            ROI-Focused
          </Badge>
        </div>
      </div>

      {/* Category Explanation */}
      <div className="max-w-4xl mx-auto mb-12 p-6 bg-muted/30 rounded-lg border">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold mb-2">About Add-On Services</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Enhance your platform with additional capabilities and services. Each add-on is designed to complement your existing package and many can be applied as credit toward future upgrades.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-semibold text-blue-500">⚡ Capability:</span>{' '}
                <span className="text-muted-foreground">
                  Add features to expand what the platform can do
                </span>
              </div>
              <div>
                <span className="font-semibold text-purple-500">📊 Intelligence:</span>{' '}
                <span className="text-muted-foreground">
                  Enhance analytics and strategic insights
                </span>
              </div>
              <div>
                <span className="font-semibold text-green-500">📈 Pipeline:</span>{' '}
                <span className="text-muted-foreground">
                  Scale with additional campaigns and markets
                </span>
              </div>
              <div>
                <span className="font-semibold text-orange-500">🎓 Coaching:</span>{' '}
                <span className="text-muted-foreground">
                  Strategic guidance for optimizing performance
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
            const count = category.value === 'all'
              ? upsellOffers.length
              : categoryCounts[category.value as keyof typeof categoryCounts] || 0

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
                  {count}
                </Badge>
              </Button>
            )
          })}
        </div>
      </div>

      {/* Offers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredOffers.map((offer) => (
          <UpsellOfferCard key={offer.id} offer={offer} />
        ))}
      </div>

      {/* No Results */}
      {filteredOffers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No offers in this category</p>
          <Button variant="outline" onClick={() => setSelectedCategory('all')}>
            View All Offers
          </Button>
        </div>
      )}

      {/* Timing Guidelines */}
      <div className="mt-16 pt-12 border-t">
        <h3 className="text-2xl font-bold text-center mb-8">Upsell Timing Strategy</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <div className="text-2xl font-bold text-blue-500 mb-2">30 Days</div>
            <div className="text-sm font-semibold mb-2">Capability Upsells</div>
            <div className="text-xs text-muted-foreground">
              After basic calling works, add features they mention needing
            </div>
          </div>
          <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <div className="text-2xl font-bold text-purple-500 mb-2">45 Days</div>
            <div className="text-sm font-semibold mb-2">Intelligence Upsells</div>
            <div className="text-xs text-muted-foreground">
              When they have enough data to benefit from deeper insights
            </div>
          </div>
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="text-2xl font-bold text-green-500 mb-2">60 Days</div>
            <div className="text-sm font-semibold mb-2">Pipeline Upsells</div>
            <div className="text-xs text-muted-foreground">
              After first campaign proves ROI, expand to new markets
            </div>
          </div>
          <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
            <div className="text-2xl font-bold text-orange-500 mb-2">90 Days</div>
            <div className="text-sm font-semibold mb-2">Coaching Upsells</div>
            <div className="text-xs text-muted-foreground">
              When they hit plateau and need expert optimization
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-primary/10 via-chart-2/10 to-chart-3/10 rounded-lg border border-primary/20">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Upsell Strategy
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Successful upselling increases customer LTV by 40-60% while improving their results:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">
              <strong>Present after success:</strong> Wait until they've seen results before expanding
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">
              <strong>Lead with ROI:</strong> Every upsell includes clear value justification
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">
              <strong>Credit toward Complete:</strong> Individual features credit toward full package
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-muted-foreground">
              <strong>Timing matters:</strong> Present upsells when customer mentions the need
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
