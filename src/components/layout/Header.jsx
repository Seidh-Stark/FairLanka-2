import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import styles from './Header.module.css'

const Header = () => {
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useApp()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/packages', label: 'Packages' },
    { path: '/activities', label: 'Activities' },
    { path: '/about', label: 'About' },
    { path: '/travel-guide', label: 'Travel Guide' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
          <img src="/logo2.png" alt="Fair Lanka Logo" className={styles.logoImage} />
          <div className={styles.logoContent}>
            <span className={styles.logoText}>FAIR LANKA TRAVELS</span>
            <span className={styles.logoTagline}>We Make Vacations Magical</span>
          </div>
        </Link>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.path} className={styles.navItem}>
                <Link
                  to={link.path}
                  className={styles.navLink}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>
      </div>
    </header>
  )
}

export default Header
