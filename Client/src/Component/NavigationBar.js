import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../app.css";
function NavigationBar() {
  const [ShowMenu, setShowMenu] = useState(false);
  useEffect(() => {


  });


  
  

  return (
    <div className="NavigationBar">
      <div className="Header">
        <p>
          Telefon ile Randevu Alın :<a href="tel:123-456-7890">0123-456-7890</a>
        </p>
        <p>
          Sosyal medya : &nbsp;
          <span>
            <a href="www.instagram.com" target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
          </span>
        </p>
      </div>
      <div className="WebsiteOwnerName">
     <Link to="/">     <img src={require(`../Images/haticegursul.jpg`)} />
        <h1>
          {" "}
         Hatice Gürsul
        </h1>{" "} </Link>
      </div>
      <button
        className="MenuButton"
        onClick={() => {
          setShowMenu((prevShowmenu) => !prevShowmenu);
        }}
      >
        <span>
          {/* <i class="fa fa-angle-double-down" aria-hidden="true"></i> */}
          <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
      </button>
      <ul className={ShowMenu ? "ShowNavigationList" : "CurrentNavigationList"}>
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
              <i class="fa fa-book" aria-hidden="true"></i> &nbsp;
            </span>
            Makaleler
          </Link>
        </li>
        <li>
          <Link to="/Yediklerimizvekaloriler">
            <span>
              <i class="fa fa-heartbeat" aria-hidden="true"></i> &nbsp;
            </span>
            Yediklerimiz ve Kaloriler
          </Link>
        </li>
        <li>
          <Link to="Iletisim">
            <span>
              <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;
            </span>
            İletişim
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
