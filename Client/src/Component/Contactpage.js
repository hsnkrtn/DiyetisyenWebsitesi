import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
function Contactpage() {
  const [Informations, setInformations] = useState(null);
  const URL ="https://www.diyetisyenhaticegursul.com.tr";

  useEffect(() => {
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
                {" "}
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
                <a href={`https://wa.me/${Informations[0].informations_phone}`}>
                  Whatsapp
                </a>
              </div>
              <div className="Informations-Item">
                <span>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </span>
                <a
                  href={`mailto: abc@example.com${Informations[0].informations_email} `}
                >
                  E-Posta
                </a>
              </div>

              <div className="Informations-Item">
                <span>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <a> {`${Informations[0].informations_adress}`} </a>
              </div>
            </div>
          )}
          <iframe src="https://maps.google.com/maps?q=%20Karakavak%20mah.%20Abdurrahman,%20Gazi%20Sk.%20No:16/A,%2044001%20Ye%C5%9Filyurt/Malatya,%20T%C3%BCrkiye&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contactpage;
