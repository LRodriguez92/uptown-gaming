import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmsProgramBlock } from "@/components/marketing/SmsProgramBlock";

export function SmsProgramSection() {
  return (
    <Section aria-label="SMS program">
      <Container>
        <SectionHeading
          eyebrow="Stay in the loop"
          title="SMS deals & updates"
          support="Get 10% off your next order plus secret discounts and menu specials."
        />
        <div className="section-stack-lg">
          <SmsProgramBlock showHeading={false} />
        </div>
      </Container>
    </Section>
  );
}
