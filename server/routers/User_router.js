const routerUser = require("express").Router();
const ctrls = require("../controllers/User_ctrl");
const { verifyAccessToken,isAdmin } = require("../middlewares/verifyToken");
routerUser.post("/register",ctrls.userRegister);
routerUser.post("/login", ctrls.userLogin);
routerUser.get("/getUser",verifyAccessToken, ctrls.getId);
routerUser.post("/refreshToken", ctrls.refreshToken);
routerUser.post("/logout", ctrls.logout);
routerUser.get("/getAllUsers",[verifyAccessToken,isAdmin], ctrls.getAllUsers);
routerUser.delete("/deleteUser",[verifyAccessToken,isAdmin], ctrls.delUser);
routerUser.put("/updateUser",verifyAccessToken, ctrls.updateUserByAdmin);
routerUser.put("/updateUserAdmin?uid",[verifyAccessToken,isAdmin], ctrls.updateUserByAdmin);
module.exports = routerUser;