import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// some setups mistakenly double the word "SUPABASE" in the key name
// the README previously indicated VITE_SUPABASE_SUPABASE_ANON_KEY so we
// support both that and the more common VITE_SUPABASE_ANON_KEY.
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase

if (!supabaseUrl || !supabaseAnonKey) {
  // guard against missing environment variables which would cause
  // createClient to throw and crash the entire application.
  // We still export a dummy object so imports don't fail later.
  console.warn(
    'Supabase not initialized: missing VITE_SUPABASE_URL or VITE_SUPABASE_SUPABASE_ANON_KEY'
  )
  supabase = {
    from: () => ({ data: null, error: new Error('Supabase not configured') }),
    rpc: () => ({ data: null, error: new Error('Supabase not configured') })
    // you can add other methods as needed to avoid undefined errors
  }
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export { supabase }
