import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="ubicacion" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>
            <MapPin size={32} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '12px' }} />
            Ubicación
          </h2>
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
                <MapPin size={40} color="white" />
              </div>
              <h3 style={styles.cardTitle}>Dirección</h3>
              <div style={styles.addressInfo}>
                <p style={styles.addressLine}>
                  <strong>Frente a Galerías Pachuca</strong>
                </p>
                <p style={styles.addressLine}>Entre Colegio Anglo y Banorte</p>
                <p style={styles.addressLine}>Pachuca de Soto, Hidalgo</p>
              </div>

              <a
                href="https://www.google.com/maps/dir//Galer%C3%ADas+Pachuca/@20.097994,-98.7709978,17z"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.directionsButton}
              >
                <Navigation size={20} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }} />
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 🔽 Estilos con soporte responsive
const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: '#ffffff',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#073980ff',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    alignItems: 'stretch',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  mapContainer: {
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
    minHeight: '400px',
  },
  map: {
    width: '100%',
    height: '100%',
    minHeight: '400px',
    border: 'none',
    display: 'block',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'stretch',
  },
  directionCard: {
    backgroundColor: '#EBF4FF',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 8px 24px rgba(30, 58, 138, 0.12)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: '70px',
    height: '70px',
    backgroundColor: '#1E3A8A',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 20px',
    boxShadow: '0 6px 20px rgba(30, 58, 138, 0.3)',
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: '20px',
    textAlign: 'center',
  },
  addressInfo: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  addressLine: {
    fontSize: '1rem',
    color: '#04367cff',
    lineHeight: '1.6',
    margin: '6px 0',
  },
  directionsButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#1E3A8A',
    color: 'white',
    padding: '14px',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.3)',
    transition: 'all 0.3s',
  },
};

// 📱 Adaptar estilos dinámicamente para pantallas pequeñas
if (window.innerWidth <= 768) {
  styles.content = {
    ...styles.content,
    gridTemplateColumns: '1fr',
    gap: '30px',
  };
  styles.section.padding = '60px 20px';
  styles.title.fontSize = '1.8rem';
  styles.map.minHeight = '300px';
  styles.directionCard.padding = '24px';
  styles.directionsButton.fontSize = '0.95rem';
}

export default Location;