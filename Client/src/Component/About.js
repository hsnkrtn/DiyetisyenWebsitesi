import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

function About() {
  const [Hakkimizda, setHakkimizda] = useState([]);

  const URL = "http://localhost:3001";
  useEffect(() => {
    Axios.get(`${URL}/GetHakkimizda`).then((response) => {
      setHakkimizda(response.data);
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="About">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <h1 className="RoutepageHeader">Hakkımızda</h1>

          {Hakkimizda.map((val, key) => {
            return (
              <>
                <div className="AboutUsImage">
                  <img src={require(`../Images/${val.aboutus_image}`)}></img>
                </div>
                <div className="AboutUsContent">
                  <div
                    dangerouslySetInnerHTML={{ __html: val.aboutus_content }}
                  ></div>{" "}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
