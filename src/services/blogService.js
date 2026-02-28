import { supabase } from '../api/supabaseClient'

export const blogService = {
  async getAll() {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })

    if (error) throw error
    return data
  },

  async getFeatured() {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('published', true)
      .eq('featured', true)
      .order('published_at', { ascending: false })
      .limit(3)

    if (error) throw error
    return data
  },

  async getBySlug(slug) {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle()

    if (error) throw error
    return data
  }
}
