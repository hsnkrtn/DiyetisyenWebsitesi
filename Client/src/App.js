import React from "react";
import "../src/app.css";
import NavigationBar from "../src/Component/NavigationBar";
import Home from "../src/Component/Home";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Component/About";
import Allarticles from "./Component/Allarticles";
import FoodsAndCalories from "./Component/FoodsAndCalories";
import Contactpage from "./Component/Contactpage";
import ArticleCardDetail from "./Component/ArticleCardDetail";
import Bazalmetabolizma from "./Component/Bazalmetabolizma";
import Kalorihesaplama from "./Component/Kalorihesaplama";
import Vucutkitleindex from "./Component/Vucutkitleindex";
import Error404 from "./Component/Error404";
import Admin from "./Component/Admin";
function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/Iletisim">
            <NavigationBar></NavigationBar>

            <Contactpage></Contactpage>
            <Footer></Footer>
          </Route>{" "}
          <Route path="/vucutkitleindexi">
            <NavigationBar></NavigationBar>

            <Vucutkitleindex></Vucutkitleindex>
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
          <Route path="/ArticleDetail/:id">
            <NavigationBar></NavigationBar>

            <ArticleCardDetail></ArticleCardDetail>
            <Footer></Footer>
          </Route>{" "}
          <Route path="/Admin">
            <Admin></Admin>
          </Route>{" "}
          <Route path="*">
            <Error404></Error404>
          </Route>{" "}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
