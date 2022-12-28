import React from "react";
import { useContext } from "react";
import { Logininfo } from "../App";
import { Link } from "react-router-dom";
import Axios from "axios";

function Foodsrecipe(props) {
  const { Islogin, setIslogin } = useContext(Logininfo);
  const URL = "https://www.diyetisyenhaticegursul.com.tr";

  const handleDelete = () => {
    Axios.delete(`${URL}/Deleterecipe`, {
      data: { recipeId: props.recipeId },
    }).then((reponse) => {
      alert(reponse.data);
    });
  };

  return (
    <div className="FoodrecipeCard">
      {Islogin && (
        <div className="DeleteItemButton">
          {" "}
          <button onClick={handleDelete}>
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            Tarifi Sil
          </button>{" "}
        </div>
      )}

      <div className="FoodrecipeCardImage">
        <img src={process.env.PUBLIC_URL +`/Images/${props.fotograf}`}></img>
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
