import { createContext, useContext, useReducer } from 'react'

const notifReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload
    case 'RESET':
      return null
    default: 
      return state
  }
}

const NotifContext = createContext()

export const NotifContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notifReducer, null)

  return (
    <NotifContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotifContext.Provider>
  )
}

export const useNotifValue = () => {
  const notifAndDispatch = useContext(NotifContext)
  return notifAndDispatch[0]
}

export const useNotifDispatch = () => {
  const notifAndDispatch = useContext(NotifContext)
  return notifAndDispatch[1]
}

export default NotifContext