"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  CheckCircle,
  XCircle,
  ArrowLeftRight,
  X,
  DollarSign,
  Calendar,
} from 'lucide-react'
import { pricingTiers } from '@/lib/data'

export function ComparisonTool() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTiers, setSelectedTiers] = useState<string[]>([])

  const availableTiers = pricingTiers.filter(
    (tier) => ['complete', 'foundation', 'analyzer'].includes(tier.id)
  )

  const toggleTier = (tierId: string) => {
    setSelectedTiers((prev) => {
      if (prev.includes(tierId)) {
        return prev.filter((id) => id !== tierId)
      }
      if (prev.length >= 3) {
        return prev // Limit to 3 comparisons
      }
      return [...prev, tierId]
    })
  }

  const comparedTiers = availableTiers.filter((tier) =>
    selectedTiers.includes(tier.id)
  )

  // Get all unique features
  const allFeatures = Array.from(
    new Set(
      comparedTiers.flatMap((tier) => tier.features)
    )
  )

  const tierHasFeature = (tierId: string, feature: string) => {
    const tier = comparedTiers.find((t) => t.id === tierId)
    return tier?.features.includes(feature) || false
  }

  return (
    <>
      {/* Comparison Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        <ArrowLeftRight className="h-4 w-4" />
        Compare Plans
        {selectedTiers.length > 0 && (
          <Badge variant="secondary" className="ml-1">
            {selectedTiers.length}
          </Badge>
        )}
      </Button>

      {/* Comparison Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="fixed inset-4 z-50 overflow-auto">
            <Card className="max-w-6xl mx-auto p-6 shadow-2xl border-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Compare Pricing Tiers</h2>
                  <p className="text-sm text-muted-foreground">
                    Select up to 3 tiers to compare side-by-side
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Tier Selection */}
              <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b">
                {availableTiers.map((tier) => (
                  <Button
                    key={tier.id}
                    variant={selectedTiers.includes(tier.id) ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleTier(tier.id)}
                    className="gap-2"
                  >
                    {tier.name}
                    {tier.isPopular && (
                      <Badge variant="secondary" className="ml-1 text-xs">
                        Popular
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>

              {/* Comparison Content */}
              {comparedTiers.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  Select at least one tier to compare
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2">
                        <th className="text-left p-4 w-1/4 bg-muted/30">
                          <div className="font-bold">Feature</div>
                        </th>
                        {comparedTiers.map((tier) => (
                          <th key={tier.id} className="p-4 bg-muted/30 text-center">
                            <div className="font-bold text-lg mb-2">{tier.name}</div>
                            {tier.isPopular && (
                              <Badge className="mb-2">Most Popular</Badge>
                            )}
                            <div className="text-2xl font-bold text-primary mb-1">
                              £{tier.setupCost.toLocaleString()}
                            </div>
                            <div className="text-sm text-muted-foreground mb-2">
                              + £{tier.monthlyCost.toLocaleString()}/mo
                            </div>
                            <div className="text-xs text-muted-foreground">
                              £{(tier.setupCost + tier.monthlyCost * 12).toLocaleString()}/year
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Pricing Details Row */}
                      <tr className="border-b hover:bg-muted/20">
                        <td className="p-4 font-medium">Setup Cost</td>
                        {comparedTiers.map((tier) => (
                          <td key={tier.id} className="p-4 text-center">
                            £{tier.setupCost.toLocaleString()}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b hover:bg-muted/20">
                        <td className="p-4 font-medium">Monthly Cost</td>
                        {comparedTiers.map((tier) => (
                          <td key={tier.id} className="p-4 text-center">
                            £{tier.monthlyCost.toLocaleString()}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b hover:bg-muted/20 bg-green-500/5">
                        <td className="p-4 font-medium">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-green-500" />
                            First Year Total
                          </div>
                        </td>
                        {comparedTiers.map((tier) => (
                          <td key={tier.id} className="p-4 text-center font-bold text-green-500">
                            £{(tier.setupCost + tier.monthlyCost * 12).toLocaleString()}
                          </td>
                        ))}
                      </tr>

                      {/* Features Rows */}
                      <tr className="border-b">
                        <td colSpan={comparedTiers.length + 1} className="p-4 font-bold bg-muted/30">
                          Features Included
                        </td>
                      </tr>
                      {allFeatures.map((feature, idx) => (
                        <tr key={idx} className="border-b hover:bg-muted/20">
                          <td className="p-4 text-sm">{feature}</td>
                          {comparedTiers.map((tier) => (
                            <td key={tier.id} className="p-4 text-center">
                              {tierHasFeature(tier.id, feature) ? (
                                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                              ) : (
                                <XCircle className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 mt-6 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={() => setSelectedTiers([])}
                  disabled={selectedTiers.length === 0}
                  className="flex-1"
                >
                  Clear Selection
                </Button>
                <Button onClick={() => setIsOpen(false)} className="flex-1">
                  Done
                </Button>
              </div>
            </Card>
          </div>
        </>
      )}
    </>
  )
}
