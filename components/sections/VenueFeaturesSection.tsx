import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

/** Inline venue features. Step 8 will replace with content from content/venue-features. */
const venueFeatures = [
  {
    title: "Flexible Layout",
    shortDescription: "Configurable setup for tournaments, meetups, and private events. Tables, screens, and seating to match your needs.",
  },
  {
    title: "Gaming-Ready",
    shortDescription: "Built for competitive and casual play. Reliable tech and space designed for community gaming.",
  },
  {
    title: "Central Location",
    shortDescription: "Easy to find and reach. A dedicated space for your group or brand activation.",
  },
];

/**
 * Venue features: highlight venue value, support booking path.
 * CONTENT_GUIDE: feature titles clear, short benefit-focused descriptions. Step 8 wires content.
 */
export function VenueFeaturesSection() {
  return (
    <section aria-label="Venue features">
      <Container className="py-12 md:py-16">
        <SectionHeading
          title="The Space"
          support="A venue that works for organizers and communities. Here’s what makes it worth booking."
        />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {venueFeatures.map((feature) => (
            <li key={feature.title}>
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
