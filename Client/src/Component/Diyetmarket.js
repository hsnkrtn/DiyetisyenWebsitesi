import React from "react";
import { Link } from "react-router-dom";
import DiyetMarketCard from "./DiyetMarketCard";
import Axios from "axios";
import { useState, useEffect } from "react";

function Diyetmarket() {
  const [Diyetkart, setDiyetkart] = useState([]);
  const URL = "http://localhost:3001";

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get(`${URL}/GetDiyetKartlari`).then((reponse) =>
      setDiyetkart(reponse.data.reverse())
    );
  }, []);

  const RightClick = () => {
    document.getElementById("DytMrkt").scrollLeft += 350;
  };
  const LeftClick = () => {
    document.getElementById("DytMrkt").scrollLeft -= 350;
  };

  return (
    <div className="DiyetMarket">
      <div className="Diyetmarketleftbutton" onClick={LeftClick}>
        <span>
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </span>
      </div>
      <div className="DiyetMarketCards" id="DytMrkt">
        <div className="DiyetmarketAllCards">
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
      <div className="Diyetmarketrightbutton" onClick={RightClick}>
        <span>
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}

export default Diyetmarket;
