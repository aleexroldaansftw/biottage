import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logoblanco from "../assets/logoblanco.png"; // ajusta la ruta si es distinta
import eslogan from "../assets/eslogan.png"; // asegúrate de que esta imagen exista

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div className="footer-content" style={styles.content}>
          {/* Columna de logo y descripción */}
          <div style={styles.column}>
            <img
              src={logoblanco}
              alt="Biottage Logo"
              style={styles.logo}
            />
            <img
              src={eslogan}
              alt="Eslogan Biottage"
              style={styles.eslogan}
            />
            <p style={styles.description}>
              Queso cottage artesanal con probióticos para tu bienestar digestivo.
            </p>
          </div>

          {/* Navegación */}
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

          {/* Información */}
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

          {/* Contacto con íconos */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Contacto</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <FaEnvelope style={{ ...styles.icon, color: "#FBBF24" }} />
                <span style={styles.footerText}> contacto@biottage.com</span>
              </li>
              <li style={styles.listItem}>
                <FaWhatsapp style={{ ...styles.icon, color: "#25D366" }} />
                <span style={styles.footerText}> +52 771 123 4567</span>
              </li>
              <li style={styles.listItem}>
                <FaMapMarkerAlt style={{ ...styles.icon, color: "#60A5FA" }} />
                <span style={styles.footerText}> Pachuca, Hidalgo</span>
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
            Hecho por estudiantes de Nutricón la UAEH
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1E3A8A",
    color: "white",
    padding: "60px 0 30px",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "40px",
    marginBottom: "40px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  logo: {
    width: "150px",
    marginBottom: "16px",
  },
  eslogan: {
    width: "180px",
    marginBottom: "20px",
  },
  description: {
    fontSize: "0.95rem",
    color: "#E0E7FF",
    lineHeight: "1.6",
    maxWidth: "280px",
  },
  columnTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "white",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  icon: {
    fontSize: "1.2rem",
  },
  footerLink: {
    color: "#E0E7FF",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.3s",
  },
  footerText: {
    color: "#E0E7FF",
    fontSize: "0.95rem",
  },
  divider: {
    height: "1px",
    backgroundColor: "#334155",
    margin: "40px 0",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  copyright: {
    fontSize: "0.9rem",
    color: "#E0E7FF",
    margin: 0,
  },
  credits: {
    fontSize: "0.9rem",
    color: "#E0E7FF",
    margin: 0,
  },
};

export default Footer;
