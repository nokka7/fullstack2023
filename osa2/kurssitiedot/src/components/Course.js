const Header = ({course}) => {
    return <h2>{course}</h2>
  }
  
  const Total = ({sumOfExercises}) => {
    return <b>Total of {sumOfExercises} exercises</b>
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => 
          <Part key={part.id} part={part}/> 
        )}
      </div>
    )
  }
  
  const Course = ({course}) => {
    console.log(course)
    return (
      <div>
        <Header course={course.name} />
        <Content parts = {course.parts} />
        <Total sumOfExercises={
          course.parts.reduce(
              (partialSum, a) => partialSum + a.exercises, 0
            )
          }/>
      </div>
    )
  }

  export default Course