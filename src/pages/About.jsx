import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About Sri Lanka</h1>
          <p>The Pearl of the Indian Ocean</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <h2>About Us – Fair Lanka Travels</h2>
            <p>
              Fair Lanka Travels is a registered travel service provider under the Sri Lanka Government Individual Trading Registration (R/No: 2368019). With over 10 years of experience in the tourism industry and more than 3 years as a professional travel agent, we are committed to providing reliable and memorable travel experiences across Sri Lanka.
            </p>
            <h3>Why Travel with Fair Lanka Travels</h3>
            <ul>
              <li>Professional and friendly service</li>
              <li>Experienced local travel expertise</li>
              <li>Comfortable and safe transport</li>
              <li>Flexible and tailor-made tours</li>
              <li>Fair and competitive pricing</li>
            </ul>
            <h3>Our Owner</h3>
            <p>
              Fair Lanka Travels is owned by Mr. Yoonus, a passionate young entrepreneur in the tourism field. He holds a Diploma in Inbound Tourism Management under a Government Registered Certificate, ensuring professional knowledge and quality service for every traveler.
            </p>
            <p>
              We specialize in Airport Transfers, Day Tours, Round Tours, Tailor-Made Tours, and Safaris across Sri Lanka, helping you explore the island with comfort and confidence. 🌴✈️
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <h2>Welcome to Sri Lanka</h2>
            <p>
              Sri Lanka, formerly known as Ceylon, is an island nation located in South Asia,
              southeast of India. Known as the "Pearl of the Indian Ocean," this tropical
              paradise offers an incredible diversity of experiences within a compact area.
            </p>
            <p>
              From ancient temples and colonial architecture to pristine beaches and lush
              tea plantations, Sri Lanka captivates visitors with its natural beauty, rich
              history, and warm hospitality.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Visit Sri Lanka?</h2>
          <div className="grid grid-3">
            <div className={styles.feature}>
              <h3>Rich Culture & History</h3>
              <p>
                Explore 8 UNESCO World Heritage Sites, ancient kingdoms, and centuries-old
                temples that tell the story of this magnificent island.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Stunning Landscapes</h3>
              <p>
                From golden beaches to misty mountains, lush rainforests to rolling tea
                plantations, Sri Lanka's diverse landscapes never cease to amaze.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Wildlife Paradise</h3>
              <p>
                Home to elephants, leopards, blue whales, and hundreds of bird species,
                Sri Lanka is a wildlife enthusiast's dream destination.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Delicious Cuisine</h3>
              <p>
                Savor aromatic curries, fresh seafood, tropical fruits, and world-famous
                Ceylon tea that will tantalize your taste buds.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Warm Hospitality</h3>
              <p>
                Experience the genuine warmth and friendliness of Sri Lankan people who
                welcome visitors with open hearts and smiling faces.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Adventure Activities</h3>
              <p>
                Surf world-class waves, trek through mountains, dive in coral reefs, or
                white-water raft in pristine rivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <h2>Ready to Experience Sri Lanka?</h2>
            <p>Let Fair Lanka Travels create your perfect island adventure</p>
            <Link to="/packages" className="btn btn-primary">
              Explore Tour Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
