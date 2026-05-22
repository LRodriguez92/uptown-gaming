import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SocialProofSection() {
  return (
    <Section aria-label="Community and partners" tone="muted">
      <Container>
        <SectionHeading
          title="Built for the Community"
          support="Uptown Gaming exists to bring players and organizers together. Whether you're here for a tournament, a meetup, or to book the space—you're in the right place."
        />
      </Container>
    </Section>
  );
}
