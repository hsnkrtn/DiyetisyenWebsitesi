import React, { useEffect, useState } from "react";

function Vucutkitleindex() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);

  const [VKI, setVKI] = useState(null);
  const [VKItext, setVKItext] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    switch (true) {
      case VKI < 18.5:
        setVKItext(
          "Zayıf. Boyunuza göre uygun ağırlıkta olmadığınızı, zayıf olduğunuzu gösterir. Zayıflık, bazı hastalıklar için risk oluşturan ve istenmeyen bir durumdur. Boyunuza uygun ağırlığa erişmeniz için yeterli ve dengeli beslenmeli, beslenme alışkanlıklarınızı geliştirmeye özen göstermelisiniz."
        );
        break;
      case VKI > 18.5 && VKI < 24.9:
        setVKItext(
          "Normal. Boyunuza göre uygun ağırlıkta olduğunuzu gösterir. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösteriniz. "
        );
        break;
      case VKI > 25 && VKI < 29.9:
        setVKItext(
          "Fazla Kilolu. Boyunuza göre vücut ağırlığınızın fazla olduğunu gösterir. Fazla kilolu olma durumu gerekli önlemler alınmadığı takdirde pek çok hastalık için risk faktörü olan obeziteye (şişmanlık) yol açar."
        );
        break;
      case VKI > 30 && VKI < 40:
        setVKItext(
          "Şişman. Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. "
        );
        break;
      case VKI > 40:
        setVKItext(
          "Aşırı Şişman. Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir."
        );
        break;
    }
  }, [VKI]);

  function calculateVKI(a, b) {
    return a / ((b * b) / 10000);
  }

  let VKIresult = calculateVKI(weight, height);
  const handleSubmit = (e) => {
    e.preventDefault();
    setVKI(parseFloat(VKIresult.toFixed(1)));
  };

  return (
    <div className="default-routepage">
      <div className="default-routepage-header"></div>
      <div className="Routepage-inner">
        <div className="Routepage-inner-content">
          <div className="calculationpage">
            <h1>Vücut kitle indeksi </h1>

            <div className="calculationpage-form">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <label for="weight">Kilonuzu Giriniz</label>
                <input
                  type="number"
                  id="age"
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
                <input
                  className="SubmitFormButton"
                  type="submit"
                  value="Hesapla"
                ></input>
              </form>
            </div>
            <p>
              <b> Vücut kitle indeksi (VKİ) </b>, vücut ağırlığının (kg), boy
              uzunluğunun metre cinsinden karesine bölünmesiyle hesaplanır.
              İdeal ağırlık ise ulaşılmak istenen VKİ'nin, boy uzunluğunun
              karesi ile çarpılmasıyla elde edilir. VKİ şişmanlığın objektif ve
              basit bir ölçüsü olmakla birlikte tek ölçüsü değildir. Bel
              kalınlığı, kalça çevresi sağlık için bakılması gereken bir başka
              kriterdir. Vücudun kilosu kadar, o kilonun ne kadarının yağ, ne
              kadarının kas olduğu da önem taşımaktadır. Hesaplama sadece bilgi
              amaçlıdır. Konuyla ilgili daha geniş bilgi almak için bir hekime
              başvurunuz.
            </p>
            {VKI && <h1>Vücut Kitle İndeksiniz : {VKI}</h1>}
          <p> {VKI &&  VKItext}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vucutkitleindex;
