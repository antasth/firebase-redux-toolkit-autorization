import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <p>
        Already have an account? <Link to={'/signin'}>Sign in</Link>
      </p>
    </div>
  )
}

export { SignUp }
