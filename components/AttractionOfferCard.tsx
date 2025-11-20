"use client"

import {
  DecoyOffer,
  BuyXGetYOffer,
  PayLessNowOffer,
  TrialOffer,
} from '@/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Gift,
  Clock,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Calendar,
  CreditCard,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type AttractionOffer = DecoyOffer | BuyXGetYOffer | PayLessNowOffer | TrialOffer

interface AttractionOfferCardProps {
  offer: AttractionOffer
}

export function AttractionOfferCard({ offer }: AttractionOfferCardProps) {
  const getOfferTypeColor = (type: string) => {
    const colors = {
      decoy: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      buy_x_get_y: 'bg-green-500/10 text-green-500 border-green-500/20',
      pay_less_now: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      trial: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    }
    return colors[offer.subType as keyof typeof colors] || 'bg-primary/10 text-primary border-primary/20'
  }

  const getOfferTypeLabel = (subType: string) => {
    const labels = {
      decoy: '🎯 Decoy Offer',
      buy_x_get_y: '🎁 Buy X Get Y',
      pay_less_now: '💰 Pay Less Now',
      trial: '⚡ Trial Offer',
    }
    return labels[subType as keyof typeof labels] || subType
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

  const renderOfferSpecifics = () => {
    switch (offer.subType) {
      case 'decoy':
        if ('deliberatelyMissing' in offer) {
          return (
            <div className="space-y-4">
              {/* What Buyer Gets */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-sm font-semibold">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  What's Included
                </div>
                <ul className="space-y-1 pl-6">
                  {offer.whatBuyerGets.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Deliberately Missing */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-orange-500">
                  <XCircle className="h-4 w-4" />
                  Deliberately Missing
                </div>
                <ul className="space-y-1 pl-6">
                  {offer.deliberatelyMissing.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Upgrade Target */}
              {offer.upgradeTarget && (
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-primary">
                    <TrendingUp className="h-4 w-4" />
                    Upgrade Path Available
                  </div>
                  <div className="text-sm text-muted-foreground">
                    £{offer.upgradeTarget.creditsApplied.toLocaleString()} credit toward upgrade within{' '}
                    {offer.upgradeTarget.timeframe} days
                  </div>
                </div>
              )}
            </div>
          )
        }
        break

      case 'buy_x_get_y':
        if ('buyItems' in offer && 'freeItems' in offer) {
          return (
            <div className="space-y-4">
              {/* Buy Items */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-sm font-semibold">
                  <CreditCard className="h-4 w-4 text-primary" />
                  You Buy
                </div>
                {offer.buyItems.map((item, idx) => (
                  <div key={idx} className="pl-6 text-sm">
                    <span className="text-muted-foreground">{item.item}</span>
                    <span className="ml-2 font-semibold">£{item.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {/* Free Items */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-green-500">
                  <Gift className="h-4 w-4" />
                  You Get Free
                </div>
                {offer.freeItems.map((item, idx) => (
                  <div key={idx} className="pl-6 text-sm">
                    <span className="text-muted-foreground">{item.item}</span>
                    <span className="ml-2 font-semibold text-green-500">
                      £{item.value.toLocaleString()} value
                    </span>
                  </div>
                ))}
              </div>

              {/* Total Savings */}
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="text-sm font-semibold text-green-500">
                  💰 Total Savings: £{offer.totalSavings.toLocaleString()}
                </div>
              </div>
            </div>
          )
        }
        break

      case 'pay_less_now':
        if ('upfrontPayment' in offer && 'deferredPayment' in offer) {
          return (
            <div className="space-y-4">
              {/* Payment Structure */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Pay Now</div>
                  <div className="text-lg font-bold text-primary">
                    £{offer.upfrontPayment.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 bg-muted/50 border rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Pay Later</div>
                  <div className="text-lg font-bold">
                    £{offer.deferredPayment.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Waiver Condition */}
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-green-500">
                  <AlertTriangle className="h-4 w-4" />
                  Waiver Condition
                </div>
                <div className="text-sm text-muted-foreground">{offer.waiverCondition}</div>
              </div>

              {/* Free Items */}
              {offer.freeItems && offer.freeItems.length > 0 && (
                <div>
                  <div className="text-sm font-semibold mb-2">Bonus Items</div>
                  {offer.freeItems.map((item, idx) => (
                    <div key={idx} className="pl-4 text-sm text-muted-foreground">
                      • {item.item} (£{item.value.toLocaleString()} value)
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        }
        break

      case 'trial':
        if ('trialPrice' in offer && 'deliverables' in offer) {
          return (
            <div className="space-y-4">
              {/* Trial Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Trial Price</div>
                  <div className="text-lg font-bold text-purple-500">
                    £{offer.trialPrice.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 bg-muted/50 border rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Delivery</div>
                  <div className="text-lg font-bold">{offer.deliveryTime} days</div>
                </div>
              </div>

              {/* Scope */}
              <div>
                <div className="text-sm font-semibold mb-1">Scope</div>
                <div className="text-sm text-muted-foreground">{offer.scope}</div>
              </div>

              {/* Deliverables */}
              <div>
                <div className="text-sm font-semibold mb-2">Deliverables</div>
                <ul className="space-y-1">
                  {offer.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Continuation Paths */}
              {offer.continuationPaths && offer.continuationPaths.length > 0 && (
                <div>
                  <div className="text-sm font-semibold mb-2">Continuation Options</div>
                  <div className="space-y-2">
                    {offer.continuationPaths.map((path, idx) => (
                      <div key={idx} className="p-2 bg-muted/30 rounded text-sm">
                        <div className="font-medium">{path.pathName}</div>
                        <div className="text-muted-foreground">
                          £{path.credits.toLocaleString()} credit applied
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        }
        break
    }
    return null
  }

  return (
    <Card className="group relative flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2">
      {/* Offer Type Badge */}
      <div className="absolute -top-3 left-4">
        <Badge className={`${getOfferTypeColor(offer.subType || '')} font-semibold border`}>
          {getOfferTypeLabel(offer.subType || '')}
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

        {/* Offer-Specific Content */}
        <div className="mb-4 flex-1">{renderOfferSpecifics()}</div>

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
        <Button className="w-full group/btn">
          Select This Offer
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Card>
  )
}
