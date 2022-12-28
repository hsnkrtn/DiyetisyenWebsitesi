import Axios from "axios";
import React from "react";
import { useContext } from "react";
import { Logininfo } from "../App";

function CaloriesCard(props) {
  const { Islogin, setIslogin } = useContext(Logininfo);
  const URL = "https://www.diyetisyenhaticegursul.com.tr";

  const foodid = props.besindegerleri.calories_id;

  const handleDelete = () => {
    console.log(foodid);
    Axios.delete(`${URL}/Deletefood`, {
      data: { foodid: foodid },
    }).then((reponse) => {
      alert(reponse.data);
    });
  };
  const onekcal =
    (parseFloat(props.besindegerleri.calories_kcal) / 100) *
    parseFloat(props.besindegerleri.calories_one);
  const onecarb =
    (parseFloat(props.besindegerleri.calories_carb) / 100) *
    parseFloat(props.besindegerleri.calories_one);
  const onelif =
    (parseFloat(props.besindegerleri.calories_fiber) / 100) *
    parseFloat(props.besindegerleri.calories_one);

  const onecholesterol =
    (parseFloat(props.besindegerleri.calories_cholesterol) / 100) *
    parseFloat(props.besindegerleri.calories_one);

  const oneprotein =
    (parseFloat(props.besindegerleri.calories_protein) / 100) *
    parseFloat(props.besindegerleri.calories_one);

  return (
    <div className="BesinDegerleri">
      <div className="BesinDegerleriTablo">
        {Islogin && <button onClick={handleDelete}>Besini Sil</button>}

        <table className="Caloriestable">
          <thead>
            <h1>Besin Değerleri</h1>
            <tr>
              <th>{props.besindegerleri.calories_name.toUpperCase()}</th>
              <th>100 Gram</th>
              <th>1 Adet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{"Kalori"}</th>
              <td>
                {props.besindegerleri.calories_kcal}
                {`${" (kcal)"}`}
              </td>
              <td>
                {onekcal.toFixed(2)}
                {`${" (kcal)"}`}
              </td>
            </tr>
            <tr>
              <th>{"Karbonhidrat"}</th>
              <td>
                {props.besindegerleri.calories_carb}
                {`${" (g)"}`}
              </td>
              <td>
                {onecarb.toFixed(2)}
                {`${" (g)"}`}
              </td>
            </tr>

            <tr>
              <th>{"Lif"}</th>
              <td>
                {props.besindegerleri.calories_fiber}
                {`${" (g)"}`}
              </td>
              <td>
                {onelif.toFixed(2)}
                {`${" (g)"}`}
              </td>
            </tr>
            <tr>
              <th>{"Kolesterol"}</th>
              <td>
                {props.besindegerleri.calories_cholesterol}
                {`${" (mg)"}`}
              </td>
              <td>
                {onecholesterol.toFixed(2)}
                {`${" (mg)"}`}
              </td>
            </tr>
            <tr>
              <th>{"Protein"}</th>
              <td>
                {parseFloat(props.besindegerleri.calories_protein)}
                {`${" (g)"}`}
              </td>
              <td>
                {oneprotein.toFixed(2)}
                {`${" (g)"}`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="BesinDegerleriResim">
        <img
        src={process.env.PUBLIC_URL +`/Images/${props.besindegerleri.calories_image}`}
        ></img>
      </div>
    </div>
  );
}

export default CaloriesCard;
