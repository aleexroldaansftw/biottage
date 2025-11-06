const About = () => {
  return (
    <section id="sobre" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>Sobre Biottage</h2>
          <p style={styles.subtitle}>
            Una marca mexicana comprometida con la innovación alimentaria funcional
          </p>
        </div>

        <div style={styles.content}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🎯</div>
            <h3 style={styles.cardTitle}>Misión</h3>
            <p style={styles.cardText}>
              Ofrecer una alternativa saludable, funcional y accesible...
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>🔭</div>
            <h3 style={styles.cardTitle}>Visión</h3>
            <p style={styles.cardText}>
              Ser una empresa referente en innovación alimentaria...
            </p>
          </div>
        </div>

        <div style={styles.valuesSection}>
          <h3 style={styles.valuesTitle}>Nuestros Valores</h3>
          <div style={styles.valuesGrid}>
            {[
              ["🌱", "Responsabilidad"],
              ["🌎", "Sostenibilidad"],
              ["🤝", "Confianza"],
              ["💪", "Accesibilidad"],
            ].map(([icon, name], i) => (
              <div key={i} style={styles.valueCard}>
                <span style={styles.valueIcon}>{icon}</span>
                <h4 style={styles.valueName}>{name}</h4>
                <p style={styles.valueText}>Compromiso con la calidad y ética</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "80px 0", backgroundColor: "#ffffff" },
  header: { textAlign: "center", marginBottom: "60px" },
  title: { fontSize: "2.5rem", color: "#1E3A8A" },
  subtitle: { fontSize: "1.1rem", color: "#64748b", maxWidth: "600px", margin: "0 auto" },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    marginBottom: "60px",
  },
  card: {
    backgroundColor: "#2953ad",
    padding: "40px",
    borderRadius: "16px",
    textAlign: "center",
    color: "white",
  },
  cardIcon: { fontSize: "3rem", marginBottom: "20px" },
  cardTitle: { fontSize: "1.8rem", marginBottom: "12px" },
  cardText: { fontSize: "1.1rem", lineHeight: "1.8" },
  valuesSection: { marginTop: "40px" },
  valuesTitle: {
    fontSize: "2rem",
    color: "#1E3A8A",
    textAlign: "center",
    marginBottom: "40px",
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
  },
  valueCard: {
    backgroundColor: "#E6A942",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    color: "white",
  },
  valueIcon: { fontSize: "2.5rem", marginBottom: "12px" },
  valueName: { fontSize: "1.2rem", fontWeight: "600" },
  valueText: { fontSize: "0.95rem", lineHeight: "1.6" },
};

// 📱 Responsive
if (window.innerWidth <= 768) {
  styles.content.gridTemplateColumns = "1fr";
  styles.valuesGrid.gridTemplateColumns = "1fr 1fr";
  styles.card.padding = "30px";
}
if (window.innerWidth <= 480) {
  styles.valuesGrid.gridTemplateColumns = "1fr";
  styles.title.fontSize = "2rem";
}

export default About;
