"use client";
import { useState } from "react";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { Professional } from "@/data/professionals";

const gold = "#b2945a";

export default function ProfessionalCard({ person, index }: { person: Professional; index: number }) {
  const [hovered, setHovered] = useState(false);
  const hue = (index * 37) % 360;
  const softBg = `hsl(${hue}, 12%, 93%)`;

  return (
    <FadeIn delay={index * 0.04}>
      <Link href={`/professionals/${person.slug}`} style={{ textDecoration: "none" }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            textAlign: "center", cursor: "pointer", padding: "28px 16px",
            borderRadius: "2px",
            border: "1px solid transparent",
            borderColor: hovered ? "rgba(178,148,90,0.25)" : "transparent",
            background: hovered ? "rgba(178,148,90,0.03)" : "transparent",
            transition: "all 0.4s ease",
          }}
        >
          <div style={{
            width: "80px", height: "80px", borderRadius: "50%",
            margin: "0 auto 16px",
            background: person.image ? "none" : softBg,
            border: `2px solid ${hovered ? "rgba(178,148,90,0.5)" : "rgba(178,148,90,0.15)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "20px", color: "#8a7550", letterSpacing: "1px",
            transition: "all 0.4s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            overflow: "hidden",
          }}>
            {person.image ? (
              <img src={person.image} alt={person.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            ) : person.initials}
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "17px", color: "#2a2420", fontWeight: 500, letterSpacing: "0.3px",
          }}>{person.name}</div>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "12px", letterSpacing: "2.5px", textTransform: "uppercase",
            color: gold, marginTop: "6px", fontWeight: 300,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(4px)",
            transition: "all 0.3s ease",
          }}>View Profile →</div>
        </div>
      </Link>
    </FadeIn>
  );
}
