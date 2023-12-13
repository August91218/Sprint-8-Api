const express = require('express');
const path = require('path');
const app = express();

app.use('/uploads', express.static(path.join(__dirname, '../public/img')));
/**
 * CORS: es un paquete que simplifica la configuración de políticas de acceso cruzado (CORS) en 
 * Express.
 */
const cors = require("cors");

/**
 * Especifica que se permite el acceso desde cualquier origen (origin: "*")
 * Esto permite que cualquier dominio realice solicitudes al servidor
 */
let corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

/**
 * Esto define una función llamada allowCrossDomain, que actúa como un middleware personalizado.
 * La función toma tres argumentos: req (la solicitud), res (la respuesta) y next (una función que
 * permite pasar la solicitud al siguiente middleware
 */
let allowCrossDomain = function(req, res, next) {
  /**
   *  Se establecen varias cabeceras de respuesta (res.header) para permitir que diferentes dominios 
   *  realicen solicitudes a tu servido
   */
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
  }

  // Se ejecuta el middleware creado
app.use(allowCrossDomain);


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Aquí llamo a la ruta de las api de products
const apiProductsRouter = require('./routes/api/products')
//Aquí llamo a la ruta de las api de actors 
const apiUsersRouter = require('./routes/api/users')


app.use(express.static(path.resolve(__dirname, '../public')));


//Aquí creo la colección de mis recursos de movies (APIs)
app.use('/api/products',apiProductsRouter);
app.use('/api/users',apiUsersRouter);

/* app.use('/favorites', (req, res)  => res.render('favoritas'));
app.use('/:id', (req, res)  => res.render('formulario.ejs'));
app.use('/', (req, res)  => res.render('home')); */




//Activando el servidor desde express
app.listen('3031', () => console.log('Servidor corriendo en el puerto 3031'));
