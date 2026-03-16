import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description: "Who we are. Uptown Gaming is a community-centered gaming and event venue.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section aria-label="About intro">
        <Container className="py-12 md:py-16">
          <SectionHeading
            as="h1"
            title="Who We Are"
            support="Uptown Gaming is a community-centered space for gaming events, meetups, and bookings. We exist to bring players and organizers together."
          />
        </Container>
      </section>

      <section aria-label="Brand story">
        <Container className="pb-12 md:pb-16">
          <SectionHeading
            title="Our Story"
            support="We built a venue where local communities can run tournaments, casual nights, and branded experiences. The space is designed to be flexible, welcoming, and ready for whatever you have in mind."
          />
        </Container>
      </section>

      <section aria-label="Community values">
        <Container className="pb-12 md:pb-16">
          <SectionHeading
            title="Community First"
            support="We believe in events that connect people. Whether you’re here to compete, hang out, or host your own thing—you’re in the right place."
          />
        </Container>
      </section>

      <section aria-label="CTAs">
        <Container className="pb-12 md:pb-16">
          <div className="flex flex-wrap gap-4">
            <Button as="link" href="/events">
              View Events
            </Button>
            <Button as="link" href="/book" variant="secondary">
              Book the Space
            </Button>
            <Button as="link" href="/contact" variant="ghost">
              Contact
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
