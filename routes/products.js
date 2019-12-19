var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController')

router.get('/all', productController.listado)

module.exports = router