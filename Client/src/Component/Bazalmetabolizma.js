import React, { useEffect, useState } from "react";

function Bazalmetabolizma() {
  const [gender, setGender] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [age, setAge] = useState(null);
  const [BMH, setBMH] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

  },[BMH]);

  const selectGender = (e) => {
    setGender(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setBMH(BMHresult.toFixed(2));
  };

  function calculateBMH(a, b, c) {
    switch (true) {
      case gender === "erkek":
        return 66.5 + (13.7 * a ) + (5 * b) - (6.8 * c);

      case gender === "kadin":
        return 665 + (9.6 * a) + ( 1.8 * b) -  (4.7 * c);
    }
  }
  let BMHresult = calculateBMH(weight, height, age);

  return (
    <div className="default-routepage">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <div className="calculationpage">
            <h1>Bazal Metabolizma Hızı Hesaplama</h1>
            <div className="calculationpage-form">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <p>Cinsiyetiniz</p>
                <div>
                  <input
                    type="radio"
                    id="erkek"
                    value="erkek"
                    name="gender"
                    onChange={selectGender}
                  ></input>{" "}
                  <label for="erkek">Erkek</label>{" "}
                </div>
                <div>
                  <input
                    type="radio"
                    id="kadin"
                    value="kadin"
                    name="gender"
                    onChange={selectGender}
                    required
                  ></input>{" "}
                  <label for="kadin">Kadın</label>{" "}
                </div>
                <br></br>
                <label for="weight">Kilonuzu Giriniz (kg)</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                ></input>
                <br></br>
                <label for="height">Boyunuzu Giriniz (cm) </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                ></input>
                <br></br>
                <label for="height">Yaşınızı Giriniz </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                ></input>
                <input
                  className="SubmitFormButton"
                  type="submit"
                  value="Hesapla"
                ></input>
              </form>
            </div>
{ BMH && <h1>Bazal Metabolizma Hızınız : {BMH} kcal/gün</h1> }
<p> <b>Bazal Metabolizma Hızı Hesaplama: </b>
Bazal metabolizma hızı kadınlarda ve erkelerde farklı formüllerle hesaplanmasının yanında, en fazla kullanılan formül harris benedict formülü ile hesaplamadır. Fakat BMH hesaplamasından önce metabolizma ve bazal metabolizmayı bilmek gerekir. Metabolizma kişinin yaşamını sürdürebilmesi için vücutta gerçekleştirilen biyokimyasal işlemlerin bütünüdür. Vücudun sürekli enerjiye ihtiyacı olduğu için metabolizmaya doğru miktarda sıvı ve gerekli olan maddelerin sağlanması çok önemlidir.

Bazal metabolizma hızı ise,kişilerin tam dinlenme durumundayken sadece yaşamsal fonksiyonlarının çalışması adına harcadığı enerji miktarıdır. Bu enerji; nefes almak ve kan pompalamaktan vücut ısısını korumaya kadar tüm hayati fonksiyonları desteklemek için kullanılır. BMH yaşa, vücut ağırlığına, cinsiyete, boya, yağ ve kas kütlesine, uyku durumuna ve endokrin bezlerinden salgılanan hormon seviyelerine göre farklılık gösterir. Bu yüzden kişinin bu değerleri ile bazal metabolizma hesaplama formülleri kullanılarak BMH hesaplanır. Bazal metabolizma hızı Harris Benedict formülü ile şu şekilde hesaplanmaktadır:
<br></br>

<b>Kadınlar için BMH hesaplama:</b> 655 + (9,6 x kg olarak ağırlık) + (1,8 x cm olarak boy) – (4,7 x yaş)<br></br>
<b>Erkekler için BMH hesaplama:</b> 66 + (13,7 x kg olarak ağırlık) + (5 x cm olarak boy) – (6,8 x yaş) </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Bazalmetabolizma;
