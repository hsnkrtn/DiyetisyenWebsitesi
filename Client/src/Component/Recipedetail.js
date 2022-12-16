import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Recipedetail() {
  const RecipeDetails = useLocation();
  const tarif = RecipeDetails.state.props.tarif;
 const fotograf = RecipeDetails.state.props.fotograf;
 const kisi_sayisi = RecipeDetails.state.props.kisi_sayisi;

 const porsiyon = RecipeDetails.state.props.porsiyon;

 const sure = RecipeDetails.state.props.sure;

 const yemek_adi = RecipeDetails.state.props.yemek_adi;

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(RecipeDetails);
  }, []);

  return (
    <div className="default-routepage">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <div  className="RecipeDetailsContent" >  
          <div className="FoodrecipeAllDetail">
            <div className="FoodrecipeCardImage">
              <img
                src={require(`../Images/${fotograf}.jpg`)}
              ></img>
            </div>
            <div className="FoodrecipeCardDetail">
              <div className="RecipeName">
                <h1> {yemek_adi} </h1>
              </div>
              <div className="RecipeInformations">
                {" "}
                <div className="RecipeInfo1">
                  <h2> 1 Porsiyon </h2>
                  <h1> {porsiyon} </h1>
                </div>
                <div className="RecipeInfo2">
                  <h2> {kisi_sayisi} Kişilik </h2>
                </div>
                <div className="RecipeInfo1">
                  <h2> Pişirme Süresi </h2>
                  <h1> {sure} </h1>
                </div>
              </div>{" "}
            </div>
          </div>{" "} 
            <div className="RecipePrepare">

            <div className="RecipePrepareContent" 
             dangerouslySetInnerHTML={{ __html: tarif }}> 
 
          </div>
          </div>
          </div>


      </div>
      </div>
    </div>
  );
}

export default Recipedetail;
