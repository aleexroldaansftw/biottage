const Benefits = () => {
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
          <div style={styles.iconLarge}>🦠</div>
          <h3 style={styles.mainTitle}>¿Por qué Lactobacillus rhamnosus?</h3>
          <p style={styles.mainText}>
            Esta cepa probiótica tiene una gran capacidad de adherirse al epitelio intestinal, 
            protegiendo la barrera digestiva y favoreciendo el equilibrio de la microbiota. 
            Está respaldada por investigación científica internacional que comprueba sus 
            múltiples beneficios para la salud.
          </p>
        </div>

        <div style={styles.benefitsGrid}>
          <div style={styles.benefitCard}>
            <div style={styles.cardIcon}>🛡️</div>
            <h4 style={styles.cardTitle}>Protección Intestinal</h4>
            <p style={styles.cardText}>
              Gran adherencia al epitelio intestinal que protege la barrera digestiva 
              y previene la colonización de bacterias dañinas.
            </p>
          </div>

          <div style={styles.benefitCard}>
            <div style={styles.cardIcon}>⚖️</div>
            <h4 style={styles.cardTitle}>Equilibrio de Microbiota</h4>
            <p style={styles.cardText}>
              Favorece el balance saludable de bacterias beneficiosas en el intestino, 
              mejorando la función digestiva general.
            </p>
          </div>

          <div style={styles.benefitCard}>
            <div style={styles.cardIcon}>💊</div>
            <h4 style={styles.cardTitle}>Reduce Molestias</h4>
            <p style={styles.cardText}>
              Ayuda a disminuir síntomas digestivos comunes como hinchazón, 
              gases y malestar abdominal.
            </p>
          </div>

          <div style={styles.benefitCard}>
            <div style={styles.cardIcon}>🔬</div>
            <h4 style={styles.cardTitle}>Respaldo Científico</h4>
            <p style={styles.cardText}>
              Cepa ampliamente estudiada con evidencia clínica internacional 
              que respalda sus beneficios.
            </p>
          </div>
        </div>

        <div style={styles.applications}>
          <h3 style={styles.applicationsTitle}>Ideal como coadyuvante en:</h3>
          <div style={styles.applicationsGrid}>
            <div style={styles.applicationCard}>
              <span style={styles.applicationIcon}>💊</span>
              <h5 style={styles.applicationName}>Diarrea asociada a antibióticos</h5>
              <p style={styles.applicationDesc}>
                Ayuda a restaurar el equilibrio intestinal durante y después del tratamiento
              </p>
            </div>

            <div style={styles.applicationCard}>
              <span style={styles.applicationIcon}>🤢</span>
              <h5 style={styles.applicationName}>Síndrome de intestino irritable</h5>
              <p style={styles.applicationDesc}>
                Puede contribuir a reducir síntomas como dolor, hinchazón y alteraciones
              </p>
            </div>

            <div style={styles.applicationCard}>
              <span style={styles.applicationIcon}>🥛</span>
              <h5 style={styles.applicationName}>Intolerancia a lactosa leve</h5>
              <p style={styles.applicationDesc}>
                Facilita la digestión y reduce molestias en personas con sensibilidad
              </p>
            </div>

            <div style={styles.applicationCard}>
              <span style={styles.applicationIcon}>🔥</span>
              <h5 style={styles.applicationName}>Inflamación intestinal crónica</h5>
              <p style={styles.applicationDesc}>
                Puede ayudar a modular la respuesta inflamatoria del sistema digestivo
              </p>
            </div>
          </div>
        </div>

        <div style={styles.disclaimer}>
          <p style={styles.disclaimerText}>
            ⚕️ <strong>Nota importante:</strong> Biottage es un alimento funcional y no sustituye 
            el tratamiento médico. Consulta con tu profesional de la salud si tienes condiciones 
            digestivas que requieren atención especializada.
          </p>
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
  mainBenefit: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 60px',
    padding: '40px',
    backgroundColor: '#EBF4FF',
    borderRadius: '20px',
  },
  iconLarge: {
    fontSize: '4rem',
    marginBottom: '20px',
  },
  mainTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: '20px',
  },
  mainText: {
    fontSize: '1.1rem',
    color: '#64748b',
    lineHeight: '1.8',
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    marginBottom: '60px',
  },
  benefitCard: {
    backgroundColor: '#f8fafc',
    padding: '30px',
    borderRadius: '16px',
    textAlign: 'center',
    border: '2px solid #e2e8f0',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  cardIcon: {
    fontSize: '3rem',
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: '12px',
  },
  cardText: {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: '1.6',
  },
  applications: {
    marginTop: '60px',
  },
  applicationsTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: '40px',
  },
  applicationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '30px',
  },
  applicationCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    borderLeft: '4px solid #F59E0B',
  },
  applicationIcon: {
    fontSize: '2.5rem',
    display: 'block',
    marginBottom: '16px',
  },
  applicationName: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: '12px',
  },
  applicationDesc: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.6',
  },
  disclaimer: {
    marginTop: '60px',
    padding: '30px',
    backgroundColor: '#FEF3C7',
    borderRadius: '12px',
    border: '2px solid #F59E0B',
  },
  disclaimerText: {
    fontSize: '1rem',
    color: '#92400E',
    lineHeight: '1.7',
    margin: 0,
    textAlign: 'center',
  },
};

export default Benefits;