import  {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = ({text, value}) => {
  return (
    <table>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
    </table>
  );
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>

      <Statistic text="good" value ={good} />
      <Statistic text="neutral" value ={neutral} />
      <Statistic text="bad" value ={bad} />
      <Statistic text="All" value={(all = good + neutral + bad)} />
      <Statistic text="Average" value={good * 1 + neutral * 0 + (bad * -1)/3} />
     
      
  
      <h3>No feedback given</h3>
  
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
