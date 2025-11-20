import { Navigation } from '@/components/Navigation'
import { PricingTiers } from '@/components/PricingTiers'
import { FeatureComparisonTable } from '@/components/FeatureComparisonTable'
import { FeaturesMarketplace } from '@/components/FeaturesMarketplace'
import { AttractionsSection } from '@/components/AttractionsSection'
import { UpsellsSection } from '@/components/UpsellsSection'
import { DownsellsSection } from '@/components/DownsellsSection'
import { ContinuitySection } from '@/components/ContinuitySection'
import { Button } from '@/components/ui/button'
import { pricingSummary } from '@/lib/data'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section id="overview" className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
            SAO Voice Agent Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Complete AI Voice Agent Platform with Transparent Pricing
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <a href="#pricing">View Pricing</a>
            </Button>
            <Button size="lg" variant="outline">Book a Demo</Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">
            <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-chart-2/10 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-1">
                {pricingSummary.complete.features}
              </div>
              <div className="text-sm text-muted-foreground">Features in Complete</div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-chart-2/10 to-chart-3/10 border border-chart-2/20">
              <div className="text-3xl font-bold text-chart-2 mb-1">
                £{(pricingSummary.complete.savings / 1000).toFixed(0)}k
              </div>
              <div className="text-sm text-muted-foreground">Savings vs Individual</div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-chart-4/10 to-chart-5/10 border border-chart-4/20">
              <div className="text-3xl font-bold text-chart-4 mb-1">30</div>
              <div className="text-sm text-muted-foreground">Days Notice to Cancel</div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <PricingTiers />

        {/* Feature Comparison Table */}
        <section className="py-20">
          <FeatureComparisonTable />
        </section>

        {/* Features Marketplace */}
        <FeaturesMarketplace />

        {/* Special Packages */}
        <AttractionsSection />

        {/* Add-On Services */}
        <UpsellsSection />

        {/* Flexible Payment Options */}
        <DownsellsSection />

        {/* Ongoing Support & Services */}
        <ContinuitySection />
      </main>
    </div>
  );
}
