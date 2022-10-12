import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Appointment() {
  const [name, setName] = useState("");
  const [emailadress, setEmailadress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendData = () => {
    Axios.post("http://localhost:3001/sendmessage", {
      name: name,
      emailadress: emailadress,
      subject: subject,
      message: message,
    }).then(() => {
    });


}    
const CleanData=()=>{
  document.getElementById('fname').value="";
  document.getElementById('femail').value="";
  document.getElementById('fsubject').value="";
  document.getElementById('Fmessage').value="";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız Gönderildi");
    sendData();
    CleanData();
   

  };

  return (
    <div className="Appointment">
      <div className="Appointment-inner">
        <div className="Appointment-text">
          Bize Ulaşın, Danışın
          <br></br>Randevu Alın
          <button className="ContactUs">
            {" "}
            <Link to="Iletisim">İletişim Bilgileri</Link>
          </button>
        </div>

        <div className="Appointment-form">
          <form onSubmit={handleSubmit} >
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
