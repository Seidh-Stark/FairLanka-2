import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicesDropdown.module.css'

const services = [
  { path: '/services#airport-transfer', label: 'Airport Transfer', icon: '✈️' },
  { path: '/packages', label: 'Tour Packages', icon: '📦' },
  { path: '/day-tours', label: 'Day Tours', icon: '🎯' },
  { path: '/services#intercity-transfers', label: 'Intercity Transfers', icon: '🚗' },
  { path: '/destinations?category=wildlife', label: 'Safaris In Sri Lanka', icon: '🦁' },
  { path: '/hotel-bookings', label: 'Hotel Bookings', icon: '🏨' },
  { path: '/flight-bookings', label: 'Flight Bookings', icon: '✈️' }
]

const ServicesDropdown = () => {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    const onDoc = (e) => {
      if (!rootRef.current) return
      if (!rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div
      className={styles.root}
      ref={rootRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={styles.trigger} onClick={() => setOpen((s) => !s)} aria-expanded={open}>
        Services
        <span className={styles.caret} aria-hidden>▾</span>
      </button>

      <div className={`${styles.menu} ${open ? styles.open : ''}`} role="menu">
        {services.map((s) => (
          <Link key={s.path} to={s.path} className={styles.item} role="menuitem">
            <span className={styles.itemIcon}>{s.icon}</span>
            <span className={styles.itemLabel}>{s.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ServicesDropdown
