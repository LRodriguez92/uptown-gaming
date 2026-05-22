"use client";

import { useCallback, useEffect, useState } from "react";
import { mainNavLinks } from "@/config/nav";
import { NavLink } from "@/components/layout/NavLink";
import { cn } from "@/lib/utils";

const panelId = "mobile-nav-panel";
const ANIMATION_MS = 300;

const mobileNavLinkClassName =
  "min-h-[44px] flex items-center rounded-md px-4 py-3 text-lg font-medium text-(--foreground) hover:bg-(--foreground)/5 focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2";

const motionSafe =
  "transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:delay-0";

function staggerDelay(index: number, open: boolean, total: number) {
  if (open) return `${80 + index * 45}ms`;
  return `${Math.max(0, (total - 1 - index) * 40)}ms`;
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [a11yClosed, setA11yClosed] = useState(true);
  const standardLinks = mainNavLinks.filter((item) => !item.cta);
  const ctaLinks = mainNavLinks.filter((item) => item.cta);
  const totalAnimated = standardLinks.length + 1 + ctaLinks.length;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      const timeout = window.setTimeout(() => {
        setA11yClosed(true);
        document.body.style.overflow = "";
      }, ANIMATION_MS);
      return () => window.clearTimeout(timeout);
    }

    setA11yClosed(false);
    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md text-(--foreground) hover:bg-(--foreground)/5 focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2 md:hidden"
      >
        <span
          className={cn(
            "h-0.5 w-5 bg-current transition-transform duration-300 ease-out motion-reduce:transition-none",
            open && "translate-y-2 rotate-45"
          )}
        />
        <span
          className={cn(
            "h-0.5 w-5 bg-current transition-opacity duration-200 ease-out motion-reduce:transition-none",
            open && "opacity-0"
          )}
        />
        <span
          className={cn(
            "h-0.5 w-5 bg-current transition-transform duration-300 ease-out motion-reduce:transition-none",
            open && "-translate-y-2 -rotate-45"
          )}
        />
      </button>

      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        aria-hidden={a11yClosed}
        {...(a11yClosed ? { inert: true } : {})}
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-(--background) md:hidden",
          "transition-opacity duration-300 ease-out motion-reduce:transition-none",
          open
            ? "pointer-events-auto opacity-100 delay-0"
            : "pointer-events-none opacity-0 delay-200"
        )}
      >
        <nav
          className={cn(
            "flex flex-col gap-1 p-4",
            motionSafe,
            open ? "translate-y-0 delay-0" : "-translate-y-3 delay-0"
          )}
          aria-label="Main navigation"
        >
          {standardLinks.map((item, index) => (
            <NavLink
              key={item.href}
              item={item}
              onClick={close}
              className={cn(
                mobileNavLinkClassName,
                motionSafe,
                open
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-3 opacity-0"
              )}
              style={{
                transitionDelay: staggerDelay(index, open, totalAnimated),
              }}
            />
          ))}
          <div
            className={cn(
              "mt-4 border-t border-(--foreground)/10 pt-4",
              motionSafe,
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            )}
            style={{
              transitionDelay: staggerDelay(
                standardLinks.length,
                open,
                totalAnimated
              ),
            }}
          >
            {ctaLinks.map((item, index) => (
              <NavLink
                key={item.href}
                item={item}
                onClick={close}
                mobile
                className={cn(
                  motionSafe,
                  open
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-3 opacity-0"
                )}
                style={{
                  transitionDelay: staggerDelay(
                    standardLinks.length + 1 + index,
                    open,
                    totalAnimated
                  ),
                }}
              />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
