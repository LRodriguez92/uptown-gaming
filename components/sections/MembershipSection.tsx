import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

/**
 * JoinIt membership benefits and join CTA.
 */
export function MembershipSection() {
  const { membership, community } = siteConfig;

  return (
    <section aria-label="Membership">
      <Container className="py-12 md:py-16">
        <div className="rounded-lg border border-(--foreground)/15 bg-(--surface-dark) p-6 md:p-8 lg:grid lg:grid-cols-[1fr_minmax(0,20rem)] lg:gap-10 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Membership"
              title="UGNY member perks"
              support={`${membership.priceLabel} — support the venue and unlock member-only benefits.`}
              className="space-y-2!"
            />
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {membership.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-2 text-sm text-(--foreground)/85"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--brand-primary)"
                    aria-hidden
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <Card className="mt-8 lg:mt-0 lg:text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-(--brand-primary)">
              JoinIt
            </p>
            <p className="mt-2 text-2xl font-bold text-(--foreground)">
              {membership.priceLabel}
            </p>
            <p className="mt-2 text-sm text-(--foreground)/80">
              Sign up online to activate your membership.
            </p>
            <div className="mt-6 flex justify-center lg:justify-center">
              <Button
                as="link"
                href={community.membershipUrl}
                external
              >
                Become a member
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
