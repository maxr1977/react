import styles from '../styles/Article.module.css'
import { useParams, useNavigate } from 'react-router-dom'

const articlesData = [
  { id: 1, title: 'Статья 1', content: 'Содержание статьи 1...' },
  { id: 2, title: 'Статья 2', content: 'Содержание статьи 2...' },
  { id: 3, title: 'Статья 3', content: 'Содержание статьи 3...' },
]

const Article = () => {
  const { articleId } = useParams()
  const navigate = useNavigate()

  const article = articlesData.find(({ id }) => id === Number(articleId))

  if (!article) {
    return <p>Статья не найдена!</p>
  }

  return (
    <div className={styles.article}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>Текущий путь: /articles/{articleId}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}

export default Article
