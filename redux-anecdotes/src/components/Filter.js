import { useSelector, useDispatch } from 'react-redux'
import { handleFilterModif } from '../reducers/filterReducer'

const Filter = () => {
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(handleFilterModif(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input type='text' value={filter} onChange={handleChange}></input>
    </div>
  )
}

export default Filter