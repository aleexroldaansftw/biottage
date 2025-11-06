import biottageImg from '../assets/biottage1.png';
import bowl1Img from '../assets/bowl1.png';

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
            </div>
            <p style={styles.heroDescription}>
              Queso cottage artesanal bajo en grasa, alto en proteína y enriquecido con 
              <strong> Lactobacillus rhamnosus</strong>, un probiótico que mejora tu salud 
              digestiva y fortalece tu bienestar.
            </p>
            <div style={styles.heroButtons}>
              <a href="#producto" className="btn btn-primary" style={styles.btnPrimary}>
                Conoce más
              </a>
              <a href="#ubicacion" className="btn btn-secondary" style={styles.btnSecondary}>
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

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #EBF4FF 0%, #ffffff 100%)',
    paddingTop: '80px',
    paddingBottom: '60px',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100vw',
    overflow: 'hidden',
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
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
    width: '100%',
    margin: 0,
  },
  heroContent: {
    maxWidth: '100%',
    margin: 0,
  },
  logoContainer: {
    marginBottom: '32px',
  },
  logoImage: {
    maxWidth: '520px',
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  heroDescription: {
    fontSize: '1.2rem',
    color: '#64748b',
    lineHeight: '1.8',
    marginBottom: '32px',
    marginTop: 0,
  },
  heroButtons: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    margin: 0,
  },
  btnPrimary: {
    backgroundColor: '#1E3A8A',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',
    margin: 0,
    minWidth: '200px',
    textAlign: 'center',
  },
  btnSecondary: {
    backgroundColor: 'white',
    color: '#1E3A8A',
    padding: '16px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    border: '2px solid #1E3A8A',
    transition: 'all 0.3s',
    display: 'inline-block',
    margin: 0,
    minWidth: '200px',
    textAlign: 'center',
  },
  heroImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 0,
  },
  bowlImage: {
    width: '100%',
    maxWidth: '650px',
    height: 'auto',
    objectFit: 'contain',
  },
  badges: {
    marginTop: '60px',
    width: '100%',
  },
  badgesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    textAlign: 'center',
    width: '100%',
    margin: 0,
  },
  badge: {
    backgroundColor: '#e6a942ff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontWeight: '600',
    color: 'white',
    margin: 0,
  },
  badgeIcon: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
};

export default Hero;