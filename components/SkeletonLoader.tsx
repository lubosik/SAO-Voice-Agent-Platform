import { Card } from '@/components/ui/card'

interface SkeletonLoaderProps {
  type?: 'card' | 'table' | 'text' | 'pricing'
  count?: number
}

export function SkeletonLoader({ type = 'card', count = 1 }: SkeletonLoaderProps) {
  const skeletons = Array.from({ length: count }, (_, i) => i)

  if (type === 'card') {
    return (
      <>
        {skeletons.map((i) => (
          <Card key={i} className="p-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-muted skeleton" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 rounded bg-muted skeleton" />
                  <div className="h-3 w-1/2 rounded bg-muted skeleton" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-muted skeleton" />
                <div className="h-3 w-5/6 rounded bg-muted skeleton" />
                <div className="h-3 w-4/6 rounded bg-muted skeleton" />
              </div>

              {/* Footer */}
              <div className="flex items-center gap-2">
                <div className="h-8 w-24 rounded bg-muted skeleton" />
                <div className="h-8 w-24 rounded bg-muted skeleton" />
              </div>
            </div>
          </Card>
        ))}
      </>
    )
  }

  if (type === 'pricing') {
    return (
      <>
        {skeletons.map((i) => (
          <Card key={i} className="p-6">
            <div className="space-y-4">
              {/* Badge */}
              <div className="h-6 w-24 rounded-full bg-muted skeleton" />

              {/* Title */}
              <div className="h-6 w-3/4 rounded bg-muted skeleton" />

              {/* Price */}
              <div className="space-y-2">
                <div className="h-10 w-32 rounded bg-muted skeleton" />
                <div className="h-4 w-24 rounded bg-muted skeleton" />
              </div>

              {/* Features */}
              <div className="space-y-2 pt-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-muted skeleton" />
                    <div className="h-3 flex-1 rounded bg-muted skeleton" />
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="h-10 w-full rounded bg-muted skeleton" />
            </div>
          </Card>
        ))}
      </>
    )
  }

  if (type === 'table') {
    return (
      <div className="space-y-2">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
          <div className="h-4 w-1/4 rounded bg-muted skeleton" />
          <div className="h-4 w-1/4 rounded bg-muted skeleton" />
          <div className="h-4 w-1/4 rounded bg-muted skeleton" />
          <div className="h-4 w-1/4 rounded bg-muted skeleton" />
        </div>

        {/* Rows */}
        {skeletons.map((i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-lg border">
            <div className="h-3 w-1/4 rounded bg-muted skeleton" />
            <div className="h-3 w-1/4 rounded bg-muted skeleton" />
            <div className="h-3 w-1/4 rounded bg-muted skeleton" />
            <div className="h-3 w-1/4 rounded bg-muted skeleton" />
          </div>
        ))}
      </div>
    )
  }

  if (type === 'text') {
    return (
      <div className="space-y-2">
        {skeletons.map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-full rounded bg-muted skeleton" />
            <div className="h-4 w-5/6 rounded bg-muted skeleton" />
            <div className="h-4 w-4/6 rounded bg-muted skeleton" />
          </div>
        ))}
      </div>
    )
  }

  return null
}
