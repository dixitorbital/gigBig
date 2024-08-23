import User from "../models/user.model.js";
import OTP from "../models/otp.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
// export const register = async (req, res, next) => {
//   try {
//     const hash = bcrypt.hashSync(req.body.password, 10);
//     const newUser = new User({
//       ...req.body,
//       password: hash,
//     });
//     await newUser.save();
//     res.status(201).send("New user created");
//   } catch (err) {
//     next(err);
//   }
// };
export const register = async (req, res, next) => {
  try {
    console.log("backend reg", req.body);

    const { otp } = req.body.otp ? req.body.otp : undefined;
    // const { email } = req.body.user;
    console.log("otp", otp);
    const email = req.body.userdata.email;
    console.log(email);
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    console.log(response[0]);
    if (response.length === 0 || otp !== response[0].otp) {
      console.log("error while validating otp");
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }
    console.log("im here in register func");
    const hash = bcrypt.hashSync(req.body.userdata.password, 10);
    const newUser = new User({
      ...req.body.userdata,
      password: hash,
    });
    console.log(newUser);
    await newUser.save();
    res.status(201).send("New user created");
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    //console.log(user);
    if (!user) {
      return next(createError(404, "User not Found"));
    }
    const iscorrect = await bcrypt.compare(req.body.password, user.password);
    if (!iscorrect) {
      return next(createError(400, "username or password is incorrect"));
    }
    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );
    const { password, ...userinfo } = user._doc;
    console.log(userinfo);
    req.userId = user._id;
    req.isSeller = user.isSeller;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(userinfo);
  } catch (err) {
    console.log(err.message);
  }
};
export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out");
};
