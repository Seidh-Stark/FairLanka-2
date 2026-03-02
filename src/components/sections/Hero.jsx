import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = true
  }, [])

  const toggleSound = () => {
    if (!videoRef.current) return
    const isMuted = videoRef.current.muted
    videoRef.current.muted = !isMuted
    setMuted(!isMuted)
  }

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.bgVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        /* no poster/image fallback – video file should be placed in public/ */
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>Discover the Pearl of the Indian Ocean</h1>
        <p className={styles.subtitle}>
          Experience the magic of Sri Lanka with expertly crafted tours and
          unforgettable adventures
        </p>

        <div className={styles.buttons}>
          <Link to="/packages" className="btn btn-primary">
            Explore Packages
          </Link>
          <Link to="/destinations" className="btn btn-outline">
            View Destinations
          </Link>
        </div>

        <button
          className={styles.soundToggle}
          onClick={toggleSound}
          aria-pressed={!muted}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          title={muted ? 'Unmute video' : 'Mute video'}
        >
          {muted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M16 7L20 11M20 11L16 15M20 11H14" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9V15L5 13H3V11H5L9 9Z" fill="#ffffff"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M9 9V15L5 13H3V11H5L9 9Z" fill="#ffffff"/>
              <path d="M14.5 9.5C15.3284 10.3284 15.8284 11.4216 15.8284 12.6213C15.8284 13.821 15.3284 14.9142 14.5 15.7426" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 7.5C18.8934 8.8934 19.75 10.6694 19.75 12.6213C19.75 14.5733 18.8934 16.3493 17.5 17.7426" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
    </section>
  )
}

export default Hero
