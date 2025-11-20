"use client"

import { ContinuityOffer } from '@/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Repeat,
  Calendar,
  CheckCircle,
  Clock,
  Target,
  ArrowRight,
  DollarSign,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface ContinuityOfferCardProps {
  offer: ContinuityOffer
}

export function ContinuityOfferCard({ offer }: ContinuityOfferCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      platform: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      campaign: 'bg-green-500/10 text-green-500 border-green-500/20',
      maintenance: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    }
    return colors[category as keyof typeof colors] || 'bg-primary/10 text-primary border-primary/20'
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      platform: '🔄 Platform Continuity',
      campaign: '📈 Campaign License',
      maintenance: '🔧 Maintenance',
    }
    return labels[category as keyof typeof labels] || category
  }

  const formatPrice = () => {
    const parts = []
    if (offer.pricing.setup) {
      parts.push(`£${offer.pricing.setup.toLocaleString()} setup`)
    }
    if (offer.pricing.monthly) {
      parts.push(`£${offer.pricing.monthly.toLocaleString()}/mo`)
    }
    return parts.join(' + ') || 'Included'
  }

  const calculateAnnualValue = () => {
    const monthlyValue = offer.recurringPrice
    const setupValue = offer.pricing.setup || 0
    return setupValue + (monthlyValue * 12)
  }

  return (
    <Card className="group relative flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2">
      {/* Category Badge */}
      <div className="absolute -top-3 left-4">
        <Badge className={`${getCategoryColor(offer.category)} font-semibold border`}>
          {getCategoryLabel(offer.category)}
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
        <div className="mb-4">
          <div className="p-4 bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-lg border border-primary/10">
            <div className="text-2xl font-bold text-primary">{formatPrice()}</div>
            {offer.recurringPrice > 0 && (
              <div className="text-xs text-muted-foreground mt-1">
                £{calculateAnnualValue().toLocaleString()} first year value
              </div>
            )}
          </div>
        </div>

        {/* Recurring Details */}
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="p-3 bg-muted/30 rounded-lg border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Repeat className="h-3 w-3" />
              Recurring
            </div>
            <div className="text-sm font-bold">
              £{offer.recurringPrice.toLocaleString()}/mo
            </div>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Calendar className="h-3 w-3" />
              Billing
            </div>
            <div className="text-sm font-bold capitalize">
              {offer.billingCycle}
            </div>
          </div>
        </div>

        {/* Minimum Commitment */}
        {offer.minimumCommitment && (
          <div className="mb-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
            <div className="flex items-center gap-2 text-sm font-semibold text-orange-500">
              <Clock className="h-4 w-4" />
              {offer.minimumCommitment} Month Minimum
            </div>
          </div>
        )}

        {/* Included Services */}
        <div className="mb-4 flex-1">
          <div className="text-sm font-semibold mb-2">Included Services</div>
          <ul className="space-y-1.5">
            {offer.includedServices.map((service, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* MRR Impact */}
        {offer.recurringPrice > 0 && (
          <div className="mb-4 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
            <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-green-500">
              <DollarSign className="h-4 w-4" />
              MRR Impact
            </div>
            <div className="text-xs text-muted-foreground">
              +£{offer.recurringPrice.toLocaleString()}/month recurring revenue
            </div>
          </div>
        )}

        {/* Expandable Details */}
        <Accordion type="single" collapsible className="mb-4">
          <AccordionItem value="guidance" className="border-none">
            <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
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
        <Button className="w-full group/btn">
          Select This Plan
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Card>
  )
}
