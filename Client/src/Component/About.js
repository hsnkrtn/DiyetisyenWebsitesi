import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

function About() {
  const [Hakkimizda, setHakkimizda] = useState(null);
const URL ="http://localhost:3001";
  useEffect(() => {
    getAboutUs();
    window.scrollTo(0, 0);

  }, []);


  const getAboutUs = async () => {
    await Axios.get(`${URL}/GetHakkimizda`).then((response) => {
      setHakkimizda(response.data);
    });
  };

  return (
    <div className="About">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <h1 className="RoutepageHeader">Hakkımızda</h1>

          {Hakkimizda && (
            <div className="AboutUsImage">
              <img
                src={require(`../Images/${Hakkimizda[0].aboutus_image}`)}
              ></img>
            </div>
          )}
          {Hakkimizda && <p>{`${Hakkimizda[0].aboutus_content}`}</p>  }
        </div>
      </div>
    </div>
  );
}

export default About;
