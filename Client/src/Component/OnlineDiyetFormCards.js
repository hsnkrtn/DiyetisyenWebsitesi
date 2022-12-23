import React from "react";

function OnlineDiyetFormCards(props) {
  return (
    <div className="Appointmentcards">
      <div className="Appointmentcarditem1">
        <h1>{props.onlinediyetid}</h1>
      </div>
      <div className="Appointmentcarditem2">
        <h1>Adı : {props.onlinediyetname}</h1>
      </div>
      <div className="Appointmentcarditem3">
        <h1>E-Posta Adresi : {props.onlinediyetemail}</h1>
      </div>
      <div className="Appointmentcarditem4">
        <h1>Telefon Numarası : {props.onlinediyetphone}</h1>
      </div>
    </div>
  );
}

export default OnlineDiyetFormCards;
