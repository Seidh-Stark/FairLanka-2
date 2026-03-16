// Static packages data
const staticPackages = [
  {
    id: 1,
    title: 'The Spirit of Ayurvedic Wellness on a Pearl Island',
    slug: 'ayurvedic-wellness-pearl-island',
    short_description: 'Experience holistic Ayurvedic treatments and wellness therapies in Sri Lanka\'s serene environments.',
    description: 'Many tourists are aware of the limitations of allopathic treatment, which only treats the body, and are turning to Ayurveda, a holistic method of treatment. As a result, Sri Lanka has become a popular Ayurvedic treatment destination.',
    duration: '15 Days',
    price: 2850,
    destinations: ['Negombo', 'Habarana', 'Kandy', 'Koggala', 'Talalla'],
    category: 'Wellness',
    image_url: '/assets/packages/The Spirit of Ayurvedic Wellness on a Pearl Island.jpg',
    itinerary: [
      { day: 1, title: 'Arrival / Negombo', description: 'Our guide will meet you at Colombo International Airport and transport you to Negombo for your first night\'s stay. In Sri Lanka Ayurvedic Tour Package Negombo is a popular tourist attraction in Sri Lanka.' },
      { day: 2, title: 'Negombo / Habarana', description: 'Your driver will meet you and drive you to Habarana, a remote but well-known village. Habarana is a city in Sri Lanka\'s North Central Province. It is well worth a visit because it has many popular attractions such as Kaudulla National Park, Ritigala Forest Monastery, and Safari Wild tour.' },
      { day: 3, title: 'Habarana', description: 'Spend the afternoon relaxing, exploring the neighborhood, or taking a bullock cart ride.' },
      { day: 4, title: 'Habarana', description: 'Continue relaxation at Galkadawala Forest Lodge.' },
      { day: 5, title: 'Habarana / Kandy', description: 'Travel to Kandy, explore the city.' },
      { day: 6, title: 'Kandy', description: 'Cultural dance, botanical gardens.' },
      { day: 7, title: 'Kandy / Koggala', description: 'Drive to Koggala, stay at Tri Lanka.' },
      { day: 8, title: 'Koggala', description: 'Beach relaxation.' },
      { day: 9, title: 'Koggala', description: 'Explore Koggala Lake.' },
      { day: 10, title: 'Koggala / Talalla', description: 'Travel to Talalla, stay at Talalla Retreat.' },
      { day: 11, title: 'Talalla', description: 'Beach relaxation.' },
      { day: 12, title: 'Talalla', description: 'Swimming and exploration.' },
      { day: 13, title: 'Talalla', description: 'Final relaxation.' },
      { day: 14, title: 'Departure', description: 'Transfer to airport for departure.' }
    ],
    highlights: ['Ayurveda treatments', 'Yoga classes', 'Spa sessions', 'Tropical beaches', 'Knuckles Mountain Range', 'Spiritual legacy', 'Deserted beaches']
  },
  {
    id: 2,
    title: 'Authentic Tour on the Jewel of the Indian Ocean',
    slug: 'authentic-jewel-indian-ocean',
    short_description: 'Explore Sri Lanka\'s heritage sites, cultural treasures, and wildlife adventures on this comprehensive tour.',
    description: 'In Sri Lanka, you can be a classic. Our Classic Tour includes heritage sites, cultural and religious sites, beautiful landscapes, an adventurous untamed wild safari tour, and the true taste of Sri Lanka.',
    duration: '17 Days',
    price: 3200,
    destinations: ['Negombo', 'Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Mirissa', 'Weligama', 'Unawatuna', 'Galle', 'Hikkaduwa'],
    category: 'Cultural',
    image_url: '/assets/packages/Authentic Tour on the Jewel of the Indian Ocean.jpg',
    itinerary: [
      { day: 1, title: 'Arrival / Negombo', description: 'Airport pickup, overnight in Negombo.' },
      { day: 2, title: 'Negombo / Sigiriya', description: 'Drive to Sigiriya, explore Sigiriya Rock Fortress.' },
      { day: 3, title: 'Sigiriya', description: 'Continue exploring Sigiriya.' },
      { day: 4, title: 'Sigiriya', description: 'Visit surrounding areas.' },
      { day: 5, title: 'Sigiriya / Kandy', description: 'Travel to Kandy, visit Temple of the Tooth.' },
      { day: 6, title: 'Kandy', description: 'Explore Kandy.' },
      { day: 7, title: 'Kandy / Nuwara Eliya', description: 'Drive to Nuwara Eliya.' },
      { day: 8, title: 'Nuwara Eliya', description: 'Tea plantations and lakes.' },
      { day: 9, title: 'Nuwara Eliya / Ella', description: 'Travel to Ella.' },
      { day: 10, title: 'Ella', description: 'Hiking and views.' },
      { day: 11, title: 'Ella / Yala', description: 'Drive to Yala National Park.' },
      { day: 12, title: 'Yala', description: 'Wildlife safari.' },
      { day: 13, title: 'Yala / Mirissa', description: 'Travel to Mirissa.' },
      { day: 14, title: 'Mirissa', description: 'Whale watching and beach.' },
      { day: 15, title: 'Mirissa / Weligama / Unawatuna / Galle', description: 'Explore southern beaches.' },
      { day: 16, title: 'Galle / Hikkaduwa', description: 'Beach relaxation.' },
      { day: 17, title: 'Departure', description: 'Airport transfer.' }
    ],
    highlights: ['Cultural Triangle', 'Temple of the Tooth', 'Hill country', 'Wildlife safaris', 'Whale watching', 'Galle Fort', 'Beach relaxation']
  },
  // Add the remaining 7 packages with their itineraries
  {
    id: 3,
    title: 'The Wildlife Tour in Sri Lanka\'s Amaze',
    slug: 'wildlife-tour-sri-lanka-amaze',
    short_description: 'Thrilling wildlife safaris through Sri Lanka\'s national parks and nature reserves.',
    description: 'Wild Sri Lanka Tour is a popular wildlife tour package that includes extremely interesting and adventurous journeys. This tour will take you through national parks, nature reserves, and wildlife in Sri Lanka\'s wilderness areas.',
    duration: '15 Days',
    price: 2650,
    destinations: ['Chilaw', 'Wilpattu', 'Bobilella', 'Gal Oya', 'Yala', 'Tangalle', 'Sinharaja', 'Mirissa'],
    category: 'Wildlife',
    image_url: '/assets/packages/The Wildlife Tour in Sri Lanka\'s Amaze.jpg',
    itinerary: [
      { day: 1, title: 'Arrival / Chilaw', description: 'Airport pickup, overnight in Chilaw.' },
      { day: 2, title: 'Chilaw / Wilpattu', description: 'Drive to Wilpattu National Park.' },
      { day: 3, title: 'Wilpattu', description: 'Wildlife safari.' },
      { day: 4, title: 'Wilpattu / Bobilella (Kandy)', description: 'Travel to Kandy area.' },
      { day: 5, title: 'Bobilella / Gal Oya Eco Lodge', description: 'Drive to Gal Oya.' },
      { day: 6, title: 'Gal Oya National Park', description: 'Explore the park.' },
      { day: 7, title: 'Gal Oya / Yala', description: 'Travel to Yala.' },
      { day: 8, title: 'Yala', description: 'Safari.' },
      { day: 9, title: 'Yala', description: 'More safari.' },
      { day: 10, title: 'Yala / Tangalle', description: 'Drive to Tangalle.' },
      { day: 11, title: 'Tangalle', description: 'Beach and exploration.' },
      { day: 12, title: 'Sinharaja', description: 'Rainforest visit.' },
      { day: 13, title: 'Sinharaja / Mirissa', description: 'Travel to Mirissa.' },
      { day: 14, title: 'Mirissa', description: 'Beach and activities.' },
      { day: 15, title: 'Departure', description: 'Airport transfer.' }
    ],
    highlights: ['Knuckles Mountain Range', 'Elephant swimming', 'Marine turtles', 'Gal Oya National Park', 'Leopard safaris', 'Sinharaja Rainforest']
  },
  {
    id: 4,
    title: 'A Soothing Family Time on a Tropical Island',
    slug: 'soothing-family-tropical-island',
    short_description: 'Perfect family vacation combining culture, wildlife, beaches, and adventure for unforgettable memories.',
    description: 'Sri Lanka is an excellent choice for a family vacation with children. This island has something for everyone in the family. Culture, heritage, wildlife, landscapes, leisure activities, adventures, and Asia\'s best beaches are all waiting to provide you with an unforgettable vacation experience.',
    duration: '17 Days',
    price: 2950,
    destinations: ['Negombo', 'Cultural Triangle', 'Kandy', 'Nuwara Eliya', 'Kitulgala', 'Sinharaja', 'Galle', 'Bentota'],
    category: 'Family',
    image_url: '/assets/packages/A Soothing Family Time on a Tropical Island.jpg',
    itinerary: [
      { day: 1, title: 'Arrival / Negombo', description: 'Airport pickup, overnight in Negombo.' },
      { day: 2, title: 'Negombo', description: 'Beach and market.' },
      { day: 3, title: 'Negombo / Cultural Triangle', description: 'Drive to Anuradhapura, Polonnaruwa, Sigiriya.' },
      { day: 4, title: 'Cultural Triangle', description: 'Explore ruins.' },
      { day: 5, title: 'Cultural Triangle', description: 'More exploration.' },
      { day: 6, title: 'Cultural Triangle / Kandy', description: 'Travel to Kandy.' },
      { day: 7, title: 'Kandy', description: 'Temple and gardens.' },
      { day: 8, title: 'Kandy / Nuwara Eliya', description: 'Drive to Nuwara Eliya.' },
      { day: 9, title: 'Nuwara Eliya', description: 'Tea plantations.' },
      { day: 10, title: 'Nuwara Eliya / Kitulgala / Sinharaja', description: 'Adventure and rainforest.' },
      { day: 11, title: 'Kitulgala / Sinharaja', description: 'Nature activities.' },
      { day: 12, title: 'Sinharaja / Galle', description: 'Travel to Galle.' },
      { day: 13, title: 'Galle', description: 'Fort and beaches.' },
      { day: 14, title: 'Galle', description: 'Exploration.' },
      { day: 15, title: 'Galle / Bentota', description: 'Drive to Bentota.' },
      { day: 16, title: 'Bentota', description: 'Beach relaxation.' },
      { day: 17, title: 'Departure', description: 'Airport transfer.' }
    ],
    highlights: ['Elephant orphanage', 'Golf and horseback', 'River camping', 'Cycling in Galle', 'Water sports in Bentota', 'Turtle hatchery']
  },
  {
    id: 5,
    title: 'Single Tour on Dual Wonder Isles – Sri Lanka & Maldives',
    slug: 'dual-wonder-isles-sri-lanka-maldives',
    short_description: 'Luxurious journey combining Sri Lanka\'s cultural wonders with Maldives\' paradise islands.',
    description: 'With all the comforts of a bustling city, operating out of a quiet, rural bubble of beachside tranquility amidst a busy commercial hub, exploring the unique customs, culture, and adventure of these stunning islands is always a once-in-a-lifetime experience in Sri Lanka.',
    duration: '15 Days',
    price: 4500,
    destinations: ['Negombo', 'Cultural Triangle', 'Kandy', 'Hatton', 'Mirissa', 'Weligama', 'Unawatuna', 'Galle', 'Colombo', 'Maldives'],
    category: 'Luxury',
    image_url: '/assets/packages/Single Tour on Dual Wonder Isles – Sri Lanka & Maldives.jpg',
    itinerary: [
      { day: 1, title: 'Arrival / Negombo', description: 'Airport pickup.' },
      { day: 2, title: 'Negombo / Cultural Triangle', description: 'Drive to cultural sites.' },
      { day: 3, title: 'Cultural Triangle', description: 'Exploration.' },
      { day: 4, title: 'Cultural Triangle', description: 'More sites.' },
      { day: 5, title: 'Cultural Triangle / Kandy', description: 'Travel to Kandy.' },
      { day: 6, title: 'Kandy', description: 'Cultural experience.' },
      { day: 7, title: 'Kandy / Hatton', description: 'Drive to Hatton.' },
      { day: 8, title: 'Hatton', description: 'Horton Plains.' },
      { day: 9, title: 'Mirissa / Weligama / Unawatuna', description: 'Southern beaches.' },
      { day: 10, title: 'Mirissa / Weligama / Unawatuna', description: 'Exploration.' },
      { day: 11, title: 'Mirissa / Weligama / Unawatuna', description: 'Activities.' },
      { day: 12, title: 'Galle / Colombo', description: 'Travel to Colombo.' },
      { day: 13, title: 'Colombo / Maldives', description: 'Fly to Maldives.' },
      { day: 14, title: 'Maldives', description: 'Island relaxation.' },
      { day: 15, title: 'Departure', description: 'Airport transfer.' }
    ],
    highlights: ['Cultural Triangle', 'Hill country', 'Colombo', 'Maldives beaches', 'Water sports']
  },
  {
    id: 6,
    title: 'The Essence of Tropical Romance (Honeymoon Tour)',
    slug: 'essence-tropical-romance-honeymoon',
    short_description: 'Romantic honeymoon experience with intimate stays, private dinners, and tropical paradise settings.',
    description: 'Do you want to plan the ideal Sri Lanka honeymoon? Look nowhere else. You and your spouse-to-be can enjoy 15 days of romantic, sigh-inducing activities on this breathtaking island of Sri Lanka.',
    duration: '19 Days',
    price: 3800,
    destinations: ['Pasyala', 'Anuradhapura', 'Polonnaruwa', 'Sigiriya', 'Kandy', 'Nuwara Eliya', 'Koslanda', 'Yala', 'Mirissa', 'Weligama', 'Unawatuna', 'Galle', 'Bentota'],
    category: 'Romance',
    image_url: '/assets/packages/The Essence of Tropical Romance (Honeymoon Tour).JPG',
    itinerary: [
      { day: 1, title: 'Arrival / Pasyala', description: 'Airport pickup.' },
      { day: 2, title: 'Pasyala / Anuradhapura / Cultural Triangle', description: 'Drive to cultural sites.' },
      { day: 3, title: 'Cultural Triangle', description: 'Exploration.' },
      { day: 4, title: 'Cultural Triangle', description: 'More sites.' },
      { day: 5, title: 'Cultural Triangle / Kandy', description: 'Travel to Kandy.' },
      { day: 6, title: 'Kandy', description: 'Romantic experiences.' },
      { day: 7, title: 'Kandy / Nuwara Eliya', description: 'Drive to Nuwara Eliya.' },
      { day: 8, title: 'Nuwara Eliya', description: 'Hill country.' },
      { day: 9, title: 'Nuwara Eliya / Koslanda (Hill Country)', description: 'Exploration.' },
      { day: 10, title: 'Koslanda / Yala', description: 'Travel to Yala.' },
      { day: 11, title: 'Yala', description: 'Safari.' },
      { day: 12, title: 'Yala', description: 'More safari.' },
      { day: 13, title: 'Yala / Mirissa', description: 'Drive to Mirissa.' },
      { day: 14, title: 'Mirissa', description: 'Beach.' },
      { day: 15, title: 'Mirissa / Weligama', description: 'Southern beaches.' },
      { day: 16, title: 'Weligama / Unawatuna', description: 'Exploration.' },
      { day: 17, title: 'Unawatuna / Galle', description: 'Travel to Galle.' },
      { day: 18, title: 'Galle / Bentota', description: 'Drive to Bentota.' },
      { day: 19, title: 'Departure', description: 'Airport transfer.' }
    ],
    highlights: ['West Coast beaches', 'Hill country views', 'Cultural heritage', 'Wildlife safaris', 'Victoria Reservoir', 'Galle Fort', 'Boutique hotels']
  },
  {
    id: 7,
    title: 'Northern Sri Lankan Ancestry',
    slug: 'northern-sri-lankan-ancestry',
    short_description: 'Explore Sri Lanka\'s northern heritage, ancient kingdoms, and diverse cultural influences.',
    description: 'Sri Lankan culture is a blend of modern and traditional elements, as well as regional diversity, influenced by the heritage of Theravada Buddhism passed down from India.',
    duration: '14 Days',
    price: 2400,
    destinations: ['Kalpitiya', 'Wilpattu', 'Anuradhapura', 'Mannar', 'Jaffna', 'Trincomalee', 'Dambulla', 'Colombo'],
    category: 'Cultural',
    image_url: '/assets/destination/anuradhapura-polonnaruwa-srilanka-.jpg',
    itinerary: [
      { day: 1, title: 'Arrival / Kalpitiya', description: 'Airport pickup.' },
      { day: 2, title: 'Kalpitiya', description: 'Kitesurfing.' },
      { day: 3, title: 'Kalpitiya / Wilpattu', description: 'Drive to Wilpattu.' },
      { day: 4, title: 'Wilpattu / Anuradhapura', description: 'Travel to Anuradhapura.' },
      { day: 5, title: 'Anuradhapura', description: 'Ruins.' },
      { day: 6, title: 'Anuradhapura / Mannar', description: 'Drive to Mannar.' },
      { day: 7, title: 'Mannar', description: 'Exploration.' },
      { day: 8, title: 'Mannar / Jaffna', description: 'Travel to Jaffna.' },
      { day: 9, title: 'Jaffna', description: 'Cultural sites.' },
      { day: 10, title: 'Jaffna', description: 'More exploration.' },
      { day: 11, title: 'Jaffna', description: 'Festivals.' },
      { day: 12, title: 'Jaffna / Trincomalee', description: 'Drive to Trincomalee.' },
      { day: 13, title: 'Trincomalee / Dambulla', description: 'Travel to Dambulla.' },
      { day: 14, title: 'Dambulla / Colombo', description: 'Drive to Colombo.' }
    ],
    highlights: ['Alankuda beaches', 'Whale watching', 'Anuradhapura kingdom', 'Hindu Kovils', 'East Coast', 'Delft Island horses']
  },
  {
    id: 8,
    title: 'The Sea and Tea Combo',
    slug: 'sea-tea-combo',
    short_description: 'Luxurious combination of Sri Lanka\'s stunning beaches and famous tea plantations.',
    description: 'The sea and tea tours, presented in cooperation with Walkers Tours, Ceylon Tea Trails, and Cape Weligama, are the ideal way for you to enjoy Sri Lanka\'s sunny beaches and cool hills in comfort.',
    duration: '9 Days',
    price: 1950,
    destinations: ['Colombo', 'Kandy', 'Nuwara Eliya', 'Koslanda', 'Galle'],
    category: 'Luxury',
    image_url: '/assets/packages/The Sea and Tea Combo.jpg',
    itinerary: [
      { day: 1, title: 'Arrival / Colombo', description: 'Airport pickup.' },
      { day: 2, title: 'Colombo / Kandy', description: 'Drive to Kandy.' },
      { day: 3, title: 'Kandy', description: 'Cultural.' },
      { day: 4, title: 'Kandy', description: 'Exploration.' },
      { day: 5, title: 'Kandy / Nuwara Eliya', description: 'Travel to Nuwara Eliya.' },
      { day: 6, title: 'Nuwara Eliya', description: 'Tea.' },
      { day: 7, title: 'Nuwara Eliya / Koslanda', description: 'Drive to Koslanda.' },
      { day: 8, title: 'Koslanda / Galle', description: 'Travel to Galle.' },
      { day: 9, title: 'Departure', description: 'Airport transfer.' }
    ],
    highlights: ['Hill country', 'Galle Coast', 'Galle Fort shops']
  },
  {
    id: 9,
    title: 'The Wonders of Wildlife Package',
    slug: 'wonders-wildlife-package',
    short_description: 'Comprehensive wildlife adventure through Sri Lanka\'s most exciting national parks and reserves.',
    description: 'A very popular wildlife tour program with a very interesting and exciting journey is called Wild Sri Lanka Tour. You will travel through Sri Lankan national parks, nature preserves, and wild areas on this.',
    duration: '15 Days',
    price: 2750,
    destinations: ['Kalpitiya', 'Cultural Triangle', 'Knuckles', 'Ella', 'Kitulgala', 'Sinharaja', 'Mirissa'],
    category: 'Wildlife',
    image_url: '/assets/packages/The Wonders of Wildlife Package.jpg',
    itinerary: [
      { day: 1, title: 'Arrival / Kalpitiya', description: 'Airport pickup.' },
      { day: 2, title: 'Kalpitiya', description: 'Activities.' },
      { day: 3, title: 'Kalpitiya / Cultural Triangle', description: 'Drive to cultural sites.' },
      { day: 4, title: 'Cultural Triangle', description: 'Exploration.' },
      { day: 5, title: 'Cultural Triangle / Knuckles', description: 'Travel to Knuckles.' },
      { day: 6, title: 'Knuckles', description: 'Trekking.' },
      { day: 7, title: 'Knuckles', description: 'Waterfall picnic.' },
      { day: 8, title: 'Knuckles / Ella', description: 'Drive to Ella.' },
      { day: 9, title: 'Ella', description: 'Hiking.' },
      { day: 10, title: 'Ella / Kitulgala / Sinharaja', description: 'Adventure.' },
      { day: 11, title: 'Kitulgala / Sinharaja', description: 'Rainforest.' },
      { day: 12, title: 'Sinharaja', description: 'Bird watching.' },
      { day: 13, title: 'Sinharaja / Mirissa', description: 'Travel to Mirissa.' },
      { day: 14, title: 'Mirissa', description: 'Beach.' },
      { day: 15, title: 'Departure', description: 'Airport transfer.' }
    ],
    highlights: ['Water sports', 'Whale watching', 'Hot air balloon', 'Mountain biking', 'Hill trekking', 'White-water rafting']
  }
];

