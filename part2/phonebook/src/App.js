import React, { useState } from 'react'

import personForm from './components/personForm.jsx'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Ojonimi' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState("");
  const generateId = () => Math.max(...persons.map((person) => person.id)) + 1;

  const addPerson = (event) => {
    event.preventDefault();
    if (!newName || !newNumber) return;

  }
  const handleNameInput = (e) => setNewName(e.target.value);
  const handleNumberInput = (e) => setNewNumber(e.target.value);
  const newPerson = {
    name: newName,
    number: newNumber,
    id: generateId(),
  };
   
  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Add name</h2>
     <personForm 
     name={newName}
     number={newNumber}
     nameInput={handleNameInput}
     numberInput={handleNumberInput}
     submit={addPerson}
     />
    </div>
  )
}

export default App
