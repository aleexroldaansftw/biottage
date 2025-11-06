import React from "react";

const About = () => {
  return (
    <section id="sobre" className="about-section" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 className="about-title" style={styles.title}>Sobre Biottage</h2>
          <p className="about-subtitle" style={styles.subtitle}>
            Una marca mexicana comprometida con la innovación alimentaria funcional
          </p>
        </div>

        <div className="about-content" style={styles.content}>
          <div className="card" style={styles.card}>
            <div style={styles.cardIcon}>🎯</div>
            <h3 style={styles.cardTitle}>Misión</h3>
            <p style={styles.cardText}>
              Ofrecer una alternativa saludable, funcional y accesible, mediante la elaboración artesanal de queso cottage enriquecido con probióticos.
            </p>
          </div>

          <div className="card" style={styles.card}>
            <div style={styles.cardIcon}>🔭</div>
            <h3 style={styles.cardTitle}>Visión</h3>
            <p style={styles.cardText}>
              Ser una empresa referente en innovación alimentaria funcional en México, reconocida por la calidad y el respaldo científico.
            </p>
          </div>
        </div>

        <div style={styles.valuesSection}>
          <h3 style={styles.valuesTitle}>Nuestros Valores</h3>

          <div className="values-grid" style={styles.valuesGrid}>
            {[
              ["🌱", "Responsabilidad", "Compromiso con la calidad y ética"],
              ["🌎", "Sostenibilidad", "Empaques y procesos conscientes"],
              ["🤝", "Confianza", "Transparencia y educación alimentaria"],
              ["💪", "Accesibilidad", "Productos para distintos estilos de vida"],
            ].map(([icon, name, desc], i) => (
              <div key={i} className="value-card" style={styles.valueCard}>
                <span style={styles.valueIcon}>{icon}</span>
                <h4 style={styles.valueName}>{name}</h4>
                <p style={styles.valueText}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles responsive específicos para este componente */}
      <style>{`
        /* Aseguramos que el texto de las tarjetas sea blanco siempre */
        .about-section .card,
        .about-section .value-card {
          color: white;
        }

        /* Desktop: two columns for mission/vision */
        .about-section .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        /* Values grid on desktop: 4 columnas */
        .about-section .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* Ajustes de texto para evitar cortes verticales y mejorar lectura */
        .about-section .card p,
        .about-section .value-card p {
          margin: 0;
          line-height: 1.6;
        }

        /* MOBILE */
        @media (max-width: 992px) {
          .about-section .about-content {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .about-section .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
          .about-section .card {
            padding: 28px;
            border-radius: 14px;
          }
        }

        @media (max-width: 480px) {
          .about-section .values-grid {
            grid-template-columns: 1fr;
          }

          /* Reducimos fuentes para que el texto no envuelva demasiado */
          .about-section .about-title {
            font-size: 1.8rem;
          }
          .about-section .cardTitle {
            font-size: 1.35rem;
          }

          .about-section .card {
            padding: 22px;
          }

          .about-section .value-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

/* Inline base styles (seguimos usando objetos para mantener consistencia) */
const styles = {
  section: { padding: "80px 0", backgroundColor: "#ffffff" },
  header: { textAlign: "center", marginBottom: "36px" },
  title: { fontSize: "2.5rem", color: "#1E3A8A", margin: 0 },
  subtitle: { fontSize: "1.05rem", color: "#64748b", maxWidth: "700px", margin: "12px auto 0" },

  content: {
    marginBottom: "40px",
  },

  card: {
    backgroundColor: "#2953ad",
    padding: "36px",
    borderRadius: "16px",
    textAlign: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "220px",
    boxSizing: "border-box",
  },
  cardIcon: { fontSize: "2.6rem", marginBottom: "16px" },
  cardTitle: { fontSize: "1.6rem", marginBottom: "12px", color: "white" },
  cardText: { fontSize: "1rem", color: "white" },

  valuesSection: { marginTop: "20px" },
  valuesTitle: { fontSize: "2rem", color: "#1E3A8A", textAlign: "center", marginBottom: "20px" },

  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px",
  },
  valueCard: {
    backgroundColor: "#E6A942",
    padding: "26px",
    borderRadius: "12px",
    textAlign: "center",
    color: "white",
    minHeight: "160px",
    boxSizing: "border-box",
  },
  valueIcon: { fontSize: "2rem", marginBottom: "12px", display: "block" },
  valueName: { fontSize: "1.15rem", fontWeight: 600, marginBottom: "8px", color: "white" },
  valueText: { fontSize: "0.95rem", lineHeight: "1.5", color: "white", margin: 0 },
};

export default About;
