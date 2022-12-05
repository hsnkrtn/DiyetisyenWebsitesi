import React from "react";
import { useLocation } from "react-router-dom";

function Recipedetail() {
  const RecipeDetails = useLocation();
const Recipe = RecipeDetails.state.val.recipe_tarif;

  return (
    <div className="default-routepage">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <div  className="RecipeDetailsContent" >  
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

            <div className="RecipePrepareContent" 
             dangerouslySetInnerHTML={{ __html: Recipe }}> 
 
          </div>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}

export default Recipedetail;
