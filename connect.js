
var express = require('express');
  

var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + "/index.html");
}); 





const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

//Recursos
app.use(express.static(__dirname+'/'));






var mysql = require("mysql");

var cors = require("cors");

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
	host: "52.7.42.231",
	user: "maylin",
	password: "root",
	database: "colectivo_sur_real"
});

conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });

  

app.post("/api/usuario", (req, res) => {
	let data = {
    	nomuser: req.body.NOMUSER,
    	emauser: req.body.EMAUSER,
    	celuser: req.body.CELUSER,
    	prouser: req.body.PROUSER,
    	ldpuser: req.body.LDPUSER
	};
	let sql = "INSERT INTO usuario SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
  });