"use client";
import "./site-header.css";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [["Home", "/"], ["About Us", "/about"], ["Clinics", "/#clinics"], ["Our Doctors", "/#doctors"], ["Services", "/#services"], ["Gallery", "/#gallery"] ];
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  return <div className="site-header" data-name="MainHeader" onKeyDown={event => {
    if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
  }}>
    <div className="site-header-inner">
      <Link className="site-logo" href="/" onClick={() => setOpen(false)}>
        <span className="site-logo-icon"><img src="/figma/nav.png" width="48" height="48" alt="" /></span>
        <span><strong>Dr. Shaitan Singh Choudhary</strong><small>Expert Neurology Care</small></span>
      </Link>
      <button ref={toggle} className="site-menu-toggle" aria-expanded={open} aria-controls="site-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen(!open)}>
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>
      <nav id="site-navigation" aria-label="Main navigation" className={open ? "site-navigation is-open" : "site-navigation"}>
        {links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="site-book-button" href="/book-appointment" onClick={() => setOpen(false)}><img src="/figma/imgContainer29.svg" width="14" height="16" alt="" />Book Appointment</Link>
      </nav>
    </div>
  </div>;
}


