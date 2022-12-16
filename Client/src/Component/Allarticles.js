import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import ArticleCard from "./ArticleCard";

function Allarticles() {
  const [Makaleler, setMakaleler] = useState([]);
  const URL = "http://localhost:3001";
  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get(`${URL}/GetMakaleler`).then((reponse) =>
      setMakaleler(reponse.data.reverse())
    );
  }, []);
  return (
    <div className="Allarticles">
      <div className="default-routepage-header "> </div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <h1 className="RoutepageHeader"> Makaleler</h1>
          <ul className="ArticleCardList">
            {Makaleler.map((val, key) => {
              return (
                <li>
            
                    <ArticleCard
                      key={val.article_id}
                      articleheader={val.article_header}
                      articledetail={val.article_detail}
                      articleimage={val.article_image}
                      articleabstract={val.article_abstract}
                    ></ArticleCard>{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Allarticles;
