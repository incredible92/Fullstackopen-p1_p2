import React from 'react';
import ReactDOM from 'react-dom';

import Header from './componenets/Header';
import Content from './componenets/Content';
import Total from './componenets/Total'



const App = () => {

  const course = {
    title: 'Half Stack application development',
    parts: [
      {
        title: 'Fundamentals of React',
        exercises: 10
      },
      {
        title: 'Using props to pass data',
        exercises: 7
      },
      {
        title: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.title} />
      <Content parts = {course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))