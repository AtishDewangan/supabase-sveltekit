import { env } from '$env/dynamic/private'
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY)