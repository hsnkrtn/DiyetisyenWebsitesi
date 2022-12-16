import React from "react";
import { useState } from "react";
import Axios from "axios";

function UpdateImage() {

  const URL = "http://localhost:3001";
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
        target="_self	"
      >
        <label>Büyük Resim Ekle</label>
        <input type="file" name="file"></input>
        <button type="submit" >Upload</button>
      </form>
    </div>
  );
}

export default UpdateImage;
