import React, { useState } from "react";
import Axios from "axios";
import Updatediyet from "./Updatediyet";
import UpdateHeader from "./UpdateHeader";
import UpdateImage from "./UpdateImage";
import Login from "./Login";
import { useContext } from "react";
import { Logininfo } from "../App";

function Admin() {
  const { Islogin, setIslogin } = useContext(Logininfo);

  return (
    <div className="AdminPage">
      {!Islogin && <Login></Login>}

      {Islogin && (
        <div className="AdminPageContent">
          <h1> {Islogin}</h1>

          <button
            onClick={() => {
              setIslogin(false);
            }}
          >
            Çıkış Yap
          </button> 
          <UpdateHeader></UpdateHeader>
          <UpdateImage></UpdateImage>
          <Updatediyet></Updatediyet>
        </div>
      )}
    </div>
  );
}

export default Admin;
