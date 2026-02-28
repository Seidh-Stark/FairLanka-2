# Fair Lanka Travels

A comprehensive, production-ready tourism website for Sri Lanka built with React, Vite, and Supabase.

## Overview

Fair Lanka Travels is a modern tourism platform showcasing Sri Lanka's destinations, tour packages, activities, and travel information. The website features a clean, responsive design with a green color scheme inspired by the natural beauty of Sri Lanka.

## Features

- **Homepage**: Full-screen hero section, featured destinations, activities grid, travel information, testimonials
- **Destinations**: Filterable destination catalog with detailed pages
- **Tour Packages**: Browseable packages with itineraries and pricing
- **Activities**: Showcase of available experiences
- **Travel Guide**: Comprehensive travel information
- **Blog**: Travel tips and destination guides
- **Contact Form**: Inquiry submission with WhatsApp integration
- **Responsive Design**: Mobile-first approach with smooth animations
- **Database Integration**: Full Supabase backend

## Tech Stack

- **Frontend**: React 18 + Vite
- **Routing**: React Router DOM v6
- **Database**: Supabase (PostgreSQL)
- **State Management**: Context API
- **HTTP Client**: Axios
- **Styling**: CSS Modules

## Project Structure

```
src/
├── api/                 # API configuration
│   ├── supabaseClient.js
│   └── axiosConfig.js
├── components/
│   ├── common/         # Reusable components
│   ├── layout/         # Layout components
│   └── sections/       # Page sections
├── context/            # React Context
├── pages/              # Page components
├── services/           # Data service layer
└── styles/             # Global styles
```

## Database Schema

- **destinations**: Tourist destinations with categories and details
- **packages**: Tour packages with itineraries and pricing
- **blogs**: Travel blog posts and guides
- **gallery**: Photo gallery
- **testimonials**: Customer reviews
- **inquiries**: Contact form submissions

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Environment Variables

The following environment variables are pre-configured in `.env`:
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_SUPABASE_ANON_KEY`: Supabase anonymous key

## Color Scheme

- Primary Green: #1b6b4f (Deep Emerald)
- Vibrant Green: #8dc63f (Leaf Green)
- Gold: #d4af37 (Premium accents)
- Sand/Beige: #f5f0e8, #e8dfd3 (Backgrounds)

## Key Components

### Layout Components
- **Header**: Fixed navigation with mobile menu
- **Footer**: Multi-column footer with links and contact info
- **Layout**: Main layout wrapper

### Card Components
- **DestinationCard**: Destination preview cards
- **PackageCard**: Tour package cards with pricing
- **ActivityCard**: Activity showcase cards
- **TestimonialCard**: Customer review cards

### Pages
- Home, Destinations, Packages, Activities, About, Travel Guide, Blog, Contact

## Service Layer

All data operations are handled through service modules:
- `destinationService`: Destination CRUD operations
- `packageService`: Package management
- `blogService`: Blog post retrieval
- `testimonialService`: Testimonial display
- `galleryService`: Gallery management
- `inquiryService`: Contact form submissions

## Features for Admin Dashboard (Future)

The architecture is prepared for admin dashboard integration:
- Authentication context ready
- Service layer with CRUD patterns
- Protected route structure
- Database policies for admin access

## Sample Data

The database is pre-seeded with:
- 6 featured destinations (Sigiriya, Ella, Galle, Yala, Mirissa, Kandy)
- 3 tour packages (Cultural Triangle, Beach Paradise, Wildlife Safari)
- 5 customer testimonials
- 2 blog posts
- Gallery images

## Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright 2026 Fair Lanka Travels. All rights reserved.
