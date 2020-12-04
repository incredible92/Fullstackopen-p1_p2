import React from "react";
import Part from "./part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={`part-${index}`} part={part} />
      ))}
    </div>
  );
};
export default Content;
