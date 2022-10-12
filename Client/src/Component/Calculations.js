import React from "react";
import vki from "../Images/vki.jpg";
import calories from "../Images/kalori.jpg";
import bmh from "../Images/bmh.jpg";

import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Calculations() {
  return (
    <div className="Calculations">
      <div className="Calculations-inner">
        <div className="Calculations-cards">
          <ul>
            <Link to="/vucutkitleindexi">
              <il className="Calculations-card">
                <img src={vki}></img>
                <h1>Vücut Kitle İndexi Hesaplama</h1>
              </il>
            </Link>
            <Link to="/bazalmetabolizma">
              {" "}
              <il className="Calculations-card">
                <img src={bmh}></img> <Link to="/vucutkitleindexi"></Link>{" "}
                <h1>Bazal Metabolizma Hesaplama</h1>
              </il>
            </Link>
            <Link to="/Kalorihesaplama">
              {" "}
              <il className="Calculations-card">
                <img src={calories}></img>
                <h1>Kalori Hesaplama</h1>
              </il>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Calculations;
