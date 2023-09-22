import React from "react";
import "./home.css";
import Drag from "./Drag";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

import { TbLogout } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { useRef } from "react";
import Draggable from "react-draggable";

// IMAGE SAMPLES
import P1 from "../assets/1.jpg";
import P2 from "../assets/2.jpg";
import P3 from "../assets/3.jpg";
import P4 from "../assets/4.jpg";
import P5 from "../assets/5.jpg";
import P6 from "../assets/6.jpg";
import P7 from "../assets/7.jpg";
import P8 from "../assets/8.jpg";
import P9 from "../assets/9.jpg";
import P10 from "../assets/10.jpg";
import P11 from "../assets/11.jpg";
import P12 from "../assets/12.jpg";
import Picture from "./Picture";

const Home = () => {
  // Use state for loader
  const [getLoader, setGetLoader] = useState(true);
  //create an async method to fetch data
  useEffect(() => {
    setTimeout(() => {
      setGetLoader(false);
    }, 3000);
  });

  // RETURN DISPLAY

  const [pictureList, setPictureList] = useState([
    {
      id: "road",
      url: P1,
    },
    {
      id: "boy alone",
      url: P2,
    },
    {
      id: "bridge",
      url: P3,
    },
    {
      id: "sand bay",
      url: P4,
    },
    {
      id: "swim girl",
      url: P5,
    },
    {
      id: "city boy",
      url: P6,
    },
    {
      id: "lake view",
      url: P7,
    },
    {
      id: "sky high",
      url: P8,
    },
    {
      id: "mountain",
      url: P9,
    },
    {
      id: "ocean view",
      url: P10,
    },
  ]);

  //Handle search
  const [searchParam, setSearchParam] = useState("");

  // save ref for dragPicture and dragOverPicture
  const dragPicture = useRef(null);
  const dragOverPicture = useRef(null);

  // handle drag sorting
  const handleSort = () => {
    //duplicate pictures
    let _pictureList = [...pictureList];

    //remove and save the dragged picture
    const draggedPicture = _pictureList.splice(dragPicture.current, 1)[0];

    //switch the position
    _pictureList.splice(dragOverPicture.current, 0, draggedPicture);

    //reset
    dragPicture.current = null;
    dragOverPicture.current = null;

    //update the actual array
    setPictureList(_pictureList);
  };

  return getLoader ? (
    <Loader />
  ) : (
    <div id="home">
      <h1> Welcome to my Gallery</h1>
      <p>(Click/double click on image to drag arround)</p>
      <nav>
        {/* <Search onChange={(e) => e.target.value} /> */}

        <div id="searchbar">
          <input
            type="search"
            name="searchbar"
            id="search"
            placeholder="Search images..."
            onChange={(e) => setSearchParam(e.target.value)}
          />{" "}
          <FiSearch className="icon" />
        </div>

        <Link to="/" className="loglink">
          Logout <TbLogout />{" "}
        </Link>
      </nav>

      {/* <Drag /> */}
      <div className="image-container">
        {pictureList
          .filter((picture) => {
            if (searchParam === "") {
              return Picture;
            } else if (
              picture.id.toLowerCase().includes(searchParam.toLowerCase())
            ) {
              return Picture;
            }
          })
          .map((picture, index) => {
            return (
              <>
                <Draggable>
                  <div className="img-ctn">
                    <Picture
                      key={index}
                      url={picture.url}
                      id={picture.id}
                      alt="scene"
                      draggable
                      // onDragStart={() => {dragPicture.current = index}}
                      // onDragStart={() => console.log('hello')}
                      onDragEnter={() => (dragOverPicture.current = index)}
                      onDragEnd={handleSort}
                      onDragOver={(e) => e.preventDefault()}
                    />
                  </div>
                </Draggable>
              </>
            );
          })}
      </div>

      {/* END */}
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
