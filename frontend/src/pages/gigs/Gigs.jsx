import { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Gigs() {
  const [sort, setSort] = useState("price");
  const [open, setOpen] = useState(false);
  // const [querystring, setquerystring] = useState("");
  const minRef = useRef();
  const maxRef = useRef();
  const catRef = useRef();
  const pinRef = useRef();
  const navigate = useNavigate();
  // const { search } = useLocation();
  // const query = search.substring(1);
  // console.log(query);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs?min=${minRef.current.value}&max=${maxRef.current.value}&cat=${catRef.current.value}&sort=${sort}&pincode=${pinRef.current.value}`
        ) //
        .then((res) => {
          return res.data;
          //   return res.data.gigs;
        }),
  });

  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  return (
    <div className="gigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
        </div>

        <div className="menu">
          <div className="left">
            <span>Filters : </span>
            {/* <input ref={catRef} type="string" placeholder="category" /> */}
            <label htmlFor="">Category</label>
            <select ref={catRef} onClick={apply} name="cat" id="cat">
              <option value="">All Gigs</option>
              <option value="electricals">Electrical</option>
              <option value="furniture">Furniture</option>
              <option value="dairy">Dairy</option>
              <option value="tutor">Tutors</option>
              <option value="music">Music</option>
              <option value="shopkeeper">ShopKeeper</option>
              <option value="ro repair">RO Repair</option>
            </select>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <input ref={pinRef} type="number" placeholder="pincode" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right" onClick={() => setOpen(!open)}>
            <span className="sortBy">Sort by</span>
            {sort === "price" ? "Newest" : "Price"}
            <img src="./img/down.png" alt="" />
            {open && (
              <div className="rightMenu">
                {sort === "price" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("price")}>Price</span>
                )}
                <span onClick={() => reSort("price")}>Price</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? navigate("/login")
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
