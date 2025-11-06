const Location = () => {
  return (
    <section id="ubicacion" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>📍 Ubicación</h2>
          <p style={styles.subtitle}>
            Visítanos en nuestro kiosko comercial "Biottage Stand"
          </p>
        </div>

        <div style={styles.content}>
          <div style={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.8634493888553!2d-98.77099782567127!3d20.09799421909706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a0bd0dd72b33%3A0x5bf5993afac28785!2sGaler%C3%ADas%20Pachuca!5e0!3m2!1ses!2smx!4v1762305722344!5m2!1ses!2smx" 
              style={styles.map}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Biottage - Galerías Pachuca"
            ></iframe>
          </div>

          <div style={styles.infoContainer}>
            <div style={styles.directionCard}>
              <div style={styles.iconBox}>
                <span style={styles.pinIcon}>📍</span>
              </div>
              <h3 style={styles.cardTitle}>Dirección</h3>
              <div style={styles.addressInfo}>
                <p style={styles.addressLine}>
                  <strong>Frente a Galerías Pachuca</strong>
                </p>
                <p style={styles.addressLine}>
                  Entre Colegio Anglo y Banorte
                </p>
                <p style={styles.addressLine}>
                  Pachuca de Soto, Hidalgo
                </p>
              </div>

              <a 
                href="https://www.google.com/maps/dir//Galer%C3%ADas+Pachuca/@20.097994,-98.7709978,17z" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.directionsButton}
              >
                Cómo llegar →
              </a>
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
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '50px',
    alignItems: 'stretch',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  mapContainer: {
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
  },
  map: {
    width: '100%',
    height: '100%',
    minHeight: '550px',
    border: 'none',
    display: 'block',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'stretch',
  },
  directionCard: {
    backgroundColor: '#EBF4FF',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 8px 24px rgba(30, 58, 138, 0.12)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: '80px',
    height: '80px',
    backgroundColor: '#1E3A8A',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 24px',
    boxShadow: '0 6px 20px rgba(30, 58, 138, 0.3)',
  },
  pinIcon: {
    fontSize: '3rem',
  },
  cardTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: '24px',
    textAlign: 'center',
  },
  addressInfo: {
    marginBottom: '30px',
    textAlign: 'center',
  },
  addressLine: {
    fontSize: '1.15rem',
    color: '#334155',
    lineHeight: '1.8',
    margin: '8px 0',
  },
  separator: {
    height: '2px',
    backgroundColor: '#1E3A8A',
    opacity: 0.2,
    margin: '30px 0',
  },
  extraInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '30px',
    flex: '1',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    backgroundColor: 'white',
    borderRadius: '10px',
  },
  infoIcon: {
    fontSize: '1.5rem',
  },
  infoText: {
    fontSize: '1rem',
    color: '#64748b',
    fontWeight: '500',
  },
  directionsButton: {
    display: 'block',
    width: '100%',
    backgroundColor: '#1E3A8A',
    color: 'white',
    padding: '16px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1.1rem',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.3)',
    transition: 'all 0.3s',
  },
};

export default Location;