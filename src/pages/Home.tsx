import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const { isAuth } = useAuth()

  const { removeUser } = useActions()

  const handleLogout = () => {
    removeUser()
  }

  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('signed in')
    } else {
      console.log('signed out')
    }
  })

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
