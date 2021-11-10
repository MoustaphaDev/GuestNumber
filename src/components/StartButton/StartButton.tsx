import Container from 'components/Container/Container'
import { ChevronRightIcon } from '@heroicons/react/outline'

const StartButton = ({
  startSetter,
  onClick
}: {
  startSetter: React.Dispatch<React.SetStateAction<boolean>>
  onClick: () => void
}) => {
  return (
    <Container className="w-screen h-[50vh]">
      <button
        onClick={() => {
          startSetter(true)
          onClick()
        }}
        className="flex justify-around items-center py-4 px-8 max-w-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full hover:shadow-2xl duration-200"
      >
        <span className="w-10/12 font-poppins text-2xl tracking-wide">
          START
        </span>
        <span className="flex justify-center items-center w-2/12">
          <ChevronRightIcon className="w-8 h-9 " />
        </span>
      </button>
    </Container>
  )
}

export default StartButton
