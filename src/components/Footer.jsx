const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div className="footer-content" style={styles.content}>
          <div style={styles.column}>
            <h3 style={styles.brand}>Biottage</h3>
            <p style={styles.tagline}>Puro, vivo, tuyo.</p>
            <p style={styles.description}>
              Queso cottage artesanal con probióticos para tu bienestar digestivo.
            </p>
          </div>

          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Navegación</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <a href="#inicio" style={styles.footerLink}>Inicio</a>
              </li>
              <li style={styles.listItem}>
                <a href="#sobre" style={styles.footerLink}>Sobre Biottage</a>
              </li>
              <li style={styles.listItem}>
                <a href="#producto" style={styles.footerLink}>Producto</a>
              </li>
              <li style={styles.listItem}>
                <a href="#beneficios" style={styles.footerLink}>Beneficios</a>
              </li>
            </ul>
          </div>

          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Información</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <a href="#ubicacion" style={styles.footerLink}>Ubicación</a>
              </li>
              <li style={styles.listItem}>
                <a href="#contacto" style={styles.footerLink}>Contacto</a>
              </li>
            </ul>
          </div>

          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Contacto</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <span style={styles.footerText}>contacto@biottage.com</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.footerText}>+52 771 123 4567</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.footerText}>Pachuca, Hidalgo</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.divider}></div>

        <div className="footer-bottom" style={styles.bottom}>
          <p style={styles.copyright}>
            © {currentYear} Biottage. Todos los derechos reservados.
          </p>
          <p style={styles.credits}>
            Hecho con ❤️ en México
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0F172A',
    color: 'white',
    padding: '60px 0 30px',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px',
    marginBottom: '40px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  brand: {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#F59E0B',
    marginBottom: '12px',
  },
  tagline: {
    fontSize: '1.1rem',
    color: '#94A3B8',
    marginBottom: '16px',
    fontStyle: 'italic',
  },
  description: {
    fontSize: '0.95rem',
    color: '#94A3B8',
    lineHeight: '1.6',
  },
  columnTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: 'white',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '12px',
  },
  footerLink: {
    color: '#94A3B8',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s',
  },
  footerText: {
    color: '#94A3B8',
    fontSize: '0.95rem',
  },
  divider: {
    height: '1px',
    backgroundColor: '#334155',
    margin: '40px 0',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  copyright: {
    fontSize: '0.9rem',
    color: '#94A3B8',
    margin: 0,
  },
  credits: {
    fontSize: '0.9rem',
    color: '#94A3B8',
    margin: 0,
  },
};

export default Footer;