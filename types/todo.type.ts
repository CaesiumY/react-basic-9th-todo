import { Database, Tables } from "@/database.types";
import { SupabaseClient } from "@supabase/supabase-js";

export type Todo = Tables<"todos">;

export type Supabase = SupabaseClient<Database>;
