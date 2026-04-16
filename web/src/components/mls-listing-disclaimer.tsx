import { cn } from "@/lib/cn";

type MlsListingDisclaimerProps = {
  className?: string;
};

/**
 * Short MLS-style attribution for embedded listing search / IDX-style feeds.
 */
export function MlsListingDisclaimer({ className }: MlsListingDisclaimerProps) {
  return (
    <p
      className={cn(
        "mx-auto mt-4 max-w-3xl text-center text-xs leading-relaxed text-[#6b7373]",
        className,
      )}
    >
      Listing information comes from participating brokers and MLS sources. It is deemed reliable
      but not guaranteed—confirm details and availability before relying on it.
    </p>
  );
}
