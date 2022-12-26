import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Appointment() {
  const [name, setName] = useState("");
  const [emailadress, setEmailadress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const URL = "http://localhost:3001";

  const sendData = () => {
    Axios.post(`${URL}/PostSendmessage`, {
      name: name,
      emailadress: emailadress,
      subject: subject,
      message: message,
    }).then((res) => {
      alert(res.data);
    });
  };
  const CleanData = () => {
    document.getElementById("AppointmentForm").reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
    CleanData();
  };

  return (
    <div className="Appointment">
      <div className="Appointment-inner">
        <div className="Appointment-text">
          <div className="Appointment-textContent">
            <h1>
              {" "}
              Bize Ulaşın, Danışın
              <br></br>Randevu Alın{" "}
            </h1>
          </div>

          <div className="ContactUsButton">
            <Link to="Iletisim">
              {" "}
              <button className="ContactUs">İletişim Bilgileri </button>{" "}
            </Link>{" "}
          </div>
        </div>

        <div className="Appointment-form">
          <form id="AppointmentForm" onSubmit={handleSubmit}>
            <label for="fname">Adınız Soyadınız</label>
            <input
              type="text"
              id="fname"
              name="fname"
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <br></br>
            <label for="femail"></label>E-Posta Adresiniz<br></br>
            <input
              type="email"
              id="femail"
              name="femail"
              onChange={(e) => setEmailadress(e.target.value)}
              required
            ></input>
            <br></br>
            <label for="Fsubject"></label>Konu<br></br>
            <input
              type="text"
              id="fsubject"
              name="fsubject"
              onChange={(e) => setSubject(e.target.value)}
              required
            ></input>
            <br></br>
            <label for="Fmessage">Mesajınız</label>
            <textarea
              type="text"
              id="Fmessage"
              name="Fmessage"
              onChange={(e) => setMessage(e.target.value)}
              placeholder={"Lütfen mesajınızı yazın..."}
              required
            ></textarea>
            <br></br>
            <input
              className="SubmitFormButton"
              type="submit"
              value="Gönder"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
