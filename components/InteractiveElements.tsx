"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { CheckCircle, Copy, Share2, Bookmark, Heart } from 'lucide-react'

interface CopyButtonProps {
  text: string
  label?: string
}

export function CopyButton({ text, label = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast.success('Copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error('Failed to copy')
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="gap-2"
    >
      {copied ? (
        <>
          <CheckCircle className="h-4 w-4 text-green-500" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          {label}
        </>
      )}
    </Button>
  )
}

interface ShareButtonProps {
  url?: string
  title?: string
}

export function ShareButton({ url, title }: ShareButtonProps) {
  const handleShare = async () => {
    const shareData = {
      title: title || 'SAO Voice Agent Platform',
      url: url || window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        toast.success('Shared successfully!')
      } else {
        await navigator.clipboard.writeText(shareData.url)
        toast.success('Link copied to clipboard!')
      }
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        toast.error('Failed to share')
      }
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleShare}
      className="gap-2"
    >
      <Share2 className="h-4 w-4" />
      Share
    </Button>
  )
}

interface BookmarkButtonProps {
  itemId: string
  itemName: string
}

export function BookmarkButton({ itemId, itemName }: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(false)

  useEffect(() => {
    // Check if item is bookmarked in localStorage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    setBookmarked(bookmarks.includes(itemId))
  }, [itemId])

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    let newBookmarks

    if (bookmarked) {
      newBookmarks = bookmarks.filter((id: string) => id !== itemId)
      toast('Bookmark removed')
    } else {
      newBookmarks = [...bookmarks, itemId]
      toast.success(`${itemName} bookmarked!`)
    }

    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
    setBookmarked(!bookmarked)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleBookmark}
      className="gap-2"
    >
      <Bookmark
        className={`h-4 w-4 transition-all ${
          bookmarked ? 'fill-primary text-primary' : ''
        }`}
      />
      {bookmarked ? 'Bookmarked' : 'Bookmark'}
    </Button>
  )
}

interface LikeButtonProps {
  itemId: string
  initialLikes?: number
}

export function LikeButton({ itemId, initialLikes = 0 }: LikeButtonProps) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(initialLikes)

  useEffect(() => {
    // Check if item is liked in localStorage
    const likedItems = JSON.parse(localStorage.getItem('liked') || '[]')
    setLiked(likedItems.includes(itemId))
  }, [itemId])

  const toggleLike = () => {
    const likedItems = JSON.parse(localStorage.getItem('liked') || '[]')
    let newLikedItems

    if (liked) {
      newLikedItems = likedItems.filter((id: string) => id !== itemId)
      setLikes(likes - 1)
    } else {
      newLikedItems = [...likedItems, itemId]
      setLikes(likes + 1)
      toast.success('Added to favorites!')
    }

    localStorage.setItem('liked', JSON.stringify(newLikedItems))
    setLiked(!liked)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLike}
      className="gap-2"
    >
      <Heart
        className={`h-4 w-4 transition-all ${
          liked ? 'fill-red-500 text-red-500 scale-110' : ''
        }`}
      />
      <span className="min-w-[20px]">{likes}</span>
    </Button>
  )
}

// Progress indicator for long operations
interface ProgressIndicatorProps {
  value: number // 0-100
  label?: string
}

export function ProgressIndicator({ value, label }: ProgressIndicatorProps) {
  return (
    <div className="w-full space-y-2">
      {label && (
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{label}</span>
          <span className="font-semibold">{value}%</span>
        </div>
      )}
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-chart-2 transition-all duration-300 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

// Tooltip component with micro-interaction
interface TooltipProps {
  content: string
  children: React.ReactNode
}

export function Tooltip({ content, children }: TooltipProps) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>
      {visible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap slide-down">
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
        </div>
      )}
    </div>
  )
}
