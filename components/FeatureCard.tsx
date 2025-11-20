"use client"

import { Feature, DependencyType } from '@/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Check,
  Link2,
  AlertCircle,
  Sparkles,
  TrendingUp,
  Package,
  Info
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FeatureCardProps {
  feature: Feature
  onAddToBundle?: (featureId: string) => void
  isInBundle?: boolean
}

export function FeatureCard({ feature, onAddToBundle, isInBundle = false }: FeatureCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      core: 'bg-primary/10 text-primary border-primary/20',
      premium: 'bg-chart-2/10 text-chart-2 border-chart-2/20',
      automation: 'bg-chart-3/10 text-chart-3 border-chart-3/20',
      analytics: 'bg-chart-4/10 text-chart-4 border-chart-4/20',
      advanced: 'bg-chart-5/10 text-chart-5 border-chart-5/20',
    }
    return colors[category as keyof typeof colors] || colors.core
  }

  const getDependencyIcon = (type: DependencyType) => {
    switch (type) {
      case DependencyType.CRITICAL:
        return <AlertCircle className="h-4 w-4" />
      case DependencyType.PAIRED:
        return <Link2 className="h-4 w-4" />
      case DependencyType.STANDALONE:
        return <Sparkles className="h-4 w-4" />
      default:
        return null
    }
  }

  const getDependencyLabel = (type: DependencyType) => {
    switch (type) {
      case DependencyType.CRITICAL:
        return 'Critical Foundation'
      case DependencyType.PAIRED:
        return 'Requires Other Features'
      case DependencyType.STANDALONE:
        return 'Standalone Ready'
      default:
        return ''
    }
  }

  const formatPrice = () => {
    const parts = []
    if (feature.pricing.setup) {
      parts.push(`£${feature.pricing.setup.toLocaleString()} setup`)
    }
    if (feature.pricing.monthly) {
      parts.push(`£${feature.pricing.monthly.toLocaleString()}/mo`)
    }
    if (feature.pricing.annual) {
      parts.push(`£${feature.pricing.annual.toLocaleString()}/yr`)
    }
    if (feature.pricing.volumeTiers && feature.pricing.volumeTiers.length > 0) {
      const minPrice = Math.min(...feature.pricing.volumeTiers.map(t => t.price))
      const maxPrice = Math.max(...feature.pricing.volumeTiers.map(t => t.price))
      parts.push(`£${minPrice.toLocaleString()}-£${maxPrice.toLocaleString()}/mo`)
    }
    return parts.join(' + ')
  }

  return (
    <Card className="group relative flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 hover:border-primary/50">
      {/* Category Badge */}
      <div className="absolute -top-3 left-4">
        <Badge className={`${getCategoryColor(feature.category)} font-semibold`}>
          {feature.category.toUpperCase()}
        </Badge>
      </div>

      {/* Standalone Badge */}
      {feature.standaloneSellable && (
        <div className="absolute -top-3 right-4">
          <Badge variant="outline" className="bg-background border-primary text-primary">
            <Package className="h-3 w-3 mr-1" />
            Standalone
          </Badge>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {feature.name}
          </h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>

        {/* Pricing */}
        <div className="mb-4 p-4 bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-lg border border-primary/10">
          <div className="text-2xl font-bold text-primary mb-1">
            {formatPrice()}
          </div>
          {feature.pricing.volumeTiers && feature.pricing.volumeTiers.length > 0 && (
            <p className="text-xs text-muted-foreground">Volume-based pricing available</p>
          )}
        </div>

        {/* What It Is & Why Valuable */}
        <div className="mb-4 space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Info className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">What it is</span>
            </div>
            <p className="text-sm text-muted-foreground pl-6">{feature.whatItIs}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-chart-4" />
              <span className="text-sm font-semibold">Why it's valuable</span>
            </div>
            <p className="text-sm text-muted-foreground pl-6">{feature.whyValuable}</p>
          </div>
        </div>

        {/* Dependency Badge */}
        <div className="mb-4">
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            {getDependencyIcon(feature.dependency.type)}
            <div className="flex-1">
              <div className="text-xs font-semibold">
                {getDependencyLabel(feature.dependency.type)}
              </div>
              <div className="text-xs text-muted-foreground">
                {feature.dependency.description}
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Details */}
        <Accordion type="single" collapsible className="mb-4">
          <AccordionItem value="capabilities" className="border-none">
            <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline">
              Capabilities ({feature.capabilities.length})
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1.5 pl-2">
                {feature.capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="market" className="border-none">
            <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline">
              Market Comparison
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Competitors:</span>{' '}
                  <span className="text-muted-foreground">
                    {feature.marketComparison.competitors.join(', ')}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Market Range:</span>{' '}
                  <span className="text-muted-foreground">
                    {feature.marketComparison.priceRange}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Our Position:</span>{' '}
                  <span className="text-muted-foreground">
                    {feature.marketComparison.positioning}
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="hormozi" className="border-none">
            <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline">
              Value Stack Insight
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground italic">
                "{feature.hormoziApplication}"
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Volume Tiers (if applicable) */}
        {feature.pricing.volumeTiers && feature.pricing.volumeTiers.length > 0 && (
          <div className="mb-4 p-3 bg-muted/30 rounded-lg">
            <div className="text-xs font-semibold mb-2">Volume Pricing</div>
            <div className="space-y-1">
              {feature.pricing.volumeTiers.map((tier, index) => (
                <div key={index} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{tier.label}</span>
                  <span className="font-semibold">£{tier.price.toLocaleString()}/mo</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-4">
          {onAddToBundle && (
            <Button
              className="w-full"
              variant={isInBundle ? 'outline' : 'default'}
              onClick={() => onAddToBundle(feature.id)}
              disabled={isInBundle}
            >
              {isInBundle ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Added to Bundle
                </>
              ) : (
                'Add to Custom Bundle'
              )}
            </Button>
          )}
          {!onAddToBundle && (
            <Button className="w-full" variant="outline">
              Learn More
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
