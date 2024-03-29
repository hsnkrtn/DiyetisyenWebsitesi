import React, { useState, createContext } from "react";
import Axios from "axios";
import { useContext } from "react";
import { Logininfo } from "../App";
import { useHistory } from 'react-router-dom' 

function Login() {

  const history = useHistory()

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { Islogin, setIslogin } = useContext(Logininfo);
  const {URL}= useContext(Logininfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("giris yapiliyor");
    CheckUser();
    history.push("/")
    history.push("/Admin")

  };

  const CheckUser = () => {
    sendData();

  };
  const sendData = () => {
    Axios.post(`${URL}/Login`, {
      username: userName,
      password: password,
    }).then((res) => {
        setIslogin(res.data);
        

    });
  };
  return (
    <div className="LoginPage" >
      <form className="UpdateForm" onSubmit={ handleSubmit}>
        <label for="Carouselheader">Kullanıcı Adi </label>
        <input
          type="inputtext"
          name="Carouselheader"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Kullanıcı Adı"
          required
        ></input>
        <label for="Carouselheader">Şifre </label>
        <input
          type="password"
          name="Carouselheader"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifre"
          required
        ></input>
        <input className="SubmitButton" type="submit" value="Giriş Yap"></input>
      </form>
    </div>
  );
}

export default Login;
