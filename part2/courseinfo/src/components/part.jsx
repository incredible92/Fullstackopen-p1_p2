import React from "react";

const Part = ({ part }) => {
  return (
    <div>
      <p>
        {part.title} {part.exercises}
      </p>
    </div>
  );
};
export default Part;
