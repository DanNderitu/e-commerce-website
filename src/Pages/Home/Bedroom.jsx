import SearchAppBar from "../../Components/SearchAppBar";
//import { supabase } from "../../supabaseClient";
function Bedroom() {
  return (
    <>
      <SearchAppBar />
      <h1 className="text-3xl font-bold underline">bed</h1>
      {/* <p>key: {import.meta.env.VITE_REACT_APP_SUPABASE_URL}</p>
      <p>key: {import.meta.env.VITE_REACT_APP_ANON_KEY}</p> */}
    </>
  );
}
//console.log(supabase);
export default Bedroom;
