import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-10 ${
        props.className ? props.className : ""
      }`}
      id={props.id}
    >
      {props.children}
    </div>
  );
};

export default Container;