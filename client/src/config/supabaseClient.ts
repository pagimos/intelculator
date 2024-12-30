import { createClient } from "@supabase/supabase-js";

// Get Supabase URL and API key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_ANON_KEY;

// Create and initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; // Export the Supabase client
