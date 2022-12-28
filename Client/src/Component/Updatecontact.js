import React from "react";
import Axios from "axios";
import { useState } from "react";

function Updatecontact() {
  const [adress, setAdress] = useState("");
  const [linkadress, setLinkdress] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const URL = "https://www.diyetisyenhaticegursul.com.tr";

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  async function postData() {
    try {
      await Axios.post(`${URL}/Updatecontact`, {
        adress: adress,
        phone: phone,
        whatsapp: whatsapp,
        linkadress:linkadress,
        email: email,
        instagram: instagram,
      }).then((res) => {
        alert(res.data);
        document.getElementById("UpdateContactForm").reset();
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="UpdateComponent">
      <div>
        <br></br>
        <br></br>
        <br></br>
        İletişim Bilgilerini Güncelleme
        <hr></hr> 
      </div>{" "}
      <form
        className=" UpdateForm"
        id="UpdateContactForm"
        onSubmit={handleSubmit}
      >
        <label for="Carouselheader">Adresi Güncelle</label>
        <input
          id="forminput1"
          type="inputtext"
          onChange={(e) => setAdress(e.target.value)}
          placeholder="Adresi Güncelle"
          required
        ></input>
      
        <label for="Carouselheader">Link Adresini Güncelle</label>
        <input
          id="forminput1"
          type="inputtext"
          onChange={(e) => setLinkdress(e.target.value)}
          placeholder="Link Adresini Güncelle"
          required
        ></input>
        <label for="Carouselheader">Telefonu Güncelle</label>

        <input
          id="forminput2"
          type="inputtext"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefonu Güncelle (+90)"
          required
        ></input>

        <label for="Carouselheader">Whatsappı Güncelle</label>

        <input
          id="forminput4"
          type="inputtext"
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="Whatsappı Güncelle"
          required
        ></input>
        <label for="Carouselheader">Instagram Adresini Güncelle</label>

        <input
          id="forminput4"
          type="inputtext"
          onChange={(e) => setInstagram(e.target.value)}
          placeholder="Instagram Adresini Güncelle"
          required
        ></input>
        <label for="Carouselheader">E-Posta Adresini Güncelle</label>

        <input
          id="forminput4"
          type="inputtext"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Posta Adresini Güncelle"
          required
        ></input>
        <button type="submit">Bilgileri Güncelle</button>
      </form>{" "}
    </div>
  );
}

export default Updatecontact;
