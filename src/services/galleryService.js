import { supabase } from '../api/supabaseClient'

export const galleryService = {
  async getAll() {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  async getFeatured() {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  async getByCategory(category) {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }
}
