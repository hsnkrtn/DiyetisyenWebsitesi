import React from "react";
import { useState } from "react";
import Axios from "axios";

function Updatediyet() {
  const [diyetbaslik, setDiyetbaslik] = useState("");
  const [diyetdetay, setDiyetdetay] = useState("");
  const [diyetfotograf, setDiyetfotograf] = useState("");
  const [diyetozet, setDiyetozet] = useState("");
  const [diyetfiyat, setDiyetfiyat] = useState("");

  const URL = "http://localhost:3001";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Güncellendi");
    addDiyet();
    CleanData();
  };

  const CleanData = () => {
    
    
    document.getElementById("forminput1").value = "";
    document.getElementById("forminput2").value = "";
    document.getElementById("forminput3").value = "";
    document.getElementById("forminput4").value = "";
    document.getElementById(`forminput5`).value = "";
  };

  const addDiyet = () => {
    Axios.post(`${URL}/addnewdiyet`, {
      diyetbaslik: diyetbaslik,
      diyetdetay: diyetdetay,
      diyetfotograf: diyetfotograf,
      diyetozet: diyetozet,
      diyetfiyat: diyetfiyat,
    }).then(() => {
      console.log("basarili");
    });
  };

  return (
    <div className="UpdateComponent" >
      <div>
        <br></br>
        <br></br>
        <br></br>
        Diyet Ekleme
        <hr></hr>
      </div>
      <form className=" UpdateForm" onSubmit={handleSubmit}>
        <label for="Carouselheader">Diyet Baslığı ekle</label>
        <input
          id="forminput1"
          type="inputtext"
          onChange={(e) => setDiyetbaslik(e.target.value)}
          placeholder="Diyet adi"
          required
        ></input>
        <label for="Carouselheader">Diyet Detayı Ekle</label>

        <input
          id="forminput2"
          type="inputtext"
          onChange={(e) => setDiyetdetay(e.target.value)}
          placeholder="Diyet Detayi"
          required
        ></input>
        <label for="Carouselheader">Diyet Fotografi Ekle</label>

        <input
          id="forminput3"
          type="inputtext"
          onChange={(e) => setDiyetfotograf(e.target.value)}
          placeholder="Diyet Fotografi"
          required
        ></input>
        <label for="Carouselheader">Diyet Özeti Ekle</label>

        <input
          id="forminput4"
          type="inputtext"
          onChange={(e) => setDiyetozet(e.target.value)}
          placeholder="Diyet Özeti"
          required
        ></input>
        <label for="Carouselheader">Diyet Fiyatı Ekle</label>

        <input
          id="forminput5"
          type="inputtext"
          onChange={(e) => setDiyetfiyat(e.target.value)}
          placeholder="Diyet Fiyati"
          required
        ></input>
        <input className="SubmitButton" type="submit" value="Ekle"></input>
      </form>
    </div>
  );
}

export default Updatediyet;
