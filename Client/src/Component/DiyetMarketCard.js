import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Logininfo } from "../App";  
function DiyetMarketCard(props) {
  const { Islogin, setIslogin } = useContext(Logininfo);
  return (
    <div className="DiyetCard">
        { Islogin &&  <div className="DeleteItemButton">
        {" "}
        <button>
          <i class="fa fa-trash-o" aria-hidden="true"></i>
          Diyeti Sil
        </button>{" "}
      </div> }
      <div className="DiyetCardImage">
        <img src={require(`../Images/${props.DiyetMarketCartImage}`)}></img>
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
