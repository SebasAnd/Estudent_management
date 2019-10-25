const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3000
const http = require('https')



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/*app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })

)*/

app.get('/Alumns/:id',db.getAlumns)
app.get('/Record/:id',db.getRecord)
app.get('/Materia/:id',db.getAsignature)


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
  
  