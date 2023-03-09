import { useState } from 'react'

const Header = ({name}) => (
  <h1>
    {name}
  </h1>
)

const StatisticLine = ({name, value}) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {

  if (good+neutral+bad==0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <table>
          <StatisticLine name={"good"} value={good}/>
          <StatisticLine name={"neutral"} value={neutral}/>
          <StatisticLine name={"bad"} value={bad}/>
          <StatisticLine name={"all"} value={good+neutral+bad}/>
          <StatisticLine name={"average"} value={(good-bad)/(good+neutral+bad)}/>
          <StatisticLine name={"positive"} value={""+100*(good)/(good+neutral+bad)+" %"}/>
      </table>
    )
  }
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name={"give feedback"} />
      <Button handleClick={() =>setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header name={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App