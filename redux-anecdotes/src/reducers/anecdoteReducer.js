import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteReducer = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { appendAnecdote, setAnecdotes } = anecdoteReducer.actions 

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteFor = (vote_id) => {
  return async (dispatch, getState) => {
    const oldAnecdotes = getState().anecdotes
    const newAnecdotes = await Promise.all(oldAnecdotes.map(async (anecdote) => {
      if (vote_id === anecdote.id) {
        const votedAnecdote = {...anecdote, votes: anecdote.votes + 1}
        return await anecdoteService.modify(vote_id, votedAnecdote)
      }
      return anecdote
    }))
    dispatch(setAnecdotes(newAnecdotes))
  }
}

export default anecdoteReducer.reducer