import { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  // const [input, setInput] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = () => {
  //   navigate(`/gigs?cat=${input}`);
  // };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <div className="text-9xl font-bold text-white text-center m-14">
            GigBig<span className="text-green-400 text-9xl">.</span>
          </div>
          <div className="text-6xl font-bold text-white text-center">
            Your go-to platform for expert{" "}
            <span className="text-green-400 font-bold"> services.</span>
          </div>
        </div>
        {/* <div className="right"><img src="./img/man.png" alt="" /></div> */}
      </div>
    </div>
  );
}

export default Featured;

{
  /* <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobil app"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div> */
}
{
  /* <div className="popular">
            <span>Popular:</span>
            <button>Electricals</button>
            <button>Furniture</button>
            <button>Dairy</button>
            <button>Tutor</button>
          </div> */
}
