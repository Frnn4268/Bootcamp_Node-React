import React from 'react'
import ReactDOM from 'react-dom'

/* const Title = ({course}) => <h1>{course}</h1> */
const Header = (props) => { /* Módulo más detallado */
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part.name}, {props.part.exercises}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  ) 
}

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content 
        part1={course.parts[0]} 
        part2={course.parts[1]}  
        part3={course.parts[2]} 
      />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))