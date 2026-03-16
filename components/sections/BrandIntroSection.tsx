import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Brand intro section placeholder. Step 6 will add final content.
 * Purpose: value proposition, what Uptown Gaming is, community/event value.
 */
export function BrandIntroSection() {
  return (
    <section aria-label="About Uptown Gaming">
      <Container className="py-12 md:py-16">
        <SectionHeading
          title="Who We Are"
          support="Placeholder: core value proposition and identity. Step 6 will populate."
        />
      </Container>
    </section>
  );
}
