import { useSelector, useDispatch } from 'react-redux';
import Question from './components/Question/Question.jsx';
import Result from './components/Result/Result.jsx';
import { submitQuiz } from './features/questionnaire/questionnaireSlice';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitQuiz());
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Questionnaire</h1>
      <div className={styles.questionsList}>
        {questions.map(q => (
          <Question key={q.id} question={q} />
        ))}
      </div>
      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>
      <Result />
    </div>
  );
}

export default App;