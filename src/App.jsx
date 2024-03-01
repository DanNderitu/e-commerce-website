import { Route, Routes } from "react-router-dom";

import Home from "./Pages/General/Home";
import Bathroom from "./Pages/Home/Bathroom";
import Bedroom from "./Pages/Home/Bedroom";
import Homeoffice from "./Pages/Home/Homeoffice";
import Kitchen from "./Pages/Home/Kitchen";
import Lighting from "./Pages/General/Lighting";
import Livingroom from "./Pages/Home/Livingroom";
import Outdoor from "./Pages/Home/Outdoor";
import Breakroom from "./Pages/Office/Breakroom";
import Desk from "./Pages/Office/Desk";
import Meetingroom from "./Pages/Office/Meetingroom";
import LoginPage from "./Components/LoginPage";
import SignUp from "./Components/SignUp";

//import ShoppingCartItem from "./Components/LikedProductList";
import ProductFullDetails from "./Components/ProductFullDetails";

function App() {
  return (
    /////////////////////////////
    <>
      <div className="bg-stone-100">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bathroom" element={<Bathroom />}></Route>
          <Route path="/bedroom" element={<Bedroom />}></Route>
          <Route path="/office" element={<Homeoffice />}></Route>
          <Route path="/kitchen" element={<Kitchen />}></Route>
          <Route path="/lighting" element={<Lighting />}></Route>
          <Route path="/livingroom" element={<Livingroom />}></Route>
          <Route path="/outdoor" element={<Outdoor />}></Route>
          <Route path="/breakroom" element={<Breakroom />}></Route>
          <Route path="/desk" element={<Desk />}></Route>
          <Route path="/meetingroom" element={<Meetingroom />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          {/* <Route path="/cart" element={<ShoppingCartItem />}></Route> */}
          <Route path="/products/:id" element={<ProductFullDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
