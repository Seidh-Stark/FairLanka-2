import { supabase } from '../api/supabaseClient'

export const testimonialService = {
  async getApproved() {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  async getFeatured() {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true)
      .eq('featured', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }
}
