const Benefits = () => {
  return (
    <section id="beneficios" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>Beneficios Probióticos</h2>
          <p style={styles.subtitle}>
            Respaldados por evidencia científica internacional
          </p>
        </div>

        <div style={styles.mainBenefit}>
          <div style={styles.iconLarge}>🦠</div>
          <h3 style={styles.mainTitle}>¿Por qué Lactobacillus rhamnosus?</h3>
          <p style={styles.mainText}>
            Esta cepa probiótica tiene una gran capacidad de adherirse al epitelio intestinal, 
            protegiendo la barrera digestiva y favoreciendo el equilibrio de la microbiota. 
          </p>
        </div>

        <div style={styles.benefitsGrid}>
          {[
            { icon: "🛡️", title: "Protección Intestinal", text: "Protege la barrera digestiva." },
            { icon: "⚖️", title: "Equilibrio de Microbiota", text: "Favorece el balance intestinal." },
            { icon: "💊", title: "Reduce Molestias", text: "Disminuye hinchazón y gases." },
            { icon: "🔬", title: "Respaldo Científico", text: "Avalado por estudios clínicos." },
          ].map((b, i) => (
            <div key={i} style={styles.benefitCard}>
              <div style={styles.cardIcon}>{b.icon}</div>
              <h4 style={styles.cardTitle}>{b.title}</h4>
              <p style={styles.cardText}>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "80px 0", backgroundColor: "#ffffff" },
  header: { textAlign: "center", marginBottom: "40px" },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#1E3A8A",
    marginBottom: "10px",
  },
  subtitle: { fontSize: "1.1rem", color: "#64748b" },
  mainBenefit: {
    textAlign: "center",
    backgroundColor: "#EBF4FF",
    padding: "40px",
    borderRadius: "20px",
    margin: "0 auto 50px",
    maxWidth: "800px",
  },
  iconLarge: { fontSize: "4rem", marginBottom: "20px" },
  mainTitle: { fontSize: "2rem", color: "#1E3A8A", marginBottom: "16px" },
  mainText: { fontSize: "1rem", color: "#64748b", lineHeight: "1.7" },
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
  },
  benefitCard: {
    backgroundColor: "#f8fafc",
    padding: "30px",
    borderRadius: "16px",
    textAlign: "center",
    border: "2px solid #e2e8f0",
  },
  cardIcon: { fontSize: "3rem", marginBottom: "12px" },
  cardTitle: { fontSize: "1.2rem", fontWeight: "700", color: "#1E3A8A" },
  cardText: { fontSize: "0.95rem", color: "#64748b" },
};

// 📱 Responsive
if (window.innerWidth <= 768) {
  styles.benefitsGrid.gridTemplateColumns = "1fr 1fr";
  styles.mainBenefit.padding = "25px";
  styles.title.fontSize = "2rem";
  styles.cardTitle.fontSize = "1.1rem";
}
if (window.innerWidth <= 500) {
  styles.benefitsGrid.gridTemplateColumns = "1fr";
}

export default Benefits;
