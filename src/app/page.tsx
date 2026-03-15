"use client";
import FadeIn from "@/components/FadeIn";
import ProfessionalCard from "@/components/ProfessionalCard";
import { professionals, services } from "@/data/professionals";

const gold = "#b2945a";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        height: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "0 24px" }}>
          <div style={{ animation: "heroText 1s ease 0.2s both", marginBottom: "28px", display: "flex", justifyContent: "center" }}>
            <img src="/images/logo.png" alt="Salon on Point Suites"
              style={{ height: "clamp(100px, 20vw, 160px)", width: "auto", display: "block", margin: "0 auto" }} />
          </div>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "11px", letterSpacing: "6px", textTransform: "uppercase",
            color: gold, marginBottom: "24px", fontWeight: 300,
            animation: "heroText 1s ease 0.3s both",
          }}>Zionsville, Indiana</div>
          <div style={{
            width: "60px", height: "1px", background: gold,
            margin: "0 auto 28px", animation: "lineGrow 1s ease 1s both",
          }} />
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "16px", color: "#3a3430",
            letterSpacing: "1px", fontWeight: 300, maxWidth: "440px", margin: "0 auto 40px",
            lineHeight: 1.8, animation: "heroText 1s ease 0.9s both",
          }}>Find the beauty professional that is right for you.</p>
          <div style={{ animation: "heroText 1s ease 1.1s both" }}>
            <a href="/professionals" style={{
              display: "inline-block", padding: "16px 48px",
              background: gold, fontFamily: "'Outfit', sans-serif",
              fontSize: "11px", letterSpacing: "3.5px", textTransform: "uppercase",
              color: "#fff", cursor: "pointer", fontWeight: 400,
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(178,148,90,0.25)",
              transition: "all 0.4s ease",
            }}>Make an Appointment</a>
          </div>
        </div>
        <div style={{
          position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          animation: "heroText 1s ease 1.4s both",
        }}>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase",
            color: "rgba(178,148,90,0.4)", fontWeight: 300,
          }}>Explore</div>
          <div style={{
            width: "1px", height: "36px",
            background: `linear-gradient(to bottom, ${gold}, transparent)`,
            opacity: 0.3,
          }} />
        </div>
      </section>

      {/* SERVICES MARQUEE */}
      <section style={{
        padding: "28px 0", overflow: "hidden",
        borderTop: "1px solid rgba(178,148,90,0.1)",
        borderBottom: "1px solid rgba(178,148,90,0.1)",
        background: "rgba(178,148,90,0.02)",
      }}>
        <div style={{
          display: "flex", whiteSpace: "nowrap",
          animation: "marquee 20s linear infinite",
          width: "max-content",
        }}>
          {[...services, ...services, ...services, ...services].map((s, i) => (
            <span key={i} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px", fontWeight: 400, color: "#4a4440",
              marginRight: "12px", fontStyle: "italic",
              display: "inline-flex", alignItems: "center", gap: "12px",
            }}>
              {s}
              <span style={{ fontSize: "6px", color: gold, opacity: 0.5 }}>✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* REDEFINING BEAUTY */}
      <section id="about" className="section-padding" style={{ padding: "100px 48px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "12px", letterSpacing: "5px", textTransform: "uppercase",
              color: gold, marginBottom: "24px", fontWeight: 300,
            }}>Redefining Beauty</div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 300,
              lineHeight: 1.75, color: "#2a2420",
            }}>
              Hair. Skin. Massage. Botox. Lashes. Brows. Nails. Coffee. Pilates.
              Salon on Point Suites brings together independent beauty professionals
              under one roof, each dedicated to their craft and to you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section-padding" style={{
        padding: "80px 48px 100px",
        borderTop: "1px solid rgba(178,148,90,0.1)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "12px", letterSpacing: "5px", textTransform: "uppercase",
              color: gold, marginBottom: "12px", fontWeight: 300,
            }}>Our Professionals</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 300,
              color: "#2a2420", marginBottom: "12px",
            }}>Meet the Team</h2>
          </FadeIn>
          <FadeIn delay={0.18}>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "16px", color: "#3a3430",
              fontWeight: 300, lineHeight: 1.7, maxWidth: "480px", marginBottom: "50px",
            }}>
              Every professional at Salon on Point is an independent expert.
              Find the one that&apos;s right for you.
            </p>
          </FadeIn>
          <div className="team-grid">
            {professionals.map((person, i) => (
              <ProfessionalCard key={person.slug} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SUITE RENTALS */}
      <section id="suites" className="section-padding" style={{
        padding: "100px 48px",
        borderTop: "1px solid rgba(178,148,90,0.1)",
      }}>
        <div className="suites-grid" style={{
          maxWidth: "1000px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px",
          alignItems: "center",
        }}>
          <FadeIn>
            <div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "12px", letterSpacing: "5px", textTransform: "uppercase",
                color: gold, marginBottom: "16px", fontWeight: 300,
              }}>Suite Rentals</div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 300,
                color: "#2a2420", marginBottom: "20px", lineHeight: 1.2,
              }}>There&apos;s Beauty in Ownership</h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "16px", color: "#3a3430",
                fontWeight: 300, lineHeight: 1.8, marginBottom: "32px",
              }}>
                As a suite owner, you are free to set your own hours, design your own
                space, and ultimately run your own business. Join our community of
                independent professionals in Zionsville.
              </p>
              <a href="/suite-rentals" style={{
                display: "inline-block", padding: "14px 36px",
                border: `1px solid ${gold}`,
                fontFamily: "'Outfit', sans-serif",
                fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase",
                color: gold, cursor: "pointer", fontWeight: 400,
                textDecoration: "none", transition: "all 0.3s ease",
              }}>Learn More</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ position: "relative" }}>
              <img src="/images/suite-rentals.jpg" alt="Salon on Point Suites"
                style={{ width: "100%", maxWidth: "340px", borderRadius: "2px",
                  border: "1px solid rgba(178,148,90,0.1)" }} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VISIT US */}
      <section id="contact" className="section-padding" style={{
        padding: "100px 48px",
        borderTop: "1px solid rgba(178,148,90,0.1)",
        textAlign: "center",
      }}>
        <FadeIn>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "12px", letterSpacing: "5px", textTransform: "uppercase",
            color: gold, marginBottom: "20px", fontWeight: 300,
          }}>Visit Us</div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 300,
            color: "#2a2420", marginBottom: "40px",
          }}>Your Transformation Awaits</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <a href="/professionals" style={{
            display: "inline-block", padding: "18px 56px",
            background: gold, fontFamily: "'Outfit', sans-serif",
            fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase",
            color: "#fff", cursor: "pointer", fontWeight: 400,
            textDecoration: "none", transition: "all 0.4s ease",
            boxShadow: "0 4px 24px rgba(178,148,90,0.2)",
          }}>Make an Appointment</a>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="contact-details" style={{
            marginTop: "60px", display: "flex", justifyContent: "center", gap: "56px",
            flexWrap: "wrap",
          }}>
            {[
              { label: "Address", value: "7637 E Stonegate Dr\nZionsville, IN 46077" },
              { label: "Services", value: "Hair · Skin · Massage\nBotox · Lashes · Nails" },
            ].map((item) => (
              <div key={item.label}>
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase",
                  color: gold, marginBottom: "10px", fontWeight: 300, opacity: 0.7,
                }}>{item.label}</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "20px", color: "#2a2420", fontWeight: 400,
                  lineHeight: 1.6, whiteSpace: "pre-line",
                }}>{item.value}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}
