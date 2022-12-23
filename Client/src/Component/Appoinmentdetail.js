import React from "react";
import { useLocation } from "react-router-dom";

function Appoinmentdetail() {
  const Message = useLocation();

  return (
    <div className="AppointmentDetailPage">
      <div className="AppointmentDetail">
        <div className="AppointmentDetailItem">
          <h4>Adı: </h4>
          {Message.state.val.appointmentcontact_name}
        </div>
        <div className="AppointmentDetailItem">
          <h4>E-Posta Adresi:</h4>
          {Message.state.val.appointmentcontact_emailadress}
        </div>
        <div className="AppointmentDetailItem">
          <h4>Konu:</h4> {Message.state.val.appointmentcontact_subject}
        </div>
        <div className="AppointmentDetailItem">
          <h4>Mesaj :</h4>
          <p> {Message.state.val.appointmentcontact_message}</p>
        </div>
      </div>
    </div>
  );
}

export default Appoinmentdetail;
