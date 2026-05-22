import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function MembershipSection() {
  const { membership, community } = siteConfig;

  return (
    <Section aria-label="Membership">
      <Container>
        <Panel className="lg:grid lg:grid-cols-[1fr_minmax(0,18rem)] lg:items-center lg:gap-10">
          <div>
            <SectionHeading
              eyebrow="Membership"
              title="UGNY member perks"
              support={`${membership.priceLabel} — support the venue and unlock member-only benefits.`}
            />
            <ul className="section-stack grid gap-3 sm:grid-cols-2">
              {membership.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-2.5 text-sm leading-relaxed text-(--foreground)/85"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--brand-primary)"
                    aria-hidden
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <Card className="mt-8 text-center lg:mt-0">
            <p className="text-sm font-medium uppercase tracking-wide text-(--brand-primary)">
              JoinIt
            </p>
            <p className="mt-2 text-2xl font-bold text-(--foreground)">
              {membership.priceLabel}
            </p>
            <p className="mt-2 text-sm text-(--foreground)/80">
              Sign up online to activate your membership.
            </p>
            <div className="mt-6 flex justify-center">
              <Button as="link" href={community.membershipUrl} external>
                Become a member
              </Button>
            </div>
          </Card>
        </Panel>
      </Container>
    </Section>
  );
}
