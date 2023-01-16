import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useContext } from "react";
import { Logininfo } from "../App";
function Uploadrecipe() {
  const [yemekadi, setYemekadi] = useState("");
  const [porsiyon, setPorsiyon] = useState("");
  const [tariffotograf, setTariffotograf] = useState("");
  const [kisisayisi, setKisisayisi] = useState("");
  const [tarif, setTarif] = useState("");
  const [sure, setSure] = useState("");
  const { URL } = useContext(Logininfo);
  const [isDisabled, setIsDisabled] = useState(false);

  const recipeimageupload = () => {
    const recipeimageform = document.getElementById("RecipeImageUploadForm");

    if (recipeimageform) {
      recipeimageform.addEventListener("submit", (e) => {
        e.preventDefault();
        setIsDisabled(true);

        const formData = new FormData();
        const fileInput = document.getElementById("recipefileinput");
        const file = fileInput.files[0];
        formData.append("file", file);
        Axios.post(`${URL}/RecipeImageUpload`, formData, {
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
      await Axios.post(`${URL}/addnewrecipe`, {
        yemekadi: yemekadi,
        porsiyon: porsiyon,
        tariffotograf: tariffotograf,
        kisisayisi: kisisayisi,
        tarif: tarif,
        sure: sure,
      }).then((res) => {
        alert(res.data, "Tarif eklendi");
        document.getElementById("RecipeImageUploadform").reset();
        document.getElementById("Recipedetailform").reset();
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
        Tarif Ekleme
        <hr></hr>
      </div>
      <form className=" UpdateForm" id="Recipedetailform">
        <label for="Carouselheader">Yemek adı ekle</label>
        <input
          id="forminput1"
          type="inputtext"
          onChange={(e) => setYemekadi(e.target.value)}
          placeholder="Yemek adı ekle"
          required
        ></input>
        <label for="Carouselheader">Yemek tarifi ekle</label>

        <input
          id="forminput2"
          type="inputtext"
          onChange={(e) => setTarif(e.target.value)}
          placeholder="Yemek tarifi ekle"
          required
        ></input>

        <label for="Carouselheader">Porsiyon Değerlerini Ekle</label>

        <input
          id="forminput4"
          type="inputtext"
          onChange={(e) => setPorsiyon(e.target.value)}
          placeholder="Porsiyon Değerlerini Ekle"
          required
        ></input>
        <label for="Carouselheader">Kaç kişilik </label>

        <input
          id="forminput4"
          type="inputtext"
          onChange={(e) => setKisisayisi(e.target.value)}
          placeholder="Kaç kişilik"
          required
        ></input>
        <label for="Carouselheader">Süreyi Ekle </label>

        <input
          id="forminput4"
          type="inputtext"
          onChange={(e) => setSure(e.target.value)}
          placeholder="Süreyi Ekle "
          required
        ></input>
      </form>{" "}
      <form
        id="RecipeImageUploadForm"
        className="UpdateFileForm"
        action={`${URL}/RecipeImageUpload`}
        method="post"
        enctype="multipart/form-data"
        target="_self"
      >
        <br></br>
        <br></br> <label>Diyet Fotografi Ekle</label>
        <input
          id="recipefileinput"
          type="file"
          name="file"
          onChange={(e) => {
            setTariffotograf(e.target.files[0].name);
          }}
        ></input>
        <button onClick={recipeimageupload} disabled={isDisabled}>
          Tarifi Ekle
        </button>
      </form>
    </div>
  );
}

export default Uploadrecipe;
