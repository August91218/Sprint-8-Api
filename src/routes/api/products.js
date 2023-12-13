const express = require('express');
const router = express.Router();
const productApiController = require('../../controllers/api/productApiController');

//Rutas
//Listado de películas
router.get('/', productApiController.list);
//Detalle de una película
 router.get('/:id', productApiController.detail);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10
/*router.get('/recomended/:rating', moviesAPIController.recomended);
//Agregar una película
router.post('/create', moviesAPIController.create);
//Modificar una película
router.put('/update/:id', moviesAPIController.update);
//Eliminar una película
router.delete('/delete/:id', moviesAPIController.destroy); */

module.exports = router;