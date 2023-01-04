import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { useContext } from "react";
import { Logininfo } from "../App";
function Contactpage() {
  const [Informations, setInformations] = useState(null);
  const { URL } = useContext(Logininfo);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("MapFrame").src =
      "https://maps.google.com/maps?q=%20Karakavak%20mah.%20Abdurrahman,%20Gazi%20Sk.%20No:16/A,%2044001%20Ye%C5%9Filyurt/Malatya,%20T%C3%BCrkiye&t=&z=13&ie=UTF8&iwloc=&output=embed";
    getContactInformations();
  }, []);
  const getContactInformations = async () => {
    await Axios.get(`${URL}/GetIletisim`).then((response) => {
      setInformations(response.data);
    });
  };

  return (
    <div className="Contactpage">
      <div className="default-routepage-header"> </div>
      <div class="mapouter">
        <div class="gmap">
          {Informations && (
            <div className="ContactInfo">
              <div className="Informations-Item">
                <span>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </span>
                <a
                  href={`tel:${Informations[0].informations_phone}`}
                >{`${Informations[0].informations_phone}`}</a>
              </div>

              <div className="Informations-Item">
                <span>
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </span>
                <a
                  target="_blank"
                  href={`https://wa.me/${Informations[0].informations_phone}`}
                >
                  Whatsapp
                </a>
              </div>
              <div className="Informations-Item">
                <span>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </span>
                <a href={`mailto: ${Informations[0].informations_email}`}>
                  {`${Informations[0].informations_email} `}
                </a>
              </div>

              <div className="Informations-Item">
                <span>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                {/* <a target="_blank"  href="https://www.google.com/maps?q=+Bostanbaşı+mah.Fatih+cad.no:14/F+Malatya+Malatya+TR,+44900+Yeşilyurt,+Türkiye"> */}
                <a
                  target="_blank"
                  href={`${Informations[0].informations_map_adress}`}
                >
                  {" "}
                  {`${Informations[0].informations_adress}`}{" "}
                </a>
              </div>
            </div>
          )}

          <iframe id="MapFrame"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contactpage;
