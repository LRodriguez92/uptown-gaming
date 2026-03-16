import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Venue",
  description: "Explore the Uptown Gaming space. Flexible layout, gaming-ready setup, and amenities for events.",
  path: "/venue",
});

/** Starter venue features. Step 8 will replace with content from content/venue-features. */
const features = [
  { title: "Flexible Layout", shortDescription: "Configurable setup for tournaments, meetups, and private events." },
  { title: "Gaming-Ready", shortDescription: "Built for competitive and casual play with reliable tech." },
  { title: "Central Location", shortDescription: "Easy to find and reach for your group or activation." },
];

export default function VenuePage() {
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
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
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
