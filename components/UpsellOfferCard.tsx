"use client"

import { UpsellOffer } from '@/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  Clock,
  Target,
  DollarSign,
  ArrowRight,
  Sparkles,
  BarChart,
  Users,
  Zap,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface UpsellOfferCardProps {
  offer: UpsellOffer
}

export function UpsellOfferCard({ offer }: UpsellOfferCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      capability: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      intelligence: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      pipeline: 'bg-green-500/10 text-green-500 border-green-500/20',
      coaching: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    }
    return colors[category as keyof typeof colors] || 'bg-primary/10 text-primary border-primary/20'
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'capability':
        return <Sparkles className="h-4 w-4" />
      case 'intelligence':
        return <BarChart className="h-4 w-4" />
      case 'pipeline':
        return <TrendingUp className="h-4 w-4" />
      case 'coaching':
        return <Users className="h-4 w-4" />
      default:
        return null
    }
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      capability: '⚡ Capability Upgrade',
      intelligence: '📊 Intelligence Add-on',
      pipeline: '📈 Pipeline Expansion',
      coaching: '🎓 Coaching & Strategy',
    }
    return labels[category as keyof typeof labels] || category
  }

  const formatPrice = () => {
    const parts = []
    if (offer.pricing.setup) {
      parts.push(`£${offer.pricing.setup.toLocaleString()}`)
    }
    if (offer.pricing.monthly) {
      parts.push(`£${offer.pricing.monthly.toLocaleString()}/mo`)
    }
    return parts.join(' + ') || 'Custom Pricing'
  }

  return (
    <Card className="group relative flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 hover:border-primary/50">
      {/* Category Badge */}
      <div className="absolute -top-3 left-4">
        <Badge className={`${getCategoryColor(offer.category)} font-semibold border`}>
          <span className="flex items-center gap-1">
            {getCategoryIcon(offer.category)}
            {getCategoryLabel(offer.category)}
          </span>
        </Badge>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {offer.name}
          </h3>
          <p className="text-sm text-muted-foreground">{offer.description}</p>
        </div>

        {/* Pricing */}
        <div className="mb-4 p-4 bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-lg border border-primary/10">
          <div className="text-2xl font-bold text-primary">{formatPrice()}</div>
        </div>

        {/* Improvements */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2 text-sm font-semibold">
            <Zap className="h-4 w-4 text-primary" />
            What You Get
          </div>
          <ul className="space-y-1.5">
            {offer.improvements.map((improvement, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ROI Justification */}
        <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
          <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-green-500">
            <DollarSign className="h-4 w-4" />
            ROI Justification
          </div>
          <p className="text-sm text-muted-foreground">{offer.roiJustification}</p>
        </div>

        {/* Credit Toward Complete */}
        {offer.creditIfUpgrade && (
          <div className="mb-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
            <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-primary">
              <TrendingUp className="h-4 w-4" />
              Upgrade Credit Available
            </div>
            <p className="text-sm text-muted-foreground">
              £{offer.creditIfUpgrade.creditAmount.toLocaleString()} credit toward Complete package
              within {offer.creditIfUpgrade.timeframe} days
            </p>
          </div>
        )}

        {/* Expandable Details */}
        <Accordion type="single" collapsible className="mb-4">
          <AccordionItem value="timing" className="border-none">
            <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                When to Present
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Timing:</span>{' '}
                  <span className="text-muted-foreground">{offer.whenToPresent}</span>
                </div>
                <div>
                  <span className="font-medium">Target:</span>{' '}
                  <span className="text-muted-foreground">{offer.targetAudience}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA */}
        <div className="mt-auto pt-4">
          <Button className="w-full group/btn">
            Add This Upsell
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
