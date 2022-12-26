import React from "react";
import bmh from "../Images/bmh.jpg";
import calories from "../Images/calories.jpg";
import form from "../Images/form.jpg";
import bmi from "../Images/bmi.jpg"

import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Calculations() {
  return (
    <div className="Calculations">
        <div className="Calculations-cards">
          <ul className="Calculations-cards-list">
            <li>   
            <Link to="/OnlineDiyetForm">
              <div className="Calculations-card">
                <img src={form}></img>
                <h1>Online Diyet Formu</h1>
              </div>
            </Link>
            </li>  
            <li>   
 
            <Link to="/vucutkitleindexi">
              <div className="Calculations-card">
                <img src={bmi}></img>
                <h1>Vücut Kitle İndexi Hesaplama</h1>
              </div>
            </Link>          
              </li>   

            <li>  
            <Link to="/bazalmetabolizma">
              {" "}
              <div className="Calculations-card">
                <img src={bmh}></img>
                <h1>Bazal Metabolizma Hesaplama</h1>
              </div>
            </Link>            
            </li>  
            <li>  

            <Link to="/Kalorihesaplama">
              {" "}
              <div className="Calculations-card">
                <img src={calories}></img>
                <h1>Kalori Hesaplama</h1>
              </div>
            </Link> </li>   
          </ul>
      </div>
    </div>
  );
}

export default Calculations;
