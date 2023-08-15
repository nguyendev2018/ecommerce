const routerUser = require("express").Router();
const ctrls = require("../controllers/User_ctrl");
routerUser.post("/register",ctrls.userRegister);
routerUser.post("/login", ctrls.userLogin);
module.exports = routerUser 