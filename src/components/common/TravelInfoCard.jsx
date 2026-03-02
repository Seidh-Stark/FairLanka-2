import styles from './TravelInfoCard.module.css'

const TravelInfoCard = ({ info }) => {
  const getIcon = (title) => {
    switch (title) {
      case 'Visa Information':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7l-5-5zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v3z" fill="currentColor"/>
            <path d="M12 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" fill="currentColor"/>
          </svg>
        )
      case 'Currency':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6h1.5V7zm0 8H11v2h1.5v-2zm1-1h-2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h2v1.5h1.5v-1.5h.5V15h-1.5zm2-3h-2c-.83 0-1.5.67-1.5 1.5S9.67 13 10.5 13h2V11.5z" fill="currentColor"/>
          </svg>
        )
      case 'Best Time to Visit':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6h1.5V7zm5.25 5.25L17.5 14l-1.75 1.75-1.06-1.06 1.75-1.75-1.75-1.75 1.06-1.06 1.75 1.75 1.75-1.75 1.06 1.06z" fill="currentColor"/>
          </svg>
        )
      case 'Transport':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 11l1.5-4.5h11L19 11H5z" fill="currentColor"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className={styles.infoCard}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          {getIcon(info.title)}
        </div>
      </div>
      <h3>{info.title}</h3>
      <p>{info.description}</p>
    </div>
  )
}

export default TravelInfoCard
