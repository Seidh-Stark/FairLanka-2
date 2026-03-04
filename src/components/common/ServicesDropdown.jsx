import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicesDropdown.module.css'

const services = [
  { path: '/services#pickup', label: 'Airport Pickup', icon: '<img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Pickup"/>' },
  { path: '/services#flight', label: 'Flight Booking', icon: '<img src="https://images.pexels.com/photos/46148/airport-terminal-building-sky-46148.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Flight"/>' },
  { path: '/services#hotel', label: 'Hotel Booking', icon: '<img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Hotel"/>' },
  { path: '/services#visa', label: 'Visa Assistance', icon: '<img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Visa"/>' },
  { path: '/services#tours', label: 'Round tours, Day tours, Safaris', icon: '<img src="https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=200" alt="Tours"/>' }
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
