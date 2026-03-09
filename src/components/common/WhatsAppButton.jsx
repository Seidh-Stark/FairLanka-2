import styles from './WhatsAppButton.module.css'

const whatsappNumber = '94764374114' // without + for wa.me
const whatsappText = 'Hello%20I%20would%20like%20to%20chat%20about%20tours' // encoded message

const WhatsAppButton = () => {
  const href = `https://wa.me/${whatsappNumber}?text=${whatsappText}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
      aria-label="Chat on WhatsApp"
    >
      {/* Premium WhatsApp Chat Bubble Icon */}
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {/* Chat bubble with message bubble shape */}
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.01.99 4.29L2 19.59l3.5-1.35A9.957 9.957 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.14 13.89l-.66 1.04a1.8 1.8 0 0 1-1.63.86c-.7 0-1.37-.2-1.95-.63l-.14-.1c-3.33-2.45-5.45-5.89-5.45-9.64 0-.5.04-.99.13-1.47.16-.93.84-1.73 1.77-1.99.28-.08.57-.11.88-.11.27 0 .54.04.79.13.4.14.73.48.84.91l.47 1.78c.1.39.07.81-.09 1.18-.16.37-.48.66-.86.78l-.97.29c.15.43.38.83.67 1.19.81.98 1.97 1.68 3.27 1.86l.87-.41c.37-.19.79-.22 1.17-.09.38.12.7.41.87.78l.6 1.46z" fill="white"/>
      </svg>
    </a>
  )
}

export default WhatsAppButton
