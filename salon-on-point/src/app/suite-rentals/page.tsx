import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";

const gold = "#b2945a";

const amenities = [
  "Customizable Private Salon Suites",
  "Stylish Waiting Area for your Clients",
  "24 Hour Access with No Schedule Restrictions",
  "Free Wi-Fi",
  "Washer & Dryers Onsite",
  "Ample Parking",
  "High-End Location",
];

export default function SuiteRentalsPage() {
  return (
    <>
      <PageHero
        label="Suite Rentals"
        title="Salon Suites for Lease"
        description="Operate your own business in one of our brand new, private salon suites."
      />

      <section className="section-padding" style={{ padding: "0 48px 80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "12px", letterSpacing: "5px", textTransform: "uppercase",
              color: gold, marginBottom: "28px", fontWeight: 300, textAlign: "center",
            }}>Amenities</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="amenities-grid" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px",
              maxWidth: "600px", margin: "0 auto",
            }}>
              {amenities.map((item) => (
                <div key={item} style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "16px", color: "#3a3430", fontWeight: 300,
                }}>
                  <span style={{ color: gold, fontSize: "8px" }}>✦</span>
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding" style={{
        padding: "80px 48px",
        borderTop: "1px solid rgba(178,148,90,0.1)",
        textAlign: "center",
      }}>
        <FadeIn>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 300,
            color: "#2a2420", marginBottom: "32px",
          }}>Learn More About Our Private Salon Suites</h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <a href="/contact" style={{
            display: "inline-block", padding: "16px 48px",
            background: gold, fontFamily: "'Outfit', sans-serif",
            fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase",
            color: "#fff", cursor: "pointer", fontWeight: 400,
            textDecoration: "none", transition: "all 0.4s ease",
            boxShadow: "0 4px 24px rgba(178,148,90,0.25)",
          }}>Contact Us</a>
        </FadeIn>
      </section>
    </>
  );
}
