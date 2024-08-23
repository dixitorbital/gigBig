// import "./Home.scss";
// import Featured from "../../components/featured/Featured.jsx";
// function Home() {
//   return (
//     <div className="home">
//       <Featured />
//       <div className="features">
//         <div className="container">
//           <div className="item">
//             <h1>A whole world of freelance talent at your fingertips</h1>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               The best for every budget
//             </div>
//             <p>
//               Find high-quality services at every price point. No hourly rates,
//               just project-based pricing.
//             </p>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Quality work done quickly
//             </div>
//             <p>
//               Find the right freelancer to begin working on your project within
//               minutes.
//             </p>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Protected payments, every time
//             </div>
//             <p>
//               Always know what you will pay upfront. Your payment is not
//               released until you approve the work.
//             </p>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               24/7 support
//             </div>
//             <p>
//               Find high-quality services at every price point. No hourly rates,
//               just project-based pricing.
//             </p>
//           </div>
//           <div className="item">
//             <video src="./img/video.mp4" controls />
//           </div>
//         </div>
//       </div>
//       <div className="features dark">
//         <div className="container">
//           <div className="item">
//             <h1>
//               fiverr <i>business</i>
//             </h1>
//             <h1>
//               A business solution designed for <i>teams</i>
//             </h1>
//             <p>
//               Upgrade to a curated experience packed with tools and benefits,
//               dedicated to businesses
//             </p>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Connect to freelancers with proven business experience
//             </div>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Get matched with the perfect talent by a customer success manager
//             </div>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Manage teamwork and boost productivity with one powerful workspace
//             </div>
//             <button>Explore</button>
//           </div>
//           <div className="item">
//             <img src="" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import "./Home.scss";
import Featured from "../../components/featured/Featured.jsx";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { SiCashapp } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
function Home() {
  return (
    <div className="home">
      <Featured />
      <div className="features">
        <div className="container gap-5">
          <div className="item">
            <div className=" text-5xl font-semibold">
              <h1>
                <i>Professional Services</i>
              </h1>

              {/* <h1>
                <i>Services at Your Fingertips</i>
              </h1> */}
            </div>
            <div className=" text-3xl font-semibold">
              <h1>
                <i>A Solution Designed for Your Daily Needs</i>
              </h1>
            </div>
            <div className="title">
              <img src="./img/check.png" alt="Check" />
              The Best for Every Need
            </div>
            <p>
              Find high-quality services for all your household and professional
              needs. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <FaShippingFast size={30} />
              Quality Work Done Quickly
            </div>
            <p>
              Find the right professional to begin working on your order within
              minutes.
            </p>
            <div className="title">
              <RiSecurePaymentLine size={30} />
              Protected Payments, Every Time
            </div>
            <p>
              Always know what you will pay upfront. Your payment is not
              released until you approve the work.
            </p>
            <div className="title">
              <BsPersonWorkspace size={30} />
              24/7 Support
            </div>
            <p>
              Our support team is available around the clock to help you with
              any questions or concerns.
            </p>
          </div>
          <img src="./img/front4.png" height={450} width={450} />
        </div>
      </div>
      {/* <div className="features ">
        <div className="container">
          <div className="item">
            <div className=" text-5xl font-semibold">
              <h1>
                <i>Professional Services</i>
              </h1>
              <h1>
                <i>A Solution Designed for Home and Business</i>
              </h1>
            </div>

            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to all your service needs.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="Check" />
              Connect to Professionals with Proven Experience
            </div>
            <p>
              From electricians to furniture repair, find experienced
              professionals for any task.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="Check" />
              Get Matched with the Perfect Talent by a Customer Success Manager
            </div>
            <p>
              Our team will help you find the best fit for your specific project
              needs.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="Check" />
              Manage Teamwork and Boost Productivity with One Powerful Workspace
            </div>
            <p>
              Use our platform to coordinate multiple projects and professionals
              efficiently.
            </p>
          </div>
        </div>
      </div> */}
      <div className="features">
        <div className="container">
          <div className="item">
            <div className=" text-5xl font-semibold">
              <h1>
                For <i>Sellers</i>
              </h1>
            </div>

            <h1>
              A Solution Designed for <i>Home and Business</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to all your service needs.
            </p>
            <div className="title">
              <MdConnectWithoutContact size={30} /> Connect to clients with need
              of your awesome quality services.
            </div>

            <div className="title">
              <MdAutoGraph size={30} />
              Increase visibilty of services you offer with proof of your work.
            </div>

            <div className="title">
              <IoChatbubblesOutline size={30} />
              Present your services and communicate to clients with ease using
              integrated chat functionality
            </div>
            <div className="title">
              <SiCashapp size={30} />
              Recieve payments as soon as you complete your orders.
            </div>
            <div className="title">
              <img src="./img/check.png" alt="Check" />
              And a lot more...
            </div>
          </div>
          <img src="./img/money4.png" height={540} width={450} />
        </div>
      </div>
      <div className="features">
        <div className="container">
          <div className="item">
            <div className=" text-5xl font-semibold">
              <i>Our awesome tech team is always ready to help you 24 x 7</i>
            </div>
            {/* <div className="title">
              <img src="./img/check.png" alt="Check" />
              Drop us a message or make a contact using phone call
            </div> */}
            <p>
              {" "}
              <FaPhoneAlt /> Make a phone call at 12345xxxxx
            </p>
            <p>
              <MdEmail /> Send us an email at techelp@gigbig.in
            </p>
            <p>
              Our support team is available around the clock to help you with
              any questions or concerns.
            </p>
          </div>

          <img src="./img/contact4.png" height={540} width={450} />
        </div>
      </div>
    </div>
  );
}

export default Home;
