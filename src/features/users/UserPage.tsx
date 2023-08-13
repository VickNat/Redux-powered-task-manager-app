import { selectUserById } from '../users/usersSlice'
import { selectPostsByUser } from '../posts/postsSlice'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'

const UserPage = () => {
  const { userId } = useParams()
  const user = useAppSelector(state => selectUserById(state, String(userId)))

  const postsForUser = useAppSelector(state => selectPostsByUser(state, String(userId)))

  const postTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user?.name}</h2>

      <ol>{postTitles}</ol>
    </section>
  )
}

export default UserPage