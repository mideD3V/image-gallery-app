import React from "react";
import "./home.css";
import Drag from "./Drag";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

import { TbLogout } from "react-icons/tb";
import { RiSearchFill } from "react-icons/ri";

const Home = () => {
  // Use state for loader
  const [getLoader, setGetLoader] = useState(true);

  //create an async method to fetch data
  useEffect(() => {
    setTimeout(() => {
      setGetLoader(false);
    }, 3000);
  });

  return getLoader ? (
    <Loader />
  ) : (
    <div id="home">
      <h1> Welcome to my Gallery</h1>
      <p>(Click/double click on image to drag arround)</p>
      <nav>
        <Search />
        <Link to="/" className="loglink">
          Logout <TbLogout />{" "}
        </Link>
      </nav>

      <Drag />

      <div className="footer">
        <p> &#174; All rights Reserved 2023</p>
        <p>
          Developed by{" "}
          <a
            href="http://www.twitter.com/ayobilli0ns"
            target="_blank"
            rel=" noreferrer"
          >
            {" "}
            Ayomide Oke
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
