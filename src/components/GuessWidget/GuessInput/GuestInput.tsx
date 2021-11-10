const GuestInput = ({
  userNumber,
  setUserNumber
}: {
  setUserNumber: React.Dispatch<React.SetStateAction<string>>
  userNumber: string
}) => {
  return (
    <input
      className="py-3 px-4 w-full max-w-sm rounded-full border-2 border-black focus-within:border-blue-600 focus:border-blue-600 focus:shadow-lg transition-shadow ease-in-out focus:outline-none"
      type="text"
      onChange={(e) => {
        setUserNumber(e.target.value)
      }}
      value={userNumber}
    />
  )
}

export default GuestInput
