import React from "react";
import "./heading.css";

const Heading = (props) => {
  return (
    <div className="heading_text">
      <h1 className="p__Mellow" style={{ fontSize: props.titleFontSize }}>
        {props.title}
      </h1>
      <p
        className="p__Aeonik"
        style={{ fontSize: props.subtextFontSize, color: props.color }}
      >
        {props.subtext}
      </p>
    </div>
  );
};

export default Heading;
