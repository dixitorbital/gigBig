// utils/mailSender.js
import nodemailer from "nodemailer";

export const mailSender = async (email, title, body) => {
  console.log("inside mailsender");
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "crawford.shields@ethereal.email",
        pass: "MsyCq9zr1XkD8A9dQJ",
      },
    });

    console.log(transporter.options);
    try {
      console.log("email:", email);
      let info = await transporter.sendMail({
        from: "noreply@gigbig.com Admin",
        to: email,
        subject: title,
        html: body,
      });
      console.log("Email info: ", info);
      return info;
    } catch (err) {
      console.log("error while sending email ", err);
    }
  } catch (error) {
    console.log(error.message);
  }
};
