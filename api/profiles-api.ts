import { createClient } from "@/utils/supabase/server";

export const getProfile = async (id: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
};
