import React from "react";
import "../app.css";
import Fotograf2 from "../Images/vv.jpg";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";

function Carousel() {
  const [Image, setImage] = useState(null);
  const [ImageNumber, setImageNumber] = useState(0);
  const [buyukbaslik, setbuyukbaslik] = useState(null);
  const URL = "http://localhost:3001";

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

  return (
    <div className="Carousel">
      {Image && (
        <img
          src={require(`../Images/${
            Image[`${ImageNumber}`].carouselimage_name
          }.jpg`)}
        ></img>
      )}{" "}
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
