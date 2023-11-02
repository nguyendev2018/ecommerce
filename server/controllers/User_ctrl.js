const { createAccessToken, createRefreshToken } = require("../middlewares/jwt");
const modelUser = require("../models/User_model");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
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
  const response = await modelUser.findOne({ email });
  if (response && (await response.isCorrectPassword(passwordHash))) {
    const { passwordHash, password, role, refreshToken, ...userData } =
      response.toObject();
    const accessToken = createAccessToken(response._id, role);
    const newRefreshToken = createRefreshToken(response._id);
    // Lưu refresh token vào database
    res.cookie(
      "refreshToken",
      { refreshToken: newRefreshToken },
      { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 }
    );
    // lưu refresh token
    await modelUser.findByIdAndUpdate(
      response._id,
      { refreshToken },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      accessToken,
      userData,
    });
  } else {
    throw new Error("Maybe error");
  }
});
const getId = asyncHandler(async (req, res) => {
  const { _id } = req.userToken;
  const userId = await modelUser
    .findById(_id)
    .select("-refreshToken -password -passwordHash -role");
  return res.status(200).json({
    success: false,
    rs: userId ? userId : " User not found",
  });
});
//client phải gửi lên serve 1 token
const refreshToken = asyncHandler(async (req, res) => {
  // lấy token từ cookies
  const cookie = req.cookies;
  //check xenm có token hay không
  if (!cookie && !cookie.refreshToken) {
    throw new Error("No refresh token in cookies");
  }
  // checktoken xem có hợp lệ hay không
  jwt.verify(
    cookie.refreshToken,
    process.env.JWT_SECRET,
    async (err, decode) => {
      if (err) throw new Error("Invalid refresh token");
      // check xem token có khớp với token đã lưu trong db
      //  findbyId không thể xét thêm điều kiện nên đổi sang findOne

      const response = await modelUser.findOne({
        id: decode._id,
        refreshToken: cookie.refreshToken,
      });
      return res.status(200).json({
        success: response ? true : false,
        newAccessToken: response
          ? createAccessToken(response._id, response.role)
          : "Refresh token not matched",
      });
    }
  );
});
const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie || !cookie.refreshToken) {
    throw new Error("No refresh token in cookies");
  }
  // xóa refreshtoken ở db
  await User.findOneAndUpdate(
    { refreshToken: cookie.refreshToken },
    { refreshToken: "" },
    { new: true }
  );
  // xóa refresh token ở cookie ở trình duyệt
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  return res.status(200).json({
    success: true,
    mes: "Logout is done",
  });
});
const getAllUsers = asyncHandler(async (req, res) => {
  const data = await modelUser.find();
  return res.status(200).json({
    success: data ? true : false,
    data,
  });
});
const delUser = asyncHandler(async (req, res) => {
  const { _id } = req.query;
  if (!_id) throw new Error("Missing Inputs");
  const response = await modelUser.findByIdAndDelete(_id);
  return res.status(200).json({
    success: response ? true : false,
    deleteUser: response
      ? `User with email ${response.email} deleted`
      : "No user delete",
  });
});
//update cho chính user được login
const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.userToken;
  if (!_id || Object.keys(req.body).length === 0) {
    throw new Error("Missing Inputs");
  }
  const data = await modelUser
    .findByIdAndUpdate(_id, req.body, { new: true })
    .select("-password -role");
  return res.status(200).json({
    success: data ? true : false,
    updateUser: data ? data : "No  user update",
  });
});
const updateUserByAdmin = asyncHandler(async (req, res) => {
  const { uid } = req.params;
  if (!uid) {
    throw new Error("Missing Inputs");
  }
  const data = await modelUser
    .findByIdAndUpdate(uid, req.body, { new: true })
    .select("-password -role");
  return res.status(200).json({
    success: data ? true : false,
    updateUser: data ? data : "No  user update",
  });
});
module.exports = {
  userRegister,
  userLogin,
  getId,
  refreshToken,
  logout,
  getAllUsers,
  delUser,
  updateUser,
  updateUserByAdmin,
};
