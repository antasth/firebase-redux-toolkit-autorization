import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { notification } from 'antd'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const { isAuth } = useAuth()
  const auth = getAuth()

  const { removeUser } = useActions()

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        removeUser()
        console.log('sign out success')
      })
      .catch((error) => {
        notification.error({ message: error.message })
      })
  }

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
