import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () =>(
  <>
  <h1>404 Not Found</h1>
  <p>お探しの投稿は削除されたか、存在しません</p>
  <Link to="/">ホームへ戻る</Link>
  </>
)

export default NotFound