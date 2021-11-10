const Button = ({ operateDecision }: { operateDecision: () => void }) => {
  return (
    <button
      className="py-3 px-7 font-poppins font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full hover:shadow-2xl duration-200"
      onClick={operateDecision}
    >
      Confirm
    </button>
  )
}

export default Button
