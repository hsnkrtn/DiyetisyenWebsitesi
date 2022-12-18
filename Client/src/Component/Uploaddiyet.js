import { useState } from "react";
import Axios from "axios";

function Uploaddiyet() {
  const [diyetbaslik, setDiyetbaslik] = useState("");
  const [diyetdetay, setDiyetdetay] = useState("");
  const [diyetfotograf, setDiyetfotograf] = useState("");
  const [diyetozet, setDiyetozet] = useState("");
  const [diyetfiyat, setDiyetfiyat] = useState("");

  const URL = "http://localhost:3001";

  const handleSubmit = (e) => {
    e.preventDefault(e);
    uploaddiyetimage();
    postData();
  };
  const uploaddiyetimage = () => {
    const diyetimageform = document.getElementById("DiyetImageUploadForm");
    if (diyetimageform) {
      diyetimageform.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(diyetimageform);

        Axios.post(`${URL}/uploaddiyetimage`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then((res) => {
          })
          .catch((err) => {
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
        alert("Diyet eklendi");
        console.log(res.data);
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
      <form
        id="DiyetImageUploadForm"
        className="UpdateFileForm"
        action={`${URL}/uploaddiyetimage`}
        method="post"
        enctype="multipart/form-data"
        target="blank"
      >
        <br></br>
        <br></br> <label>Diyet Fotografi Ekle</label>
        <input
          type="file"
          name="file"
          onChange={(e) => {
            setDiyetfotograf(e.target.files[0].name);
          }}
        ></input>
      </form>
      <form
        className=" UpdateForm"
        id="Diyetdetailform"
        onSubmit={handleSubmit}
      >
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
        <button type="submit">Diyeti Yükle</button>
      </form>
    </div>
  );
}

export default Uploaddiyet;
