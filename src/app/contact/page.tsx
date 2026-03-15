"use client";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";

const gold = "#b2945a";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", comment: "" });

  return (
    <>
      <PageHero
        label="Contact"
        title="Get in Touch"
        description="Whether you are looking to book a hair consultation or appointment, or learn more about joining our team of expert stylists, we would love to hear from you!"
        backgroundImage="/images/contact-hero.jpg"
      />

      <section className="section-padding" style={{ padding: "80px 48px 100px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ flex: 1 }}>
                  <label style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: "12px",
                    letterSpacing: "2px", textTransform: "uppercase",
                    color: "#3a3430", fontWeight: 300, display: "block", marginBottom: "8px",
                  }}>First Name *</label>
                  <input type="text" value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 16px",
                      border: "1px solid rgba(178,148,90,0.2)", borderRadius: "2px",
                      fontFamily: "'Outfit', sans-serif", fontSize: "16px",
                      color: "#2a2420", background: "transparent", outline: "none",
                    }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: "12px",
                    letterSpacing: "2px", textTransform: "uppercase",
                    color: "#3a3430", fontWeight: 300, display: "block", marginBottom: "8px",
                  }}>Last Name</label>
                  <input type="text" value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 16px",
                      border: "1px solid rgba(178,148,90,0.2)", borderRadius: "2px",
                      fontFamily: "'Outfit', sans-serif", fontSize: "16px",
                      color: "#2a2420", background: "transparent", outline: "none",
                    }} />
                </div>
              </div>

              <div>
                <label style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: "12px",
                  letterSpacing: "2px", textTransform: "uppercase",
                  color: "#3a3430", fontWeight: 300, display: "block", marginBottom: "8px",
                }}>Email *</label>
                <input type="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 16px",
                    border: "1px solid rgba(178,148,90,0.2)", borderRadius: "2px",
                    fontFamily: "'Outfit', sans-serif", fontSize: "16px",
                    color: "#2a2420", background: "transparent", outline: "none",
                  }} />
              </div>

              <div>
                <label style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: "12px",
                  letterSpacing: "2px", textTransform: "uppercase",
                  color: "#3a3430", fontWeight: 300, display: "block", marginBottom: "8px",
                }}>Message *</label>
                <textarea value={form.comment} rows={6}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 16px",
                    border: "1px solid rgba(178,148,90,0.2)", borderRadius: "2px",
                    fontFamily: "'Outfit', sans-serif", fontSize: "16px",
                    color: "#2a2420", background: "transparent", outline: "none",
                    resize: "vertical",
                  }} />
              </div>

              <button type="button" style={{
                padding: "16px 48px", background: gold,
                fontFamily: "'Outfit', sans-serif",
                fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase",
                color: "#fff", cursor: "pointer", fontWeight: 400,
                border: "none", transition: "all 0.3s ease",
                boxShadow: "0 4px 24px rgba(178,148,90,0.25)",
                alignSelf: "flex-start",
              }}>Submit</button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{
              marginTop: "80px", textAlign: "center",
              borderTop: "1px solid rgba(178,148,90,0.1)",
              paddingTop: "40px",
            }}>
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontSize: "12px",
                letterSpacing: "3px", textTransform: "uppercase",
                color: gold, marginBottom: "16px", fontWeight: 300,
              }}>Location</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "22px", color: "#2a2420", fontWeight: 400,
                lineHeight: 1.6,
              }}>
                7637 E Stonegate Dr<br />
                Zionsville, IN 46077
              </div>

              <div style={{ marginTop: "32px", borderRadius: "4px", overflow: "hidden", border: "1px solid rgba(178,148,90,0.15)" }}>
                <iframe
                  title="Salon On Point Location"
                  src="https://maps.google.com/maps?q=7637+E+Stonegate+Dr,+Zionsville,+IN+46077&output=embed"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
