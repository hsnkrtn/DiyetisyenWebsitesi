import React from "react";
import { useState } from "react";
import Axios from "axios";

function Uploadarticle() {
  const [articlebaslik, setarticlebaslik] = useState("");
  const [articledetay, setarticledetay] = useState("");
  const [articlefotograf, setarticlefotograf] = useState("");
  const [articleozet, setarticleozet] = useState("");

  const URL = "https://www.diyetisyenhaticegursul.com.tr";


  const articleimageupload = () => {
    const articleimageform = document.getElementById("ArticleImageUploadForm");
    if (articleimageform) {
      articleimageform.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData();
        const fileInput = document.getElementById("artıclefileinput");
        const file = fileInput.files[0]; 
        formData.append("file", file);
        Axios.post(`${URL}/ArticleImageUpload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then(() => {
          postData();
        });
      });
    }
  };


  async function postData() {
    try {
      await Axios.post(`${URL}/addnewarticle`, {
        articlebaslik: articlebaslik,
        articledetay: articledetay,
        articlefotograf: articlefotograf,
        articleozet: articleozet,
      }).then((res) => {
        alert("Makale eklendi");
        document.getElementById("ArticleImageUploadForm").reset();
        document.getElementById("Articledetailform").reset();
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
        Makale Ekleme
        <hr></hr>
      </div>
      <form className=" UpdateForm" id="Articledetailform">
        <label for="Carouselheader">Makale Baslığı ekle</label>
        <input
          id="forminput1"
          type="inputtext"
          onChange={(e) => setarticlebaslik(e.target.value)}
          placeholder="Makale Baslığı ekle"
          required
        ></input>
        <label for="Carouselheader">
          Makale Detayı ekle
          {`( https://onlinehtmleditor.dev/ , https://onlineutf8tools.com/convert-html-entities-to-utf8 )`}
        </label>

        <input
          id="forminput2"
          type="inputtext"
          onChange={(e) => setarticledetay(e.target.value)}
          placeholder="Makale Detayı ekle "
          required
        ></input>

        <label for="Carouselheader">Makale Özeti Ekle</label>

        <input
          id="forminput4"
          type="inputtext"
          onChange={(e) => setarticleozet(e.target.value)}
          placeholder="Makale Özeti Ekle"
          required
        ></input>
      </form>{" "}
      <form
        id="ArticleImageUploadForm"
        className="UpdateFileForm"
        action={`${URL}/ArticleImageUpload`}
        method="post"
        enctype="multipart/form-data"
        target="_self"
      >
        <br></br>
        <br></br> <label>Diyet Fotografi Ekle</label>
        <input
          id="artıclefileinput"
          type="file"
          name="file"
          onChange={(e) => {
            setarticlefotograf(e.target.files[0].name);
          }}
        ></input>
        <button onClick={articleimageupload}>Makaleyi Ekle</button>
      </form>
    </div>
  );
}

export default Uploadarticle;
