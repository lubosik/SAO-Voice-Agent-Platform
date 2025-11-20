"use client"

import { CoachingTier } from '@/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  Clock,
  Calendar,
  CheckCircle,
  Target,
  ArrowRight,
  AlertCircle,
} from 'lucide-react'

interface CoachingTierCardProps {
  tier: CoachingTier
  isPopular?: boolean
}

export function CoachingTierCard({ tier, isPopular = false }: CoachingTierCardProps) {
  const getTierColor = () => {
    if (tier.price <= 1000) return 'from-blue-500/10 to-blue-500/5'
    if (tier.price <= 3000) return 'from-green-500/10 to-green-500/5'
    if (tier.price <= 6000) return 'from-purple-500/10 to-purple-500/5'
    return 'from-orange-500/10 to-orange-500/5'
  }

  const getTierBadgeColor = () => {
    if (tier.price <= 1000) return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
    if (tier.price <= 3000) return 'bg-green-500/10 text-green-500 border-green-500/20'
    if (tier.price <= 6000) return 'bg-purple-500/10 text-purple-500 border-purple-500/20'
    return 'bg-orange-500/10 text-orange-500 border-orange-500/20'
  }

  const getIntensityLabel = () => {
    if (tier.sessionFrequency.includes('Weekly')) return 'High-Touch'
    if (tier.sessionFrequency.includes('Monthly')) return 'Strategic'
    if (tier.sessionFrequency.includes('Quarterly')) return 'Light-Touch'
    return 'Executive'
  }

  return (
    <Card className={`group relative flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
      isPopular ? 'border-2 border-primary shadow-xl ring-2 ring-primary/20' : 'border-2'
    }`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-primary to-chart-2 text-white">
            Most Popular
          </Badge>
        </div>
      )}

      {/* Intensity Badge */}
      <div className="absolute -top-3 right-4">
        <Badge className={`${getTierBadgeColor()} font-semibold border`}>
          {getIntensityLabel()}
        </Badge>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {tier.name}
          </h3>
        </div>

        {/* Pricing */}
        <div className={`mb-4 p-4 bg-gradient-to-br ${getTierColor()} rounded-lg border border-primary/10`}>
          <div className="text-3xl font-bold text-primary mb-1">
            £{tier.price.toLocaleString()}/mo
          </div>
          <div className="text-xs text-muted-foreground">
            £{(tier.price * 12).toLocaleString()}/year
          </div>
        </div>

        {/* Session Details */}
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="p-3 bg-muted/30 rounded-lg border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Calendar className="h-3 w-3" />
              Frequency
            </div>
            <div className="text-sm font-bold">{tier.sessionFrequency}</div>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Clock className="h-3 w-3" />
              Duration
            </div>
            <div className="text-sm font-bold">{tier.sessionDuration} min</div>
          </div>
        </div>

        {/* Minimum Commitment */}
        <div className="mb-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
          <div className="flex items-center gap-2 text-sm font-semibold text-orange-500">
            <AlertCircle className="h-4 w-4" />
            {tier.minimumCommitment} Month Minimum Commitment
          </div>
        </div>

        {/* Included Services */}
        <div className="mb-4 flex-1">
          <div className="text-sm font-semibold mb-2 flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            What's Included
          </div>
          <ul className="space-y-2">
            {tier.includedServices.map((service, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Target Audience */}
        <div className="mb-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
          <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-primary">
            <Target className="h-4 w-4" />
            Best For
          </div>
          <div className="text-xs text-muted-foreground">{tier.targetAudience}</div>
        </div>

        {/* CTA */}
        <Button
          className={`w-full group/btn ${isPopular ? '' : 'variant-outline'}`}
          variant={isPopular ? 'default' : 'outline'}
        >
          Select This Tier
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Card>
  )
}
