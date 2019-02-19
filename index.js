
/*EXAMPLE DATABASE FUNCTION
app.get('/[insert route here]', function(req, res) {
    con.query([insert query here], function (err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify(result))
      });
});
*/

const express = require('express')
const app = express();
var cors = require('cors')
const path = require('path');
var http = require('http');
var mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(express.static(__dirname));

var con = mysql.createConnection({
    host: "70.32.28.7",
    user: "promethean",
    password: "!!Cis440",
    database: 'prometheandb'
  });
  

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
//     next();
//   })
//http.createServer(app).listen(process.env.PORT);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/home.html'));
});

app.get('/app/test-pull', function(req, res) {
    con.query("SELECT * FROM user", function (err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify(result))
      });
});

app.post('/api/clear', function(req, res) {

    con.query(`DELETE FROM user`, function (err, result, fields) {
        if (err) throw err;
        res.send({'success': 'true'})
      });
});

app.get('/api/create-user', function(req, res) {

    console.log(req.query)
    let q = req.query
    let queryString = `INSERT INTO USER (username, password, firstname, lastname, email, zipcode, active, admin) VALUES ('${q.username}', '${q.password}', '${q.fName}', '${q.lName}', '${q.email}', ${q.zip}, 1, 0)`
    console.log(queryString)
    con.query(queryString, function (err, result, fields) {
        if (err) throw err;
        res.send({'success': 'true'})
      });
});

app.get('/api/get-items', function(req, res) {

    con.query('select * from item', function (err, result, fields) {
        if (err) throw err;
        res.send(result)
      });
});


app.get('/app/addAnItem', function(req, res) {
    con.query('select item_name, item_category, item_zipcode, item_description from item', function (err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify(result))
app.get('/api/verify-user', function(req, res) {

    console.log(req.query)
    let q = req.query
    console.log(q)
    let queryString = `SELECT * FROM USER WHERE username = '${q.username}' and password = '${q.password}'`
    console.log(queryString)
    con.query(queryString, function (err, result, fields) {

        if (err) throw err;
        res.send(result)
      });
});

// app.post('/app/test-pull', function(req, res) {
//     res.send('hello!');
    // con.query("SELECT * FROM user", function (err, result, fields) {
    //     if (err) throw err;
    //     res.send(JSON.stringify(result))
    //   });
//});


// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });



// app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


// http.createServer(function (request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'text/plain',
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
//     });
// });



// app.get('/app/data-test ', function(req, res) {
//     res.sendFile(path.join(__dirname + '/app/data-test.html'));
// });




app.listen('8000', () => {
    console.log('Example app listening on port 8000!')
  });
  