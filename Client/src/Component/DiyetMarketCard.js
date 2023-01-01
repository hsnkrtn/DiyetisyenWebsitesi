import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Logininfo } from "../App";
import Axios from "axios";

function DiyetMarketCard(props) {
  const { Islogin, setIslogin } = useContext(Logininfo);
  const URL = "https://www.diyetisyenhaticegursul.com.tr";

  const handleDelete = () => {
    Axios.delete(`${URL}/DeleteDiyet`, {
      data: { DiyetMarketCartId: props.DiyetMarketCartId },
    }).then((reponse) => {
      alert(reponse.data);
    });
  };

  return (
    <div className="DiyetCard">
      {Islogin && (
        <div className="DeleteItemButton">
          {" "}
          <button onClick={handleDelete}>
            {" "}
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            Diyeti Sil
          </button>{" "}
        </div>
      )}
      <div className="DiyetCardImage">
        <img src={process.env.PUBLIC_URL +`/Images/${props.DiyetMarketCartImage}`}></img>
      </div>

      <div className="DiyetCardDetail">
        <div className="DiyetCardDetailHeader">
          {" "}
          <h1>{props.DiyetMarketCartHeader}</h1>{" "}
        </div>
        <div className="DiyetCardDetailText">
          {" "}
          <p> {props.DiyetMarketCartAbstract}</p>{" "}
        </div>
        <div className="DiyetCardDetailPrice">
          {" "}
          <h1> {props.DiyetMarketCartPrice}</h1>{" "}
        </div>

        <div className="DiyetCardButton">
          <Link
            to={{
              pathname: `/DiyetDetayi/${props.DiyetMarketCartId}`,
              state: { props },
            }}
          >
            {" "}
            <button>İncele</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DiyetMarketCard;
