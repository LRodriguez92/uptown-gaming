import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Brand intro: value proposition, what Uptown Gaming is, community/event identity.
 * CONTENT_GUIDE: explain value proposition, reinforce community and event identity, stay concise.
 */
export function BrandIntroSection() {
  return (
    <section aria-label="About Uptown Gaming">
      <Container className="py-12 md:py-16">
        <SectionHeading
          title="A Venue Built for Community Events"
          support="Uptown Gaming is a community-centered space where local players and organizers come together. We host tournaments, meetups, and branded experiences—and we welcome groups who want to book the space for their own events."
        />
      </Container>
    </section>
  );
}
