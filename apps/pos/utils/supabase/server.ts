import { createServerClient } from "@pos/supabase";

export async function createClient() {
  return createServerClient();
}
