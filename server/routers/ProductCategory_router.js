const routerProductCategory = require("express").Router();
const ctrlsProductCategory = require("../controllers/ProductCategory_ctrl");
routerProductCategory.post('/createCategory', ctrlsProductCategory.createProductCategories);
routerProductCategory.get('/getCategory', ctrlsProductCategory.getProductCategories);
routerProductCategory.put('/updateCategory/:linkId', ctrlsProductCategory.updateProductCategories);
routerProductCategory.delete('/deleteCategory/:linkId', ctrlsProductCategory.deleteProductCategories);
module.exports = routerProductCategory;