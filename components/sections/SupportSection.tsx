import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function SupportSection() {
  const { fundraising, community } = siteConfig;

  if (!fundraising.showSupportLink) {
    return null;
  }

  return (
    <Section aria-label="Support us" tone="elevated">
      <Container>
        <Panel className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <SectionHeading
            eyebrow="Community support"
            title="Support us"
            support={fundraising.supportBlurb}
            className="md:max-w-2xl"
          />
          <div className="shrink-0">
            <Button
              as="link"
              href={community.gofundmeUrl}
              external
              variant="secondary"
            >
              {community.gofundmeTitle}
            </Button>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}
