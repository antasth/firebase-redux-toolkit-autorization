import { SignInForm } from '@/components/SignInForm/SignInForm'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <section>
      <SignInForm />
      <p>
        Don't have an account? <Link to={'/signup'}>Sign up</Link>
      </p>
    </section>
  )
}

export { SignIn }
