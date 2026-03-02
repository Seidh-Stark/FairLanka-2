import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'
import WhatsAppButton from '../common/WhatsAppButton'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      {/* floating whatsapp chat button */}
      <WhatsAppButton />
    </div>
  )
}

export default Layout
