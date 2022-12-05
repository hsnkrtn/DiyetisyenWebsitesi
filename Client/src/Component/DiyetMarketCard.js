import React from "react";
import { Link } from "react-router-dom";

function DiyetMarketCard(props) {
  console.log(props.DiyetMarketCartId);
  return (
    <div className="DiyetCard">
      <div className="DiyetCardImage">
        <img src={require(`../Images/${props.DiyetMarketCartImage}.jpg`)}></img>
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
              state : {props}
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
