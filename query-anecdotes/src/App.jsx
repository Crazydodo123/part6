import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAll, updateAnecdote } from './requests'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNotifDispatch } from './reducers/notifiReducer'

const App = () => {
  const queryClient = useQueryClient()
  const notifDispatch = useNotifDispatch()

  const voteAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })

  const handleVote = (anecdote) => {
    const update = { ...anecdote, votes: anecdote.votes + 1 }
    voteAnecdoteMutation.mutate(update)
    notifDispatch({
      type: 'SET',
      payload: `anecdote '${anecdote.content}' voted`
    })

    setTimeout(() => {
      notifDispatch({ type: 'RESET' })
    }, 5000)
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll,
    retry: 1
  })

  if (result.isLoading) {
    return <div>anecdote service not available due to problems in the server</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
