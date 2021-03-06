import React from "react";

const Persons = (props) => {
  var filteredNames = props.persons;
  console.log({ persons: props.persons });
  if (props.showResults) {
    filteredNames = props.persons.filter((person) =>
      person.name.toLowerCase().includes(props.showResults.toLowerCase())
    );
  }
  console.log({ filteredNames });

  const disp = () =>
    filteredNames.map((person) => (
      <li key={person.name}>
        {" "}
        {person.name} {person.number}{" "}
        <button onClick={() => props.deleteP(person.id)}>delete</button>
      </li>
    ));

  return <ul>{disp()}</ul>;
};

export default Persons;
