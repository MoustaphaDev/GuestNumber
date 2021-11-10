import GuessWidget from 'components/GuessWidget/GuessWidget'
import Heading from 'components/Heading/Heading'
import Nav from 'components/Nav/Nav'
import StartButton from 'components/StartButton/StartButton'
import { useState } from 'react'
import { decisionsMecanism } from 'utils/decisions'
import { generateRandomNumber } from 'utils/randomNumber'

function App() {
  const [headingMessage, setHeadingMessage] = useState(
    'You have to guess a number between 0 and 100'
  )
  const [gamePlaying, setGamePlaying] = useState(false)
  const [trialsCount, setTrialsCount] = useState(1)
  const [secretNumber, setSecretNumber] = useState<number | null>(null)
  const [userNumber, setUserNumber] = useState<string>('')
  const createRandomNumber = () => {
    setSecretNumber(generateRandomNumber(100))
    setHeadingMessage('You have to guess a number between 0 and 100')
  }

  const operateDecision = () => {
    const decision = decisionsMecanism({
      secretNumber,
      userNumber,
      trialsCount,
      setTrialsCount
    })

    if (decision.outcome) {
      setSecretNumber(null)
      setGamePlaying(false)
      setTrialsCount(1)
    } else {
      setTrialsCount(trialsCount + 1)
      setUserNumber('')
    }
    setHeadingMessage(decision.message)
  }

  return (
    <div className="bg-white">
      <Nav />
      <Heading message={headingMessage} />
      {gamePlaying ? (
        <GuessWidget
          operateDecision={operateDecision}
          setUserNumber={setUserNumber}
        />
      ) : (
        <StartButton
          onClick={createRandomNumber}
          startSetter={setGamePlaying}
        />
      )}
    </div>
  )
}

export default App
