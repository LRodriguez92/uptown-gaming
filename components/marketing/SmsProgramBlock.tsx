import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Panel } from "@/components/ui/Panel";
import { cn } from "@/lib/utils";

type SmsProgramBlockProps = {
  className?: string;
  showHeading?: boolean;
};

export function SmsProgramBlock({
  className,
  showHeading = true,
}: SmsProgramBlockProps) {
  const { sms } = siteConfig;

  return (
    <Panel className={cn(className)}>
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
          "grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center",
          showHeading ? "mt-6" : "mt-0"
        )}
      >
        <div className="mx-auto shrink-0 sm:mx-0">
          <Image
            src={sms.qrImagePath}
            alt="QR code to join Uptown Gaming SMS program"
            width={180}
            height={180}
            className="rounded-md bg-white p-1"
          />
        </div>
        <div className="text-center sm:text-left">
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

      <p className="mt-8 text-xs leading-relaxed text-(--foreground)/60">
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
    </Panel>
  );
}
