const Contact = () => {
  return (
    <section id="contacto" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>Contacto</h2>
          <p style={styles.subtitle}>
            ¿Tienes preguntas? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="contact-info" style={styles.contactInfo}>
          <div style={styles.contactCard}>
            <div style={styles.iconCircle}>
              <span style={styles.contactIcon}>📧</span>
            </div>
            <h3 style={styles.contactTitle}>Correo Electrónico</h3>
            <p style={styles.contactText}>
              <a href="mailto:contacto@biottage.com" style={styles.link}>
                contacto@biottage.com
              </a>
            </p>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.iconCircle}>
              <span style={styles.contactIcon}>📱</span>
            </div>
            <h3 style={styles.contactTitle}>WhatsApp</h3>
            <p style={styles.contactText}>
              <a href="https://wa.me/5217718837153" target="_blank" rel="noopener noreferrer" style={styles.link}>
                +52 771 123 4567
              </a>
            </p>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.iconCircle}>
              <span style={styles.contactIcon}>📍</span>
            </div>
            <h3 style={styles.contactTitle}>Ubicación</h3>
            <p style={styles.contactText}>
              Frente a Galerías Pachuca<br/>
              Pachuca de Soto, Hidalgo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: '#f8fafc',
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
  },
  contactInfo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  contactCard: {
    backgroundColor: 'white',
    padding: '40px 30px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  iconCircle: {
    width: '80px',
    height: '80px',
    backgroundColor: '#EBF4FF',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 20px',
  },
  contactIcon: {
    fontSize: '2.5rem',
  },
  contactTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: '12px',
  },
  contactText: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.6',
  },
  link: {
    color: '#1E3A8A',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.3s',
  },
};

export default Contact;