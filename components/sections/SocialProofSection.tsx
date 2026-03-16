import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Social proof / community section placeholder. Step 6 may add partners or community content.
 * Purpose: support trust; optional supporting section per IA.
 */
export function SocialProofSection() {
  return (
    <section aria-label="Community and partners">
      <Container className="py-12 md:py-16">
        <SectionHeading
          title="Community"
          support="Placeholder: social proof or community. Step 6 may populate if approved."
        />
      </Container>
    </section>
  );
}
