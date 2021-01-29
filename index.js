const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(cors({ origin: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Config ejs //
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fullstackeletro'
    })
    connection.query("SELECT * FROM produto", (err, rows) => {
        if(!err){
            console.log('Resultado: ', rows);
        }else{
            console.log('Erro ao realizar a consulta');
        }
        res.json(rows);
    })
})

app.get('/contatos', function (req, res) {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'fullstackeletro'
        })
        connection.query("SELECT * FROM comentarios", (err, rows) => {
            if(!err){
                console.log('Resultado: ', rows);
            }else{
                console.log('Erro ao realizar a consulta');
            }
            res.json(rows);
        })
})

app.get('/contatos', function (req, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fullstackeletro'
    })
    connection.query("SELECT * FROM pedidos", (err, rows) => {
        if(!err){
            console.log('Resultado: ', rows);
        }else{
            console.log('Erro ao realizar a consulta');
        }
        res.json(rows);
    })
})



app.listen(3006, function () {
    console.log("SERVIDOR RODANDO COM EXPRESS")
});
