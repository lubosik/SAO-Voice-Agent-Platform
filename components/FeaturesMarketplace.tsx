"use client"

import { useState, useMemo } from 'react'
import { features } from '@/lib/data'
import { FeatureCard } from './FeatureCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import {
  Search,
  Filter,
  X,
  ShoppingCart,
  Calculator,
  Sparkles,
  TrendingUp
} from 'lucide-react'

export function FeaturesMarketplace() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [bundle, setBundle] = useState<string[]>([])
  const [showBundleCalculator, setShowBundleCalculator] = useState(false)

  // Category options
  const categories = [
    { value: 'core', label: 'Core Features', color: 'bg-primary' },
    { value: 'analytics', label: 'Analytics & Intelligence', color: 'bg-chart-4' },
    { value: 'automation', label: 'Automation', color: 'bg-chart-3' },
    { value: 'premium', label: 'Premium Add-ons', color: 'bg-chart-2' },
    { value: 'advanced', label: 'Advanced', color: 'bg-chart-5' },
  ]

  // Filter features
  const filteredFeatures = useMemo(() => {
    return features.filter(feature => {
      const matchesSearch =
        feature.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.capabilities.some(cap => cap.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = !selectedCategory || feature.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  // Bundle calculations
  const bundleFeatures = features.filter(f => bundle.includes(f.id))
  const bundleSetupCost = bundleFeatures.reduce((sum, f) => sum + (f.pricing.setup || 0), 0)
  const bundleMonthlyCost = bundleFeatures.reduce((sum, f) => sum + (f.pricing.monthly || 0), 0)
  const bundleAnnualCost = bundleFeatures.reduce((sum, f) => sum + (f.pricing.annual || 0), 0)

  const totalIndividualCost = 150000 // From data
  const completePackageCost = 68000
  const savingsVsComplete = bundleSetupCost > completePackageCost
    ? bundleSetupCost - completePackageCost
    : 0

  const handleAddToBundle = (featureId: string) => {
    if (!bundle.includes(featureId)) {
      setBundle([...bundle, featureId])
      setShowBundleCalculator(true)
    }
  }

  const handleRemoveFromBundle = (featureId: string) => {
    setBundle(bundle.filter(id => id !== featureId))
  }

  const clearBundle = () => {
    setBundle([])
    setShowBundleCalculator(false)
  }

  return (
    <section id="features" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
          Features Marketplace
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Browse all 12 separately-sellable features. Build your custom bundle or choose a pre-packaged tier.
        </p>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            12 Features Available
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <TrendingUp className="h-4 w-4 mr-2" />
            £150k Individual Value
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Calculator className="h-4 w-4 mr-2" />
            Bundle & Save £82k
          </Badge>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search features, capabilities, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            <Filter className="h-4 w-4 mr-2" />
            All Features
          </Button>
          {categories.map(category => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(
                selectedCategory === category.value ? null : category.value
              )}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Active Filters Display */}
        {(searchQuery || selectedCategory) && (
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-muted-foreground">
              Showing {filteredFeatures.length} of {features.length} features
            </span>
            {(searchQuery || selectedCategory) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory(null)
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredFeatures.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            onAddToBundle={handleAddToBundle}
            isInBundle={bundle.includes(feature.id)}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredFeatures.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            No features match your search criteria
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory(null)
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Bundle Calculator */}
      {bundle.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md">
          <Card className="p-6 shadow-2xl border-2 border-primary">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg">Custom Bundle</h3>
              </div>
              <button
                onClick={() => setShowBundleCalculator(!showBundleCalculator)}
                className="text-muted-foreground hover:text-foreground"
              >
                {showBundleCalculator ? <X className="h-5 w-5" /> : null}
              </button>
            </div>

            {showBundleCalculator && (
              <div className="space-y-4">
                {/* Bundle Items */}
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {bundleFeatures.map(feature => (
                    <div
                      key={feature.id}
                      className="flex items-start justify-between gap-2 p-2 bg-muted/30 rounded"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{feature.name}</div>
                        <div className="text-xs text-muted-foreground">
                          £{(feature.pricing.setup || 0).toLocaleString()}
                          {feature.pricing.monthly && ` + £${feature.pricing.monthly.toLocaleString()}/mo`}
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveFromBundle(feature.id)}
                        className="text-muted-foreground hover:text-destructive flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="pt-4 border-t space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Features:</span>
                    <span className="font-semibold">{bundle.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Setup Cost:</span>
                    <span className="font-semibold">£{bundleSetupCost.toLocaleString()}</span>
                  </div>
                  {bundleMonthlyCost > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monthly:</span>
                      <span className="font-semibold">£{bundleMonthlyCost.toLocaleString()}/mo</span>
                    </div>
                  )}
                  {bundleAnnualCost > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Annual:</span>
                      <span className="font-semibold">£{bundleAnnualCost.toLocaleString()}/yr</span>
                    </div>
                  )}
                </div>

                {/* Savings Alert */}
                {savingsVsComplete > 0 && (
                  <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="text-sm font-semibold text-primary mb-1">
                      💡 Save £{savingsVsComplete.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Choose Complete package instead to save money and get more features!
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="space-y-2">
                  <Button className="w-full">
                    Get Custom Quote
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearBundle}
                  >
                    Clear Bundle
                  </Button>
                </div>
              </div>
            )}

            {!showBundleCalculator && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowBundleCalculator(true)}
              >
                View {bundle.length} Feature{bundle.length !== 1 ? 's' : ''} - £{bundleSetupCost.toLocaleString()}
              </Button>
            )}
          </Card>
        </div>
      )}
    </section>
  )
}
