import Axios from "axios";
import React from "react";
import { useContext } from "react";
import { Logininfo } from "../App";

function CaloriesCard(props) {
  const { Islogin, setIslogin } = useContext(Logininfo);
  const URL = "http://localhost:3001";

  const foodid = props.besindegerleri.calories_id;

  const handleDelete = () => {
    console.log(foodid)
    Axios.delete(`${URL}/Deletefood`, {
      data: { foodid: foodid },
    }).then((reponse) => {
      alert(reponse.data);
    });
  };

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
                {parseFloat(props.besindegerleri.calories_kcal) /
                  parseFloat(props.besindegerleri.calories_kcal)}
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
                {parseFloat(props.besindegerleri.calories_carb) /
                  parseFloat(props.besindegerleri.calories_carb)}
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
                {parseFloat(props.besindegerleri.calories_fiber) /
                  parseFloat(props.besindegerleri.calories_fiber)}
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
                {parseFloat(props.besindegerleri.calories_cholesterol) /
                  parseFloat(props.besindegerleri.calories_cholesterol)}
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
                {parseFloat(props.besindegerleri.calories_protein) /
                  parseFloat(props.besindegerleri.calories_one)}
                {`${" (g)"}`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="BesinDegerleriResim">
        <img
          src={require(`../Images/${props.besindegerleri.calories_image}`)}
        ></img>
      </div>
    </div>
  );
}

export default CaloriesCard;
