import { supabase } from '../api/supabaseClient'

export const inquiryService = {
  async create(inquiryData) {
    const { data, error } = await supabase
      .from('inquiries')
      .insert([inquiryData])
      .select()
      .single()

    if (error) throw error
    return data
  }
}
