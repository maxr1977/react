import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../../features/questionnaire/questionnaireSlice';
import styles from './Question.module.css';

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const userAnswer = useSelector(state =>
    state.questionnaire.questions.find(q => q.id === question.id)?.userAnswer
  );

  const handleOptionChange = (e) => {
    dispatch(answerQuestion({ questionId: question.id, answer: e.target.value }));
  };

  return (
    <div className={styles.questionContainer}>
      <p className={styles.questionText}>{question.text}</p>
      <div className={styles.options}>
        {question.options.map(option => (
          <label key={option} className={styles.optionLabel}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={userAnswer === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;