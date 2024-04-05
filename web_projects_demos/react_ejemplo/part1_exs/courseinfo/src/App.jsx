const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Title = (props) =>{
    return <h1>{props.course}</h1>
  } 

  const Part1 = ({part1,exercises1}) => {
    return (
      <p>{part1} {exercises1}</p>
    )
  }

  const Part2 = ({part2,exercises2}) => {
    return (
      <p>{part2} {exercises2}</p>
    )
  }
  
  const Part3 = ({part3,exercises3}) => {
    return (
      <p>{part3} {exercises3}</p>
    )
  }
  
  const Part4 = ({ex1,ex2,ex3}) => {
    console.log(`La suma es ${ex1 +ex2 + ex3}`)
    return(
     <p>Number of excercices {ex1 + ex2 + ex3}</p>
    )
  }

  return (
    <div>
      <Title course={course}></Title>
      <Part1 part1={part1} exercises1={exercises1} ></Part1>
      <Part2 part2={part2} exercises2={exercises2}></Part2>
      <Part3 part3={part3} exercises3={exercises3}></Part3>
      <Part4 ex1={exercises1} ex2={exercises2} ex3={exercises3}></Part4>
    </div>
  )
}

export default App