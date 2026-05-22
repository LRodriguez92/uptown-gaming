import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmsProgramBlock } from "@/components/marketing/SmsProgramBlock";

/**
 * SMS program promo for homepage — Toast text-to-join with legal copy.
 */
export function SmsProgramSection() {
  return (
    <section aria-label="SMS program">
      <Container className="py-12 md:py-16">
        <SectionHeading
          eyebrow="Stay in the loop"
          title="SMS deals & updates"
          support="Get 10% off your next order plus secret discounts and menu specials."
          className="mb-8"
        />
        <SmsProgramBlock showHeading={false} />
      </Container>
    </section>
  );
}
