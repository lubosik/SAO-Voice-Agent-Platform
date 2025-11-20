"use client"

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'none'
  delay?: number
  threshold?: number
  className?: string
}

export function ScrollAnimation({
  children,
  animation = 'fade',
  delay = 0,
  threshold = 0.1,
  className = '',
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, threshold])

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade':
          return 'opacity-0'
        case 'slide-up':
          return 'opacity-0 translate-y-10'
        case 'slide-left':
          return 'opacity-0 -translate-x-10'
        case 'slide-right':
          return 'opacity-0 translate-x-10'
        case 'scale':
          return 'opacity-0 scale-95'
        default:
          return ''
      }
    }

    return 'opacity-100 translate-y-0 translate-x-0 scale-100'
  }

  if (animation === 'none') {
    return <>{children}</>
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}

// Stagger children animations
interface StaggerChildrenProps {
  children: ReactNode[]
  staggerDelay?: number
  className?: string
}

export function StaggerChildren({
  children,
  staggerDelay = 100,
  className = '',
}: StaggerChildrenProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimation key={index} animation="slide-up" delay={index * staggerDelay}>
          {child}
        </ScrollAnimation>
      ))}
    </div>
  )
}

// Parallax scroll effect
interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.5, className = '' }: ParallaxProps) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.scrollY
        const elementTop = rect.top + scrolled

        // Calculate parallax offset
        const offset = (scrolled - elementTop) * speed
        setOffset(offset)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div style={{ transform: `translateY(${offset}px)` }}>{children}</div>
    </div>
  )
}

// Count up animation for numbers
interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export function CountUp({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const startValue = 0

          const animate = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const current = startValue + (end - startValue) * easeOut

            setCount(current)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(end)
            }
          }

          animate()
        }
      },
      { threshold: 0.5 }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [end, duration, hasAnimated])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}
