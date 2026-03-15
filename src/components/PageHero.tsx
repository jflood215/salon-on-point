export default function PageHero({ label, title, description, backgroundImage, backgroundPosition = "50% 54%" }: {
  label: string; title: string; description?: string; backgroundImage?: string; backgroundPosition?: string;
}) {
  const gold = "#b2945a";
  return (
    <section style={{
      paddingTop: "160px", paddingBottom: "80px", textAlign: "center",
      paddingLeft: "24px", paddingRight: "24px",
      ...(backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(42,36,32,0.55), rgba(42,36,32,0.55)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition,
        backgroundRepeat: "no-repeat",
        marginTop: "72px",
        paddingTop: "120px",
        paddingBottom: "120px",
      } : {}),
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "12px", letterSpacing: "5px", textTransform: "uppercase",
          color: gold, marginBottom: "20px", fontWeight: 300,
          animation: "heroText 1s ease 0.3s both",
        }}>{label}</div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300,
          color: backgroundImage ? "#ffffff" : "#2a2420", marginBottom: "32px", lineHeight: 1.2,
          animation: "heroText 1s ease 0.5s both",
        }}>{title}</h1>
        <div style={{
          width: "60px", height: "1px", background: gold,
          margin: "0 auto 32px", animation: "lineGrow 1s ease 0.8s both",
        }} />
        {description && (
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(16px, 2vw, 18px)", color: backgroundImage ? "rgba(255,255,255,0.9)" : "#3a3430",
            fontWeight: 300, lineHeight: 1.8, maxWidth: "650px", margin: "0 auto",
            animation: "heroText 1s ease 0.7s both",
          }}>{description}</p>
        )}
      </div>
    </section>
  );
}
