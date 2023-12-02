const routerBrand = require("express").Router();
const ctrls = require('../controllers/Brand_ctrl');
routerBrand.post("/createBrand",ctrls.createBrand);
routerBrand.get("/getBrand/:linkId", ctrls.getBrand);
routerBrand.get("/getAllBrand", ctrls.getAllBrand);
routerBrand.put("/updateBrand/:idUpdate", ctrls.updateBrand);
// routerBrand.delete("/deleteBrand/:idDelete", ctrls.delBrand);
module.exports = routerBrand;