import React from "react";
import { useLocation } from "react-router-dom";

function Recipedetail() {
  const RecipeDetails = useLocation();

  return (
    <div className="default-routepage">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <div className="FoodrecipeAllDetail">
            <div className="FoodrecipeCardImage">
              <img
                src={require(`../Images/${RecipeDetails.state.val.recipe_yemek_fotograf}.jpg`)}
              ></img>
            </div>
            <div className="FoodrecipeCardDetail">
              <div className="RecipeName">
                <h1> {RecipeDetails.state.val.recipe_yemek_adi} </h1>
              </div>
              <div className="RecipeInformations">
                {" "}
                <div className="RecipeInfo1">
                  <h2> 1 Porsiyon </h2>
                  <h1> {RecipeDetails.state.val.recipe_porsiyon} </h1>
                </div>
                <div className="RecipeInfo2">
                  <h2> {RecipeDetails.state.val.recipe_kisisayisi} Kişilik </h2>
                </div>
                <div className="RecipeInfo1">
                  <h2> Pişirme Süresi </h2>
                  <h1> {RecipeDetails.state.val.recipe_sure} </h1>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="RecipePrepare">
            <div className="RecipeIngredients">
              <h1> Malzemeler</h1>
              <p>{`${RecipeDetails.state.val.recipe_malzemeler}`}</p>
            </div>
            <div className="Recipe">
              <h1> Tarif</h1>
              <p>{`${RecipeDetails.state.val.recipe_tarif}`}</p>
            </div>
            <div className="Recipe">
              <h1> Besin Değerleri</h1>
              <p>{`${RecipeDetails.state.val.recipe_besin_degerleri}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipedetail;
