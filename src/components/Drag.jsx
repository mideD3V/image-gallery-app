import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

import {
  
} from '@dnd-kit/core'

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

const Drag = () => {
  const [pictureList, setPictureList] = useState([
    {
      id: 1,
      url: P1,
    },
    {
      id: 2,
      url: P2,
    },
    {
      id: 3,
      url: P3,
    },
    {
      id: 4,
      url: P4,
    },
    {
      id: 5,
      url: P5,
    },
    {
      id: 6,
      url: P6,
    },
    {
      id: 7,
      url: P7,
    },
    {
      id: 8,
      url: P8,
    },
    {
      id: 9,
      url: P9,
    },
    {
      id: 10,
      url: P10,
    }
  ]);

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
  return (
    <div className="image-container">
      {pictureList.map((picture, index) => {
        return (
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
        );
      })}
    </div>
  );
};

export default Drag;
