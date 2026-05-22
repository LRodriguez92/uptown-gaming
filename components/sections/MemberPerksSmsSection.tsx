import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

/**
 * Membership perks and SMS program — side-by-side on desktop, stacked on mobile.
 */
export function MemberPerksSmsSection() {
  const { membership, community, sms } = siteConfig;

  return (
    <Section aria-label="Member perks and SMS" tone="muted">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">
          <Panel className="flex h-full flex-col">
            <SectionHeading
              eyebrow="Membership"
              title="UGNY member perks"
              support={`${membership.priceLabel} — support the venue and unlock member-only benefits.`}
            />
            <ul className="section-stack flex-1 space-y-3">
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
            <Card className="section-stack mt-auto text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-(--brand-primary)">
                JoinIt
              </p>
              <p className="mt-2 text-2xl font-bold text-(--foreground)">
                {membership.priceLabel}
              </p>
              <div className="mt-6">
                <Button as="link" href={community.membershipUrl} external>
                  Become a member
                </Button>
              </div>
            </Card>
          </Panel>

          <Panel className="flex h-full flex-col">
            <SectionHeading
              eyebrow="Stay in the loop"
              title="SMS deals & updates"
              support="Get 10% off your next order plus secret discounts and menu specials."
            />
            <div className="section-stack flex flex-1 flex-col gap-6 sm:flex-row sm:items-center">
              <div className="mx-auto shrink-0 sm:mx-0">
                <Image
                  src={sms.qrImagePath}
                  alt="QR code to join Uptown Gaming SMS program"
                  width={160}
                  height={160}
                  className="rounded-md bg-white p-1"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-medium text-(--foreground)">Scan to join</p>
                <p className="mt-2 text-sm text-(--foreground)/80">
                  or text{" "}
                  <strong className="text-(--foreground)">{sms.keyword}</strong>{" "}
                  to{" "}
                  <a
                    href={sms.smsUri}
                    className="text-(--brand-primary) hover:underline"
                  >
                    {sms.phoneDisplay}
                  </a>
                </p>
                <p className="mt-1 text-sm text-(--foreground)/70">
                  Confirm with <strong>{sms.confirmKeyword}</strong> to join.
                </p>
              </div>
            </div>
            <p className="mt-auto pt-6 text-xs leading-relaxed text-(--foreground)/60">
              By signing up, you agree to receive automated and personalized
              marketing texts. Consent is not a condition of purchase. Frequency
              varies; message and data rates may apply. See{" "}
              <a
                href={sms.termsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--brand-primary) hover:underline"
              >
                terms of service
              </a>{" "}
              and{" "}
              <a
                href={sms.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--brand-primary) hover:underline"
              >
                privacy policy
              </a>
              . Text STOP to cancel or HELP for more information.
            </p>
          </Panel>
        </div>
      </Container>
    </Section>
  );
}
