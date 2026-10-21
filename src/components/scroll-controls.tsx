"use client";

import { useEffect, useState, useRef } from "react";
import "./scroll-controls.css";


function RailControls({ rail }: { rail: HTMLElement }) {
  const [positions, setPositions] = useState<number[]>([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const update = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      const scrollable = /auto|scroll/.test(getComputedStyle(rail).overflowX);
      if (max < 4 || !scrollable) { setPositions([]); return; }
      const points = [0];
      Array.from(rail.children).forEach(child => {
        const item = child as HTMLElement;
        const left = Math.min(max, Math.max(0, item.getBoundingClientRect().left - rail.getBoundingClientRect().left + rail.scrollLeft));
        if (left - points[points.length - 1] > 4) points.push(left);
      });
      if (max - points[points.length - 1] > 4) points.push(max);
      setPositions(points);
      setActive(points.reduce((best, point, i) => Math.abs(point - rail.scrollLeft) < Math.abs(points[best] - rail.scrollLeft) ? i : best, 0));
    };
    const observer = new ResizeObserver(update);
    observer.observe(rail);
    Array.from(rail.children).forEach(child => observer.observe(child));
    rail.addEventListener("scroll", update, { passive: true });
    update();
    return () => { observer.disconnect(); rail.removeEventListener("scroll", update); };
  }, [rail]);
  if (positions.length < 2) return null;
  const go = (index: number) => rail.scrollTo({ left: positions[index], behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  return <nav className="rail-controls" aria-label="Carousel navigation"><button type="button" className="rail-arrow" disabled={active === 0} onClick={() => go(active - 1)} aria-label="Previous items">‹</button><div className="rail-dots">{positions.map((_, i) => <button type="button" key={i} aria-label={`Show items ${i + 1} of ${positions.length}`} aria-current={active === i ? "true" : undefined} className={active === i ? "rail-dot active" : "rail-dot"} onClick={() => go(i)} />)}</div><button type="button" className="rail-arrow" disabled={active === positions.length - 1} onClick={() => go(active + 1)} aria-label="Next items">›</button></nav>;
}

export function ScrollControls() {
  const mount = useRef<HTMLDivElement>(null);
  const [rail, setRail] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const previous = mount.current?.previousElementSibling;
    if (previous instanceof HTMLElement) setRail(previous);
  }, []);
  return <div ref={mount} className="rail-controls-mount">{rail ? <RailControls rail={rail} /> : null}</div>;
}
