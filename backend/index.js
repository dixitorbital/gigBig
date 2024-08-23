import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoute from "./routes/user.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import messageRoute from "./routes/message.route.js";
import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import authRoute from "./routes/auth.route.js";
import otpRoute from "./routes/otp.route.js";

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
console.log("backend is running");
dotenv.config();
const app = express();
// const corsOptions = {
//   origin: "http://localhost:5173", // Allow only your frontend domain
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   //credentials: true, // Allow credentials (cookies, authorization headers, etc.)
// };
// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));
//{ origin: "http://localhost:5173/", credentials: true } // "/" is creating problem in the cors
// rule and it should not be the "*" for origin when using credentials true
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://api.cloudinary.com/v1_1/drac3ad0f/image/upload",
    ],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/sendotp", otpRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/orders", orderRoute);
app.use("/api/reviews", reviewRoute);
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "something went wrong";

  res.status(errStatus).send(errMessage);
  next();
});

const dbstring = process.env.dbstring;

console.log(dbstring);
mongoose.connect(dbstring, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => {
  console.log("Successfully connected to MongoDB!");
  app.listen(3000, () => {
    console.log(`app listening to port :3000`);
  });
});
