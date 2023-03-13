// var express = require('express');
// 

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//

const express = require('express');
const app=express();
var router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const mysql = require('mysql2');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

// Set up multer upload middleware
//const upload = multer({ storage: storage });

// Set up MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root@123',
  database: 'cvform'
});

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const upload = multer().single('pdf')

// Handle file upload
router.post('/upload', (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  const filename = req.file.originalname;
  const fileType = req.file.mimetype;
  const fileSize = req.file.size;

  const sql = 'INSERT INTO files (filename, fileType, fileSize) VALUES (?, ?, ?)';
  const values = [filename, fileType, fileSize];

  connection.query(sql, values, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error inserting file into database');
    }

    console.log('File inserted into database');
    return res.status(200).send('File uploaded successfully');
  });
});



module.exports = router;