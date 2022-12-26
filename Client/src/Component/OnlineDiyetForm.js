import React, { useState } from "react";
import Axios from "axios";

function OnlineDiyetForm() {
  const [name, setName] = useState("");
  const [emailadress, setEmailadress] = useState("");
  const [telefon, setTelefon] = useState("");
  const [dogumtarihi, setDogumtarihi] = useState("");
  const [boy, setBoy] = useState("");
  const [kilo, setKilo] = useState("");
  const [belcevresi, setBelcevresi] = useState("");
  const [kalcacevresi, setKalcacevresi] = useState("");
  const [anaogunsayiyi, setAnaogunsayisi] = useState("");
  const [araogunsayiyi, setAraogunsayisi] = useState("");
  const [meslek, setMeslek] = useState("");
  const [mesaj, setMesaj] = useState("");
  const URL = "http://localhost:3001";



  const FormData = () => {
    Axios.post(`${URL}/PostOnlineDiyet`, {
      name: name,
      emailadress: emailadress,
      telefon: telefon,
      dogumtarihi: dogumtarihi,
      boy: boy,
      kilo: kilo,
      belcevresi: belcevresi,
      kalcacevresi: kalcacevresi,
      anaogunsayiyi: anaogunsayiyi,
      araogunsayiyi: araogunsayiyi,
      meslek: meslek,
      mesaj: mesaj,
    }).then((res) => {
      alert(res.data);

    });
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    FormData();
    cleanformdata();
  };
const cleanformdata = ()=>{

      document.getElementById("onlinedyt").reset();

}
  return (
    <div className="OnlineDiyet">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <h1 className="RoutepageHeader">Online Diyet</h1>
          <div className="OnlineDiyetForm">
            {" "}
            <form id="onlinedyt" onSubmit={handleSubmit}   >
              <label for="fname">Adınız Soyadınız*</label>
              <input
                type="text"
                id="fname"
                name="fname"
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Adınız Soyadınız"
              ></input>
              <br></br>
              <br></br>
              <label for="femail"></label>E-Posta Adresiniz*<br></br>
              <input
                type="email"
                id="femail"
                name="femail"
                onChange={(e) => setEmailadress(e.target.value)}
                required
                placeholder="E-Posta adresiniz"
              ></input>{" "}
              <br></br>
              <br></br>
              <label for="Fphone"></label>Telefon Numaranız*<br></br>
              <input
                type="number"
                id="Fphone"
                name="femail"
                onChange={(e) => setTelefon(e.target.value)}
                required
                placeholder="Telefon Numaranız"
              ></input>{" "}
              <br></br>
              <br></br>
              <label for="fboy">Doğum Tarihiniz</label>
              <input
                type="text"
                id="fname"
                name="fname"
                onChange={(e) => setDogumtarihi(e.target.value)}
                placeholder="Gün / Ay / Yıl"
              ></input>{" "}
              <br></br>
              <br></br>
              <label for="fboy">Boyunuz</label>
              <input
                type="number"
                id="fname"
                name="fname"
                onChange={(e) => setBoy(e.target.value)}
                placeholder="Boyunuz"
              ></input>{" "}
              <br></br>
              <br></br>
              <label for="fkilo">Kilonuz{" (cm)"}</label>
              <input
                type="number"
                id="fname"
                name="fname"
                onChange={(e) => setKilo(e.target.value)}
                placeholder="Kilonuz"
              ></input>{" "}
              <br></br>
              <br></br>
              <label for="fkilo">Bel Çevreniz{" (cm)"}</label>
              <input
                type="number"
                id="fname"
                name="fname"
                onChange={(e) => setBelcevresi(e.target.value)}
                placeholder="Bel Çevreniz"
              ></input>{" "}
              <br></br>
              <br></br>
              <label for="fkilo">Kalça Çevreniz{" (cm)"}</label>
              <input
                type="number"
                id="fname"
                name="fname"
                onChange={(e) => setKalcacevresi(e.target.value)}
                placeholder="Kalça Çevreniz"
              ></input>{" "}
              <br></br>
              <br></br>
              <label for="fkilo">Ana Ögün Sayınız</label>
              <input
                type="number"
                id="fname"
                name="fname"
                onChange={(e) => setAnaogunsayisi(e.target.value)}
                placeholder="Ana Ögün Sayınız"
              ></input>{" "}
              <br></br>
              <br></br>
              <label for="fkilo">Ara Ögün Sayınız</label>
              <input
                type="number"
                id="fname"
                name="fname"
                onChange={(e) => setAraogunsayisi(e.target.value)}
                placeholder="Ara Ögün Sayınız"
              ></input>{" "}
              <br></br>
              <br></br>
              <label for="fkilo">Mesleğiniz</label>
              <input
                type="text"
                id="fname"
                name="fname"
                onChange={(e) => setMeslek(e.target.value)}
                placeholder="Mesleğiniz"
              ></input>{" "}
              <br></br>
              <br></br>
              <label for="Fmessage">Mesajınız</label>
              <textarea
                type="text"
                id="Fmessage"
                name="Fmessage"
                onChange={(e) => setMesaj(e.target.value)}
                placeholder={"Lütfen mesajınızı yazın..."}
              ></textarea>{" "}
              <br></br>
              <br></br>
              <input
                className="SubmitFormButton"
                type="submit"
                value="Gönder"
              ></input>{" "}
              <br></br>
              <br></br>
            </form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineDiyetForm;
