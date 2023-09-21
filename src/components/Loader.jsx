import React from "react";
import "./loader.css";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div id="loader">
      <TailSpin
        id="spin"
        height="80"
        width="80"
        radius="9"
        color="red"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      <br />
      <p className="red"> . . . Loading</p>
    </div>
  );
};

export default Loader;
