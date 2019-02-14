const express = require('express')
const app = express();
var cors = require('cors')
const path = require('path');
var http = require('http');
var mysql = require('mysql');

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port 8000!')
  });
  

var con = mysql.createConnection({
  host: "70.32.28.7",
  user: "promethean",
  password: "!!Cis440",
  database: 'prometheandb'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



app.use(express.static(__dirname));
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });
});


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/home.html'));
});

app.get('/app/data-test ', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/data-test.html'));
});

app.post('/test-pull', function(req, res) {
    con.query("SELECT * FROM user", function (err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify(result))
      });
});