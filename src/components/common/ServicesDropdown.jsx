import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicesDropdown.module.css'

const services = [
  { path: '/services#flight', label: 'Flight Booking', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12l20-6v12z" fill="#0d4a38"/></svg>' },
  { path: '/services#hotel', label: 'Hotel Booking', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="13" rx="2" fill="#0d4a38"/></svg>' },
  { path: '/services#visa', label: 'Visa Assistance', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l4 7h-8l4-7z" fill="#0d4a38"/></svg>' },
  { path: '/services#pickup', label: 'Airport Pickup', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="#0d4a38"/></svg>' },
  { path: '/services#insurance', label: 'Travel Insurance', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l9 4v6c0 5-4 9-9 9s-9-4-9-9V7l9-4z" fill="#0d4a38"/></svg>' }
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
            <span className={styles.itemIcon} dangerouslySetInnerHTML={{ __html: s.icon }} />
            <span className={styles.itemLabel}>{s.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ServicesDropdown
