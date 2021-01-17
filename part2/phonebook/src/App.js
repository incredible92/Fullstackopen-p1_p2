import React, { useState, useEffect} from 'react';
import axios from 'axios'
import personService from './services/person.jsx';
import './index.css';

import Notification from './components/notification.jsx'
import Filter from './components/filter.jsx'
import PersonForm from './components/personForm.jsx'
import Persons from './components/persons.jsx'


const App = () => {
  const [ persons, setPersons] = useState([])
  useEffect(()=> {
		personService.getAll().then(initPerson => {
			setPersons(initPerson)
		})
  },[])
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNumber] = useState('')
  const [showResults, setResults] = useState('')
  const [errorMessage, setErrorMessage] = useState({
	  message: null,
	  category: null
  })
  
  const addDetails = (event) => {
	  event.preventDefault()
	//   console.log(event.target)
	
		// console.log(persons[1]);

		if(persons.findIndex(person => person.name === newName) > -1 ){
			if(window.confirm(newName + ' is already added phonebook, replace the old number with new one?')){
				const id = persons.find(person=>person.name===newName).id
				const obj = {
					name: newName,
					number: newNumber,
				}
				personService
				.update(id, obj)
				.then(newP => {
					const mess = {
						message: `Added ${newP.name}`,
						category: 'success'
					}
					setErrorMessage(mess)
					setTimeout(() => {
						setErrorMessage({...errorMessage, message: null})
					}, 5000)
					const newPers = persons.map(person=> person.id!==id ? person : newP)
					setPersons(newPers)
					
				})
				.catch(error=>{
					
					const mess = {
						message: `${obj.name} has already been removed from the database `,
						category: 'error'
					}
					setErrorMessage(mess)
					setTimeout(() => {
						setErrorMessage({...errorMessage, message: null})
					}, 5000)
				})
			}
		}
		else{
			const obj = {
				name: newName,
				number: newNumber
			}
			// console.log(persons)
			// console.log(obj)	
			personService
				.create(obj)
				.then(newP => {

					const mess = {
						message: `Added ${newP.name}`,
						category: 'success'
					}
					setErrorMessage(mess)
					setTimeout(() => {
						setErrorMessage({...errorMessage, message: null})
					}, 5000)
					setPersons(persons.concat(newP))
					setNewName('')
					setNumber('')
				})
				.catch(error=>{
					// console.log(error.respon.data.error)
					const mess = {
						message: error.response.data.error,
						category: 'error'
					}
					setErrorMessage(mess)
					setTimeout(() => {
						setErrorMessage({...errorMessage, message: null})
					}, 5000)
				})
			
		}
	
  }
  const deletePersonHandler  = (id) => {
		const p = persons.find( person => person.id === id)
		if(window.confirm(`Delete ${p.name} ?`)){
			personService
				.deletePerson(id)
				.then(response => {
					setPersons(persons.filter(person=>person.id!==id))
				})
		}
  }

  const handleChange = (event) => {
    //   console.log(event.target.value)
      setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
    //   console.log(event.target.value)
      setNumber(event.target.value)
    }

  
  const filterChange = (event) => {
	  setResults(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification m={errorMessage} />
      <Filter showResults={showResults} filterChange={filterChange} />
      <h2>Add new</h2>
      <PersonForm addDetails={addDetails} newName={newName} handleChange={handleChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
    <h2>Number</h2>
    <Persons persons={persons} showResults={showResults} deleteP={deletePersonHandler}/>
    </div>
  )
}

export default App
