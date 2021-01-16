import React from "react";

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addDetails}>
        <div>
          name: <input value={props.newName} onChange={props.handleChange} />{" "}
          <br />
          number:{" "}
          <input value={props.newNumber} onChange={props.handleNumberChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
export default PersonForm;
