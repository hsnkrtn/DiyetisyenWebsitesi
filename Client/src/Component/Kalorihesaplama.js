import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { compose } from "redux";
import CaloriesCard from "./CaloriesCard";

function Kalorihesaplama() {
  const [besin, setBesin] = useState("");
  const [besindegerleri, setbesindegerleri] = useState([]);
  const URL = "https://www.diyetisyenhaticegursul.com.tr";

  const handlesearch = (e) => {
    e.preventDefault();
    postData();
  };

  async function postData() {
    try {
      await Axios.post(`${URL}/Getfoodcalori`, {
        besin: besin,
      }).then((res) => {
        setbesindegerleri(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="default-routepage">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <div className="CaloriesPage">
            <div className="CaloriesPageContent">
              <div className="CaloriesPageLabel">
                {" "}
                <label>
                  <h2> Besinler kaç kalori?</h2>
                  <p>
                    {" "}
                    Tükettiğin besinlerin makro ve mikro besin değerlerini
                    öğren.
                  </p>
                </label>{" "}
              </div>

              <div className="CaloriesInput">
                {" "}
                <input
                  type="text"
                  placeholder="Besin ara..."
                  onChange={(e) => setBesin(e.target.value)}
                  required
                ></input>
                <button onClick={handlesearch}>
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>{" "}
              </div>
              <br></br>
              <br></br>
              <br></br>
              {besindegerleri.map((val, key) => {
                return <CaloriesCard besindegerleri={val}></CaloriesCard>;
              })}

              <div className="BesinDegerleriDefaultImage">
                <img
                  src={process.env.PUBLIC_URL + "Images/diyetanilari.jpg"}
                ></img>{" "}
                <h1>
                  Bütün aklınıza takılan sorular için iletişime geçiniz...
                </h1>{" "}
                <div className="ContactUsButton">
                  <button className="ContactUs">İletişim Bilgileri</button>
                </div>{" "}
              </div>

              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kalorihesaplama;
