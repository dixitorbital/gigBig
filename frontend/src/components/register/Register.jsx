import { useState } from "react";
import upload from "../../utils/upload.js";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [file, setFile] = useState(null);
  const [btn, setBtn] = useState();
  const [otp, setOtp] = useState();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
    country: "",
    isSeller: false,
    desc: "",
    pincode: "",
  });

  const navigate = useNavigate();
  //const url_cloud = "https://api.cloudinary.com/v1_1/drac3ad0f/image/upload";

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleOTP = (e) => {
    setOtp((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    // try {
    //   const url = await upload(file); // UPLOADING IMAGE TO CLOUD GIVES A URL OF INTERNET THAT WE USE IN OUR MONGODB AS RAW DATA
    //   console.log(url);
    //   if (url != undefined) {
    //     console.log("im here ✌️✌️✌️");
    //     try {
    //       await axios.post("http://localhost:3000/api/auth/register", {
    //         ...user,
    //         image: url,
    //       });
    //       setUser(user);
    //       navigate("/login");
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   } else {
    //     console.log("image could not be uploaded to cloudinary ☹️☹️");
    //   }
    // } catch (err) {
    //   console.log("error from upload function ");
    //   console.log(err);
    // }
    const url = await upload(file); // UPLOADING IMAGE TO CLOUD GIVES A URL OF INTERNET THAT WE USE IN OUR MONGODB AS RAW DATA
    console.log(url);
    console.log("im here ✌️✌️✌️");
    try {
      const userdata = { ...user, image: url };
      await axios.post("http://localhost:3000/api/auth/register", {
        userdata,
        otp,
      });
      setUser(user);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      console.log(user.email);

      const result = await axios.post("http://localhost:3000/api/sendotp", {
        email: user.email,
      });
      console.log("result", result);
      if (result.status != 200) {
        setBtn("P");
        setBtn("Otp Sent to Email Above");
      }
    } catch (err) {
      setBtn("Send Otp");
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
            required={true}
          />

          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
            required={true}
          />
          <button type="submit" onClick={handleOtp}>
            {btn ? <p>Otp Sent to Email Above</p> : <p>Send Otp</p>}
          </button>
          {btn ? <p>Otp is valid for 20 minutes</p> : ""}

          <input
            name="otp"
            type="text"
            placeholder="enter otp"
            onChange={handleOTP}
            required={true}
          />
          <label htmlFor="">Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            required={true}
          />
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
            required={true}
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
export default Register;

// UPLOADING DATA TO CLOUD
// const upload = async (file) => {
//   // file = "/img/noavatar.jpeg";
//   console.log(file);
//   const data = new FormData();
//   data.append("file", file);
//   data.append("upload-preset", "preset1");
//   console.log(data.file);
//   try {
//     const res = await axios.post(url_cloud, { data });
//     // const { img } = await fetch(url_cloud, {
//     //   method: "POST",
//     //   body: data,
//     // });
//     const { url } = res.data;
//     console.log(url);
//     return url;
//   } catch (err) {
//     console.log(" error 😭😭😭😭😭😭😭😭");
//   }
// };
