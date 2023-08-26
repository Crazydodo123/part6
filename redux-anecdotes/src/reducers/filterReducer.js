import { createSlice } from "@reduxjs/toolkit"

const filterReducer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    handleFilterModif(state, action) {
      return action.payload
    }
  }
})

export const { handleFilterModif } = filterReducer.actions 

export default filterReducer.reducer