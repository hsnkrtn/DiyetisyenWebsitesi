import React from "react";
import "../src/app.css";
import NavigationBar from "../src/Component/NavigationBar";
import Home from "../src/Component/Home";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

export const Logininfo = createContext();

function App() {
  const [Islogin, setIslogin] = useState("");

  return (
    <Router>
      <div className="App">
        <Logininfo.Provider value={{ Islogin, setIslogin }}>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Hakkimizda">
              <NavigationBar></NavigationBar>
              <About></About>
              <Footer></Footer>
            </Route>{" "}
            <Route path="/Makaleler">
              <NavigationBar></NavigationBar>

              <Allarticles></Allarticles>
              <Footer></Footer>
            </Route>{" "}
            <Route path="/Yediklerimizvekaloriler">
              <NavigationBar></NavigationBar>

              <FoodsAndCalories></FoodsAndCalories>
              <Footer></Footer>
            </Route>{" "}
            <Route path="/Diyetmarket">
              <NavigationBar></NavigationBar>

              <DiyetmarketPage></DiyetmarketPage>
              <Footer></Footer>
            </Route>{" "}
            <Route path="/Iletisim">
              <NavigationBar></NavigationBar>
              <Contactpage></Contactpage>
              <Appointment></Appointment>

              <Footer></Footer>
            </Route>{" "}
            <Route path="/vucutkitleindexi">
              <NavigationBar></NavigationBar>

              <Vucutkitleindex></Vucutkitleindex>
              <Footer></Footer>
            </Route>{" "}
            <Route path="/OnlineDiyetForm">
              <NavigationBar></NavigationBar>
              <OnlineDiyetForm></OnlineDiyetForm>
              <Footer></Footer>
            </Route>{" "}
            <Route path="/bazalmetabolizma">
              <NavigationBar></NavigationBar>

              <Bazalmetabolizma></Bazalmetabolizma>
              <Footer></Footer>
            </Route>{" "}
            <Route path="/kalorihesaplama">
              <NavigationBar></NavigationBar>

              <Kalorihesaplama></Kalorihesaplama>
              <Footer></Footer>
            </Route>{" "}
            <Route path="/MakaleDetay/:id">
              <NavigationBar></NavigationBar>

              <ArticleCardDetail></ArticleCardDetail>
              <Footer></Footer>
            </Route>{" "}
            <Route path="/Tarif/:id">
              <NavigationBar></NavigationBar>

              <Recipedetail></Recipedetail>
              <Footer></Footer>
            </Route>{" "}
            <Route path="/DiyetDetayi/:id">
              <NavigationBar></NavigationBar>

              <DiyetMarketCardDetail></DiyetMarketCardDetail>
              <Footer></Footer>
            </Route>{" "}
            <Route path="/Admin">
              <Admin></Admin>
            </Route>{" "}
            <Route path="*">
              <Error404></Error404>
            </Route>{" "}
          </Switch>
        </Logininfo.Provider>
      </div>
    </Router>
  );
}

export default App;
