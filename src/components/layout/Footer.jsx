import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.title}>Fair Lanka Travels</h3>
            <p className={styles.tagline}>We Make Vacations Magical</p>
            <p className={styles.description}>
              Discover the Pearl of the Indian Ocean with our expertly crafted tours and
              personalized travel experiences across Sri Lanka.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/packages">Tour Packages</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/travel-guide">Travel Guide</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Destinations</h4>
            <ul className={styles.links}>
              <li><Link to="/destinations/sigiriya">Sigiriya</Link></li>
              <li><Link to="/destinations/kandy">Kandy</Link></li>
              <li><Link to="/destinations/galle">Galle</Link></li>
              <li><Link to="/destinations/ella">Ella</Link></li>
              <li><Link to="/destinations/mirissa">Mirissa</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Contact Us</h4>
            <ul className={styles.contact}>
              <li>Email: info@fairlanka.com</li>
              <li>Phone: +94 77 123 4567</li>
              <li>WhatsApp: +94 77 123 4567</li>
              <li>Address: Colombo, Sri Lanka</li>
            </ul>
            <div className={styles.social}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">TW</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Fair Lanka Travels. All rights reserved.</p>
          <div className={styles.legal}>
            <Link to="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
