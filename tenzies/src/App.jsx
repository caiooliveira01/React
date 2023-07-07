import Die from './components/Die'
import { useState  } from 'react'
import { nanoid } from 'nanoid'
import { useEffect  } from 'react'
import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld) // Verifica se todos os isHeld são true
    const allValue = dice.every(die => die.value === dice[0].value) // Verifica se todos os values são iguais ao primeiro valor
    if (allHeld && allValue) {
      setTenzies(true)
    }
  },[dice])
  
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  } // Utilizado cada vez que precisar de novos dados

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  } // Cria um array de 10 espaços, com números aleatórios de 1 a 6 -- Dentro de cada espaço é criado um object com um value, um isHeld e um id

  function rollDice() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  } // Caso o dado esteja selecionado, mantém-se do mesmo jeito, senão é gerado um novo

  function newGame() {
    setTenzies(false)
    setDice(allNewDice())
  }

  function holdDice(id) {
    setDice(prevDice => {
      return prevDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    })
  } // Altera-se apenas o isHeld, e mantém todo o resto do mesmo jeito

  const diceElements = dice.map(die => (
    <Die 
      key={die.id} 
      value={die.value} 
      held={die.isHeld} 
      holdDice={() => holdDice(die.id)} 
    />
  ))

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className='title'>Tenzies</h1>
      <p className='text'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button 
        className='roll-dice' 
        onClick={tenzies ? newGame : rollDice} 
      >
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  )
}