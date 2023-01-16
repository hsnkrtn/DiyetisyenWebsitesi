import { useState } from "react";
import Axios from "axios";
import { useContext } from "react";
import { Logininfo } from "../App";
function Uploaddiyet() {
  const [diyetbaslik, setDiyetbaslik] = useState("");
  const [diyetdetay, setDiyetdetay] = useState("");
  const [diyetfotograf, setDiyetfotograf] = useState("");
  const [diyetozet, setDiyetozet] = useState("");
  const [diyetfiyat, setDiyetfiyat] = useState("");
  const { URL } = useContext(Logininfo);
  const [isDisabled, setIsDisabled] = useState(false);

  const diyetimageupload = () => {
    const diyetimageform = document.getElementById("DiyetImageUploadForm");
    if (diyetimageform) {
      diyetimageform.addEventListener("submit", (e) => {
        setIsDisabled(true);

        e.preventDefault();
        const formData = new FormData();
        const fileInput = document.getElementById("diyetfileinput");
        const file = fileInput.files[0];
        formData.append("file", file);
        Axios.post(`${URL}/uploaddiyetimage`, formData, {
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
      await Axios.post(`${URL}/addnewdiyet`, {
        diyetbaslik: diyetbaslik,
        diyetdetay: diyetdetay,
        diyetozet: diyetozet,
        diyetfiyat: diyetfiyat,
        diyetfotograf: diyetfotograf,
      }).then((res) => {
        alert(res.data, "Diyet eklendi");
        document.getElementById("Diyetdetailform").reset();
        document.getElementById("DiyetImageUploadForm").reset();
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
        Diyet Ekleme
        <hr></hr>
      </div>

      <form className=" UpdateForm" id="Diyetdetailform">
        <label for="Carouselheader">Diyet Baslığı ekle</label>
        <input
          id="forminput1"
          type="inputtext"
          onChange={(e) => setDiyetbaslik(e.target.value)}
          placeholder="Diyet adi"
          required
        ></input>
        <label for="Carouselheader">{`Diyet Detayı Ekle (  https://onlinehtmleditor.dev/ , https://onlineutf8tools.com/convert-html-entities-to-utf8  )`}</label>

        <input
          id="forminput2"
          type="inputtext"
          onChange={(e) => setDiyetdetay(e.target.value)}
          placeholder="Diyet Detayi"
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
      </form>
      <form
        id="DiyetImageUploadForm"
        className="UpdateFileForm"
        action={`${URL}/uploaddiyetimage`}
        method="post"
        enctype="multipart/form-data"
        target="_self"
      >
        <br></br>
        <br></br>
        <label>Diyet Fotografi Ekle</label>
        <input
          id="diyetfileinput"
          type="file"
          name="file"
          onChange={(e) => {
            setDiyetfotograf(e.target.files[0].name);
          }}
        ></input>
        <button onClick={diyetimageupload} disabled={isDisabled}>
          Diyeti Ekle
        </button>
      </form>
    </div>
  );
}

export default Uploaddiyet;
