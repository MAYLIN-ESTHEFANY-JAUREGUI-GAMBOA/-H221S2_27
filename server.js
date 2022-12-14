var express = require('express');
var app = express();

//Recursos
app.use(express.static(__dirname+'/'));

app.listen(3000);
console.log('server on port 3000');


/* Ruta a los archivos */
app.get('/', (req, res) => {
    res.sendFile('/home/ubuntu/project/Colectico-Sur-Real/index.html')});

app.get('/', (req, res) => {
    res.sendFile('/home/ubuntu/project/Colectico-Sur-Real/css/styles.css')});

app.get('/', (req, res) => {
    res.sendFile('/home/ubuntu/project/Colectico-Sur-Real/html/Proyectos_Historicos.html')});

app.use(express.json());

