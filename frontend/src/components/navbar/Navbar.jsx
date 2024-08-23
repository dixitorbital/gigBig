import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import newRequest from "../../utils/newRequest";
import axios from "axios";
import { IoIosLogOut } from "react-icons/io";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    console.log(currentUser.username);
  }
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/api/auth/logout"); // its POST  in tut
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">GigBig</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          {currentUser && (
            <>
              <Link className="nav_options" to="/">
                <span>Home</span>
              </Link>
              <Link className="nav_options" to="/gigs">
                <span>Gigs</span>
              </Link>
              <Link className="nav_options" to="/orders">
                <span>Orders</span>
              </Link>
              <Link className=" nav_options" to="/messages">
                <span>Chats</span>
              </Link>
            </>
          )}

          {/* <span>English</span> */}
          {/* {!currentUser?.isSeller && <span>Become a Seller</span>} */}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.image || "/img/noavatar.jpeg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link logout" onClick={handleLogout}>
                    Logout <IoIosLogOut />
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="nav_options">
                Sign in
              </Link>
              <Link to="/register">
                <div className="nav_options">
                  <button>Join</button>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
