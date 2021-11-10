import Container from 'components/Container/Container'
import Button from './Button/Button'
import GuestInput from './GuessInput/GuestInput'

const GuessWidget = ({
  setUserNumber,
  userNumber,
  operateDecision
}: {
  setUserNumber: React.Dispatch<React.SetStateAction<string>>
  userNumber: string
  operateDecision: () => void
}) => {
  return (
    <Container className="flex-col gap-10 px-4 mt-4">
      <GuestInput setUserNumber={setUserNumber} userNumber={userNumber} />
      <Button operateDecision={operateDecision} />
    </Container>
  )
}

export default GuessWidget
