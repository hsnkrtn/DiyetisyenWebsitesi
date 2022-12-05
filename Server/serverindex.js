const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

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
app.post("/addCarouselImage", (req, res) => {
  const carouselimage = req.body.carouselimage;

  db.query(
    `INSERT INTO diyetisyen_web_sitesi.carouselimages (carouselimage_name)  VALUES ("${carouselimage}")`,
    (err, res) => {
      if (err) {
        console.log(err);
      }
    }
  );
});