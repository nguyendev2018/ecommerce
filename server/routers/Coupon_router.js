const routerCoupon = require("express").Router();
const ctrls = require('../controllers/Coupon_ctrl');
routerCoupon.post("/createCoupon",ctrls.createCoupon);
routerCoupon.get("/getAllCoupon",ctrls.getAllCoupon);
routerCoupon.put("/updateCoupon",ctrls.updateCoupon);
routerCoupon.delete("/deleteCoupon/:linkId",ctrls.deleteCoupon);
// routerCoupon.get("/getCoupon/:linkId", ctrls.getCoupon);
// routerCoupon.get("/getAllCoupon", ctrls.getAllCoupon);
// routerCoupon.put("/updateCoupon/:idUpdate", ctrls.updateCoupon);
// routerCoupon.delete("/deleteCoupon/:idDelete", ctrls.delCoupon);
module.exports = routerCoupon;