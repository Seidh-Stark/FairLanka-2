export const testimonialService = {
  async getApproved() {
    return [
      {
        id: 1,
        customer_name: 'SuzEdels',
        customer_country: 'Traveler',
        rating: 5,
        review: 'Great experience with Fair Lanka travels over the past 19 days. We used them every time we needed a transfer and just contacted them a day or 2 before each move. So easy, professional, reliable and not expensive.',
        source: 'Tripadvisor',
        source_url: 'https://www.tripadvisor.com/Attraction_Review-g612380-d33497525-Reviews-Fair_Lanka_Travels-Weligama_Matara_Southern_Province.html'
      },
      {
        id: 2,
        customer_name: 'BackPacker575209',
        customer_country: 'Traveler',
        rating: 5,
        review: 'We’ve just returned from 8 days with Fair Lanka Travel and driver Azeez. Booking through Yoonus was easy and he was very responsive from beginning to end. Always available. Azeez careful and safe driver. We’ll use them again on our next trip.',
        source: 'Tripadvisor',
        source_url: 'https://www.tripadvisor.com/Attraction_Review-g612380-d33497525-Reviews-Fair_Lanka_Travels-Weligama_Matara_Southern_Province.html'
      },
      {
        id: 3,
        customer_name: 'Mela19852014',
        customer_country: 'Traveler',
        rating: 5,
        review: 'Best service in Srilanka! The driver Sameera and the entire team was so cooperative! Can’t express in words. I surely recommend to everyone to use their services. Top notch!',
        source: 'Tripadvisor',
        source_url: 'https://www.tripadvisor.com/Attraction_Review-g612380-d33497525-Reviews-Fair_Lanka_Travels-Weligama_Matara_Southern_Province.html'
      },
      {
        id: 4,
        customer_name: 'Matjaž Š',
        customer_country: 'Slovenia',
        rating: 5,
        review: 'As a family of 4 we booked a 3-day round trip around Sri Lanka with Yoonus from Fair Lanka. He helped us with the itinerary, listened to our requests, and arranged a great van and driver who made our trip unforgettable.',
        source: 'Tripadvisor',
        source_url: 'https://www.tripadvisor.com/Attraction_Review-g612380-d33497525-Reviews-Fair_Lanka_Travels-Weligama_Matara_Southern_Province.html'
      },
      {
        id: 5,
        customer_name: 'Tayeba M',
        customer_country: 'Traveler',
        rating: 5,
        review: 'We hired the car for about 15 days and traveled all over Sri Lanka. The service was family-friendly, honest, and very memorable. They went above and beyond to accommodate us and the rates were reasonable.',
        source: 'Tripadvisor',
        source_url: 'https://www.tripadvisor.com/Attraction_Review-g612380-d33497525-Reviews-Fair_Lanka_Travels-Weligama_Matara_Southern_Province.html'
      },
      {
        id: 6,
        customer_name: 'Shirshendu D',
        customer_country: 'India',
        rating: 5,
        review: 'Thank you Fair Lanka Travels so much for arranging a wonderful trip with in few days. It was too good.',
        source: 'Tripadvisor',
        source_url: 'https://www.tripadvisor.com/Attraction_Review-g612380-d33497525-Reviews-Fair_Lanka_Travels-Weligama_Matara_Southern_Province.html'
      },
      {
        id: 7,
        customer_name: 'Nick A',
        customer_country: 'Traveler',
        rating: 5,
        review: 'Fair Lanka travels were super responsive with great communication and reliable. Highly recommend.',
        source: 'Tripadvisor',
        source_url: 'https://www.tripadvisor.com/Attraction_Review-g612380-d33497525-Reviews-Fair_Lanka_Travels-Weligama_Matara_Southern_Province.html'
      },
      {
        id: 8,
        customer_name: 'Roman E',
        customer_country: 'Traveler',
        rating: 5,
        review: 'We booked all our trips and journeys via Fair Lanka Travels. Super easy, great communication, and highly recommended. We had about 10 different trips and everything went perfectly.',
        source: 'Tripadvisor',
        source_url: 'https://www.tripadvisor.com/Attraction_Review-g612380-d33497525-Reviews-Fair_Lanka_Travels-Weligama_Matara_Southern_Province.html'
      }
    ]
  },

  async getFeatured() {
    return this.getApproved()
  }
}
