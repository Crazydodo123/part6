import { createSlice } from '@reduxjs/toolkit'

const notifReducer = createSlice({
  name: 'notif',
  initialState: null,
  reducers: {
    changeNotification(state, action) {
      return action.payload
    },
    resetNotification() {
      return null
    }
  }
})

export const { changeNotification, resetNotification } = notifReducer.actions

export const setNotification = (message, timeout) => {
  return async (dispatch) => {
    dispatch(changeNotification(message))
    setTimeout(() => {
      dispatch(resetNotification())
    }, timeout * 1000)
  }
}

export default notifReducer.reducer