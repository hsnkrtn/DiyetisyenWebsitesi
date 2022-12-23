import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import Appointmenthistorycards from "./Appointmenthistorycards";

function Appoinmenthistory() {
  const [appointments, setappointments] = useState([]);

  const URL = "http://localhost:3001";
  useEffect(() => {
    Axios.get(`${URL}/GetAppointments`).then((response) => {
      setappointments(response.data.reverse());
    });

    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="AppointmentHistory">
      <h2>Randevular</h2>
      <ul>
        {appointments.map((val, key) => {
          return (
            <Link
              to={{
                pathname: `/RandevuDetayi/${val.appointmentcontact_id}`,
                state: { val },
              }}
            >
              <li key={val.appointmentcontact_id}>
                <Appointmenthistorycards
                  appointmentid={val.appointmentcontact_id}
                  appointmentname={val.appointmentcontact_name}
                  appointmentemailadress={val.appointmentcontact_emailadress}
                  appointmentsubject={val.appointmentcontact_subject}
                  appointmentmessage={val.appointmentcontact_message}
                ></Appointmenthistorycards>
                <hr></hr>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Appoinmenthistory;
