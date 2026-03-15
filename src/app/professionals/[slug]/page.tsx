import { Fragment } from "react";
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
  const hasDetails = person.phone || person.services || person.hours;
  const heroImage = person.profileImage || person.image;

  return (
    <>
      {/* HERO / BIO */}
      <section style={{
        paddingTop: "140px", paddingBottom: "60px",
        paddingLeft: "24px", paddingRight: "24px",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: "40px",
          }}>
            <FadeIn>
              {heroImage ? (
                <div style={{
                  width: "280px", height: "280px", borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid rgba(178,148,90,0.15)",
                  flexShrink: 0,
                }}>
                  <img src={heroImage} alt={person.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: person.imagePosition || "center top" }} />
                </div>
              ) : (
                <div style={{
                  width: "280px", height: "280px", borderRadius: "50%",
                  background: softBg,
                  border: "3px solid rgba(178,148,90,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "64px", color: "#8a7550", letterSpacing: "3px",
                  flexShrink: 0,
                }}>
                  {person.initials}
                </div>
              )}
            </FadeIn>

            <div style={{ textAlign: "center" }}>
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
                <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto 32px" }} />
              </FadeIn>

              {person.bio && (
                <FadeIn delay={0.25}>
                  <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                    {person.bio.split("\n\n").map((paragraph, i) => (
                      <p key={i} style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "16px", color: "#3a3430",
                        fontWeight: 300, lineHeight: 1.8,
                        marginBottom: i < person.bio!.split("\n\n").length - 1 ? "16px" : "0",
                      }}>{paragraph}</p>
                    ))}
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & SERVICES */}
      {hasDetails && (
        <section className="section-padding" style={{ padding: "40px 48px 60px" }}>
          <div className="suites-grid" style={{
            maxWidth: "900px", margin: "0 auto",
            display: "grid",
            gridTemplateColumns: person.services && person.services.length > 0 ? "1fr 1fr" : "1fr",
            gap: "60px",
          }}>
            <FadeIn delay={0.1}>
              <div>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase",
                  color: gold, marginBottom: "24px", fontWeight: 300,
                }}>Contact</h3>

                {person.phone && (
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#6a6460", fontWeight: 300, marginBottom: "4px" }}>Phone</div>
                    <a href={`tel:${person.phone.replace(/[.\-]/g, '')}`} style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#2a2420", textDecoration: "none",
                    }}>{person.phone}</a>
                  </div>
                )}

                {person.suite && (
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#6a6460", fontWeight: 300, marginBottom: "4px" }}>Location</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#2a2420" }}>{person.suite}</div>
                  </div>
                )}

                {person.instagram && (
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#6a6460", fontWeight: 300, marginBottom: "4px" }}>Instagram</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#2a2420" }}>{person.instagram}</div>
                  </div>
                )}

                {person.hours && person.hours.length > 0 && (
                  <div style={{ marginTop: "32px" }}>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase",
                      color: gold, marginBottom: "16px", fontWeight: 300,
                    }}>Hours</h3>
                    <div style={{ display: "inline-grid", gridTemplateColumns: "auto auto", columnGap: "8px" }}>
                      {person.hours.map((line, i) => {
                        const colonIndex = line.indexOf(":");
                        const day = colonIndex !== -1 ? line.slice(0, colonIndex) : line;
                        const time = colonIndex !== -1 ? line.slice(colonIndex + 1).trim() : "";
                        return (
                          <Fragment key={i}>
                            <div style={{
                              fontFamily: "'Outfit', sans-serif", fontSize: "14px",
                              color: "#3a3430", fontWeight: 300, lineHeight: 1.8,
                              textAlign: "right",
                            }}>{day}{colonIndex !== -1 ? ":" : ""}</div>
                            <div style={{
                              fontFamily: "'Outfit', sans-serif", fontSize: "14px",
                              color: "#3a3430", fontWeight: 300, lineHeight: 1.8,
                              textAlign: "left",
                            }}>{time}</div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                )}

                {(person.bookingUrl || person.phone) && (
                  <a href={person.bookingUrl || `tel:${person.phone!.replace(/[.\-]/g, '')}`}
                    {...(person.bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    style={{
                    display: "inline-block", marginTop: "32px",
                    padding: "14px 36px", background: gold,
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase",
                    color: "#fff", fontWeight: 400, textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 24px rgba(178,148,90,0.25)",
                  }}>Book Now</a>
                )}
              </div>
            </FadeIn>

            {person.services && person.services.length > 0 && (
              <FadeIn delay={0.2}>
                <div>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase",
                    color: gold, marginBottom: "24px", fontWeight: 300,
                  }}>Services & Pricing</h3>

                  {person.services.map((cat, ci) => (
                    <div key={ci} style={{ marginBottom: "28px" }}>
                      <div style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "20px", fontWeight: 500,
                        color: "#2a2420", marginBottom: "12px",
                      }}>{cat.category}</div>
                      {cat.items.map((item, ii) => (
                        <div key={ii} style={{
                          display: "flex", justifyContent: "space-between", alignItems: "baseline",
                          paddingBottom: "8px", marginBottom: "8px",
                          borderBottom: "1px solid rgba(178,148,90,0.08)",
                        }}>
                          <span style={{
                            fontFamily: "'Outfit', sans-serif", fontSize: "14px",
                            color: "#3a3430", fontWeight: 300,
                          }}>{item.name}</span>
                          <span style={{
                            fontFamily: "'Outfit', sans-serif", fontSize: "14px",
                            color: gold, fontWeight: 400, whiteSpace: "nowrap", marginLeft: "16px",
                          }}>{item.price}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </FadeIn>
            )}
          </div>
        </section>
      )}

      {/* GALLERY */}
      {person.galleryImages && person.galleryImages.length > 0 && (
        <section className="section-padding" style={{
          padding: "40px 48px 60px",
          borderTop: "1px solid rgba(178,148,90,0.1)",
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <FadeIn>
              <h3 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase",
                color: gold, marginBottom: "28px", fontWeight: 300,
                textAlign: "center",
              }}>Gallery</h3>
            </FadeIn>
            <div style={{
              display: "flex", flexWrap: "wrap", gap: "16px",
              justifyContent: "center",
            }}>
              {person.galleryImages.map((img, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.08}>
                  <div style={{
                    borderRadius: "2px", overflow: "hidden",
                    border: "1px solid rgba(178,148,90,0.1)",
                  }}>
                    <img src={img} alt={`${person.name} gallery ${i + 1}`}
                      style={{ display: "block", maxWidth: "320px", height: "auto" }} />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIALS */}
      {person.testimonials && person.testimonials.length > 0 && (
        <section className="section-padding" style={{
          padding: "40px 48px 80px",
          borderTop: "1px solid rgba(178,148,90,0.1)",
        }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <FadeIn>
              <h3 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase",
                color: gold, marginBottom: "40px", fontWeight: 300,
                textAlign: "center",
              }}>Testimonials</h3>
            </FadeIn>

            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {person.testimonials.map((t, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.08}>
                  <div style={{
                    position: "relative",
                    padding: "32px 36px",
                    background: "rgba(178,148,90,0.02)",
                    borderLeft: `3px solid ${gold}`,
                    borderRadius: "0 2px 2px 0",
                  }}>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "36px", color: gold, opacity: 0.25,
                      position: "absolute", top: "12px", left: "16px",
                      lineHeight: 1,
                    }}>&ldquo;</div>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "15px", color: "#3a3430",
                      fontWeight: 300, lineHeight: 1.8,
                      fontStyle: "italic",
                    }}>{t.quote}</p>
                    {t.name && (
                      <div style={{
                        marginTop: "16px",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "13px", color: gold,
                        fontWeight: 400, letterSpacing: "1px",
                      }}>— {t.name}</div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <section style={{ padding: "0 48px 100px", textAlign: "center" }}>
        <FadeIn delay={0.3}>
          <Link href="/professionals" style={{
            display: "inline-block", padding: "14px 36px",
            border: `1px solid ${gold}`,
            fontFamily: "'Outfit', sans-serif",
            fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase",
            color: gold, fontWeight: 400, textDecoration: "none",
          }}>← All Professionals</Link>
        </FadeIn>
      </section>
    </>
  );
}
