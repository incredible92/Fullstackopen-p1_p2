import React from "react";
import ReactDOM from "react-dom";

import Course from "./components/course";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          title: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          title: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          title: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          title: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          title: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          title: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

