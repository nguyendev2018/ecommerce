const modelUser = require("../models/User_model");
const asyncHandler = require("express-async-handler");
const userRegister = asyncHandler(async (req, res) => {
  const new_account = await modelUser.create(req.body);
  return res.status(200).json({
    success: new_account ? true : false,
    messRegister: new_account
      ? "Register is successfully"
      : "Something went wrong",
  });
});
const userLogin = asyncHandler(async (req, res) => {
  const { email, passwordHash } = req.body;
  if (!email || !passwordHash) {
    return res.status(400).json({
      success: false,
      mes: "Missing Inputs",
    });
  }
  const response = await modelUser.findOne({email});
  if (response && await response.isCorrectPassword(passwordHash)) {
    const {passwordHash, password , role , ...userData} = response.toObject()
    return res.status(200).json({
      success: true,
      userData,
    });
  } else {
    throw new Error("Maybe error");
  }
});
module.exports = { userRegister, userLogin };
