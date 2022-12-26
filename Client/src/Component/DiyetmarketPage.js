import React from "react";
import DiyetMarketCard from "./DiyetMarketCard";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";

function Dİyetmarket() {
  const [Diyetkart, setDiyetkart] = useState([]);
  const URL = "http://localhost:3001";

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get(`${URL}/GetDiyetKartlari`).then((reponse) =>
      setDiyetkart(reponse.data.reverse())
    );
  }, []);

  return (
    <div className="default-routepage">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <div className="DiyetMarketPage">
            <div><h1 className="RoutepageHeader"> Diyetler</h1></div>
            <div className="DiyetMarketPageCards">
              <ul>
                {Diyetkart.map((val, key) => {
                  return (
                    <li>  
                      <DiyetMarketCard
                        DiyetMarketCartId={val.diyet_id}
                        DiyetMarketCartHeader={val.diyet_baslik}
                        DiyetMarketCartDetail={val.diyet_detayi}
                        DiyetMarketCartPrice={val.diyet_fiyati}
                        DiyetMarketCartImage={val.diyet_fotograf}
                        DiyetMarketCartAbstract={val.diyet_ozet}
                      ></DiyetMarketCard>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dİyetmarket;
