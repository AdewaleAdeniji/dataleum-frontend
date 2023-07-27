import React from "react";

const FlingDown = (props) => {
  return (
    <div className="fling-down"  {...props}>
      <img src={require("../../assets/fling-down.svg")} alt="fling down" />
    </div>
  );
};
export default FlingDown;
