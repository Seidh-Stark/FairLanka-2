import { supabase } from '../api/supabaseClient'

export const destinationService = {
  async getAll() {
    const { data, error } = await supabase
      .from('destinations')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  async getFeatured() {
    const { data, error } = await supabase
      .from('destinations')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  async getBySlug(slug) {
    const { data, error } = await supabase
      .from('destinations')
      .select('*')
      .eq('slug', slug)
      .maybeSingle()

    if (error) throw error
    return data
  },

  async getByCategory(category) {
    const { data, error } = await supabase
      .from('destinations')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }
}
