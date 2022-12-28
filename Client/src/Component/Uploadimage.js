import React from "react";
import { useState } from "react";
import Axios from "axios";

function UpdateImage() {
  const URL = "https://www.diyetisyenhaticegursul.com.tr";



  const uploadImages=()=>{
    const imageuploadform = document.getElementById("ImageUploadForm");
    if (imageuploadform) {
      imageuploadform.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(imageuploadform);
        Axios.post(`${URL}/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((res)=>{

            alert(res.data)
        })
      });
    }

  }

  return (
    <div className="UpdateComponent">
      {" "}
      <div>
        <br></br>
        <br></br>
        <br></br>
        Büyük resim ekleme
        <hr></hr>
      </div>
      {/*  Carousel Fotograflari icin form  */}
      <form
        id="ImageUploadForm"
        className="UpdateFileForm"
        action={`${URL}/upload`}
        method="post"
        enctype="multipart/form-data"
      >
        <label>Büyük Resim Ekle</label>
        <input type="file" name="file"></input>
        <button type="submit" onClick={uploadImages}  >Upload</button>
      </form>
    </div>
  );
}

export default UpdateImage;
