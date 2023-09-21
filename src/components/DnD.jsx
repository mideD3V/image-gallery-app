import React, { useState } from 'react'
import Draggable from "react-draggable";
import {DragDropContext, Droppable} from 'react-beautiful-dnd'


// IMAGE SAMPLES
import P1 from "../assets/1.jpg";
import P2 from "../assets/p5.jpg";
import P3 from "../assets/p3.jpg";
import Picture from './Picture';


const DnD = () => {
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
    }
  ]);


  return (
    <div className="image-container">
      {pictureList.map((id, picture, index) => {
          return (
            <DragDropContext>
              <div>
                <Picture
                  url={picture.url}
                  key={index}
                  id={picture.id}
                  alt="scene"
                />
              </div>
            </DragDropContext>
          );
      })}
    </div>
  );
};

export default DnD