"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const gold = "#b2945a";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Professionals", href: "/professionals" },
  { label: "Suite Rentals", href: "/suite-rentals" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrollY > 60 ? "rgba(254,254,254,0.92)" : "transparent";
  const navShadow = scrollY > 60 ? "0 1px 20px rgba(0,0,0,0.06)" : "none";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 20px", height: "72px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: navBg, backdropFilter: "blur(16px)",
        boxShadow: navShadow, transition: "all 0.4s ease",
      }}>
        <Link href="/" style={{ animation: "fadeDown 0.8s ease both" }}>
          <img src="/images/logo.png" alt="Salon on Point Suites" style={{ height: "38px", width: "auto" }} />
        </Link>

        <div className="desktop-nav" style={{
          display: "flex", gap: "32px", alignItems: "center",
          animation: "fadeDown 0.8s ease 0.2s both",
        }}>
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase",
              color: "#3a3430", textDecoration: "none", fontWeight: 400,
              transition: "color 0.3s ease",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3a3430")}
            >{item.label}</Link>
          ))}
          <Link href="/professionals" style={{
            padding: "10px 24px", background: gold,
            fontFamily: "'Outfit', sans-serif",
            fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase",
            color: "#fff", cursor: "pointer", fontWeight: 400, textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 12px rgba(178,148,90,0.25)",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#9a7e45"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = gold; e.currentTarget.style.transform = "translateY(0)"; }}
          >Book Now</Link>
        </div>

        {/* Hamburger */}
        <div className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}
          style={{ display: "none", flexDirection: "column", gap: "5px", cursor: "pointer", padding: "8px" }}>
          <div style={{ width: "24px", height: "2px", background: gold, transition: "all 0.3s", transform: mobileMenu ? "rotate(45deg) translateY(7px)" : "none" }} />
          <div style={{ width: "24px", height: "2px", background: gold, transition: "all 0.3s", opacity: mobileMenu ? 0 : 1 }} />
          <div style={{ width: "24px", height: "2px", background: gold, transition: "all 0.3s", transform: mobileMenu ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenu && (
        <div style={{
          position: "fixed", top: "72px", left: 0, right: 0, bottom: 0,
          background: "rgba(254,254,254,0.98)", backdropFilter: "blur(16px)",
          zIndex: 99, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "32px",
        }}>
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setMobileMenu(false)} style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "16px",
              letterSpacing: "3px", textTransform: "uppercase",
              color: "#2a2420", textDecoration: "none", fontWeight: 300,
            }}>{item.label}</Link>
          ))}
          <Link href="/professionals" onClick={() => setMobileMenu(false)} style={{
            padding: "14px 40px", marginTop: "16px", background: gold,
            fontFamily: "'Outfit', sans-serif", fontSize: "11px",
            letterSpacing: "3px", textTransform: "uppercase",
            color: "#fff", cursor: "pointer", fontWeight: 400, textDecoration: "none",
          }}>Book Now</Link>
        </div>
      )}
    </>
  );
}
