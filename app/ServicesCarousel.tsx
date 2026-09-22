"use client";

import { Children, cloneElement, isValidElement, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const items = [
  { id: "svc-private", label: "הסעה פרטית" },
  { id: "svc-workers", label: "הסעות עובדים" },
  { id: "svc-events", label: "אירועים וחתונות" },
  { id: "svc-airport", label: "שדה התעופה" },
];

export function ServicesCarousel({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  const nearest = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return 0;
    const mid = el.getBoundingClientRect().left + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    [...el.children].forEach((child, i) => {
      const rect = (child as HTMLElement).getBoundingClientRect();
      const dist = Math.abs(rect.left + rect.width / 2 - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => setActive(nearest());
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [nearest]);

  function goTo(index: number) {
    const el = scrollerRef.current;
    const card = el?.children[index] as HTMLElement | undefined;
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delta = card.getBoundingClientRect().left + card.offsetWidth / 2 - (el.getBoundingClientRect().left + el.clientWidth / 2);
    el.scrollTo({ left: el.scrollLeft + delta, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <div className="services-carousel">
      <div className="cards" ref={scrollerRef}>
        {Children.map(children, (child, i) =>
          isValidElement(child) ? cloneElement(child, { id: items[i]?.id }) : child,
        )}
      </div>
      <div className="carousel-dots">
        {items.slice(0, count).map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={i === active ? "is-active" : undefined}
            aria-label={item.label}
            aria-current={i === active ? "true" : undefined}
            onClick={(event) => {
              event.preventDefault();
              goTo(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}
