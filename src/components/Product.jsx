import empaque from "../assets/empaque1.png";

const Product = () => {
  return (
    <section id="producto" style={styles.section}>
      <div style={styles.container}>
        {/* COLUMNA IZQUIERDA */}
        <div style={styles.leftColumn}>
          {/* Nombre y descripción (antes estaba en la derecha) */}
          <div style={styles.infoContainer}>
            <h3 style={styles.productName}>Biottage</h3>
            <p style={styles.productDescription}>
              Queso cottage artesanal bajo en grasa y alto en proteína,
              enriquecido con <strong>Lactobacillus rhamnosus</strong>, un
              probiótico científicamente comprobado que favorece la salud
              digestiva e inmunológica.
            </p>
          </div>

          {/* Imagen del producto */}
          <div style={styles.imageContainer}>
            <img src={empaque} alt="Biottage" style={styles.productImage} />
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div style={styles.rightColumn}>
          {/* Beneficios Principales (antes estaba en la izquierda) */}
          <div style={styles.features}>
            <h4 style={styles.featuresTitle}>Beneficios Principales:</h4>
            <ul style={styles.featuresList}>
              <li style={styles.featureItem}>✓ Mejora la digestión y equilibra la microbiota intestinal</li>
              <li style={styles.featureItem}>✓ Favorece la salud inmunológica</li>
              <li style={styles.featureItem}>✓ Aporta proteína de alta calidad</li>
              <li style={styles.featureItem}>✓ Bajo contenido en sodio</li>
              <li style={styles.featureItem}>✓ 100% natural y libre de conservadores</li>
            </ul>
          </div>

          {/* Usos y Aplicaciones */}
          <div style={styles.usesContainer}>
            <h4 style={styles.usesTitle}>Usos y Aplicaciones:</h4>
            <p style={styles.usesText}>
              Perfecto para desayunos, snacks saludables, preparaciones dulces o saladas.
              Ideal para deportistas, personas activas y quienes buscan bienestar digestivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 0",
    backgroundColor: "#f7faff",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  infoContainer: {
    textAlign: "left",
  },
  productName: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#0b3b8c",
    marginBottom: "15px",
  },
  productDescription: {
    fontSize: "1.1rem",
    color: "#333",
    lineHeight: "1.6",
  },
  features: {
    textAlign: "left",
  },
  featuresTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#0b3b8c",
    marginBottom: "15px",
  },
  featuresList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  featureItem: {
    fontSize: "1.05rem",
    color: "#444",
    marginBottom: "8px",
  },
  imageContainer: {
    textAlign: "center",
  },
  productImage: {
    width: "95%",
    maxWidth: "550px",
    height: "auto",
    objectFit: "contain",
  },
  usesContainer: {
    backgroundColor: "#eef5ff",
    padding: "25px",
    borderRadius: "10px",
  },
  usesTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#0b3b8c",
    marginBottom: "10px",
  },
  usesText: {
    fontSize: "1.05rem",
    color: "#333",
    lineHeight: "1.6",
  },
};

export default Product;
