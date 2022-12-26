import React from "react";

function Appointmenthistorycards(props) {
  return (
    <div className="Appointmentcards">
      <div className="Appointmentcarditem1">
        {" "}
        <h1>{props.appointmentid}</h1>
      </div>
      <div className="Appointmentcarditem2">
        {" "}
        <h1>Adı : {props.appointmentname}</h1>
      </div>
      <div className="Appointmentcarditem3">
        {" "}
        <h1>E-Posta Adresi : {props.appointmentemailadress}</h1>
      </div>
      <div className="Appointmentcarditem4">
        {" "}
        <h1>Konu : {props.appointmentsubject}</h1>
      </div>
    </div>
  );
}

export default Appointmenthistorycards;
