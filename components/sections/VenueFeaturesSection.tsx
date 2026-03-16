import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { venueFeatures } from "@/content/venue-features";

/**
 * Venue features: highlight venue value, support booking path.
 * Uses content/venue-features. CONTENT_GUIDE: clear titles, short benefit-focused descriptions.
 */
export function VenueFeaturesSection() {
  const sorted = [...venueFeatures].sort(
    (a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
  );
  return (
    <section aria-label="Venue features">
      <Container className="py-12 md:py-16">
        <SectionHeading
          title="The Space"
          support="A venue that works for organizers and communities. Here's what makes it worth booking."
        />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((feature) => (
            <li key={feature.slug}>
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-(--foreground)">
                  {feature.title}
                </h3>
                <p className="mt-2 text-(--foreground)/80">
                  {feature.shortDescription}
                </p>
              </Card>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button as="link" href="/venue" variant="secondary">
            Explore the venue
          </Button>
        </div>
      </Container>
    </section>
  );
}
