const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

//Rutas
//Listado de todos los generos
router.get('/', usersAPIController.list);
//Detalle de una película
router.get('/:id', usersAPIController.detail);

module.exports = router;