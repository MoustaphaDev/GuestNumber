import Container from 'components/Container/Container'
import { useEffect, useState } from 'react'

const Heading = ({ message }: { message: string }) => {
  const animateClass =
    message !== 'You have to guess a number between 0 and 100'
      ? 'animate-mybounce'
      : ''

  const [triggerAnimation, setTriggerAnimation] = useState(false)
  useEffect(() => {
    setTriggerAnimation(true)
    return () => setTriggerAnimation(false)
  })
  return (
    <Container className="py-9">
      <h2
        className={
          'font-poppins text-lg font-light text-center ' + animateClass
        }
      >
        {message}
      </h2>
    </Container>
  )
}

export default Heading
