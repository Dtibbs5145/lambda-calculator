import React from "react";

const NumberButton = (props) => {
  return (
    <>
    <button>{props.banana}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;