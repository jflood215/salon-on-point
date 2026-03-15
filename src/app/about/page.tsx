import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Salon on Point Suites"
        description="With major shifts in the beauty industry, the traditional salon model focusing on one specialty is becoming obsolete. Salon on Point Suites works to empower health and beauty professionals with private suite rental opportunities allowing you to operate your business to your strengths and areas of expertise."
        backgroundImage="/images/about-hero.jpg"
        backgroundPosition="50% 40%"
      />

      <section className="section-padding" style={{ padding: "60px 48px 100px" }}>
        <div className="cards-grid" style={{
          maxWidth: "1000px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px",
        }}>
          <FadeIn>
            <a href="/professionals" style={{ textDecoration: "none" }}>
              <div style={{ position: "relative", overflow: "hidden", borderRadius: "2px", cursor: "pointer" }}>
                <img src="/images/about-professionals.jpg" alt="Find a Beauty Professional"
                  style={{ width: "100%", display: "block", filter: "brightness(0.85)" }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                  display: "flex", alignItems: "flex-end", justifyContent: "center",
                  padding: "32px",
                }}>
                  <div style={{
                    padding: "12px 32px",
                    border: "1px solid rgba(255,255,255,0.8)",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase",
                    color: "#fff", fontWeight: 300,
                  }}>Find a Beauty Professional</div>
                </div>
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.15}>
            <a href="/suite-rentals" style={{ textDecoration: "none" }}>
              <div style={{ position: "relative", overflow: "hidden", borderRadius: "2px", cursor: "pointer" }}>
                <img src="/images/about-suites.jpg" alt="Learn About Rental Opportunities"
                  style={{ width: "100%", display: "block", filter: "brightness(0.85)" }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                  display: "flex", alignItems: "flex-end", justifyContent: "center",
                  padding: "32px",
                }}>
                  <div style={{
                    padding: "12px 32px",
                    border: "1px solid rgba(255,255,255,0.8)",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase",
                    color: "#fff", fontWeight: 300,
                  }}>Learn About Rental Opportunities</div>
                </div>
              </div>
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
