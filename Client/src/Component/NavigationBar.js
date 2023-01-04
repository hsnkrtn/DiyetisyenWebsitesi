import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../app.css";
import { useContext } from "react";
import { Logininfo } from "../App";
function NavigationBar() {
  const [Informations, setInformations] = useState(null);
  const { URL } = useContext(Logininfo);

  const [ShowMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getContactInformations();
  }, []);

  const getContactInformations = async () => {
    await Axios.get(`${URL}/GetIletisim`).then((response) => {
      setInformations(response.data);
    });
  };

  return (
    <div className="NavigationBar ">
      {Informations && (
        <div className="Header">
          <p>
            Telefon ile Randevu Alın :{" "}
            <a
              href={`tel:${Informations[0].informations_phone}`}
            >{`${Informations[0].informations_phone}`}</a>
          </p>
          <p>
            Sosyal medya : &nbsp;
            <span>
              <a
                href={`https://www.instagram.com/${Informations[0].informations_instagram}/`}
                target="_blank"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </span>
          </p>
        </div>
      )}
      <div className="WebsiteOwnerName">
        <div className="WebsiteOwnerNameContent">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            {" "}
            <img
              src={process.env.PUBLIC_URL + `Images/haticegursul.jpg`}
            />{" "}
            <h1> Hatice Gürsul</h1>{" "}
          </Link>
        </div>
        {/* ${Informations[0].informations_image} */}
      </div>
      <button
        className="MenuButton"
        onClick={() => {
          setShowMenu((prevShowmenu) => !prevShowmenu);
        }}
      >
        <span>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
      </button>
      <div
        className={ShowMenu ? "ShowNavigationList" : "CurrentNavigationList"}
      >
        <hr></hr>

        <ul>
          <li>
            <Link to="/">
              <span>
                <i class="fa fa-home" aria-hidden="true"></i> &nbsp;
              </span>
              Ana Sayfa
            </Link>
          </li>

          <li>
            <Link to="/Hakkimizda">
              <span>
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>&nbsp;
              </span>
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link to="/Makaleler">
              <span>
                <i class="fa fa-book" aria-hidden="true"></i>&nbsp;
              </span>
              Makaleler
            </Link>
          </li>
          <li>
            <Link to="/Yediklerimizvekaloriler">
              <span>
                <i class="fa fa-heartbeat" aria-hidden="true"></i>&nbsp;
              </span>
              Tarifler
            </Link>
          </li>
          <li>
            <Link to="/Diyetmarket">
              <span>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;
              </span>
              Diyet Market
            </Link>
          </li>
          <li>
            <Link to="/Iletisim">
              <span>
                <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;
              </span>
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;
