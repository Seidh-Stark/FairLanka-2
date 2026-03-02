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
              <li>Phone: +94 76 913 2482</li>
              <li>WhatsApp: +94 76 913 2482</li>
              <li>Address: No.18/1 Muhudu Mawatha, Weligama 81700</li>
              <li>
                <a href="https://maps.google.com?q=Fair%20Lanka%20Travels,%20No.18/1%20Muhudu%20Mawatha,%20Weligama%2081700&ftid=0xd0cfe818e651a37:0x7b6f3d3c35705649&entry=gps&shh=CAE&lucs=,94297699,94284463,94231188,94280568,47071704,94218641,94282134,94286869&g_st=ic" target="_blank" rel="noopener noreferrer">
                  Google Maps
                </a>
              </li>
              <li>
                <a href="https://www.tripadvisor.com/Attraction_Review-g612380-d33497525-Reviews-Fair_Lanka_Travels-Weligama_Matara_Southern_Province.html" target="_blank" rel="noopener noreferrer">
                  TripAdvisor
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/1HFFgBN7x8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/fairlankatravels?igsh=NHh4ZWQzdG8yY2s2" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
            <div className={styles.social}>
              <a href="https://www.facebook.com/share/1HFFgBN7x8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/fairlankatravels?igsh=NHh4ZWQzdG8yY2s2" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.63c-.794.306-1.459.717-2.126 1.384S.957 3.31.63 4.117c-.297.788-.5 1.659-.56 2.948C.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.287.263 2.158.56 2.948.306.788.717 1.459 1.384 2.126.667.667 1.338 1.078 2.126 1.384.788.297 1.659.5 2.948.56C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.287-.06 2.158-.263 2.948-.56.788-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.338 1.384-2.126.297-.788.5-1.659.56-2.948.058-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.287-.263-2.158-.56-2.948-.306-.788-.717-1.459-1.384-2.126C21.319 1.347 20.651.935 19.863.63c-.788-.297-1.659-.5-2.948-.56C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07z" fill="currentColor"/>
                  <circle cx="12" cy="12" r="3.094" fill="currentColor"/>
                  <circle cx="18.406" cy="5.594" r="0.722" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 002.856-3.708 9.958 9.958 0 01-2.836.856 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a14.028 14.028 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://maps.google.com?q=Fair%20Lanka%20Travels,%20No.18/1%20Muhudu%20Mawatha,%20Weligama%2081700&ftid=0xd0cfe818e651a37:0x7b6f3d3c35705649&entry=gps&shh=CAE&lucs=,94297699,94284463,94231188,94280568,47071704,94218641,94282134,94286869&g_st=ic" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C7.582 0 4 3.582 4 8c0 4.627 7.397 15.256 8 16 .603-.744 8-11.373 8-16 0-4.418-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" fill="currentColor"/>
                </svg>
              </a>
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
