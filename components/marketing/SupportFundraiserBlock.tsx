import { siteConfig } from "@/config/site";
import { externalLinkClassName } from "@/lib/links";
import { cn } from "@/lib/utils";

type SupportFundraiserBlockProps = {
  className?: string;
};

/** Subdued GoFundMe support link — time-bound per siteConfig.fundraising. */
export function SupportFundraiserBlock({ className }: SupportFundraiserBlockProps) {
  const { fundraising, community } = siteConfig;

  if (!fundraising.showSupportLink) {
    return null;
  }

  return (
    <div
      className={cn(
        "rounded-lg border border-(--foreground)/15 bg-(--surface-dark) p-6",
        className
      )}
    >
      <h2 className="text-lg font-semibold text-(--foreground)">Support us</h2>
      <p className="mt-2 text-sm text-(--foreground)/80">
        {fundraising.supportBlurb}
      </p>
      <p className="mt-4">
        <a
          href={community.gofundmeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={externalLinkClassName}
        >
          {community.gofundmeTitle}
        </a>
      </p>
    </div>
  );
}
