/*
  # Fair Lanka Travels Database Schema

  ## Overview
  This migration creates the core database tables for the Fair Lanka Travels tourism website,
  including destinations, packages, blogs, gallery, testimonials, inquiries, and settings.

  ## New Tables

  ### 1. destinations
  Stores information about travel destinations in Sri Lanka
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Destination name (e.g., "Sigiriya")
  - `slug` (text, unique) - URL-friendly version of name
  - `category` (text) - Category (Cultural, Beach, Wildlife, Adventure, etc.)
  - `description` (text) - Full destination description
  - `short_description` (text) - Brief summary for cards
  - `image_url` (text) - Main destination image URL
  - `gallery_images` (jsonb) - Array of additional images
  - `attractions` (jsonb) - Array of attractions at destination
  - `best_time_to_visit` (text) - Recommended visiting period
  - `featured` (boolean) - Show on homepage
  - `meta_title` (text) - SEO title
  - `meta_description` (text) - SEO description
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. packages
  Stores tour package information
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Package title
  - `slug` (text, unique) - URL-friendly version
  - `category` (text) - Package type (Day Tour, Multi-Day, Adventure, etc.)
  - `duration` (text) - Duration (e.g., "3 Days 2 Nights")
  - `price` (decimal) - Package price in USD
  - `description` (text) - Full package description
  - `short_description` (text) - Brief summary
  - `image_url` (text) - Main package image
  - `gallery_images` (jsonb) - Additional images
  - `itinerary` (jsonb) - Day-by-day itinerary
  - `included` (jsonb) - What's included in package
  - `excluded` (jsonb) - What's not included
  - `highlights` (jsonb) - Key highlights
  - `featured` (boolean) - Show on homepage
  - `meta_title` (text) - SEO title
  - `meta_description` (text) - SEO description
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. blogs
  Stores blog posts and travel guides
  - `id` (uuid, primary key)
  - `title` (text)
  - `slug` (text, unique)
  - `category` (text) - Blog category
  - `author` (text)
  - `content` (text) - Full blog content
  - `excerpt` (text) - Short excerpt
  - `featured_image` (text)
  - `published` (boolean)
  - `featured` (boolean)
  - `meta_title` (text)
  - `meta_description` (text)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  - `published_at` (timestamptz)

  ### 4. gallery
  Stores gallery images
  - `id` (uuid, primary key)
  - `title` (text)
  - `description` (text)
  - `image_url` (text)
  - `category` (text)
  - `featured` (boolean)
  - `created_at` (timestamptz)

  ### 5. testimonials
  Stores customer reviews and testimonials
  - `id` (uuid, primary key)
  - `customer_name` (text)
  - `customer_photo` (text)
  - `customer_country` (text)
  - `rating` (integer) - Rating out of 5
  - `review` (text)
  - `package_id` (uuid, foreign key) - Optional link to package
  - `featured` (boolean)
  - `approved` (boolean)
  - `created_at` (timestamptz)

  ### 6. inquiries
  Stores contact form submissions and booking inquiries
  - `id` (uuid, primary key)
  - `name` (text)
  - `email` (text)
  - `phone` (text)
  - `country` (text)
  - `message` (text)
  - `package_id` (uuid, foreign key) - Optional link to package
  - `destination_id` (uuid, foreign key) - Optional link to destination
  - `status` (text) - new, contacted, converted, closed
  - `created_at` (timestamptz)

  ### 7. settings
  Stores website configuration
  - `id` (uuid, primary key)
  - `key` (text, unique)
  - `value` (jsonb)
  - `updated_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Public read access for published content (destinations, packages, blogs, gallery, testimonials)
  - Authenticated-only write access for admin operations
  - Anyone can submit inquiries

  ## Notes
  1. All image URLs will use Pexels stock photos initially
  2. JSONB fields allow flexible data structures
  3. Slug fields enable SEO-friendly URLs
  4. Featured flags control homepage display
  5. Timestamps track content lifecycle
*/

CREATE TABLE IF NOT EXISTS destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  short_description text NOT NULL,
  image_url text NOT NULL,
  gallery_images jsonb DEFAULT '[]'::jsonb,
  attractions jsonb DEFAULT '[]'::jsonb,
  best_time_to_visit text DEFAULT '',
  featured boolean DEFAULT false,
  meta_title text DEFAULT '',
  meta_description text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  duration text NOT NULL,
  price decimal(10,2) NOT NULL,
  description text NOT NULL,
  short_description text NOT NULL,
  image_url text NOT NULL,
  gallery_images jsonb DEFAULT '[]'::jsonb,
  itinerary jsonb DEFAULT '[]'::jsonb,
  included jsonb DEFAULT '[]'::jsonb,
  excluded jsonb DEFAULT '[]'::jsonb,
  highlights jsonb DEFAULT '[]'::jsonb,
  featured boolean DEFAULT false,
  meta_title text DEFAULT '',
  meta_description text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  author text DEFAULT 'Fair Lanka Team',
  content text NOT NULL,
  excerpt text NOT NULL,
  featured_image text NOT NULL,
  published boolean DEFAULT false,
  featured boolean DEFAULT false,
  meta_title text DEFAULT '',
  meta_description text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published_at timestamptz
);

CREATE TABLE IF NOT EXISTS gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  image_url text NOT NULL,
  category text NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_photo text DEFAULT '',
  customer_country text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review text NOT NULL,
  package_id uuid REFERENCES packages(id) ON DELETE SET NULL,
  featured boolean DEFAULT false,
  approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  country text DEFAULT '',
  message text NOT NULL,
  package_id uuid REFERENCES packages(id) ON DELETE SET NULL,
  destination_id uuid REFERENCES destinations(id) ON DELETE SET NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'closed')),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value jsonb DEFAULT '{}'::jsonb,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Destinations are viewable by everyone"
  ON destinations FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Packages are viewable by everyone"
  ON packages FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Published blogs are viewable by everyone"
  ON blogs FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Gallery is viewable by everyone"
  ON gallery FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Approved testimonials are viewable by everyone"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (approved = true);

CREATE POLICY "Anyone can submit inquiries"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Settings are viewable by everyone"
  ON settings FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX idx_destinations_slug ON destinations(slug);
CREATE INDEX idx_destinations_category ON destinations(category);
CREATE INDEX idx_destinations_featured ON destinations(featured);
CREATE INDEX idx_packages_slug ON packages(slug);
CREATE INDEX idx_packages_category ON packages(category);
CREATE INDEX idx_packages_featured ON packages(featured);
CREATE INDEX idx_blogs_slug ON blogs(slug);
CREATE INDEX idx_blogs_published ON blogs(published);
CREATE INDEX idx_testimonials_approved ON testimonials(approved);
CREATE INDEX idx_inquiries_status ON inquiries(status);