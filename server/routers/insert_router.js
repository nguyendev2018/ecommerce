const routerInsert = require('express').Router();
const ctrl_innert = require('../controllers/insertData');
routerInsert.post('/product', ctrl_innert.insertProduct)
routerInsert.post('/category', ctrl_innert.insertCategory)
module.exports = routerInsert;