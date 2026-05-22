import { communityLinks } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type CommunitySectionProps = {
  /** Hide section heading when nested on contact page intro area */
  showHeading?: boolean;
  className?: string;
};

/**
 * Community hub links — Discord, start.gg, membership, menu, Linktree.
 */
export function CommunitySection({
  showHeading = true,
  className,
}: CommunitySectionProps) {
  return (
    <section aria-label="Community" className={className}>
      <Container
        className={cn(
          showHeading ? "py-12 md:py-16" : "pb-12 md:pb-16"
        )}
      >
        {showHeading && (
          <SectionHeading
            eyebrow="Community"
            title="Join the hub"
            support="Discord, tournaments, membership, menu, and our Linktree hub—all in one place."
          />
        )}
        <ul
          className={cn(
            "grid gap-4 sm:grid-cols-2",
            showHeading ? "mt-8" : "mt-0"
          )}
        >
          {communityLinks.map(({ href, label, description }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2"
              >
                <Card className="h-full transition-colors group-hover:border-(--brand-primary)/40">
                  <h3 className="text-lg font-semibold text-(--foreground) group-hover:text-(--brand-primary)">
                    {label}
                  </h3>
                  <p className="mt-2 text-sm text-(--foreground)/80">
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
    </section>
  );
}
