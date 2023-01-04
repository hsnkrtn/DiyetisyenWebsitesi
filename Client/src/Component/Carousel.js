import React from "react";
import "../app.css";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { useContext } from "react";
import { Logininfo } from "../App";
function Carousel() {
  const [Image, setImage] = useState(null);
  const [ImageNumber, setImageNumber] = useState(0);
  const [buyukbaslik, setbuyukbaslik] = useState(null);
  const { Islogin, setIslogin } = useContext(Logininfo);
  const { URL } = useContext(Logininfo);

  useEffect(() => {
    window.scrollTo(0, 0);
    getImages();
    getCarouselHeader();
  }, []);
  const getCarouselHeader = async () => {
    await Axios.get(`${URL}/GetCarouselheader`).then((response) => {
      setbuyukbaslik(response.data);
    });
  };
  const getImages = async () => {
    await Axios.get(`${URL}/GetCarouselimages`).then((response) => {
      setImage(response.data.reverse());
    });
  };
  const GoToRightImage = () => {
    if (Image[`${ImageNumber + 1}`].carouselimage_name !== null) {
      setImageNumber(ImageNumber + 1);
    }
  };
  const GoToLeftImage = () => {
    if (Image[`${ImageNumber - 1}`].carouselimage_name !== null) {
      setImageNumber(ImageNumber - 1);
    }
  };

  const handleDelete = () => {
    Axios.delete(`${URL}/Deletecarouselimage`, {
      data: { imageid: Image[ImageNumber].carouselimage_id },
    }).then((reponse) => {
      alert(reponse.data);
    });
  };

  return (
    <div className="Carousel">
      {Image && (
        <div className="CarouselImages">
          <img
            src={
              process.env.PUBLIC_URL +
              `/Images/${Image[`${ImageNumber}`].carouselimage_name}`
            }
          ></img>
          {Islogin && <button onClick={handleDelete}>Fotografı Sil</button>}
        </div>
      )}
      {buyukbaslik && <h1>{buyukbaslik[0].carouselheader_text}</h1>}
      <button onClick={GoToLeftImage} className="Carousel-left-button">
        <span>
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </span>
      </button>
      <button onClick={GoToRightImage} className="Carousel-right-button">
        <span>
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
