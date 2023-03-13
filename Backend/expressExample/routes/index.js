// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });




const express = require("express");
const multer = require("multer");
const mysql = require("mysql2");

const app = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname);
  },
});

const upload = multer({ storage: storage });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@123",
  database: "cvform",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

app.post("/api/upload-pdf", upload.any("pdf"), (req, res) => {
  if (!req.files) {
    console.log(req,"bhargav");
    return res.status(400).send("No file uploaded.");
  }
  const { originalname, filename, size } = req.files[0];
  const filePath = req.files[0].path;
  const sql = "INSERT INTO pdfs SET ?";
  const pdf = { name: originalname, path: filePath, size: size };
  db.query(sql, pdf, (err, result) => {
    if (err) throw err;
console.log("PDF uploaded successfully");
res.status(200).send("PDF uploaded successfully");
});
});

app.post("/addUser",(req,res)=>{
  var user=req.body;
  const detail={currentjob:user.currentjob, companyName:user.companyName, startDate:user.startDate, endDate:user.endDate, jobDescription:user.jobDescription, highestdegree:user.highestdegree, fieldOfStudy:user.fieldOfStudy, institutionName:user.institutionName, graduationDate:user.graduationDate, gpa:user.gpa, email:user.email, firstname:user.firstname, lastname:user.lastname, address:user.address, phone:user.phone}
  db.query("Insert into CVUsers SET ?",detail,(err,result)=>{
    if (err) throw err;
    console.log("Added user details and CV");
    res.status(200).send("User CV added successfully");
  })
})

app.post("/searchUser",(req,res)=>{
  var user=req.body;
  console.log(user);
  //const detail={}
  //const detail={currentjob:user.currentjob, companyName:user.companyName, startDate:user.startDate, endDate:user.endDate, jobDescription:user.jobDescription, highestdegree:user.highestdegree, fieldOfStudy:user.fieldOfStudy, institutionName:user.institutionName, graduationDate:user.graduationDate, gpa:user.gpa, email:user.email, firstname:user.firstname, lastname:user.lastname, address:user.address, phone:user.phone}
  db.query(`select * from CVUsers where firstname='${user.name}' and  email='${user.email}'`,(err,result)=>{
    if (err) throw err;
    console.log("Added user details and CV",result);
    res.status(200).send(result);
  })
})

module.exports = app;
