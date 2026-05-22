import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { venueFeatures } from "@/content/venue-features";

export function VenueFeaturesSection() {
  const sorted = [...venueFeatures].sort(
    (a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
  );
  return (
    <Section aria-label="Venue features" tone="muted">
      <Container>
        <SectionHeading
          title="The Space"
          support="A venue that works for organizers and communities. Here's what makes it worth booking."
        />
        <ul className="section-stack-lg grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="section-stack">
          <Button as="link" href="/venue" variant="secondary">
            Explore the venue
          </Button>
        </div>
      </Container>
    </Section>
  );
}
