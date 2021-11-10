import Container from 'components/Container/Container'
import Button from './Button/Button'
import GuestInput from './GuessInput/GuestInput'

const GuessWidget = ({
  setUserNumber,
  operateDecision
}: {
  setUserNumber: React.Dispatch<React.SetStateAction<string>>
  operateDecision: () => void
}) => {
  return (
    <Container className="flex-col gap-10 px-4 mt-4">
      <GuestInput setUserNumber={setUserNumber} />
      <Button operateDecision={operateDecision} />
    </Container>
  )
}

export default GuessWidget
