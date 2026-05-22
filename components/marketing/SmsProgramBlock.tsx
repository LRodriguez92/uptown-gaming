import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type SmsProgramBlockProps = {
  className?: string;
  /** When false, omit inner h2 (parent section provides heading). */
  showHeading?: boolean;
};

/**
 * Toast SMS program promo — text-to-join CTA with required legal disclosures.
 * See docs/INTEGRATIONS.md.
 */
export function SmsProgramBlock({
  className,
  showHeading = true,
}: SmsProgramBlockProps) {
  const { sms } = siteConfig;

  return (
    <div
      className={cn(
        "rounded-lg border border-(--foreground)/15 bg-(--surface-dark) p-6",
        className
      )}
    >
      {showHeading && (
        <>
          <h2 className="text-lg font-semibold text-(--foreground)">
            Get 10% off your next order
          </h2>
          <p className="mt-2 text-(--foreground)/80">
            Join our SMS program for secret discounts, menu specials, and
            restaurant news.
          </p>
        </>
      )}

      <div
        className={cn(
          "flex flex-col gap-6 sm:flex-row sm:items-start",
          showHeading ? "mt-6" : "mt-0"
        )}
      >
        <div className="shrink-0">
          <Image
            src={sms.flyerImagePath}
            alt="QR code to join Uptown Gaming SMS program"
            width={160}
            height={160}
            className="rounded-md border border-(--foreground)/10 bg-white"
          />
        </div>
        <div>
          <p className="font-medium text-(--foreground)">Scan to join</p>
          <p className="mt-2 text-(--foreground)/80">
            or text{" "}
            <strong className="text-(--foreground)">{sms.keyword}</strong> to{" "}
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

      <p className="mt-6 text-xs leading-relaxed text-(--foreground)/60">
        By signing up, you agree to receive automated and personalized marketing
        texts. Consent is not a condition of purchase. Frequency varies; message
        and data rates may apply. See{" "}
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
    </div>
  );
}
