import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'Si te duele, hazlo más a menudo.',
    '¡Agregar mano de obra a un proyecto de software tardío lo hace más tarde!',
    'El primer 90 por ciento del código representa el primer 10 por ciento del tiempo de desarrollo... El 10 por ciento restante del código representa el otro 90 por ciento del tiempo de desarrollo.',
    'Cualquier tonto puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos pueden entender.',
    'La optimización prematura es la fuente de todos los males.',
    'La depuración es dos veces más difícil que escribir el código en primer lugar. Por lo tanto, si escribe el código de la forma más inteligente posible, por definición no será lo suficientemente inteligente como para depurarlo.',
    'Programar sin un uso extremadamente intensivo de console.log es lo mismo que si un médico se negara a utilizar rayos X o análisis de sangre al diagnosticar a sus pacientes.',
    "La única manera de ir rápido es hacerlo bien"
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const mostVotedAnecdoteIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Tiene {votes[selected]} votos</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>siguiente anécdota</button>
      <h2>Anécdota con más votos</h2>
      <p>{anecdotes[mostVotedAnecdoteIndex]}</p>
      <p>Tiene {votes[mostVotedAnecdoteIndex]} votos</p>
    </div>
  )
}

export default App
