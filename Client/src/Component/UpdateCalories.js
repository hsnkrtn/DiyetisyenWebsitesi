import React from "react";
import { useState } from "react";
import Axios from "axios";
import axios from "axios";

function UpdateCalories() {
  const [ad, setAd] = useState("");
  const [kalori, setKalori] = useState("");
  const [karbonhidrat, setKarbonhidrat] = useState("");
  const [lif, setLif] = useState("");
  const [kolesterol, setKolesterol] = useState("");
  const [protein, setProtein] = useState("");
  const [biradet, setBiradet] = useState("");
  const [fotograf, setFotograf] = useState("");
  const URL = "https://www.diyetisyenhaticegursul.com.tr";


  const caloriImageupload = () => {
    const caloriImageform = document.getElementById("CaloriImageUploadForm");
    if (caloriImageform) {
      caloriImageform.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(caloriImageform);
        Axios.post(`${URL}/CaloriImageUpload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((res) => {
          postData();
        });
      });
    }
  };
  async function postData() {
    try {
      await Axios.post(`${URL}/addnewfoodcalori`, {
        ad:ad,
        kalori: kalori,
        karbonhidrat: karbonhidrat,
        lif: lif,
        kolesterol: kolesterol,
        protein: protein,
        biradet: biradet,
        fotograf: fotograf,
      }).then((res) => {
        alert(res.data, "Besin değerleri eklendi");
        document.getElementById("caloridetailform").reset();
        document.getElementById("CaloriImageUploadForm").reset();
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
        Besin Kalorisi Ekleme
        <hr></hr>
      </div>
      <form className=" UpdateForm" id="caloridetailform"  >
        <label for="Carouselheader">Besin Adı</label>
        <input
          id="forminput1"
          type="inputtext"
          onChange={(e) => setAd(e.target.value)}
          placeholder="Besin Adı"
          required
        ></input>
        <label for="Carouselheader">100 Gramindaki Kalorisi</label>
        <input
          id="forminput1"
          type="inputtext"
          onChange={(e) => setKalori(e.target.value)}
          placeholder="100 Gramindaki Kalorisi"
          required
        ></input>
        <label for="Carouselheader">Karbonhidrat</label>

        <input
          id="forminput2"
          type="inputtext"
          onChange={(e) => setKarbonhidrat(e.target.value)}
          placeholder="Karbonhidrat"
          required
        ></input>

        <label for="Carouselheader">Protein</label>

        <input
          id="forminput4"
          type="inputtext"
          onChange={(e) => setProtein(e.target.value)}
          placeholder="Protein"
          required
        ></input>
        <label for="Carouselheader">Lif </label>

        <input
          id="forminput4"
          type="inputtext"
          onChange={(e) => setLif(e.target.value)}
          placeholder="Lif"
          required
        ></input>
        <label for="Carouselheader">Kolesterol </label>

        <input
          id="forminput4"
          type="inputtext"
          onChange={(e) => setKolesterol(e.target.value)}
          placeholder="Kolesterol "
          required
        ></input>
        <label for="Carouselheader">Bir Tanesinin Agırlığı</label>

        <input
          id="forminput4"
          type="inputtext"
          onChange={(e) => setBiradet(e.target.value)}
          placeholder="Bir Tanesinin Agırlığı "
          required
        ></input>
      </form>{" "}
      <form
        id="CaloriImageUploadForm"
        className="UpdateFileForm"
        action={`${URL}/RecipeImageUpload`}
        method="post"
        enctype="multipart/form-data"
        target="_self"
      >
        <br></br>
        <br></br> <label>Fotograf Ekle</label>
        <input
          type="file"
          name="file"
          onChange={(e) => {
            setFotograf(e.target.files[0].name);
          }}
        ></input>
        <button onClick={caloriImageupload}>Ekle</button>
      </form>
    </div>
  );
}

export default UpdateCalories;
