 
const express = require('express'); 
const app = express();
const hostname = 'localhost';
const port = 1324;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'db5.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static("../Formulario"));




// tabela 
app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM tabela ORDER BY IDcurriculo COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
  });
  
  // Insere um registro  (é o C do CRUD - Create)
  app.post('/userinsert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    sql = "INSERT INTO tabela ( Idade, Contato) VALUES ('" + req.body.Idade + "', '" + req.body.Contato + "')";
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); // Fecha o banco
    res.end();
  });
  
  // Atualiza um registro (é o U do CRUD - Update)
  app.post('/userupdate', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    sql = "UPDATE tabela SET Formacao = '" + req.body.Formacao + "' WHERE IDcurriculo = '" + req.body.IDcurriculo+"'";
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
  });














  
// formulario
app.get('/formuser', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
var sql = 'SELECT * FROM form ORDER BY IDform COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});

    
  // Insere um registro  (é o C do CRUD - Create)
  app.post('/forminsert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    sql = "INSERT INTO form (Formacao) VALUES ('" + req.body.Formacao + "')";
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); // Fecha o banco
    res.end();
  });

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  
  