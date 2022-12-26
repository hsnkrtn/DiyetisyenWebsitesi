import React, { useState } from "react";
import Axios from "axios";

function UpdateHeader() {
  const [carouselheader, setCarouselheader] = useState("");
  const URL = "http://localhost:3001";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Güncellendi");
    updateHeader();
    CleanData();
  };

  const updateHeader = () => {
    Axios.post(`${URL}/UpdateCarouselHeader`, {
      carouselheader: carouselheader,
    }).then(() => {});
  };

  const CleanData = () => {
    document.getElementById("Carouselheaderid").reset();
  };

  return (
    <div className="UpdateComponent" >
      <div>
        <br></br>
        <br></br>
        <br></br>
        Büyük Başlık ekleme
        <hr></hr>
      </div>
      {/*  Carousel basligi icin */}
      <form  className=" UpdateForm" id="Carouselheaderid" onSubmit={handleSubmit}>
        <label for="Carouselheader">Yeni Başlık </label>
        <input
          type="inputtext"
          name="Carouselheader"
          onChange={(e) => setCarouselheader(e.target.value)}
          placeholder=" Yeni Başlık"
          required
        ></input>
        <input className="SubmitButton" type="submit" value="Güncelle"></input>
      </form>
    </div>
  );
}

export default UpdateHeader;
