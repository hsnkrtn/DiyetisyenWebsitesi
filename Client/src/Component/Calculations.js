import React from "react";


import { Link } from "react-router-dom";
function Calculations() {
  return (
    <div className="Calculations">
        <div className="Calculations-cards">
          <ul className="Calculations-cards-list">
            <li>   
            <Link to="/OnlineDiyetForm">
              <div className="Calculations-card">
                <img src={process.env.PUBLIC_URL + "Images/form.jpg"}></img>
                <h1>Online Diyet Formu</h1>
              </div>
            </Link>
            </li>  
            <li>   
 
            <Link to="/vucutkitleindexi">
              <div className="Calculations-card">
              <img src={process.env.PUBLIC_URL + "Images/bmi.jpg"}></img>
                <h1>Vücut Kitle İndexi Hesaplama</h1>
              </div>
            </Link>          
              </li>   

            <li>  
            <Link to="/bazalmetabolizma">
              {" "}
              <div className="Calculations-card">
              <img src={process.env.PUBLIC_URL + "Images/bmh.jpg"}></img>
                <h1>Bazal Metabolizma Hesaplama</h1>
              </div>
            </Link>            
            </li>  
            <li>  

            <Link to="/Kalorihesaplama">
              {" "}
              <div className="Calculations-card">
              <img src={process.env.PUBLIC_URL + "Images/calories.jpg"}></img>
                <h1>Kalori Hesaplama</h1>
              </div>
            </Link> </li>   
          </ul>
      </div>
    </div>
  );
}

export default Calculations;
