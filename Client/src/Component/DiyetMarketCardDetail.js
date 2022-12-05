import React from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

function DiyetMarketCardDetail() {
  const DiyetMarketCardInfo = useLocation();
  const detail = DiyetMarketCardInfo.state.props.DiyetMarketCartDetail;

  return (
    <div className="default-routepage">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <div className="DiyetMarketCardInfo">
            <div className="DiyetInfo1">
              <div className="DiyetInfo1Image">
                <img
                  src={require(`../Images/${DiyetMarketCardInfo.state.props.DiyetMarketCartImage}.jpg`)}
                ></img>
              </div>
              <div className="DiyetInfo1Abstract">
                <h1>{DiyetMarketCardInfo.state.props.DiyetMarketCartHeader}</h1>
                <p>{DiyetMarketCardInfo.state.props.DiyetMarketCartAbstract}</p>
                <div className="DiyetCardDetailPrice">
                  {" "}
                  <h1>
                    {DiyetMarketCardInfo.state.props.DiyetMarketCartPrice}
                  </h1>{" "}
                </div>
                <div className="ContactUsButton">
                  <Link to="Iletisim">
                    {" "}
                    <button className="ContactUs">
                      İletişim Bilgileri{" "}
                    </button>{" "}
                  </Link>{" "}
                </div>{" "}
              </div>
            </div>
<hr></hr>
            <div className="DiyetInfo2">
              <h1>{DiyetMarketCardInfo.state.props.DiyetMarketCartHeader} </h1>
              <div
                className="DiyetInfo2inner"
                dangerouslySetInnerHTML={{ __html: detail }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiyetMarketCardDetail;
