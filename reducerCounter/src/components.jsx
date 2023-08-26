import { useContext } from 'react'
import CounterContext from './CounterContext'

export const Display = () => {
  const [counter, dispatch] = useContext(CounterContext)
  return <div>
    {counter}
  </div>
}

export const Button = ({ type, label }) => {
  const [counter, dispatch] = useContext(CounterContext)
  return (
    <button onClick={() => dispatch({ type })}>
      {label}
    </button>
  )
}