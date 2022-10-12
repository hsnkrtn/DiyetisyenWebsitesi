import React from "react";
import { useState } from "react";

function ArticleCard(props) {
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
        <h1>{props.articleheader}</h1>
        <p>{props.articledetail}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
