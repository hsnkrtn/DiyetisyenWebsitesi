import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import { useContext } from "react";
import { Logininfo } from "../App";

function ArticleCard(props) {
  const URL = "http://localhost:3001";
  const { Islogin, setIslogin } = useContext(Logininfo);
  const articleid = props.articleid;

  const handleDelete = () => {
    Axios.delete(`${URL}/DeleteMakale`, {

      data:{  articleid: articleid } 
    }).then((reponse) => {
      alert(reponse.data);
    });
  };

  return (
    <div className="Article-card">
      <div className="Article-card-image">
        <img src={require(`../Images/${props.articleimage}`)} />
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
      {Islogin && (
        <div className="DeleteItemButton">
          {" "}
          <button onClick={handleDelete}>
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            Makeleyi Sil
          </button>{" "}
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
