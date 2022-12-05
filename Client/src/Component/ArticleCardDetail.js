import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

function ArticleCardDetail() {
  const Content = useLocation();
  let image = Content.state.val.article_image;
  let detail = Content.state.val.article_detail;
  
let [ArticleDetail, setArticleDetail] = useState([]);
// let articledetail = [];
let ad = JSON.parse(detail);
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(typeof detail)
    // setArticleDetail(detail);
  });

  return (
    <div className="ArticleCardRouteDetail">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <h1 className="RoutepageHeader">
            {Content && Content.state.val.article_header}
          </h1>
          <div className="ArticleAllDetailImage">
            {" "}
            <img src={require(`../Images/${image}`)}></img>
          </div>
          <div className="RoutePageContent">
            <div className="RoutePageContentText" id="Rpc">
              {/* {ad[0]} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCardDetail;