const packageImageMap = {
  'ayurvedic-wellness-pearl-island': 'The Spirit of Ayurvedic Wellness on a Pearl Island.jpg',
  'authentic-jewel-indian-ocean': 'Authentic Tour on the Jewel of the Indian Ocean.jpg',
  'wildlife-tour-sri-lanka-amaze': 'The Wildlife Tour in Sri Lankas Amaze.jpg',
  'soothing-family-tropical-island': 'A Soothing Family Time on a Tropical Island.jpg',
  'dual-wonder-isles-sri-lanka-maldives': 'Single Tour on Dual Wonder Isles – Sri Lanka & Maldives.jpg',
  'essence-tropical-romance-honeymoon': 'The Essence of Tropical Romance Honeymoon Tour.JPG',
  'northern-sri-lankan-ancestry': 'A Soothing Family Time on a Tropical Island2.jpg',
  'sea-tea-combo': 'The Sea and Tea Combo.jpg',
  'wonders-wildlife-package': 'The Wonders of Wildlife Package.jpg',
};

const staticPackagesWithImages = staticPackages.map(pkg => ({
  ...pkg,
  image: packageImageMap[pkg.slug]
    ? new URL(`../assets/packages/${packageImageMap[pkg.slug]}`, import.meta.url).href
    : pkg.image_url,
}));

export const packageService = {
  async getAll() {
    return staticPackagesWithImages
  },

  async getFeatured() {
    return staticPackagesWithImages.slice(0, 3)
  },

  async getBySlug(slug) {
    return staticPackagesWithImages.find(pkg => pkg.slug === slug)
  },

  async getByCategory(category) {
    if (category === 'All') return staticPackagesWithImages
    return staticPackagesWithImages.filter(pkg => pkg.category === category)
  }
}
