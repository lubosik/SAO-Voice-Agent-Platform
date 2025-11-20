"use client"

import { supportTiers } from '@/lib/data'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Wrench } from 'lucide-react'

export function SupportTierTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2">
            <th className="text-left p-4 bg-muted/30">
              <div className="font-bold">Support Feature</div>
            </th>
            {supportTiers.map((tier) => (
              <th key={tier.id} className="p-4 text-center bg-muted/30">
                <div className="font-bold text-lg mb-1">{tier.name}</div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {tier.price === 0 ? (
                    <span className="text-green-500">Included</span>
                  ) : (
                    `£${tier.price.toLocaleString()}/mo`
                  )}
                </div>
                {tier.price > 0 && (
                  <Badge variant="outline" className="text-xs">
                    +Platform Fee
                  </Badge>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Coverage Hours */}
          <tr className="border-b hover:bg-muted/20">
            <td className="p-4 font-medium">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Coverage Hours
              </div>
            </td>
            {supportTiers.map((tier) => (
              <td key={tier.id} className="p-4 text-center text-sm">
                {tier.coverage}
              </td>
            ))}
          </tr>

          {/* P1 Response Time */}
          <tr className="border-b hover:bg-muted/20 bg-red-500/5">
            <td className="p-4 font-medium">
              <div className="text-sm">
                <div className="font-semibold text-red-500">P1 Response Time</div>
                <div className="text-xs text-muted-foreground">System down</div>
              </div>
            </td>
            {supportTiers.map((tier) => {
              const p1 = tier.severityLevels.find((s) => s.severity === 'P1')
              return (
                <td key={tier.id} className="p-4 text-center">
                  <div className="font-bold text-red-500">{p1?.responseTime}</div>
                  <div className="text-xs text-muted-foreground">
                    Fix: {p1?.resolutionTarget}
                  </div>
                </td>
              )
            })}
          </tr>

          {/* P2 Response Time */}
          <tr className="border-b hover:bg-muted/20 bg-orange-500/5">
            <td className="p-4 font-medium">
              <div className="text-sm">
                <div className="font-semibold text-orange-500">P2 Response Time</div>
                <div className="text-xs text-muted-foreground">Major feature down</div>
              </div>
            </td>
            {supportTiers.map((tier) => {
              const p2 = tier.severityLevels.find((s) => s.severity === 'P2')
              return (
                <td key={tier.id} className="p-4 text-center">
                  <div className="font-bold text-orange-500">{p2?.responseTime}</div>
                  <div className="text-xs text-muted-foreground">
                    Fix: {p2?.resolutionTarget}
                  </div>
                </td>
              )
            })}
          </tr>

          {/* P3 Response Time */}
          <tr className="border-b hover:bg-muted/20 bg-blue-500/5">
            <td className="p-4 font-medium">
              <div className="text-sm">
                <div className="font-semibold text-blue-500">P3 Response Time</div>
                <div className="text-xs text-muted-foreground">Minor issues</div>
              </div>
            </td>
            {supportTiers.map((tier) => {
              const p3 = tier.severityLevels.find((s) => s.severity === 'P3')
              return (
                <td key={tier.id} className="p-4 text-center">
                  <div className="font-bold text-blue-500">{p3?.responseTime}</div>
                  <div className="text-xs text-muted-foreground">
                    Fix: {p3?.resolutionTarget}
                  </div>
                </td>
              )
            })}
          </tr>

          {/* Included Changes */}
          <tr className="border-b hover:bg-muted/20">
            <td className="p-4 font-medium">
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-primary" />
                Included Changes/Month
              </div>
            </td>
            {supportTiers.map((tier) => (
              <td key={tier.id} className="p-4 text-center text-sm">
                <div>Minor: {tier.includedChanges.minor}</div>
                <div>Medium: {tier.includedChanges.medium}</div>
              </td>
            ))}
          </tr>

          {/* Additional Benefits */}
          <tr className="border-b hover:bg-muted/20">
            <td className="p-4 font-medium align-top">Additional Benefits</td>
            {supportTiers.map((tier) => (
              <td key={tier.id} className="p-4">
                <ul className="space-y-1">
                  {tier.additionalBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
