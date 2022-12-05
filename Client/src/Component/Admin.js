import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Admin() {
  const [carouselheader, setCarouselheader] = useState("");
  const [carouselimage, setCarouselimage] = useState("");
  const URL = "http://localhost:3001";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Güncellendi");

    switch (e.target.className) {
      case "HeaderForm":
        updateHeader();
        CleanData();
        break;
      case "CarouselImageForm":
        addImage();
        CleanData();

        break;
    }
  };

  const CleanData = () => {
    document.getElementById("Carouselheaderid").value = "";
  };

  const updateHeader = () => {
    Axios.post(`${URL}/UpdateCarouselHeader`, {
      carouselheader: carouselheader,
    }).then(() => {});
  };

  const addImage = () => {
    Axios.post(`${URL}/addCarouselImage`, {
      carouselimage: carouselimage,
    }).then(() => {});
  };

  return (
    <div className="AdminPage">
      <div className="AdminPageContent">
        <form className="HeaderForm" onSubmit={handleSubmit}>
          <label for="Carouselheader">Yeni Başlık </label>
          <input
            type="Carouselheadertext"
            id="Carouselheaderid"
            name="Carouselheader"
            onChange={(e) => setCarouselheader(e.target.value)}
            placeholder=" Yeni Başlık"
            required
          ></input>
          <input
            className="SubmitButton"
            type="submit"
            value="Güncelle"
          ></input>
        </form>
        <form className="CarouselImageForm" onSubmit={handleSubmit}>
          <label for="Carouselheader">Büyük Resim Ekle</label>
          <input
            type="Carouselheadertext"
            id="Carouselheaderid"
            name="Carouselheader"
            onChange={(e) => setCarouselimage(e.target.value)}
            placeholder="Büyük Resim Ekle"
            required
          ></input>
          <input className="SubmitButton" type="submit" value="Ekle"></input>
        </form>
      </div>
    </div>
  );
}

export default Admin;
