import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="WebsiteOwnerNameFooter">
        <h1>
          {" "}
          <Link to="/"> Diyetisyen Hatice Gürsul</Link>
        </h1>
      </div>
      <ul className="footerlist" >
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
          <Link to="/Yediklerimizvekaloriler">Yediklerimiz ve Kaloriler</Link>
        </li>
        <li>
          <Link to="/Iletisim">İletişim</Link>{" "}
        </li>
      </ul>
      <div className="Footerinfo">
        <p>hatiicehanim@gmail.com © 2022 |Designed by H.Kurtini </p>
      </div>
    </div>
  );
}

export default Footer;
