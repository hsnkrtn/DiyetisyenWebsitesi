import React, { useEffect } from "react";

import Carousel from "./Carousel";
import Articles from "./Articles";
import Diyetmarket from "./Diyetmarket";
import Calculations from "./Calculations";
import Appointment from "./Appointment";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Carousel></Carousel>
      <Diyetmarket></Diyetmarket>
      <Articles></Articles>
      <Calculations></Calculations>
      <Appointment></Appointment>
      <Footer></Footer>
    </div>
  );
}

export default Home;
