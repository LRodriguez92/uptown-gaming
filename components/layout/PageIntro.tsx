import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
type PageIntroProps = {
  title: string;
  support?: string;
  eyebrow?: string;
  actions?: React.ReactNode;
  className?: string;
};

/**
 * Route-level page intro — h1, support copy, optional CTA row.
 */
export function PageIntro({
  title,
  support,
  eyebrow,
  actions,
  className,
}: PageIntroProps) {
  return (
    <Section aria-label="Page intro" className={className}>
      <Container>
        <SectionHeading
          as="h1"
          eyebrow={eyebrow}
          title={title}
          support={support}
        />
        {actions && (
          <div className="section-stack flex flex-wrap gap-4">{actions}</div>
        )}
      </Container>
    </Section>
  );
}
