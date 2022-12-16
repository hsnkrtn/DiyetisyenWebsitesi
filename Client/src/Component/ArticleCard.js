import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { Logininfo } from "../App"; 

function ArticleCard(props) {
  const { Islogin, setIslogin } = useContext(Logininfo); 
  const [articleimage, setarticleimage] = useState("vv.jpg");
  useState(() => {
    checktypeofimage();
  });
  function checktypeofimage() {
    if (typeof props.articleimage !== "undefined") {
      setarticleimage(props.articleimage);
    }
  }
  return (
    <div className="Article-card">
      <div className="Article-card-image">
        <img src={require(`../Images/${articleimage}`)} />
      </div>
      <div className="Article-card-detail">
        <Link
          to={{
            pathname: `/MakaleDetay/${props.articleheader}`,
            state: { props },
          }}
        >
 
          <h1>{props.articleheader}</h1>
          <p>{props.articleabstract}</p>
        </Link>
      </div>
      { Islogin &&  <div className="DeleteItemButton">
        {" "}
        <button>
          <i class="fa fa-trash-o" aria-hidden="true"></i>
          Makeleyi Sil
        </button>{" "}
      </div> }
   
    </div>
  );
}

export default ArticleCard;
