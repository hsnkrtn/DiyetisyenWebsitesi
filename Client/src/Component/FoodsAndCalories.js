import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Foodsrecipe from "./Foodsrecipe";
function FoodsAndCalories() {
  const [Recipes, setRecipes] = useState([]);
  const URL = "https://www.diyetisyenhaticegursul.com.tr";

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get(`${URL}/GetRecipes`).then((reponse) =>
      setRecipes(reponse.data.reverse())
    );
  }, []);
  return (
    <div className="default-routepage">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <h1 className="FoodrecipesCardsHeader"> Tarifler </h1>
          <div className="FoodsrecipeCards">
            <ul>
              {Recipes.map((val, key) => {
                return (
                  <li>
                
                      <Foodsrecipe  
                        recipeId={val.recipe_id}
                        yemek_adi={val.recipe_yemek_adi}
                        porsiyon={val.recipe_porsiyon}
                        kisi_sayisi={val.recipe_kisisayisi}
                        fotograf={val.recipe_yemek_fotograf}
                        sure={val.recipe_sure}
                        tarif={val.recipe_tarif}
                      ></Foodsrecipe>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodsAndCalories;
