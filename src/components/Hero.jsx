import biottageImg from '../assets/biottage1.png';
import bowl1Img from '../assets/bowl1.png';
import esloganImg from '../assets/eslogan.png'; // 👈 nueva importación

const Hero = () => {
  return (
    <section id="inicio" style={styles.hero}>
      <div style={styles.heroWrapper}>
        <div className="hero-container" style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <div style={styles.logoContainer}>
              <img 
                src={biottageImg} 
                alt="Biottage - Puro, vivo, tuyo" 
                style={styles.logoImage}
              />
              {/* 👇 Imagen del eslogan justo debajo del logo */}
              <img 
                src={esloganImg} 
                alt="Eslogan Biottage" 
                style={styles.esloganImage}
              />
            </div>

            <p style={styles.heroDescription}>
              Queso cottage artesanal bajo en grasa, alto en proteína y enriquecido con 
              <strong> Lactobacillus rhamnosus</strong>, un probiótico que mejora tu salud 
              digestiva y fortalece tu bienestar.
            </p>

            <div style={styles.heroButtons}>
              <a href="#producto" style={styles.btnPrimary}>
                Conoce más
              </a>
              <a href="#ubicacion" style={styles.btnSecondary}>
                📍 Encuéntranos
              </a>
            </div>
          </div>
          
          <div className="hero-image" style={styles.heroImage}>
            <img 
              src={bowl1Img} 
              alt="Biottage Cottage Cheese" 
              style={styles.bowlImage}
            />
          </div>
        </div>
        
        <div style={styles.badges}>
          <div style={styles.badgesGrid}>
            <div style={styles.badge}>
              <span style={styles.badgeIcon}>✓</span>
              <span>100% Natural</span>
            </div>
            <div style={styles.badge}>
              <span style={styles.badgeIcon}>✓</span>
              <span>Sin Conservadores</span>
            </div>
            <div style={styles.badge}>
              <span style={styles.badgeIcon}>✓</span>
              <span>Probióticos Vivos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---- ESTILOS ----
const styles = {
  hero: {
    background: 'linear-gradient(135deg, #EBF4FF 0%, #ffffff 100%)',
    paddingTop: '80px',
    paddingBottom: '60px',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  heroWrapper: {
    width: '100%',
    maxWidth: '1400px',
    padding: '0 40px',
    margin: '0 auto',
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '40px',
    alignItems: 'center',
  },
  heroContent: {
    maxWidth: '100%',
  },
  logoContainer: {
    marginBottom: '32px',
    textAlign: 'center',
  },
  logoImage: {
    maxWidth: '520px',
    width: '100%',
    height: 'auto',
    marginBottom: '12px',
  },
  esloganImage: {
    maxWidth: '300px',
    width: '100%',
    height: 'auto',
    marginBottom: '24px',
  },
  heroDescription: {
    fontSize: '1.2rem',
    color: '#64748b',
    lineHeight: '1.8',
    marginBottom: '32px',
    textAlign: 'justify',
  },
  heroButtons: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnPrimary: {
    backgroundColor: '#1E3A8A',
    color: 'white',
    padding: '14px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    minWidth: '180px',
    textAlign: 'center',
  },
  btnSecondary: {
    backgroundColor: 'white',
    color: '#1E3A8A',
    padding: '14px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    border: '2px solid #1E3A8A',
    transition: 'all 0.3s',
    minWidth: '180px',
    textAlign: 'center',
  },
  heroImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bowlImage: {
    width: '100%',
    maxWidth: '550px',
    height: 'auto',
  },
  badges: {
    marginTop: '50px',
  },
  badgesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    textAlign: 'center',
  },
  badge: {
    backgroundColor: '#E6A942',
    padding: '18px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: '600',
    color: 'white',
  },
  badgeIcon: {
    color: 'white',
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },
};

export default Hero;
