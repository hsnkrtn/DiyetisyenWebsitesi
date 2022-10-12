const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "diyetisyen_web_sitesi",
});
app.get("/", (req, res) => {
  db.query("SELECT * FROM carouselheader", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/Carouselimages", (req, res) => {
  db.query("SELECT * FROM carouselimages", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
   

    }
  });
});
app.get("/Iletisim", (req, res) => {
  db.query("SELECT * FROM contactinformations", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
   

    }
  });
});


app.get("/Hakkimizda", (req, res) => {
  db.query("SELECT * FROM aboutus", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/Galeri", (req, res) => {
  db.query("SELECT * FROM carouselimages", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/Makaleler", (req, res) => {
  db.query("SELECT * FROM articles", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/sendmessage", (req, res)=>{

const name = req.body.name;
const emailadress= req.body.emailadress;
const message= req.body.message;
const subject= req.body.subject;
db.query(`INSERT INTO diyetisyen_web_sitesi.appointmentcontact  (appointmentcontact_name,appointmentcontact_emailadress,appointmentcontact_subject,appointmentcontact_message) VALUES ("${name}","${emailadress}","${subject}","${message}")`,(err,res)=>{

}

)

})
app.listen(3001, () => {
  console.log("working");
});
