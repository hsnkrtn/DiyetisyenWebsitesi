import React, { useState } from "react";
import Axios from "axios";
import Uploaddiyet from "./Uploaddiyet";
import UpdateHeader from "./UpdateHeader";
import Uploadimage from "./Uploadimage";
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
          <Uploadimage></Uploadimage>
          <Uploaddiyet></Uploaddiyet>
        </div>
      )}
    </div>
  );
}

export default Admin;
