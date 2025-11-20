"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { DollarSign, Filter, X } from 'lucide-react'

interface PriceRangeFilterProps {
  onFilterChange?: (min: number, max: number) => void
}

export function PriceRangeFilter({ onFilterChange }: PriceRangeFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000])

  // Common price milestones
  const pricePresets = [
    { label: 'Under £10k', min: 0, max: 10000 },
    { label: '£10k - £30k', min: 10000, max: 30000 },
    { label: '£30k - £50k', min: 30000, max: 50000 },
    { label: '£50k+', min: 50000, max: 100000 },
  ]

  const handlePresetClick = (min: number, max: number) => {
    setPriceRange([min, max])
    onFilterChange?.(min, max)
  }

  const handleReset = () => {
    setPriceRange([0, 100000])
    onFilterChange?.(0, 100000)
  }

  const formatPrice = (price: number) => {
    if (price >= 1000) return `£${(price / 1000).toFixed(0)}k`
    return `£${price}`
  }

  const isFiltered = priceRange[0] > 0 || priceRange[1] < 100000

  return (
    <div className="relative">
      {/* Filter Button */}
      <Button
        variant={isFiltered ? 'default' : 'outline'}
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        <Filter className="h-4 w-4" />
        Price Range
        {isFiltered && (
          <Badge variant="secondary" className="ml-1">
            Active
          </Badge>
        )}
      </Button>

      {/* Filter Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <Card className="absolute top-full right-0 mt-2 w-80 p-6 z-50 shadow-xl border-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <h3 className="font-bold">Filter by Price</h3>
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

            {/* Price Range Display */}
            <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">Selected Range</div>
              <div className="text-lg font-bold text-primary">
                {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
              </div>
            </div>

            {/* Slider */}
            <div className="mb-6 px-2">
              <Slider
                value={priceRange}
                onValueChange={(value) => {
                  setPriceRange(value as [number, number])
                  onFilterChange?.(value[0], value[1])
                }}
                min={0}
                max={100000}
                step={1000}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>£0</span>
                <span>£100k+</span>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="mb-4">
              <div className="text-sm font-semibold mb-2">Quick Filters</div>
              <div className="grid grid-cols-2 gap-2">
                {pricePresets.map((preset) => (
                  <Button
                    key={preset.label}
                    variant="outline"
                    size="sm"
                    onClick={() => handlePresetClick(preset.min, preset.max)}
                    className="text-xs"
                  >
                    {preset.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="flex-1"
              >
                Reset
              </Button>
              <Button
                size="sm"
                onClick={() => setIsOpen(false)}
                className="flex-1"
              >
                Apply Filter
              </Button>
            </div>
          </Card>
        </>
      )}
    </div>
  )
}
