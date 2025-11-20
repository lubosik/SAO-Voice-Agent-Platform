"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { GlobalSearch } from './GlobalSearch'
import { QuickNav } from './QuickNav'
import { ComparisonTool } from './ComparisonTool'
import { PriceRangeFilter } from './PriceRangeFilter'
import {
  Home,
  DollarSign,
  Package,
  TrendingUp,
  TrendingDown,
  Gift,
  RefreshCw,
  Menu,
  X
} from 'lucide-react'

const navItems = [
  { name: 'Overview', href: '#overview', icon: Home },
  { name: 'Pricing', href: '#pricing', icon: DollarSign },
  { name: 'Features', href: '#features', icon: Package },
  { name: 'Packages', href: '#attractions', icon: Gift },
  { name: 'Add-Ons', href: '#upsells', icon: TrendingUp },
  { name: 'Payment Plans', href: '#downsells', icon: TrendingDown },
  { name: 'Support', href: '#continuity', icon: RefreshCw },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              SAO Voice Agent
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                  asChild
                >
                  <a href={item.href}>
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </a>
                </Button>
              )
            })}
          </div>

          {/* Interactive Tools */}
          <div className="hidden md:flex items-center gap-2">
            <GlobalSearch />
            <QuickNav />
            <ComparisonTool />
            <Button>Book a Demo</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </a>
              )
            })}
            <div className="pt-2">
              <Button className="w-full">Book a Demo</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
