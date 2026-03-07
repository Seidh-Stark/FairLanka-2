import { supabase } from '../api/supabaseClient'

// Static destinations data
const staticDestinations = [
  {
    id: 1,
    name: 'Bentota',
    slug: 'bentota',
    category: 'Beach',
    short_description: 'Beautiful coastal destination famous for golden beaches, calm waters, river safaris, and exciting water sports.',
    description: 'Bentota is a beautiful coastal destination famous for golden beaches, calm waters, river safaris, and exciting water sports. It’s perfect for relaxation, romance, and adventure experiences.',
    attractions: [
      'Bentota Beach relaxation',
      'Bentota River Boat Safari',
      'Water Sports (Jet ski, Banana boat, Tube rides)',
      'Turtle Hatchery visit'
    ],
    image_url: '/assets/destination/bentota-beach.jpg',
    images: ['/assets/destination/bentota-beach.jpg']
  },
  {
    id: 2,
    name: 'Pinnawala',
    slug: 'pinnawala',
    category: 'Wildlife',
    short_description: 'Home to the world-famous Pinnawala Elephant Orphanage, where visitors can observe rescued elephants.',
    description: 'Pinnawala is home to the world-famous Pinnawala Elephant Orphanage, where visitors can observe rescued elephants, enjoy feeding sessions, and watch them bathing in the river.',
    attractions: [
      'Pinnawala Elephant Orphanage visit',
      'Elephant feeding',
      'River bathing experience'
    ],
    image_url: '/assets/destination/Pinnawala-Day-Tour.jpeg',
    images: ['/assets/destination/Pinnawala-Day-Tour.jpeg', '/assets/destination/pinnawala-Hotel Elephan bay.jpg']
  },
  {
    id: 3,
    name: 'Sigiriya',
    slug: 'sigiriya',
    category: 'Cultural',
    short_description: 'Features the iconic ancient rock fortress rising dramatically above jungle landscapes.',
    description: 'Sigiriya features the iconic ancient rock fortress rising dramatically above jungle landscapes. Visitors climb to see royal ruins, frescoes, mirror walls, and breathtaking panoramic views.',
    attractions: [
      'Climb Sigiriya Rock Fortress',
      'Sigiriya Frescoes & Mirror Wall',
      'Lion’s Paw Entrance',
      'Pidurangala Rock hike'
    ],
    image_url: '/assets/destination/Lion’s Paw Entrance.jpg',
    images: ['/assets/destination/Lion’s Paw Entrance.jpg']
  },
  {
    id: 4,
    name: 'Kandy',
    slug: 'kandy',
    category: 'Cultural',
    short_description: 'Sri Lanka’s cultural capital, home to the sacred Temple of the Tooth Relic and scenic Kandy Lake.',
    description: 'Kandy is Sri Lanka’s cultural capital, home to the sacred Temple of the Tooth Relic, scenic Kandy Lake, traditional dance performances, and beautiful botanical gardens.',
    highlights: [],
    image_url: '/assets/destination/Nuwara Eliya.jpg', // Placeholder, as no specific Kandy image
    images: []
  },
  {
    id: 5,
    name: 'Ella',
    slug: 'ella',
    category: 'Hill Country',
    short_description: 'Charming hill-country town known for lush tea plantations, scenic train rides, and hiking trails.',
    description: 'Ella is a charming hill-country town known for lush tea plantations, scenic train rides, hiking trails like Ella Rock, and the famous Nine Arch Bridge.',
    attractions: [
      'Nine Arch Bridge visit',
      'Little Adam’s Peak hike',
      'Ella Rock hike',
      'Scenic train ride'
    ],
    image_url: '/assets/destination/Places-To-Stay-in-Ella.jpg',
    images: ['/assets/destination/Places-To-Stay-in-Ella.jpg']
  },
  {
    id: 6,
    name: 'Yala',
    slug: 'yala',
    category: 'Wildlife',
    short_description: 'National Park offering thrilling jeep safaris with chances to spot leopards and diverse wildlife.',
    description: 'Yala National Park offers thrilling jeep safaris with chances to spot leopards, elephants, sloth bears, and diverse wildlife in stunning natural landscapes.',
    attractions: [
      'Yala National Park Safari',
      'Leopard spotting',
      'Elephants & wildlife'
    ],
    image_url: '/assets/destination/Yala-National-Park-1.jpg',
    images: ['/assets/destination/Yala-National-Park-1.jpg']
  },
  {
    id: 7,
    name: 'Mirissa',
    slug: 'mirissa',
    category: 'Beach',
    short_description: 'Lively beach destination famous for whale watching tours and tropical sunsets.',
    description: 'Mirissa is a lively beach destination famous for whale watching tours, tropical sunsets, coconut palm viewpoints, and relaxing coastal vibes.',
    attractions: [
      'Whale Watching Tour',
      'Coconut Tree Hill',
      'Beach relaxation',
      'Sunset views'
    ],
    image_url: '/assets/destination/Mirissa beach.webp',
    images: ['/assets/destination/Mirissa beach.webp', '/assets/destination/Mirissa.jpg']
  },
  {
    id: 8,
    name: 'Arugam Bay',
    slug: 'arugam-bay',
    category: 'Beach',
    short_description: 'World-renowned surfing paradise offering consistent waves and relaxed beach atmosphere.',
    description: 'Arugam Bay is a world-renowned surfing paradise offering consistent waves, relaxed beach atmosphere, lagoon safaris, and vibrant nightlife during the surfing season.',
    attractions: [
      'Surfing',
      'Beach relaxing',
      'Lagoon Safari'
    ],
    image_url: '/assets/destination/Arugam Bay city.jpg',
    images: ['/assets/destination/Arugam Bay city.jpg', '/assets/destination/Arugam Bay city.webp']
  },
  {
    id: 9,
    name: 'Nuwara Eliya',
    slug: 'nuwara-eliya',
    category: 'Hill Country',
    short_description: 'Known as Little England, features cool climate, tea plantations, and colonial-style architecture.',
    description: 'Nuwara Eliya, known as Little England, features cool climate, tea plantations, waterfalls, Gregory Lake, and colonial-style architecture in picturesque mountain surroundings.',
    attractions: [
      'Tea plantation visit',
      'Gregory Lake',
      'Hakgala Botanical Garden',
      'Ramboda Waterfall'
    ],
    image_url: '/assets/destination/Nuwara Eliya city tour Srilanka.jpg',
    images: ['/assets/destination/Nuwara Eliya city tour Srilanka.jpg', '/assets/destination/Nuwara Eliya-postoffice.jpg', '/assets/destination/Nuwara Eliya.jpg', '/assets/destination/Tea-Plantations-Nuwara-Eliya-Sri-Lanka.jpg']
  },
  {
    id: 10,
    name: 'Galle',
    slug: 'galle',
    category: 'Cultural',
    short_description: 'Famous for the historic Dutch-built Galle Fort and charming cobblestone streets.',
    description: 'Galle is famous for the historic Dutch-built Galle Fort, charming cobblestone streets, colonial architecture, boutique cafés, and spectacular sunset views along the southern coast.',
    attractions: [
      'Galle Fort visit',
      'Galle Lighthouse',
      'Dutch colonial streets',
      'Café & sunset views'
    ],
    image_url: '/assets/destination/galle-fort-sri-lanka-.jpg',
    images: ['/assets/destination/galle-fort-sri-lanka-.jpg']
  },
  {
    id: 11,
    name: 'Weligama',
    slug: 'weligama',
    category: 'Beach',
    short_description: 'Peaceful beach town ideal for beginner surfing and relaxing seaside stays.',
    description: 'Weligama is a peaceful beach town ideal for beginner surfing, relaxing seaside stays, stilt fisherman photography, and visiting the beautiful Taprobane Island.',
    attractions: [
      'Beginner Surfing',
      'Weligama Beach relaxation',
      'Taprobane Island visit',
      'Stilt Fishermen viewing'
    ],
    image_url: '/assets/destination/Weligama beach.jpg',
    images: ['/assets/destination/Weligama beach.jpg', '/assets/destination/weligama-beach2.jpg']
  },
  {
    id: 12,
    name: 'Udawalawe',
    slug: 'udawalawe',
    category: 'Wildlife',
    short_description: 'Best known for its national park with large elephant populations and exciting jeep safaris.',
    description: 'Udawalawe is best known for its national park with large elephant populations, exciting jeep safaris, Elephant Transit Home visits, and comfortable stays including Villa Safari experiences.',
    attractions: [
      'Udawalawe National Park Safari',
      'Elephant Transit Home visit',
      'Elephant spotting (high chance)',
      'Villa Safari experience'
    ],
    image_url: '/assets/destination/Udawalawe-National-Park.jpg',
    images: ['/assets/destination/Udawalawe-National-Park.jpg', '/assets/destination/Udawalawe.jpg']
  },
  {
    id: 13,
    name: 'Anuradhapura',
    slug: 'anuradhapura',
    category: 'Cultural',
    short_description: 'Ancient sacred city filled with massive stupas, historic ruins, and the revered Sri Maha Bodhi tree.',
    description: 'Anuradhapura is an ancient sacred city filled with massive stupas, historic ruins, and the revered Sri Maha Bodhi tree, offering deep cultural and spiritual experiences.',
    attractions: [
      'Sri Maha Bodhi visit',
      'Ruwanwelisaya Stupa',
      'Ancient ruins & dagobas'
    ],
    image_url: '/assets/destination/anuradhapura-polonnaruwa-srilanka-.jpg',
    images: ['/assets/destination/anuradhapura-polonnaruwa-srilanka-.jpg', '/assets/destination/Anuradhapura.jpg', '/assets/destination/Anuradhapura2.jpg']
  },
  {
    id: 14,
    name: 'Polonnaruwa',
    slug: 'polonnaruwa',
    category: 'Cultural',
    short_description: 'Showcases impressive ancient ruins, well-preserved temples, and royal palaces.',
    description: 'Polonnaruwa showcases impressive ancient ruins, well-preserved temples, royal palaces, and the magnificent Gal Vihara Buddha statues within a peaceful heritage setting.',
    attractions: [
      'Gal Vihara visit',
      'Ancient city ruins',
      'Cycling tours'
    ],
    image_url: '/assets/destination/around-polonnaruwa.jpg',
    images: ['/assets/destination/around-polonnaruwa.jpg', '/assets/destination/polonnaruwa.webp']
  },
  {
    id: 15,
    name: 'Trincomalee',
    slug: 'trincomalee',
    category: 'Beach',
    short_description: 'Offers pristine beaches, snorkeling, and the historic Koneswaram Temple.',
    description: 'Trincomalee offers pristine beaches like Nilaveli, snorkeling at Pigeon Island, whale watching opportunities, and the historic Koneswaram Temple overlooking the ocean.',
    attractions: [
      'Nilaveli Beach',
      'Pigeon Island snorkeling',
      'Koneswaram Temple',
      'Seasonal whale watching'
    ],
    image_url: '/assets/destination/Koneswaram_temple-Trincomalee.jpg',
    images: ['/assets/destination/Koneswaram_temple-Trincomalee.jpg', '/assets/destination/Trincomalee- beach.jpg', '/assets/destination/Trincomalee-kovil.jpg']
  }
]

export const destinationService = {
  async getAll() {
    // Return static data for now
    return staticDestinations
  },

  async getFeatured() {
    // Return first 6 as featured
    return staticDestinations.slice(0, 6)
  },

  async getBySlug(slug) {
    return staticDestinations.find(dest => dest.slug === slug)
  },

  async getByCategory(category) {
    if (category === 'All') return staticDestinations
    return staticDestinations.filter(dest => dest.category === category)
  }
}
