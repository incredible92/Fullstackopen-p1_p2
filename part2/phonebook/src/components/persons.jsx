import React from "react";

const Persons = (props) => {
  var filteredNames = props.persons;
  if (props.showResults) {
    filteredNames = props.persons.filter((person) =>
      person.name.toLowerCase().includes(props.showResults.toLowerCase())
    );
  }
  

export default Persons;
