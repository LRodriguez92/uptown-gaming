import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrandIntroSection() {
  return (
    <Section aria-label="About Uptown Gaming" tone="muted">
      <Container>
        <SectionHeading
          title="A Venue Built for Community Events"
          support="Uptown Gaming is a community-centered space where local players and organizers come together. We host tournaments, meetups, and branded experiences—and we welcome groups who want to book the space for their own events."
        />
      </Container>
    </Section>
  );
}
