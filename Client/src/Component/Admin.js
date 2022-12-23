import React, { useState } from "react";
import Axios from "axios";
import Uploaddiyet from "./Uploaddiyet";
import UpdateHeader from "./UpdateHeader";
import Uploadimage from "./Uploadimage";
import Login from "./Login";
import { useContext } from "react";
import { Logininfo } from "../App";
import Uploadarticle from "./Uploadarticle";
import Uploadrecipe from "./Uploadrecipe";
import Updatecontact from "./Updatecontact";
import Appoinmenthistory from "./Appoinmenthistory";
import { Link } from "react-router-dom";

function Admin() {
  const { Islogin, setIslogin } = useContext(Logininfo);

  return (
    <div className="AdminPage">
      {!Islogin && <Login></Login>}

      {Islogin && (
        <div className="AdminPageContent">
          <div className="AdminPageButtons">
            {" "}
            <Link
              to={{
                pathname: "/Randevu",
              }}
            >
              {" "}
              <button> Randevular </button>{" "}
            </Link>{" "}
            <Link
              to={{
                pathname: "/OnlineDiyetFormlari",
              }}
            >
              {" "}
              <button>Online Diyet Formları </button>{" "}
            </Link>
            <button className="LogoutButton"
              onClick={() => {
                setIslogin(false);
              }}
            >
              Çıkış Yap
            </button>
          </div>
          <UpdateHeader></UpdateHeader>
          <Uploadimage></Uploadimage>
          <Uploaddiyet></Uploaddiyet>
          <Uploadarticle></Uploadarticle>
          <Uploadrecipe></Uploadrecipe>
          <Updatecontact></Updatecontact>
          <br></br>
          <br></br>
          <div></div>
          <br></br>
          <br></br> <br></br>
          <br></br>
        </div>
      )}
    </div>
  );
}

export default Admin;
