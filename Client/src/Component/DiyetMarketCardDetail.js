import React from "react";
import { useLocation } from "react-router-dom";

function DiyetMarketCardDetail() {
  const DiyetMarketCardInfo = useLocation();
  console.log(DiyetMarketCardInfo.state.props);
  return (
    <div className="default-routepage">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">dyt</div>
      </div>
    </div>
  );
}

export default DiyetMarketCardDetail;
