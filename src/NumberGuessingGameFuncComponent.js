import React from 'react'

function NumberGuessingGameFuncComponent() {
  const isCorrectGuess = latestGuess === numberToGuess;

  const isGameOver =
    isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;
  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      )}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  )
}

export default NumberGuessingGameFuncComponent