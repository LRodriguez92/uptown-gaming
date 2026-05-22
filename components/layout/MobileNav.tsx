"use client";

import { useCallback, useEffect, useState } from "react";
import { mainNavLinks } from "@/config/nav";
import { NavLink } from "@/components/layout/NavLink";
import { cn } from "@/lib/utils";

const panelId = "mobile-nav-panel";

const mobileNavLinkClassName =
  "min-h-[44px] flex items-center rounded-md px-4 py-3 text-lg font-medium text-(--foreground) hover:bg-(--foreground)/5 focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const standardLinks = mainNavLinks.filter((item) => !item.cta);
  const ctaLinks = mainNavLinks.filter((item) => item.cta);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md text-(--foreground) hover:bg-(--foreground)/5 focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2 md:hidden"
      >
        <span
          className={cn(
            "h-0.5 w-5 bg-current transition-transform",
            open && "translate-y-2 rotate-45"
          )}
        />
        <span
          className={cn(
            "h-0.5 w-5 bg-current transition-opacity",
            open && "opacity-0"
          )}
        />
        <span
          className={cn(
            "h-0.5 w-5 bg-current transition-transform",
            open && "-translate-y-2 -rotate-45"
          )}
        />
      </button>

      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        hidden={!open}
        className={cn(
          "fixed inset-0 top-14 left-0 right-0 z-40 bg-(--background) md:hidden",
          "transition-[visibility,opacity] duration-200 ease-out motion-reduce:transition-none",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-1 p-4" aria-label="Main navigation">
          {standardLinks.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              onClick={close}
              className={mobileNavLinkClassName}
            />
          ))}
          <div className="mt-4 border-t border-(--foreground)/10 pt-4">
            {ctaLinks.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                onClick={close}
                mobile
              />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
