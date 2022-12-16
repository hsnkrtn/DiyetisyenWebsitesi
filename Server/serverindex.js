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
    console.log(result);
  }
});

app.get("/GetCarouselheader", (req, res) => {
  db.query("SELECT * FROM carouselheader", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
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
    `INSERT INTO diyetisyen_web_sitesi.appointmentcontact  (appointmentcontact_name,appointmentcontact_emailadress,appointmentcontact_subject,appointmentcontact_message) VALUES ("${name}","${emailadress}","${subject}","${message}")`,
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        res.send("succesful");
      }
    }
  );
});

app.get("/GetRecipes", (req, res) => {
  db.query("SELECT * FROM recipes", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
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

app.post("/addnewdiyet", (req, res) => {
  const diyetbaslik = req.body.diyetbaslik;
  const diyetdetay = req.body.diyetdetay;
  const diyetfotograf = req.body.diyetfotograf;
  const diyetozet = req.body.diyetozet;
  const diyetfiyat = req.body.diyetfiyat;

  db.query(
    `INSERT INTO diyetisyen_web_sitesi.diyetmarket (diyet_baslik,  diyet_detayi, diyet_fiyati, diyet_fotograf, diyet_ozet )  VALUES ("${diyetbaslik}", "${diyetdetay}","${diyetfiyat}","${diyetfotograf}","${diyetozet}")`,
    (err, res) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

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
    (err, res) => {
      if (err) {
        console.log(err);
      }
    }
  );

  res.send("Fotograf Başarıyla Yüklendi");
});
