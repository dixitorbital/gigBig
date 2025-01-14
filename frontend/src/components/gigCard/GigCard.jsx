// import "./GigCard.scss";
// import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// // import newRequest from "../../utils/newRequest";
// import axios from "axios";

// const GigCard = ({ item }) => {
//   const { isLoading, error, data } = useQuery({
//     queryKey: [item.userId],
//     queryFn: () =>
//       axios
//         .get(`http://localhost:3000/api/users/${item.userId}`)
//         .then((res) => {
//           return res.data;
//         }),
//   });
//   return (
//     <Link to={`/gig/${item._id}`} className="link">
//       <div className="gigCard">
//         <img src={item.cover} alt="" />
//         <div className="info">
//           {isLoading ? (
//             "loading"
//           ) : error ? (
//             "Something went wrong!"
//           ) : (
//             <div className="user">
//               <img src={data.image || "/img/noavatar.jpg"} alt="" />
//               <span>{data.username}</span>
//             </div>
//           )}
//           <p>{item.desc}</p>
//           <div className="star">
//             <img src="./img/star.png" alt="" />
//             <span>
//               {!isNaN(item.totalStars / item.starNumber) &&
//                 Math.round(item.totalStars / item.starNumber)}
//             </span>
//           </div>
//         </div>
//         <hr />
//         <div className="detail">
//           <img src="./img/heart.png" alt="" />
//           <div className="price">
//             <span>STARTING AT</span>
//             <h2>$ {item.price}</h2>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default GigCard;

import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/users/${item.userId}`)
        .then((res) => {
          return res.data;
        }),
  });

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.image || "/img/noavatar.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        {/* <hr /> */}
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              {"\u20B9"} {item.price}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
