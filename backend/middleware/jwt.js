import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  // console.log(req.cookies);
  const token = req.cookies.accessToken;
  // console.log(token);
  // console.log("verifying token .....");
  if (!token) return res.status(403).send("you are not logged in ");
  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
