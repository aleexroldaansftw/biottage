import { useState } from 'react';
import logoBlancoImg from '../assets/logoblanco.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Biottage', href: '#sobre' },
    { name: 'Producto', href: '#producto' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>
          <a href="#inicio" style={styles.logoLink}>
            <img 
              src={logoBlancoImg} 
              alt="Biottage" 
              style={styles.logoImage}
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={styles.desktopMenu}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} style={styles.navLink}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-button"
          style={styles.mobileButton}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu" style={styles.mobileMenu}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#1E3A8A',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  navContainer: {
    width: '100%',
    maxWidth: '100%',
    margin: '0',
    padding: '0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '40px',
    width: 'auto',
    objectFit: 'contain',
  },
  desktopMenu: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s, opacity 0.3s',
    fontSize: '16px',
    whiteSpace: 'nowrap',
    opacity: 0.9,
  },
  mobileButton: {
    display: 'none',
    fontSize: '28px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    padding: '8px',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1E3A8A',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '10px 0',
    width: '100%',
  },
  mobileLink: {
    padding: '15px 40px',
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    fontSize: '16px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    opacity: 0.9,
  },
};

export default Navbar;