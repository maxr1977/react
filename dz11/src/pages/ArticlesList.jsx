import styles from '../styles/ArticlesList.module.css'
import { Link } from 'react-router-dom'

const articles = [
  { id: 1, title: 'Статья 1' },
  { id: 2, title: 'Статья 2' },
  { id: 3, title: 'Статья 3' },
]

const ArticlesList = () => {
  return (
    <div className={styles.list}>
      <h1>Статьи</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticlesList
