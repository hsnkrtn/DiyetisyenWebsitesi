import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

function ArticleCardDetail() {
  const Content = useLocation();
  let header = Content.state.props.articleheader;
  let image = Content.state.props.articleimage;
  let detail = Content.state.props.articledetail;
  useEffect(() => {
    window.scrollTo(0, 0);
      });

  return (
    <div className="ArticleCardRouteDetail">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <h1 className="RoutepageHeader">{header}</h1>
          <div className="ArticleAllDetailImage">
            {" "}
            <img src={process.env.PUBLIC_URL +`/Images/${image}`}></img>
          </div>
          <div className="RoutePageContent">
            { Content &&   <div
              className="RoutePageContentText"
              id="ArticleContentText"
              dangerouslySetInnerHTML={{ __html: detail }}
            ></div> }
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCardDetail;
