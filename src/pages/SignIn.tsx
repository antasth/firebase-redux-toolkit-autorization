import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div>
      <p>
        Don't have an account? <Link to={'/signup'}>Sign up</Link>
      </p>
    </div>
  )
}

export { SignIn }
