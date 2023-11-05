import { useState } from "react";
import { HeaderHeroContainer } from "./components/HeaderHeroContainer";
import { EventSectionContainer } from "./components/EventSectionContainer";
import { Footer } from "./components/FooterComponents/Footer";

function App() {
  return (
    <div className="container__app w-full mx-auto bg-black lg:w-12/12 xl:w-12/12  xl:bg-slate-600">
      <HeaderHeroContainer />
      <EventSectionContainer />
      <Footer />
    </div>
  );
}

export default App;
