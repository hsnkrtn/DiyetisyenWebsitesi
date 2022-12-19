import React from "react";
import { useContext } from "react";
import { Logininfo } from "../App";
import { Link } from "react-router-dom";

function Foodsrecipe(props) {
  const { Islogin, setIslogin } = useContext(Logininfo);

  return (
    <div className="FoodrecipeCard">
      {Islogin && (
        <div className="DeleteItemButton">
          {" "}
          <button>
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            Makeleyi Sil
          </button>{" "}
        </div>
      )}

      <div className="FoodrecipeCardImage">
        <img src={require(`../Images/${props.fotograf}`)}></img>
      </div>
      <div className="FoodrecipeCardDetail">
        <Link
          to={{
            pathname: `/Tarif/${props.yemek_adi}`,
            state: { props },
          }}
        >
          <div className="RecipeName">
            <h1> {props.yemek_adi} </h1>
          </div>
          <div className="RecipeCardInformations">
            {" "}
            <div className="RecipeInfo1">
              <h2> 1 Porsiyon </h2>
              <h1> {props.porsiyon} </h1>
            </div>
            <div className="RecipeInfo2">
              <h2> {props.kisi_sayisi} Kişilik </h2>
            </div>{" "}
            <div className="RecipeInfo1">
              <h2> Pişirme Süresi </h2>
              <h1>{props.sure}</h1>
            </div>{" "}
          </div>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Foodsrecipe;
