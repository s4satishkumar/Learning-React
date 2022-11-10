import React from "react";

const Nojsx = () => {
  return React.createElement(
    "div",
    {id:"hello" , className:"dummyclass"},
    React.createElement("h1", null, "this is no jsx component")
  );
};

export default Nojsx;
