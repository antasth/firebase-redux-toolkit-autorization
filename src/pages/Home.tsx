import { useAuth } from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const { isAuth } = useAuth()

  return isAuth ? (
    <div>
      <h1>Wellcome</h1>
    </div>
  ) : (
    <Navigate to={'/signin'} />
  )
}

export { Home }
