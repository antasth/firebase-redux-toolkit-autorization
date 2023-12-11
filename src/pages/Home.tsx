import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const { isAuth } = useAuth()

  const { removeUser } = useActions()

  const handleLogout = () => {
    removeUser()
  }

  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <Navigate to={'/signin'} />
  )
}

export { Home }
