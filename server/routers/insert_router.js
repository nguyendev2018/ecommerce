const routerInsert = require('express').Router();
const ctrl_innert = require('../controllers/insertData');
routerInsert.post('/', ctrl_innert.insertProduct)
routerInsert.post('/cate', ctrl_innert.insertCategory)
module.exports = routerInsert;