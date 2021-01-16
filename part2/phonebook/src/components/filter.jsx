import React from "react";

const Filter = (props) => {
  return (
    <div>
      filter shown with{" "}
      <input value={props.showResults} onChange={props.filterChange} />
    </div>
  );
};

export default Filter;
