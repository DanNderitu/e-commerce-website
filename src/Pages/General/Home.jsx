//import CategoryCard from "../../Components/CategoryCard";
//import { Contacts } from "@mui/icons-material";
import CategoryCardList from "../../Components/CategoryCardList";
import SearchAppBar from "../../Components/SearchAppBar";
import SectionOne from "../../Components/Hero";
import Testimonials from "../../Components/Testimonials";
import ContactsPage from "../../Components/ContactsPage";

import AccordionPage from "../../Components/AccordionPage";

function Home() {
  return (
    <div className="bg-gray-200 max-w-screen-2xl m-auto">
      <SearchAppBar />

      <SectionOne />
      <p className="text-2xl font-semibold mb-3 mt-8 text-center">
        SHOP BY CATEGORIES
      </p>
      <CategoryCardList />
      <p className="text-2xl font-semibold mb-3 mt-20 text-center">
        What do our Customers say about us?
      </p>
      <Testimonials />
      <p className="text-2xl font-semibold mb-3 mt-20 text-center">FAQ ?</p>
      <AccordionPage />
      <ContactsPage />
    </div>
  );
}

export default Home;
