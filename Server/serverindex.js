const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Client/src/Images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  connectionLimit: 100,
  user: "root",
  host: "localhost",
  port: 3306,
  password: "password",
  database: "diyetisyen_web_sitesi",
  debug: false,
});
app.listen(3001, () => {
  console.log("working");
});

db.query("SELECT * FROM carouselheader", (err, result) => {
  if (err) {
    console.log(err);
  } else {
  }
});

app.get("/GetCarouselheader", (req, res) => {
  db.query("SELECT * FROM carouselheader", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/GetCarouselimages", (req, res) => {
  db.query("SELECT * FROM carouselimages", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/GetIletisim", (req, res) => {
  db.query("SELECT * FROM contactinformations", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/GetHakkimizda", (req, res) => {
  db.query("SELECT * FROM aboutus", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/GetAppointments", (req, res) => {
  db.query(
    "SELECT * FROM diyetisyen_web_sitesi.appointmentcontact",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/GetMakaleler", (req, res) => {
  db.query("SELECT * FROM articles", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/PostSendmessage", (req, res) => {
  const name = req.body.name;
  const emailadress = req.body.emailadress;
  const message = req.body.message;
  const subject = req.body.subject;
  db.query(
    `INSERT INTO diyetisyen_web_sitesi.appointmentcontact (appointmentcontact_name,appointmentcontact_emailadress,appointmentcontact_subject,appointmentcontact_message) VALUES ("${name}","${emailadress}","${subject}","${message}")`,
    (err, res) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.get("/GetRecipes", (req, res) => {
  db.query("SELECT * FROM recipes", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/GetDiyetKartlari", (req, res) => {
  db.query("SELECT * FROM diyetmarket", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/Getfoodcalori", (req, res) => {
  const besin = req.body.besin;
  db.query( `SELECT * FROM diyetisyen_web_sitesi.calories WHERE calories_name REGEXP  "${besin}"` , (err, response) => {
   if (err) {
      console.log(err);
    } else {
      res.send(response);
    }
  });
});
///////////////////Update Carousel Header//////////
app.post("/UpdateCarouselHeader", (req, res) => {
  const carouselheader = req.body.carouselheader;

  db.query(
    `UPDATE diyetisyen_web_sitesi.carouselheader SET carouselheader_text = '${carouselheader}' WHERE carouselheader_id = 1 `,
    (err, res) => {
      if (err) {
        console.log(err);
      }
    }
  );
});
///////////////////Update Contact Informations//////////
app.post("/Updatecontact", (req, res) => {
  const adress = req.body.adress;
  const phone = req.body.phone;
  const whatsapp = req.body.whatsapp;
  const email = req.body.email;
  const instagram = req.body.instagram;

  db.query(
    `UPDATE diyetisyen_web_sitesi.contactinformations SET informations_adress ='${adress}', informations_phone ='${phone}',informations_whatsapp='${whatsapp}',informations_email ='${email}',informations_instagram='${instagram}' WHERE informations_id = 1`,
    (err, response) => {
      if (err) {
        console.log(err);
      } else res.send("Başarıyla Güncellendi");
    }
  );
});

/////////Add Diyet///////////

app.post("/uploaddiyetimage", upload.single("file"), (req, res) => {
  res.send("Başarıyla Yüklendi");
});

app.post("/addnewdiyet", (req, res) => {
  const diyetbaslik = req.body.diyetbaslik;
  const diyetdetay = req.body.diyetdetay;
  const diyetozet = req.body.diyetozet;
  const diyetfiyat = req.body.diyetfiyat;
  const diyetfotograf = req.body.diyetfotograf;
  db.query(
    `INSERT INTO diyetisyen_web_sitesi.diyetmarket (diyet_baslik,  diyet_detayi, diyet_fiyati, diyet_ozet, diyet_fotograf)  VALUES ("${diyetbaslik}", "${diyetdetay}","${diyetfiyat}","${diyetozet}" ,"${diyetfotograf}" )`,
    (err, response) => {
      if (err) {
        console.log(err);
      } else res.send("Başarıyla Yüklendi");
    }
  );
});
/////////Add Food Calori///////////

app.post("/CaloriImageUpload", upload.single("file"), (req, res) => {
  res.send("Başarıyla Yüklendi");
});

app.post("/addnewfoodcalori", (req, res) => {
  const ad = req.body.ad;
  const kalori = req.body.kalori;
  const karbonhidrat = req.body.karbonhidrat;
  const lif = req.body.lif;
  const kolesterol = req.body.kolesterol;
  const protein = req.body.protein;
  const biradet = req.body.biradet;
  const fotograf = req.body.fotograf;
  db.query(
    `INSERT INTO diyetisyen_web_sitesi.calories (calories_name, calories_carb,  calories_protein, calories_fiber, calories_cholesterol, calories_kcal, calories_one, calories_image)  VALUES ("${ad}","${karbonhidrat}", "${protein}","${lif}","${kolesterol}" ,"${kalori}","${biradet}","${fotograf}" )`,
    (err, response) => {
      if (err) {
        console.log(err);
      } else res.send("Başarıyla Yüklendi");
    }
  );
});
/////////Add Article///////////
app.post("/ArticleImageUpload", upload.single("file"), (req, res) => {
  res.send("Başarıyla Yüklendi");
});

app.post("/addnewarticle", (req, res) => {
  const articlebaslik = req.body.articlebaslik;
  const articledetay = req.body.articledetay;
  const articlefotograf = req.body.articlefotograf;
  const articleozet = req.body.articleozet;
  db.query(
    `INSERT INTO diyetisyen_web_sitesi.articles (article_header,  article_detail, article_image, article_abstract)  VALUES ("${articlebaslik}", "${articledetay}","${articlefotograf}","${articleozet}"  )`,
    (err, response) => {
      if (err) {
        console.log(err);
      } else res.send("Başarıyla Yüklendi");
    }
  );
});
///////////////Upload Recipe

app.post("/RecipeImageUpload", upload.single("file"), (req, res) => {
  res.send("Başarıyla Yüklendi");
});

app.post("/addnewrecipe", (req, res) => {
  const yemekadi = req.body.yemekadi;
  const porsiyon = req.body.porsiyon;
  const tariffotograf = req.body.tariffotograf;
  const kisisayisi = req.body.kisisayisi;
  const tarif = req.body.tarif;
  const sure = req.body.sure;
  db.query(
    `INSERT INTO diyetisyen_web_sitesi.recipes (recipe_yemek_adi,  recipe_porsiyon, recipe_kisisayisi, recipe_sure, recipe_tarif, recipe_yemek_fotograf)  VALUES ("${yemekadi}", "${porsiyon}","${kisisayisi}","${sure}" ,"${tarif}" ,"${tariffotograf}"  )`,
    (err, response) => {
      if (err) {
        console.log(err);
      } else res.send("Başarıyla Yüklendi");
    }
  );
});
/////////////Get online diyet froms
app.get("/GetOnlinediyetforms", (req, res) => {
  db.query("SELECT * FROM diyetisyen_web_sitesi.onlinediyet", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
////////////Upload online Diyet Form

app.post("/PostOnlineDiyet", (req, res) => {
  const name = req.body.name;
  const emailadress = req.body.emailadress;
  const telefon = req.body.telefon;
  const dogumtarihi = req.body.dogumtarihi;
  const kilo = req.body.kilo;
  const boy = req.body.boy;
  const belcevresi = req.body.belcevresi;
  const kalcacevresi = req.body.kalcacevresi;
  const anaogunsayiyi = req.body.anaogunsayiyi;
  const araogunsayiyi = req.body.araogunsayiyi;
  const meslek = req.body.meslek;
  const mesaj = req.body.mesaj;

  db.query(
    `INSERT INTO diyetisyen_web_sitesi.onlinediyet (onlinediyet_fullname, onlinediyet_email, onlinediyet_phone,  onlinediyet_birthdate, onlinediyet_height, onlinediyet_weight, onlinediyet_waist, onlinediyet_hip, onlinediyet_meals, onlinediyet_snacks, onlinediyet_job, onlinediyet_message ) VALUES ("${name}" ,"${emailadress}", "${telefon}","${dogumtarihi}","${boy}","${kilo}","${belcevresi}","${kalcacevresi}","${anaogunsayiyi}","${araogunsayiyi}","${meslek}","${mesaj}")`,
    (err, response) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Başarıyla Yüklendi");
      }
    }
  );
});
////////////////Login/////////////////
app.post("/Login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM login", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (
        result[0].login_username === username &&
        result[0].login_password === password
      ) {
        res.send(true);
      } else {
        res.send(false);
      }
    }
  });
});
//////////// File Upload/////////////////

app.post("/upload", upload.single("file"), (req, res) => {
  db.query(
    `INSERT INTO diyetisyen_web_sitesi.carouselimages (carouselimage_name)  VALUES ("${req.file.filename}")`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  res.send("Fotograf Başarıyla Yüklendi");
});

////////////////// Delete Article////////////////////////////

app.delete("/DeleteMakale", (req, res) => {
  const articleid = req.body.articleid;
  db.query(
    `DELETE FROM  diyetisyen_web_sitesi.articles WHERE article_id=${articleid};`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Makale Silindi");
      }
    }
  );
});
////////////////// Delete Diyet////////////////////////////

app.delete("/DeleteDiyet", (req, res) => {
  const DiyetMarketCartId = req.body.DiyetMarketCartId;
  db.query(
    `DELETE FROM  diyetisyen_web_sitesi.diyetmarket WHERE diyet_id=${DiyetMarketCartId};`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Diyet Silindi");
      }
    }
  );
});
////////////////// Delete Recipe////////////////////////////

app.delete("/Deleterecipe", (req, res) => {
  const recipeId = req.body.recipeId;
  db.query(
    `DELETE FROM  diyetisyen_web_sitesi.recipes WHERE recipe_id=${recipeId};`,
    (err, response) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Tarif Silindi");
      }
    }
  );
});
////////////////// Delete Recipe////////////////////////////

app.delete("/Deletecarouselimage", (req, res) => {
  const imageid = req.body.imageid;
  db.query(
    `DELETE FROM  diyetisyen_web_sitesi.carouselimages WHERE carouselimage_id=${imageid};`,
    (err, response) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Fotograf Silindi");
      }
    }
  );
});
app.delete("/Deletefood", (req, res) => {
  const foodid = req.body.foodid;
  db.query(
    `DELETE FROM  diyetisyen_web_sitesi.calories WHERE calories_id=${foodid};`,
    (err, response) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Besin Silindi");
      }
    }
  );
});
