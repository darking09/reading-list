import { createClient } from '@supabase/supabase-js'

const {
  NEXT_PUBLIC_SUPABASE_URL='',
  SUPABASE_SERVICE_ROLE_KEY=''
} = process.env

// Create a single supabase client for interacting with your database
export const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
