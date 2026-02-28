import ActivityCard from '../components/common/ActivityCard'
import styles from './Destinations.module.css'

const Activities = () => {
  const activities = [
    {
      title: 'Wildlife Safaris',
      description: 'Experience thrilling encounters with elephants, leopards, sloth bears, and exotic birds in world-renowned national parks like Yala and Udawalawe.',
      image: 'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Beach Holidays',
      description: 'Relax on pristine beaches with crystal clear waters and golden sands. Perfect for swimming, sunbathing, and water sports.',
      image: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Cultural Tours',
      description: 'Explore ancient temples, UNESCO World Heritage sites, and immerse yourself in rich Sri Lankan heritage and traditions.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Mountain Trekking',
      description: 'Trek through misty mountains, tea plantations, and discover breathtaking views from peaks like Adams Peak and Ella Rock.',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Surfing',
      description: 'Ride world-class waves at famous surf spots like Arugam Bay, Hikkaduwa, and Weligama. Suitable for all skill levels.',
      image: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Whale Watching',
      description: 'Witness majestic blue whales and dolphins in their natural habitat off the coast of Mirissa and Trincomalee.',
      image: 'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Wellness & Ayurveda',
      description: 'Rejuvenate with authentic Ayurvedic treatments, yoga retreats, and wellness programs in peaceful, natural settings.',
      image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'White Water Rafting',
      description: 'Experience adrenaline-pumping rapids on the Kelani River, suitable for both beginners and experienced rafters.',
      image: 'https://images.pexels.com/photos/4666761/pexels-photo-4666761.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Tea Plantation Tours',
      description: 'Visit scenic tea estates, learn about tea production, and enjoy tastings in the beautiful hill country.',
      image: 'https://images.pexels.com/photos/4443477/pexels-photo-4443477.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Activities & Experiences</h1>
          <p>Discover exciting adventures and experiences in Sri Lanka</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {activities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Activities
