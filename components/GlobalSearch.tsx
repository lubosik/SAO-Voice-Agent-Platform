"use client"

import { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Search,
  X,
  DollarSign,
  Sparkles,
  Target,
  TrendingUp,
  TrendingDown,
  Repeat,
} from 'lucide-react'
import {
  features,
  pricingTiers,
  attractionOffers,
  upsellOffers,
  downsellOffers,
  continuityOffers,
} from '@/lib/data'

interface SearchResult {
  id: string
  name: string
  description: string
  type: 'pricing' | 'feature' | 'attraction' | 'upsell' | 'downsell' | 'continuity'
  price?: string
  section: string
  href: string
}

export function GlobalSearch() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const allSearchableItems = useMemo(() => {
    const results: SearchResult[] = []

    // Pricing Tiers
    pricingTiers.forEach((tier) => {
      results.push({
        id: tier.id,
        name: tier.name,
        description: `${tier.features.length} features included`,
        type: 'pricing',
        price: `£${tier.setupCost.toLocaleString()} + £${tier.monthlyCost.toLocaleString()}/mo`,
        section: 'Pricing Tiers',
        href: '#pricing',
      })
    })

    // Features
    features.forEach((feature) => {
      results.push({
        id: feature.id,
        name: feature.name,
        description: feature.description,
        type: 'feature',
        price: feature.pricing.setup ? `£${feature.pricing.setup.toLocaleString()}` : undefined,
        section: 'Features Marketplace',
        href: '#features',
      })
    })

    // Attraction Offers
    attractionOffers.forEach((offer) => {
      results.push({
        id: offer.id,
        name: offer.name,
        description: offer.description,
        type: 'attraction',
        price: offer.pricing.setup ? `£${offer.pricing.setup.toLocaleString()}` : undefined,
        section: 'Attraction Offers',
        href: '#attractions',
      })
    })

    // Upsell Offers
    upsellOffers.forEach((offer) => {
      results.push({
        id: offer.id,
        name: offer.name,
        description: offer.description,
        type: 'upsell',
        price: offer.pricing.setup ? `£${offer.pricing.setup.toLocaleString()}` : undefined,
        section: 'Upsell Offers',
        href: '#upsells',
      })
    })

    // Downsell Offers
    downsellOffers.forEach((offer) => {
      results.push({
        id: offer.id,
        name: offer.name,
        description: offer.description,
        type: 'downsell',
        price: offer.pricing.setup ? `£${offer.pricing.setup.toLocaleString()}` : offer.pricing.monthly ? `£${offer.pricing.monthly.toLocaleString()}/mo` : undefined,
        section: 'Downsell Offers',
        href: '#downsells',
      })
    })

    // Continuity Offers
    continuityOffers.forEach((offer) => {
      results.push({
        id: offer.id,
        name: offer.name,
        description: offer.description,
        type: 'continuity',
        price: offer.recurringPrice > 0 ? `£${offer.recurringPrice.toLocaleString()}/mo` : 'Included',
        section: 'Continuity Offers',
        href: '#continuity',
      })
    })

    return results
  }, [])

  const searchResults = useMemo(() => {
    if (!query || query.length < 2) return []

    const lowerQuery = query.toLowerCase()
    return allSearchableItems
      .filter((item) =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.section.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 8) // Limit to 8 results
  }, [query, allSearchableItems])

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'pricing': return <DollarSign className="h-4 w-4" />
      case 'feature': return <Sparkles className="h-4 w-4" />
      case 'attraction': return <Target className="h-4 w-4" />
      case 'upsell': return <TrendingUp className="h-4 w-4" />
      case 'downsell': return <TrendingDown className="h-4 w-4" />
      case 'continuity': return <Repeat className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: SearchResult['type']) => {
    switch (type) {
      case 'pricing': return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      case 'feature': return 'bg-purple-500/10 text-purple-500 border-purple-500/20'
      case 'attraction': return 'bg-orange-500/10 text-orange-500 border-orange-500/20'
      case 'upsell': return 'bg-green-500/10 text-green-500 border-green-500/20'
      case 'downsell': return 'bg-red-500/10 text-red-500 border-red-500/20'
      case 'continuity': return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20'
    }
  }

  const handleResultClick = (href: string) => {
    setQuery('')
    setIsOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="relative w-full max-w-2xl">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search pricing tiers, features, offers..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
            onClick={() => {
              setQuery('')
              setIsOpen(false)
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && searchResults.length > 0 && (
        <Card className="absolute top-full mt-2 w-full max-h-[500px] overflow-y-auto z-50 shadow-xl border-2">
          <div className="p-2">
            <div className="text-xs text-muted-foreground mb-2 px-2">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
            </div>
            <div className="space-y-1">
              {searchResults.map((result) => (
                <button
                  key={`${result.type}-${result.id}`}
                  onClick={() => handleResultClick(result.href)}
                  className="w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-primary/20"
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg border ${getTypeColor(result.type)}`}>
                      {getTypeIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="font-semibold truncate">{result.name}</div>
                        {result.price && (
                          <Badge variant="secondary" className="text-xs shrink-0">
                            {result.price}
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground truncate mb-1">
                        {result.description}
                      </div>
                      <div className="text-xs text-primary font-medium">
                        {result.section} →
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* No Results */}
      {isOpen && query.length >= 2 && searchResults.length === 0 && (
        <Card className="absolute top-full mt-2 w-full p-4 z-50 shadow-xl border-2">
          <div className="text-center text-sm text-muted-foreground">
            No results found for "{query}"
          </div>
        </Card>
      )}
    </div>
  )
}
