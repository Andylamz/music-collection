import express from "express";
import md5 from "md5";
import jwt from "jsonwebtoken";
import UserModel from "../Models/UserModel.js";
const router = express.Router();

router.post("/create", async (req, res) => {
  const username = req.body.username;
  const password = md5(req.body.password);
  try {
    const data = await UserModel.create({ username, password });
    return res.status(200).json({ code: "1111", msg: "created", data });
  } catch (err) {
    return res
      .status(500)
      .json({ code: "0000", msg: "Username already existed", data: null });
  }
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = md5(req.body.password);
  try {
    const data = await UserModel.findOne({ username, password });
    if (!data) {
      return res
        .status(401)
        .json({ code: "1111", msg: "Wrong Username or Password", data: null });
    }

    // If logged in:

    const accessToken = jwt.sign(
      { id: data._id, username: data.username },
      process.env.ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { id: data._id, username: data.username },
      process.env.REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true });

    return res
      .status(200)
      .json({ code: "0000", msg: "Logged in successfully", data: accessToken });
  } catch (err) {
    return res
      .status(400)
      .json({ code: "11112", msg: "Something went wrong", data: null });
  }
});

router.post("/logout", async (req, res) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res
    .status(200)
    .json({ code: "0000", msg: "logged out successfully", data: null });
});
export default router;
