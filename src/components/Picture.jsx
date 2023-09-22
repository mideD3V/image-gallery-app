import React from 'react'

const Picture = ({id, url}) => {
  return   <>
    <img src={url} alt={id} className="image1" />
    <figcaption>{id}</figcaption>
  </>;
}

export default Picture