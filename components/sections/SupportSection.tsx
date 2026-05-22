import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * GoFundMe support campaign — subdued, time-bound via siteConfig.fundraising.
 */
export function SupportSection() {
  const { fundraising, community } = siteConfig;

  if (!fundraising.showSupportLink) {
    return null;
  }

  return (
    <section aria-label="Support us">
      <Container className="py-12 md:py-16">
        <div className="rounded-lg border border-(--foreground)/15 bg-(--surface-dark) p-6 md:p-8 md:flex md:items-center md:justify-between md:gap-8">
          <SectionHeading
            eyebrow="Community support"
            title="Support us"
            support={fundraising.supportBlurb}
            className="md:max-w-2xl space-y-2!"
          />
          <div className="mt-6 shrink-0 md:mt-0">
            <Button
              as="link"
              href={community.gofundmeUrl}
              external
              variant="secondary"
            >
              {community.gofundmeTitle}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
