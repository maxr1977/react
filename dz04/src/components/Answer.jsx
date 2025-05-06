import React, { useState } from "react";

const Answer = ({ correctAnswer, updatePoints }) => {
   const [userAnswer, setUserAnswer] = useState("");

   const handleSubmit = (e) => {
     e.preventDefault();
     updatePoints(parseInt(userAnswer) === correctAnswer);
     setUserAnswer("");
   };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Введите ответ"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button type="submit">Проверить</button>
    </form>
  );
};

export default Answer