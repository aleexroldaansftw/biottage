import { Shield, Scale, Pill, Microscope, HeartPulse, Coffee, Salad, Dumbbell } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { 
      Icon: Shield, 
      title: "Protección Intestinal", 
      text: "Protege la barrera digestiva y fortalece el sistema inmune." 
    },
    { 
      Icon: Scale, 
      title: "Equilibrio de Microbiota", 
      text: "Favorece el balance intestinal y la salud digestiva." 
    },
    { 
      Icon: Pill, 
      title: "Reduce Molestias", 
      text: "Disminuye hinchazón, gases y malestar digestivo." 
    },
    { 
      Icon: Microscope, 
      title: "Respaldo Científico", 
      text: "Avalado por estudios clínicos internacionales." 
    },
  ];

  const applications = [
    {
      Icon: Coffee,
      title: "Desayuno Energético",
      text: "Perfecto con frutas, miel y granola para iniciar el día"
    },
    {
      Icon: Salad,
      title: "Snack Saludable",
      text: "Ideal entre comidas para mantener tu energía"
    },
    {
      Icon: Dumbbell,
      title: "Post-Entrenamiento",
      text: "Alto en proteína para recuperación muscular"
    }
  ];

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
          <div style={styles.iconLarge}>
            <HeartPulse size={64} color="#1E3A8A" strokeWidth={2} />
          </div>
          <h3 style={styles.mainTitle}>¿Por qué Lactobacillus rhamnosus?</h3>
          <p style={styles.mainText}>
            Esta cepa probiótica tiene una gran capacidad de adherirse al epitelio intestinal, 
            protegiendo la barrera digestiva y favoreciendo el equilibrio de la microbiota. 
            Es una de las cepas más estudiadas y con mayor evidencia científica para mejorar 
            la salud digestiva e inmunológica.
          </p>
        </div>

        <div className="benefits-grid" style={styles.benefitsGrid}>
          {benefits.map((benefit, i) => {
            const Icon = benefit.Icon;
            return (
              <div key={i} style={styles.benefitCard}>
                <div style={styles.cardIcon}>
                  <Icon size={48} color="white" strokeWidth={2} />
                </div>
                <h4 style={styles.cardTitle}>{benefit.title}</h4>
                <p style={styles.cardText}>{benefit.text}</p>
              </div>
            );
          })}
        </div>

        <div style={styles.applicationsSection}>
          <h3 style={styles.applicationsTitle}>¿Cómo disfrutar Biottage?</h3>
          <div className="applications-grid" style={styles.applicationsGrid}>
            {applications.map((app, i) => {
              const Icon = app.Icon;
              return (
                <div key={i} style={styles.applicationCard}>
                  <div style={styles.appIcon}>
                    <Icon size={40} color="white" strokeWidth={2} />
                  </div>
                  <h4 style={styles.appTitle}>{app.title}</h4>
                  <p style={styles.appText}>{app.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { 
    padding: "80px 0", 
    backgroundColor: "#f8fafc" 
  },
  header: { 
    textAlign: "center", 
    marginBottom: "60px" 
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#1E3A8A",
    marginBottom: "16px",
  },
  subtitle: { 
    fontSize: "1.2rem", 
    color: "#07316bff" 
  },
  mainBenefit: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "50px 40px",
    borderRadius: "20px",
    margin: "0 auto 60px",
    maxWidth: "900px",
    border: "3px solid #1E3A8A",
    boxShadow: "0 4px 12px rgba(30, 58, 138, 0.15)",
  },
  iconLarge: { 
    display: "flex",
    justifyContent: "center",
    marginBottom: "24px" 
  },
  mainTitle: { 
    fontSize: "2rem", 
    fontWeight: "700",
    color: "#1E3A8A", 
    marginBottom: "20px" 
  },
  mainText: { 
    fontSize: "1.1rem", 
    color: "#1E3A8A", 
    lineHeight: "1.8",
    maxWidth: "700px",
    margin: "0 auto"
  },
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
    marginBottom: "60px",
  },
  benefitCard: {
    backgroundColor: "#f59f0bd3",
    padding: "35px 25px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(245, 159, 11, 0.3)",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  cardIcon: { 
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px" 
  },
  cardTitle: { 
    fontSize: "1.2rem", 
    fontWeight: "700", 
    color: "white",
    marginBottom: "12px"
  },
  cardText: { 
    fontSize: "0.95rem", 
    color: "white",
    lineHeight: "1.6"
  },
  applicationsSection: {
    marginTop: "60px",
  },
  applicationsTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#1E3A8A",
    textAlign: "center",
    marginBottom: "40px",
  },
  applicationsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
  },
  applicationCard: {
    backgroundColor: "#2953ad",
    padding: "40px 30px",
    borderRadius: "16px",
    textAlign: "center",
    border: "2px solid #2953ad",
    boxShadow: "0 4px 12px rgba(41, 83, 173, 0.3)",
    transition: "all 0.3s",
  },
  appIcon: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  appTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "white",
    marginBottom: "12px",
  },
  appText: {
    fontSize: "1rem",
    color: "white",
    lineHeight: "1.6",
  },
};

export default Benefits;