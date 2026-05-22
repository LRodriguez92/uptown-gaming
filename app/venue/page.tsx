import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { bookingFormUrl, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { venueFeatures } from "@/content/venue-features";

export const metadata = createPageMetadata({
  title: "Venue",
  description:
    "Explore the Uptown Gaming space. Flexible layout, gaming-ready setup, and amenities for events.",
  path: "/venue",
});

export default function VenuePage() {
  const sorted = [...venueFeatures].sort(
    (a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
  );
  return (
    <>
      <PageIntro
        title="The Venue"
        support="A space built for community events. Here's what makes it worth booking."
        className="pt-14 pb-6 md:pt-20 md:pb-8"
      />

      <Section
        aria-label="Venue features"
        className="pt-6 pb-0 md:pt-8"
      >
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((feature) => (
              <li key={feature.slug}>
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-(--foreground)">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-(--foreground)/80">
                    {feature.shortDescription}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section
        aria-label="Venue actions"
        className="pt-6 pb-12 md:pt-8 md:pb-16"
      >
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" href={bookingFormUrl}>
              Book the Space
            </Button>
            <Button
              as="link"
              href={`mailto:${siteConfig.contact.email}`}
              variant="secondary"
            >
              Email us
            </Button>
            <Button as="link" href="/events" variant="ghost">
              View Events
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
