import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageIntro } from "@/components/layout/PageIntro";
import { bookingFormUrl } from "@/config/site";
import { aboutContent } from "@/content/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Uptown Gaming: casual and competitive gaming events in Harlem, Washington Heights, Inwood, and The Bronx since 2016.",
  path: "/about",
});

const bodyClassName =
  "max-w-2xl text-base leading-relaxed text-(--foreground)/80 md:text-lg";

export default function AboutPage() {
  const { story, mission, values, team } = aboutContent;

  return (
    <>
      <PageIntro
        title="About"
        className="pt-14 pb-6 md:pt-20 md:pb-8"
      />

      <Section
        aria-label="About content"
        className="pt-6 pb-12 md:pt-8 md:pb-16"
      >
        <Container>
          <Panel className="space-y-10 md:space-y-12">
            <div className={`space-y-4 ${bodyClassName}`}>
              {story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <SectionHeading title="Mission" support={mission} />
            <SectionHeading title="Values" support={values} />

            <p className={`font-semibold text-(--foreground) ${bodyClassName}`}>
              {team}
            </p>

            <div className="flex flex-wrap gap-4 border-t border-(--foreground)/10 pt-8">
              <Button as="link" href="/events">
                View Events
              </Button>
              <Button as="link" href={bookingFormUrl} variant="secondary">
                Book the Space
              </Button>
            </div>
          </Panel>
        </Container>
      </Section>
    </>
  );
}
