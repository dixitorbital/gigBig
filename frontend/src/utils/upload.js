import axios from "axios";

const upload = async (file) => {
  console.log(file);
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "project1");
  data.append("cloud_name", "drac3ad0f");
  for (let pair of data.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/drac3ad0f/image/upload",
      data
    );

    console.log(res);
    console.log(res.status);
    console.log("res.data^");
    const { url } = res.data; // need to destruture the res.data object
    console.log(url);

    console.log("here is ur url ^");
    return url;
  } catch (err) {
    console.log(err.message);
  }
};
export default upload;
