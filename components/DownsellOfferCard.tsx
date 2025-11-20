"use client"

import {
  PaymentPlanDownsell,
  FeatureDownsell,
} from '@/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  CreditCard,
  TrendingDown,
  CheckCircle,
  XCircle,
  ArrowRight,
  Clock,
  Target,
  DollarSign,
  Minus,
  Plus,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type DownsellOffer = PaymentPlanDownsell | FeatureDownsell

interface DownsellOfferCardProps {
  offer: DownsellOffer
}

export function DownsellOfferCard({ offer }: DownsellOfferCardProps) {
  const isPaymentPlan = offer.subType === 'payment_plan'
  const isFeatureReduction = offer.subType === 'feature_reduction'

  const getOfferTypeColor = () => {
    return isPaymentPlan
      ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      : 'bg-orange-500/10 text-orange-500 border-orange-500/20'
  }

  const getOfferTypeLabel = () => {
    return isPaymentPlan ? '💰 Payment Plan' : '📉 Feature Reduction'
  }

  const formatPrice = () => {
    const parts = []
    if (offer.pricing.setup) {
      parts.push(`£${offer.pricing.setup.toLocaleString()}`)
    }
    if (offer.pricing.monthly) {
      parts.push(`£${offer.pricing.monthly.toLocaleString()}/mo`)
    }
    if (offer.pricing.annual) {
      parts.push(`£${offer.pricing.annual.toLocaleString()}/yr`)
    }
    return parts.join(' + ') || 'Custom Pricing'
  }

  const renderPaymentSchedule = () => {
    if (isPaymentPlan && 'paymentSchedule' in offer) {
      return (
        <div className="space-y-4">
          {/* Original Price vs Payment Plan */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-muted/50 border rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Original Price</div>
              <div className="text-lg font-bold line-through text-muted-foreground">
                £{offer.originalPrice.toLocaleString()}
              </div>
            </div>
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Same Total</div>
              <div className="text-lg font-bold text-blue-500">
                £{offer.originalPrice.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Payment Schedule */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold">
              <Calendar className="h-4 w-4 text-primary" />
              Payment Schedule
            </div>
            <div className="space-y-2">
              {offer.paymentSchedule.map((payment, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between p-3 bg-muted/30 rounded-lg border"
                >
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{payment.timing}</div>
                    <div className="text-xs text-muted-foreground">{payment.milestone}</div>
                  </div>
                  <div className="text-sm font-bold text-primary">
                    £{payment.amount.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Intact Badge */}
          {offer.keepsPriceIntact && (
            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center gap-2 text-green-500 text-sm font-semibold">
                <CheckCircle className="h-4 w-4" />
                Full Value Retained - No Discount Required
              </div>
            </div>
          )}
        </div>
      )
    }
    return null
  }

  const renderFeatureComparison = () => {
    if (isFeatureReduction && 'removedFeatures' in offer && 'includedFeatures' in offer) {
      return (
        <div className="space-y-4">
          {/* Original Price vs Reduced Price */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-muted/50 border rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Before</div>
              <div className="text-lg font-bold line-through text-muted-foreground">
                £{offer.reducedPrice > 32000 ? '68,000' : offer.reducedPrice > 15000 ? '32,000' : '15,000'}
              </div>
            </div>
            <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Reduced To</div>
              <div className="text-lg font-bold text-orange-500">
                £{offer.reducedPrice.toLocaleString()}
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-green-500">
              <CheckCircle className="h-4 w-4" />
              What's Included
            </div>
            <ul className="space-y-1 pl-6">
              {offer.includedFeatures.map((item, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <Plus className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What's Removed */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-orange-500">
              <XCircle className="h-4 w-4" />
              Features Removed
            </div>
            <ul className="space-y-1 pl-6">
              {offer.removedFeatures.map((item, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <Minus className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Upgrade Path */}
          {offer.upgradePath && (
            <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-primary">
                <TrendingDown className="h-4 w-4" />
                Upgrade Path Available
              </div>
              <div className="text-sm text-muted-foreground">
                Add £{offer.upgradePath.additionalCost.toLocaleString()} to upgrade to full package
              </div>
            </div>
          )}
        </div>
      )
    }
    return null
  }

  return (
    <Card className="group relative flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2">
      {/* Offer Type Badge */}
      <div className="absolute -top-3 left-4">
        <Badge className={`${getOfferTypeColor()} font-semibold border`}>
          {getOfferTypeLabel()}
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
          {isPaymentPlan && 'originalPrice' in offer && (
            <div className="text-xs text-muted-foreground mt-1">
              Total: £{offer.originalPrice.toLocaleString()}
            </div>
          )}
        </div>

        {/* Offer-Specific Content */}
        <div className="mb-4 flex-1">
          {renderPaymentSchedule()}
          {renderFeatureComparison()}
        </div>

        {/* Expandable Details */}
        <Accordion type="single" collapsible className="mb-4">
          <AccordionItem value="guidance" className="border-none">
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
        <Button className="w-full group/btn" variant="outline">
          Select This Option
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Card>
  )
}
