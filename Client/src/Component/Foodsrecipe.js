import React from "react";

function Foodsrecipe(props) {
  return (
    <div className="FoodrecipeCard">
      <div className="FoodrecipeCardImage">
        <img src={require(`../Images/${props.fotograf}.jpg`)}></img>
      </div>
      <div className="FoodrecipeCardDetail">
        <div className="RecipeName">
          <h1> {props.yemek_adi} </h1>
        </div>
        <div  className="RecipeCardInformations" >
          {" "}
          <div className="RecipeInfo1">
            <h2> 1 Porsiyon </h2>
            <h1> {props.porsiyon} </h1>
          </div>
          <div className="RecipeInfo2">
            <h2> {props.kisi_sayisi} Kişilik </h2>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Foodsrecipe;
