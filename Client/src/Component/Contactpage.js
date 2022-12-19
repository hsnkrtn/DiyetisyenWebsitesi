import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
function Contactpage() {
  const [Informations, setInformations] = useState(null);
  const URL ="http://localhost:3001";

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
                <a  target="_blank" href={`https://wa.me/${Informations[0].informations_phone}`  }>
                  Whatsapp
                </a>
              </div>
              <div className="Informations-Item">
                <span>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </span>
                <a href = {`mailto: ${Informations[0].informations_email}`}>
                 { `${Informations[0].informations_email} ` } 
                </a>
              </div>

              <div className="Informations-Item">
                <span>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <a href=" https://www.google.com/maps/place/Malatya,+T%C3%BCrkiye/@38.3529028,38.2408523,13z/data=!3m1!4b1!4m5!3m4!1s0x407636e4923c4bad:0xa053ec48de5f481b!8m2!3d38.3553627!4d38.3335247" > {`${Informations[0].informations_adress}`} </a>
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
