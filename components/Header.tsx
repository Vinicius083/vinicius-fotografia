"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { id: "series", href: "/#series", label: "Séries" },
  { id: "sobre", href: "/#sobre", label: "Sobre" },
  { id: "processo", href: "/#processo", label: "Processo" },
];

export default function Header() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [scrolled, setScrolled] = useState(false);
  const [inverted, setInverted] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const setHeight = () => {
      if (ref.current) {
        document.documentElement.style.setProperty(
          "--header-h",
          `${ref.current.offsetHeight}px`,
        );
      }
    };
    setHeight();
    const ro = new ResizeObserver(setHeight);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const headerHeight = ref.current?.offsetHeight ?? 58;
    const active = new Set<Element>();
    let observer: IntersectionObserver | null = null;

    const setup = () => {
      observer?.disconnect();
      active.clear();
      const targets = document.querySelectorAll("[data-header-invert]");
      if (!targets.length) {
        setInverted(false);
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) active.add(entry.target);
            else active.delete(entry.target);
          });
          setInverted(active.size > 0);
        },
        { rootMargin: `-${headerHeight}px 0px -100% 0px`, threshold: 0 },
      );
      targets.forEach((t) => observer!.observe(t));
    };

    const raf = requestAnimationFrame(setup);
    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [pathname]);

  // Marca qual link corresponde à seção visível no momento (scrollspy).
  useEffect(() => {
    if (pathname === "/galerias") {
      setActive("galerias");
      return;
    }
    const headerHeight = ref.current?.offsetHeight ?? 58;
    const onScroll = () => {
      let current: string | null = null;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= headerHeight + 40)
          current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Desliza o indicador sob o link ativo.
  useEffect(() => {
    const update = () => {
      const nav = navRef.current;
      const el = active ? linkRefs.current.get(active) : null;
      if (!nav || !el) {
        setIndicator((s) => ({ ...s, opacity: 0 }));
        return;
      }
      const navRect = nav.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicator({
        left: elRect.left - navRect.left,
        width: elRect.width,
        opacity: 1,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  const headerStyle = inverted
    ? ({
        "--header-fg": "#f3f2f2",
        "--header-bg": scrolled
          ? "color-mix(in srgb, #191714 72%, transparent)"
          : "color-mix(in srgb, #191714 30%, transparent)",
        "--header-divider": "color-mix(in srgb, #f3f2f2 18%, transparent)",
      } as React.CSSProperties)
    : ({
        "--header-fg": "var(--color-text)",
        "--header-bg": scrolled
          ? "color-mix(in srgb, var(--color-bg) 90%, transparent)"
          : "color-mix(in srgb, var(--color-bg) 55%, transparent)",
        "--header-divider": scrolled ? "var(--color-divider)" : "transparent",
      } as React.CSSProperties);

  return (
    <header
      ref={ref}
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
      style={headerStyle}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          padding: "14px var(--gutter)",
          margin: "0 auto",
        }}
      >
        <Link
          href="/#topo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "inherit",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 17,
              letterSpacing: "0.02em",
            }}
          >
            Vinícius Almeida
          </span>
        </Link>
        <nav
          ref={navRef}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "clamp(14px, 2vw, 30px)",
            fontFamily: "var(--font-heading)",
            fontSize: 14,
            letterSpacing: "0.04em",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className="nav-link"
              aria-current={active === l.id ? "page" : undefined}
              ref={(el) => {
                if (el) linkRefs.current.set(l.id, el);
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/galerias"
            className="nav-link"
            aria-current={active === "galerias" ? "page" : undefined}
            ref={(el) => {
              if (el) linkRefs.current.set("galerias", el);
            }}
          >
            Galerias
          </Link>
          <span
            className="nav-indicator"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
          />
          <Link href="/#contato" className="btn btn-primary">
            Contratar
          </Link>
        </nav>
      </div>
    </header>
  );
}
