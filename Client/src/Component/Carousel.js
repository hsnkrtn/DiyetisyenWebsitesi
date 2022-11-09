import React from "react";
import "../app.css";
import Fotograf2 from "../Images/vv.jpg";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";

function Carousel() {
  const [Image, setImage] = useState(null);
  const [ImageNumber, setImageNumber] = useState(0);
  const [buyukbaslik, setbuyukbaslik] = useState(null);
  const URL ="https://www.diyetisyenhaticegursul.com.tr";

  useEffect(() => {
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
      setImage(response.data);
    });
  };
  const GoToRightImage =()=>{
setImageNumber(ImageNumber+1);
  }
  const GoToLeftImage =()=>{
setImageNumber(ImageNumber-1);
  }

  return (
    <div className="Carousel">
      {Image && (
        <img src={require(`../Images/${Image[`${ImageNumber}`].carouselimage_name}`)}></img>
      )}{" "}
      {buyukbaslik &&<h1>{buyukbaslik[0].carouselheader_text}</h1>}
      <button onClick={GoToLeftImage}  className="Carousel-left-button">
        <span>
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </span>
      </button>
      <button  onClick={GoToRightImage} className="Carousel-right-button">
        <span>
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
