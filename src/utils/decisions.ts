interface DecisionArgs {
  secretNumber: number | null
  userNumber: string
  trialsCount: number
  setTrialsCount: React.Dispatch<React.SetStateAction<number>>
}

export const decisionsMecanism = ({
  secretNumber,
  userNumber,
  trialsCount,
  setTrialsCount
}: DecisionArgs) => {
  setTrialsCount(trialsCount + 1)
  if (typeof +userNumber !== 'number' || typeof secretNumber !== 'number') {
    return {
      outcome: false,
      message: "Stop playin' w/ me idiot, enter a numbers only !"
    }
  } else if (+userNumber === secretNumber) {
    return {
      outcome: true,
      message: `Congratulations! You needed ${trialsCount} trials to guess the secret number is ${secretNumber}`
    }
  } else if (+userNumber > secretNumber) {
    return {
      outcome: false,
      message: `C'mon bro you're down bad, the secret number is smaller !`
    }
  } else if (+userNumber < secretNumber) {
    return {
      outcome: false,
      message: `C'mon bro be better, the secret number is greater !`
    }
  } else {
    return {
      outcome: false,
      message: `Something went wrong bro, try again !`
    }
  }
}
