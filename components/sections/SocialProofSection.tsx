import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Social proof / community: support trust. Optional supporting section per IA.
 * CONTENT_GUIDE: keep focused; optional partners or community proof. Step 8 may add Partner[].
 */
export function SocialProofSection() {
  return (
    <section aria-label="Community and partners">
      <Container className="py-12 md:py-16">
        <SectionHeading
          title="Built for the Community"
          support="Uptown Gaming exists to bring players and organizers together. Whether you’re here for a tournament, a meetup, or to book the space—you’re in the right place."
        />
      </Container>
    </section>
  );
}
