"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Command,
  ArrowUp,
  DollarSign,
  Sparkles,
  Target,
  TrendingUp,
  TrendingDown,
  Repeat,
  X,
} from 'lucide-react'

interface NavSection {
  id: string
  label: string
  icon: React.ElementType
  href: string
  shortcut: string
}

export function QuickNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const sections: NavSection[] = [
    { id: 'overview', label: 'Overview', icon: DollarSign, href: '#overview', shortcut: '1' },
    { id: 'pricing', label: 'Pricing Tiers', icon: DollarSign, href: '#pricing', shortcut: '2' },
    { id: 'features', label: 'Features', icon: Sparkles, href: '#features', shortcut: '3' },
    { id: 'attractions', label: 'Special Packages', icon: Target, href: '#attractions', shortcut: '4' },
    { id: 'upsells', label: 'Add-On Services', icon: TrendingUp, href: '#upsells', shortcut: '5' },
    { id: 'downsells', label: 'Payment Plans', icon: TrendingDown, href: '#downsells', shortcut: '6' },
    { id: 'continuity', label: 'Ongoing Support', icon: Repeat, href: '#continuity', shortcut: '7' },
  ]

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open quick nav with Cmd/Ctrl + K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }

      // Close with Escape
      if (e.key === 'Escape') {
        setIsOpen(false)
      }

      // Navigate with Cmd/Ctrl + number
      if ((e.metaKey || e.ctrlKey) && /^[1-7]$/.test(e.key)) {
        e.preventDefault()
        const section = sections.find(s => s.shortcut === e.key)
        if (section) {
          navigateToSection(section.href)
        }
      }

      // Scroll to top with Cmd/Ctrl + 0
      if ((e.metaKey || e.ctrlKey) && e.key === '0') {
        e.preventDefault()
        scrollToTop()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [sections])

  const navigateToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <>
      {/* Quick Nav Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        <Command className="h-4 w-4" />
        Quick Nav
        <Badge variant="secondary" className="text-xs">⌘K</Badge>
      </Button>

      {/* Quick Nav Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <Card className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6 z-50 shadow-2xl border-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Command className="h-5 w-5 text-primary" />
                <h3 className="font-bold">Quick Navigation</h3>
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

            <div className="text-xs text-muted-foreground mb-4">
              Use keyboard shortcuts to navigate quickly
            </div>

            {/* Navigation Sections */}
            <div className="space-y-1 mb-4">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => navigateToSection(section.href)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-primary/20"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="flex-1 text-left font-medium">{section.label}</span>
                    <Badge variant="outline" className="text-xs">
                      ⌘{section.shortcut}
                    </Badge>
                  </button>
                )
              })}
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-primary/20"
            >
              <ArrowUp className="h-4 w-4 text-primary" />
              <span className="flex-1 text-left font-medium">Scroll to Top</span>
              <Badge variant="outline" className="text-xs">
                ⌘0
              </Badge>
            </button>

            {/* Help Text */}
            <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
              <div className="mb-1">Keyboard Shortcuts:</div>
              <ul className="space-y-1">
                <li>• <span className="font-mono">⌘K</span> - Open quick nav</li>
                <li>• <span className="font-mono">⌘1-7</span> - Jump to section</li>
                <li>• <span className="font-mono">⌘0</span> - Scroll to top</li>
                <li>• <span className="font-mono">Esc</span> - Close</li>
              </ul>
            </div>
          </Card>
        </>
      )}

      {/* Floating Scroll to Top Button */}
      {showScrollTop && !isOpen && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-40 p-0"
          size="sm"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}
