import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send("user not found");
  }
  if (req.userId !== user._id.toString()) {
    return next(createError(403, "you can delete only your account"));
  }
  await User.findByIdAndDelete(req.params.id);
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send({
      accessToken: res.cookie.accessToken,
      message: "user delted successfully",
    });
};

export const getUser = async (req, res, next) => {
  // const token = req.cookies.accessToken;
  // console.log(token);
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send("user not found");
  }
  console.log(user); //
  res.status(200).json(user);
};

export const findallusers = async (req, res) => {
  const data = await User.find();
  if (!data) {
    return res.status(400).send("Something went wrong");
  }
  res.status(200).send({ count: data.length, info: data });
};
