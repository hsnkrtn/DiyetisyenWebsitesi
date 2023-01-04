import React from "react";
import "../src/app.css";
import NavigationBar from "../src/Component/NavigationBar";
import Home from "../src/Component/Home";
import Footer from "./Component/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import { useState, createContext } from "react";
import About from "./Component/About";
import Allarticles from "./Component/Allarticles";
import FoodsAndCalories from "./Component/FoodsAndCalories";
import Contactpage from "./Component/Contactpage";
import ArticleCardDetail from "./Component/ArticleCardDetail";
import Bazalmetabolizma from "./Component/Bazalmetabolizma";
import Kalorihesaplama from "./Component/Kalorihesaplama";
import OnlineDiyetForm from "./Component/OnlineDiyetForm";
import Vucutkitleindex from "./Component/Vucutkitleindex";
import Error404 from "./Component/Error404";
import Admin from "./Component/Admin";
import Appointment from "./Component/Appointment";
import DiyetmarketPage from "./Component/DiyetmarketPage";
import Recipedetail from "./Component/Recipedetail";
import DiyetMarketCardDetail from "./Component/DiyetMarketCardDetail";
import Appoinmenthistory from "./Component/Appoinmenthistory";
import Appoinmentdetail from "./Component/Appoinmentdetail";
import OnlinediyetFormHistory from "./Component/OnlinediyetFormHistory";
import OnlineDiyetFormCardDetail from "./Component/OnlineDiyetFormCardDetail";

export const Logininfo = createContext();

function App() {
  const [Islogin, setIslogin] = useState("");
  const [URL, setURL] = useState("https://www.diyetisyenhaticegursul.com.tr");

  return (
    <Router>
      <div className="App">
        <Logininfo.Provider value={{Islogin, setIslogin, URL } }>
          <NavigationBar></NavigationBar>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Hakkimizda">
              <About></About>
            </Route>{" "}
            <Route path="/Makaleler">
              <Allarticles></Allarticles>
            </Route>{" "}
            <Route path="/Yediklerimizvekaloriler">
              <FoodsAndCalories></FoodsAndCalories>
            </Route>{" "}
            <Route path="/Diyetmarket">
              <DiyetmarketPage></DiyetmarketPage>
            </Route>{" "}
            <Route path="/Iletisim">
              <Contactpage></Contactpage>
              <Appointment></Appointment>
            </Route>{" "}
            <Route path="/vucutkitleindexi">
              <Vucutkitleindex></Vucutkitleindex>
            </Route>{" "}
            <Route path="/OnlineDiyetForm">
              <OnlineDiyetForm></OnlineDiyetForm>
            </Route>{" "}
            <Route path="/bazalmetabolizma">
              <Bazalmetabolizma></Bazalmetabolizma>
            </Route>{" "}
            <Route path="/kalorihesaplama">
              <Kalorihesaplama></Kalorihesaplama>
            </Route>{" "}
            <Route path="/OnlineDiyetFormlari">
              <OnlinediyetFormHistory></OnlinediyetFormHistory>
            </Route>{" "}
            <Route path="/FormDetayi/:id">
              <OnlineDiyetFormCardDetail></OnlineDiyetFormCardDetail>
            </Route>{" "}
            <Route path="/Randevu">
              <Appoinmenthistory></Appoinmenthistory>
            </Route>{" "}
            <Route path="/RandevuDetayi/:id">
              <Appoinmentdetail></Appoinmentdetail>
            </Route>{" "}
            <Route path="/MakaleDetay/:id">
              <ArticleCardDetail></ArticleCardDetail>
            </Route>{" "}
            <Route path="/Tarif/:id">
              <Recipedetail></Recipedetail>
            </Route>{" "}
            <Route path="/DiyetDetayi/:id">
              <DiyetMarketCardDetail></DiyetMarketCardDetail>
            </Route>{" "}
            <Route path="/Admin">
              <Admin></Admin>
            </Route>{" "}
            <Route path="*">
              <Error404></Error404>
            </Route>{" "}
          </Switch>
          <Footer></Footer>
        </Logininfo.Provider>
      </div>
    </Router>
  );
}

export default App;
