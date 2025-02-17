import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hrvonwfvsewlbzbhkwfl.supabase.co";
const supabaseKey = import.meta.env.SUPABASE_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseKey);
