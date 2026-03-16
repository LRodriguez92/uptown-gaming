import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/metadata";
import { venueFeatures } from "@/content/venue-features";

export const metadata = createPageMetadata({
  title: "Venue",
  description: "Explore the Uptown Gaming space. Flexible layout, gaming-ready setup, and amenities for events.",
  path: "/venue",
});

export default function VenuePage() {
  const sorted = [...venueFeatures].sort(
    (a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
  );
  return (
    <>
      <section aria-label="Venue intro">
        <Container className="py-12 md:py-16">
          <SectionHeading
            as="h1"
            title="The Venue"
            support="A space built for community events. Here’s what makes it worth booking."
          />
        </Container>
      </section>

      <section aria-label="Venue features">
        <Container className="pb-12 md:pb-16">
          <div className="rounded-lg bg-(--surface-dark) border border-(--foreground)/15 p-6 md:p-8">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </Container>
      </section>

      <section aria-label="Use cases">
        <Container className="pb-12 md:pb-16">
          <SectionHeading
            title="Use Cases"
            support="Tournaments, community meetups, brand activations, and private events. The venue adapts to your needs."
          />
        </Container>
      </section>

      <section aria-label="Booking CTA">
        <Container className="pb-12 md:pb-16">
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href="/book">
              Book the Space
            </Button>
            <Button as="link" href="/contact" variant="secondary">
              Contact
            </Button>
            <Button as="link" href="/events" variant="ghost">
              View Events
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
