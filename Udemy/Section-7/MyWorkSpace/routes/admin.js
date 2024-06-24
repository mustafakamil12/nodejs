const express = require('express')

const productController = require('../controllers/products')

const router = express.Router()


// reach by  /admin/add-product => GET
router.get('/add-product',productController.getAddProduct);

// reach by  /admin/add-product => GET
router.post('/add-product',productController.postAddProduct)

module.exports = router;