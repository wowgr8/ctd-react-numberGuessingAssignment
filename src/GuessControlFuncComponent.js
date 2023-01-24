import React, { useState } from 'react'

function GuessControlFuncComponent() {
  const [currentGuess, setCurrentGuess] = useState("")

  handleInputChange(event) {
    setCurrentGuess(event.target.value);
  }

  onSubmitGuess() {
    // Since the values from an HTML input are strings by default,
    //  convert to a number for the returned guess value
    //  by passing in the string to the Number function.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    this.props.onGuess(Number(this.state.currentGuess));
    this.setState({ currentGuess: "" });
  }

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  )
}

export default GuessControlFuncComponent