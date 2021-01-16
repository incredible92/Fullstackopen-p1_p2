import React, { useState } from 'react'

import Notification from './components/notification.jsx'
import Filter from './components/filter.jsx'


const App = () => {
  const [ persons, setPersons] = useState([])
  const [errorMessage, setErrorMessage] = useState({
	  message: null,
	  category: null
  })
  const [showResults, setResults] = useState('')
  const filterChange = (event) => {
	  setResults(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification m={errorMessage} />
      <Filter showResults={showResults} filterChange={filterChange} />
      <h2>Add new</h2>
    <h2>Number</h2>
    </div>
  )
}

export default App
