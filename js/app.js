import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { response } from 'express';

const app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }), cors());
app.use(bodyParser.json());
app.use(
  function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  res.setHeader('Access-Control-Allow-Methods', 'GET,  POST,DELETE,PUT');
  next();
  });

app.use(router);

let db={
    clientes:[]
}


app.get('/users/:nombre', (req, res,next) => {

  console.log(req.params.nombre);

  const cliente = db.clientes.find(cliente => cliente.nombre === `${req.params.nombre}`);
  console.log(cliente);
  res.send(cliente);

});


/**** EJEMPLO QUERY PARAMS : spruebaQueryParams?p1=v1&p2=v2 -> req.query={"p1":"v1","p2":"v2"} */
app.get('/pruebaQueryParams/', (req, res,next) => {

    res.send(req.query);

});

/***** EJEMPLO PATH PARAM : http://localhost:8084/pruebaRouteParams/MANOLO/MARTINEZ -> req.params={"nombre":"MANOLO","apellidos":"MARTINEZ"} */

app.get('/pruebaRouteParams/:nombre/:apellidos', (req, res,next) => {

    res.send(req.params);
});


/***** EJEMPLO POST */

app.post('/users',  (req, res, next) => {
    console.log("I got a request!")
    db.clientes.push(req.body);
    res.send(db.clientes);

});


app.listen(8084, function() {
    console.log("Node server running on http://localhost:8084/prueba");
});

