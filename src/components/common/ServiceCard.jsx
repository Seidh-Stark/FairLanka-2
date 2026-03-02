import React from 'react'
import styles from './ServiceCard.module.css'

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className={styles.card} tabIndex={0}>
      <div className={styles.icon} aria-hidden dangerouslySetInnerHTML={{ __html: icon }} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}

export default ServiceCard
