"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Work", href: "/" },
  { label: "UI/UX", href: "/ui-ux" },
  { label: "Models", href: "/models" },
  { label: "Photos", href: "/photos" },
  { label: "About", href: "/about" },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/mano-balan-4200883b1";
const EMAIL = "manobalan67@gmail.com";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/" || pathname.startsWith("/projects");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-100 bg-black/90 backdrop-blur-[15px] border-b border-white/8">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-3 md:px-8">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            sessionStorage.removeItem("splashShown");
            // Already-home nav needs a hard reload to remount the splash;
            // Next.js's router won't remount the page for a same-route push.
            if (pathname === "/") {
              window.location.href = "/";
            } else {
              router.push("/");
            }
          }}
          className="justify-self-start text-[14px] font-semibold tracking-[3px] uppercase text-white opacity-90 transition-opacity duration-300 hover:opacity-100"
        >
          ManoBalan
        </Link>

        <nav className="hidden items-center gap-12 justify-self-center md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-1 text-[12px] tracking-[2px] uppercase transition-colors duration-300"
                style={{ color: active ? "#fff" : "rgba(255,255,255,0.5)" }}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute left-0 bottom-0.5 h-px w-full bg-white origin-left"
                    style={{ animation: "navUnderline 0.4s var(--ease-premium)" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-self-end gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/50 transition-colors duration-300 hover:text-white"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="text-white/50 transition-colors duration-300 hover:text-white"
          >
            <MailIcon />
          </a>

          <button
            type="button"
            className="text-[20px] opacity-60 transition-opacity duration-300 hover:opacity-100 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 border-t border-white/8 px-6 py-4">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-[13px] tracking-[2px] uppercase transition-colors duration-300"
                style={{ color: active ? "#fff" : "rgba(255,255,255,0.5)" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
