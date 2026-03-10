import { professionals } from "@/data/professionals";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const gold = "#b2945a";

export function generateStaticParams() {
  return professionals.map((p) => ({ slug: p.slug }));
}

export default function ProfessionalPage({ params }: { params: { slug: string } }) {
  const person = professionals.find((p) => p.slug === params.slug);
  if (!person) return notFound();

  const hue = (professionals.indexOf(person) * 37) % 360;
  const softBg = `hsl(${hue}, 12%, 93%)`;

  return (
    <>
      <section style={{
        paddingTop: "140px", paddingBottom: "80px",
        paddingLeft: "24px", paddingRight: "24px",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div style={{
              width: "140px", height: "140px", borderRadius: "50%",
              margin: "0 auto 28px",
              background: person.image ? "none" : softBg,
              border: `2px solid rgba(178,148,90,0.2)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "36px", color: "#8a7550", letterSpacing: "2px",
              overflow: "hidden",
            }}>
              {person.image ? (
                <img src={person.image} alt={person.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              ) : person.initials}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 300,
              color: "#2a2420", marginBottom: "8px", lineHeight: 1.2,
            }}>{person.name}</h1>
          </FadeIn>

          {person.role && (
            <FadeIn delay={0.15}>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase",
                color: gold, marginBottom: "8px", fontWeight: 300,
              }}>{person.role}</div>
            </FadeIn>
          )}

          {person.acceptingClients && (
            <FadeIn delay={0.18}>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "12px", color: "#5a8a5a", fontWeight: 400,
                marginBottom: "24px",
              }}>Accepting New Clients</div>
            </FadeIn>
          )}

          <FadeIn delay={0.2}>
            <div style={{
              width: "60px", height: "1px", background: gold,
              margin: "0 auto 32px",
            }} />
          </FadeIn>

          {person.bio && (
            <FadeIn delay={0.25}>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "16px", color: "#3a3430",
                fontWeight: 300, lineHeight: 1.8, maxWidth: "550px", margin: "0 auto 40px",
              }}>{person.bio}</p>
            </FadeIn>
          )}

          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/professionals" style={{
                display: "inline-block", padding: "14px 36px",
                border: `1px solid ${gold}`,
                fontFamily: "'Outfit', sans-serif",
                fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase",
                color: gold, fontWeight: 400,
                textDecoration: "none", transition: "all 0.3s ease",
              }}>← All Professionals</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
