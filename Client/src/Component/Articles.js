import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import ArticleCard from "./ArticleCard";
function Articles() {
  const [Makaleler, setMakaleler] = useState([]);
  const URL = "http://localhost:3001";

  useEffect(() => {

    Axios.get(`${URL}/GetMakaleler`).then((reponse) =>
      setMakaleler(reponse.data.reverse().slice(0, 3))
    );
  }, []);
  return (
    <div className="Articles">
      <div className="Articles-header">
        <h1>Son Makaleler</h1>{" "}
      </div>
      <div className="Article-inner">
        <div className="Articles-cards">
          <ul className="ArticleCardList">
            {Makaleler.map((val, key) => {
              return (
                <li>
                  <Link
                    to={{
                      pathname: `/MakaleDetay/${val.article_id}`,
                      state: { val },
                    }}
                  >
                    <ArticleCard
                      key={val.article_id}
                      articleheader={val.article_header}
                      articledetail={val.article_detail}
                      articleimage={val.article_image}
                    ></ArticleCard>{" "}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>{" "}
        <h1 className="ShowAllArticles">
          <Link to="/Makaleler"> Bütün makaleleri gör...</Link>
        </h1>
      </div>
    </div>
  );
}

export default Articles;
