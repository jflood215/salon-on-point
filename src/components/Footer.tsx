export default function Footer() {
  return (
    <footer className="footer-inner" style={{
      padding: "32px 48px",
      borderTop: "1px solid rgba(178,148,90,0.1)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: "16px",
    }}>
      <div>
        <img src="/images/logo.png" alt="Salon on Point Suites"
          style={{ height: "28px", width: "auto", opacity: 0.5 }} />
      </div>
      <div style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: "11px", color: "#6a6460",
        fontWeight: 300, letterSpacing: "1px",
      }}>7637 E Stonegate Dr, Zionsville, IN 46077</div>
      <div style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: "11px", color: "#6a6460",
        fontWeight: 300, letterSpacing: "1px",
      }}>© 2026 All Rights Reserved</div>
    </footer>
  );
}
