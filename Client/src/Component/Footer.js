import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

function Footer() {
  const [Informations, setInformations] = useState(null);

  const URL = "http://localhost:3001";
  useEffect(() => {
    getContactInformations();
  }, []);
  const getContactInformations = async () => {
    await Axios.get(`${URL}/GetIletisim`).then((response) => {
      setInformations(response.data);
    });
  };

  return (
    <div className="Footer">
      <div className="WebsiteOwnerNameFooter">
        <h1>
          {" "}
          <Link to="/"> Diyetisyen Hatice Gürsul</Link>
        </h1>
      </div>
      <ul className="footerlist">
        <li>
          <Link to="/"> Ana Sayfa </Link>
        </li>
        <li>
          <Link to="/Hakkimizda">Hakkımızda</Link>
        </li>
        <li>
          <Link to="/Makaleler">Makaleler</Link>
        </li>
        <li>
          {" "}
          <Link to="/Yediklerimizvekaloriler">Tarifler</Link>
        </li>
        <li>
          <Link to="/Diyetmarket">Diyet Market</Link>
        </li>
        <li>
          <Link to="/Iletisim">İletişim</Link>{" "}
        </li>
      </ul>
      {Informations && (
        <div className="Footerinfo">
          <p>
            {`${Informations[0].informations_email}`}&nbsp;|&nbsp;Designed by H.Kurtini{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default Footer;
