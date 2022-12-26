import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import OnlineDiyetFormCards from "./OnlineDiyetFormCards";

function OnlinediyetFormHistory() {
  const [onlinediyetform, seronlinediyetform] = useState([]);

  const URL = "http://localhost:3001";
  useEffect(() => {
    Axios.get(`${URL}/GetOnlinediyetforms`).then((response) => {
      seronlinediyetform(response.data.reverse());
    });

    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="AppointmentHistory">
      <h2>Online Diyet Formları</h2>
      <ul>
        {onlinediyetform.map((val, key) => {
          return (
            <Link
              to={{
                pathname: `/FormDetayi/${val.onlinediyet_id}`,
                state: { val },
              }}
            >
              <li>
                <OnlineDiyetFormCards
                  onlinediyetid={val.onlinediyet_id}
                  onlinediyetname={val.onlinediyet_fullname}
                  onlinediyetemail={val.onlinediyet_email}
                  onlinediyetphone={val.onlinediyet_phone}
                ></OnlineDiyetFormCards>
                <hr></hr>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default OnlinediyetFormHistory;
