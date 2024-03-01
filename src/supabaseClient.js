// import dotenv from "dotenv";
// import { createClient } from "@supabase/supabase-js";

// dotenv.config(); // Load environment variables

// const supabase = createClient(
//   import.meta.env.REACT_APP_SUPABASE_URL,
//   import.meta.env.REACT_APP_SUPABASE_ANON_KEY
// );
// export default supabase;

import { createClient } from "@supabase/supabase-js";

// Use environment variables or hardcoded values
//
// const supabaseUrl = "https://yhmzzlixluuozpwmnakr.supabase.co";
// const anonKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobXp6bGl4bHV1b3pwd21uYWtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzODg2NTAsImV4cCI6MjAxOTk2NDY1MH0.Tz-BlCREV84xHw1TstJu1A3LBm_GXhOPjDgYXJ99XrM";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, anonKey);

///////////////////////////////
// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_ANON_KEY;

// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;
