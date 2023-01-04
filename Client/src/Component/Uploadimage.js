import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useContext } from "react";
import { Logininfo } from "../App";
function UpdateImage() {
  const { URL } = useContext(Logininfo);

  const [newimage, setNewimage] = useState("");
  const uploadImages = async (event) => {
    event.preventDefault();

    const fileinputform = document.getElementById("carouselfileinputform");
    if (fileinputform) {
      const formData = new FormData();
      const fileInput = document.getElementById("carouselfileinput");
      const file = fileInput.files[0];
      formData.append("file", file);

      await Axios.post(`${URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        postData();
        document.getElementById("fileinputform").reset();
      });
    } else {
      alert("Fotograf Yükleme Başarısız");
    }
  };

  async function postData() {
    try {
      await Axios.post(`${URL}/uploadcarouselimage`, {
        newimage: newimage,
      }).then((res) => {
        alert(res.data);
        document.getElementById("carouselfileinputform").reset();
      });
    } catch (error) {
      console.error(error);
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
      <form
        id="carouselfileinputform"
        className="UpdateFileForm"
        enctype="multipart/form-data"
        onSubmit={uploadImages}
      >
        <input
          type="file"
          name="file"
          id="carouselfileinput"
          onChange={(e) => {
            setNewimage(e.target.files[0].name);
          }}
        />
        <button type="submit">Fotografı Yükle</button>
      </form>
    </div>
  );
}

export default UpdateImage;
