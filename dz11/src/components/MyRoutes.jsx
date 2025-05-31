import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ArticlesList from '../pages/ArticlesList'
import Article from '../pages/Article'

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticlesList />} />
      <Route path="/articles/:articleId" element={<Article />} />
    </Routes>
  )
}

export default MyRoutes
