import { createClient } from "@supabase/supabase-js";

//export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";


// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";

export const supabaseUrl = "https://wglexvrxjqbkyhxomsid.supabase.co";
const supabaseKey =
  "sb_publishable_2Jwn9mDZ2nTFOG-mXyRGNg__W23jbCW";

  const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


// NEXT_PUBLIC_SUPABASE_URL=https://wglexvrxjqbkyhxomsid.supabase.co
// NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_2Jwn9mDZ2nTFOG-mXyRGNg__W23jbCW