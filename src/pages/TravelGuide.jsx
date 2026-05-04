import styles from './About.module.css'

const TravelGuide = () => {
  return (
    <div className={styles.page}>
      <div
        className={styles.hero}
        style={{
          backgroundImage: "linear-gradient(rgba(27, 107, 79, 0.7), rgba(27, 107, 79, 0.7)), url('https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
        }}
      >
        <div className={styles.heroContent}>
          <h1>Travel Guide</h1>
          <p>Everything you need to know before visiting Sri Lanka</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <h2>Visa Information</h2>
            <p>
              Most visitors require an Electronic Travel Authorization (ETA) before arrival.
              Apply online at www.eta.gov.lk. Tourist visas are typically valid for 30 days
              and can be extended. Some nationalities can obtain visa on arrival at Colombo
              Airport.
            </p>

            <h2>Currency & Money</h2>
            <p>
              The official currency is the Sri Lankan Rupee (LKR). US Dollars, Euros, and
              British Pounds are widely accepted at hotels and tourist establishments. ATMs
              are available in most towns and cities. Credit cards are accepted at major
              hotels and restaurants.
            </p>

            <h2>Best Time to Visit</h2>
            <p>
              Sri Lanka is a year-round destination. December to March is ideal for the
              west and south coasts. April to September is best for the east coast. The
              hill country can be visited year-round, though it's cooler from December to
              February.
            </p>

            <h2>Getting Around in Sri Lanka</h2>
            <p>
              The best and most comfortable way to travel around Sri Lanka is by using a private vehicle. We recommend clean, well-maintained and comfortable cars with professional English-speaking drivers who have many years of field experience with international travelers. This allows you to travel safely, enjoy flexible schedules, and explore the country at your own pace while receiving local knowledge and assistance throughout your journey.
            </p>

            <h2>Health & Safety</h2>
            <p>
              Sri Lanka is generally safe for tourists. Drink bottled water and be cautious
              with street food. Apply mosquito repellent, especially in the evening. Sun
              protection is essential. Travel insurance is highly recommended.
            </p>

            <h2>What to Pack</h2>
            <p>
              Light, breathable clothing for the heat. Modest clothing for temple visits.
              A light jacket for hill country. Comfortable walking shoes. Sunscreen, hat,
              and sunglasses. Insect repellent. Any necessary medications.
            </p>

            <h2>Local Customs</h2>
            <p>
              Remove shoes before entering temples and homes. Dress modestly at religious
              sites. Avoid public displays of affection. The left hand is considered unclean.
              Always ask permission before photographing people. Tipping is appreciated but
              not mandatory.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TravelGuide
