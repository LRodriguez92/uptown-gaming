import { communityLinks } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type CommunitySectionProps = {
  showHeading?: boolean;
  tone?: "default" | "muted";
  className?: string;
};

export function CommunitySection({
  showHeading = true,
  tone = "muted",
  className,
}: CommunitySectionProps) {
  return (
    <Section
      aria-label="Community"
      tone={showHeading ? tone : "default"}
      className={cn(!showHeading && "py-0 md:py-0", className)}
    >
      <Container className={cn(!showHeading && "pb-14 md:pb-20")}>
        {showHeading && (
          <SectionHeading
            eyebrow="Community"
            title="Join the hub"
            support="Discord, tournaments, membership, menu, and our Linktree hub—all in one place."
          />
        )}
        <ul
          className={cn(
            "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
            showHeading ? "section-stack-lg" : "mt-0"
          )}
        >
          {communityLinks.map(({ href, label, description }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2"
              >
                <Card className="h-full transition-colors group-hover:border-(--brand-primary)/40">
                  <h3 className="text-lg font-semibold text-(--foreground) group-hover:text-(--brand-primary)">
                    {label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-(--foreground)/80">
                    {description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-(--brand-primary)">
                    Open link →
                  </p>
                </Card>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
