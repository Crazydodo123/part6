import { Display, Button } from './components'


const App = () => {
  return (
    <>
      <Display></Display>
      <div>
        <Button type='INC' label='+'></Button>
        <Button type='DEC' label='-'></Button>
        <Button type='ZERO' label='0'></Button>
      </div>
    </>
  )
}

export default App
