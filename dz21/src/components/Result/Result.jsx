import { useSelector } from 'react-redux'
import styles from './Result.module.css'

const Result = () => {
  const score = useSelector((state) => state.questionnaire.score)

  if (score === null) {
    return null
  }

  return (
    <div className={styles.resultContainer}>
      <h2>Your Score: {score}</h2>
    </div>
  )
}

export default Result
