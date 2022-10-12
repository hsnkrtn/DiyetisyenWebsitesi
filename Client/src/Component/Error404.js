import React from "react";
import { Link} from "react-router-dom"


function Error404() {
  return (
        <div className="Error404">
          <img src={require("../Images/404error.jpg")} />{" "}
          <button className="Error404Button"> <Link to={"/"} >Ana Sayfaya Dön </Link> </button>
        </div>
  );
}

export default Error404;
