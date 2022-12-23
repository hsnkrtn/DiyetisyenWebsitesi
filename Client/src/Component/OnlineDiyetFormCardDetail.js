import React from "react";
import { useLocation } from "react-router-dom";

function OnlineDiyetFormCardDetail() {
    const formdetail = useLocation();
    console.log(formdetail.state.val.onlinediyet_fullname);

  return (
    <div  className="FormCards">
         <div className="AppointmentDetailItem">
          <h4>Adı : </h4>
          {formdetail.state.val.onlinediyet_fullname}
        </div>
         <div className="AppointmentDetailItem">
          <h4>Telefonu : </h4>
          {formdetail.state.val.onlinediyet_phone}
        </div>
         <div className="AppointmentDetailItem">
          <h4>E-Posta Adresi : </h4>
          {formdetail.state.val.onlinediyet_email}
        </div>
         <div className="AppointmentDetailItem">
          <h4>Dogum Tarihi : </h4>
          {formdetail.state.val.onlinediyet_birthdate}
        </div>
         <div className="AppointmentDetailItem">
          <h4>Boyu : </h4>
          {formdetail.state.val.onlinediyet_height}
        </div>
         <div className="AppointmentDetailItem">
          <h4>Bel Çevresi : </h4>
          {formdetail.state.val.onlinediyet_waist}
        </div>
         <div className="AppointmentDetailItem">
          <h4>Kalça Çevresi : </h4>
          {formdetail.state.val.onlinediyet_hip}
        </div>
         <div className="AppointmentDetailItem">
          <h4>Ana Öğün Sayısı: </h4>
          {formdetail.state.val.onlinediyet_meals}
        </div>
         <div className="AppointmentDetailItem">
          <h4>Ara Öğün Sayısı: </h4>
          {formdetail.state.val.onlinediyet_snacks}
        </div>
         <div className="AppointmentDetailItem">
          <h4>Mesleği : </h4>
          {formdetail.state.val.onlinediyet_job}
        </div>
         <div className="AppointmentDetailItem">
          <h4>Mesajı : </h4>
          {formdetail.state.val.onlinediyet_message}
        </div>

        </div>

  )
}

export default OnlineDiyetFormCardDetail