import React, { useState } from 'react';
import Answer from './Answer';
import '../styles/MathQuiz.css'

const MathQuiz = () => {
  const [score, setScore] = useState(0);
  const [a, setA] = useState(Math.floor(Math.random() * 10));
  const [b, setB] = useState(Math.floor(Math.random() * 10));

  const updatePoints = (isCorrect) => {
    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore - 1));
    setA(Math.floor(Math.random() * 10));
    setB(Math.floor(Math.random() * 10));
  };
  
  return (
    <div className="score">
      <h2>Ваши очки: {score}</h2>
      <h3>
        {a} + {b} = ?
      </h3>
      <Answer correctAnswer={a + b} updatePoints={updatePoints} />
    </div>
  );
};

export default MathQuiz;
