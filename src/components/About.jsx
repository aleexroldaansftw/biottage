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

        {/* Misión y Visión */}
        <div className="about-content" style={styles.content}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🎯</div>
            <h3 style={styles.cardTitle}>Misión</h3>
            <p style={styles.cardText}>
              Ofrecer una alternativa saludable, funcional y accesible al queso convencional, 
              mediante la elaboración artesanal de queso cottage enriquecido con probióticos, 
              que promueva el bienestar digestivo, inmunológico y nutricional de nuestros 
              consumidores, respetando principios de inocuidad, sostenibilidad y educación 
              alimentaria.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>🔭</div>
            <h3 style={styles.cardTitle}>Visión</h3>
            <p style={styles.cardText}>
              Ser una empresa referente en innovación alimentaria funcional en México, 
              reconocida por la calidad, evidencia científica y compromiso social de 
              nuestros productos, contribuyendo a estilos de vida saludables y a la 
              transformación del sistema alimentario hacia opciones más éticas, naturales 
              y conscientes.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div style={styles.valuesSection}>
          <h3 style={styles.valuesTitle}>Nuestros Valores</h3>
          <div className="values-grid" style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <span style={styles.valueIcon}>🌱</span>
              <h4 style={styles.valueName}>Responsabilidad</h4>
              <p style={styles.valueText}>
                Ofrecemos un producto funcional, seguro y respaldado por ciencia
              </p>
            </div>

            <div style={styles.valueCard}>
              <span style={styles.valueIcon}>🌎</span>
              <h4 style={styles.valueName}>Sostenibilidad</h4>
              <p style={styles.valueText}>
                Empaques conscientes, procesos artesanales que respetan el entorno
              </p>
            </div>

            <div style={styles.valueCard}>
              <span style={styles.valueIcon}>🤝</span>
              <h4 style={styles.valueName}>Confianza</h4>
              <p style={styles.valueText}>
                Transparencia, educación alimentaria y diálogo constante
              </p>
            </div>

            <div style={styles.valueCard}>
              <span style={styles.valueIcon}>💪</span>
              <h4 style={styles.valueName}>Accesibilidad</h4>
              <p style={styles.valueText}>
                Productos para distintos estilos de vida y necesidades nutricionales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: '#ffffff',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    marginBottom: '60px',
  },
  card: {
    backgroundColor: '#2953adff', // azul más oscuro
    padding: '40px',
    borderRadius: '16px',
    textAlign: 'center',
    color: 'white', // texto blanco
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  cardIcon: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '16px',
  },
  cardText: {
    fontSize: '1.1rem',
    color: 'white',
    lineHeight: '1.8',
  },
  valuesSection: {
    marginTop: '40px',
  },
  valuesTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: '40px',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
  },
  valueCard: {
    backgroundColor: '#E6A942FF', // amarillo
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  valueIcon: {
    fontSize: '2.5rem',
    display: 'block',
    marginBottom: '16px',
  },
  valueName: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '12px',
  },
  valueText: {
    fontSize: '0.95rem',
    color: 'white',
    lineHeight: '1.6',
  },
};

export default About;
