import { SignUpForm } from '@/components/SignUpForm/SignUpForm'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <section>
      <SignUpForm />
      <p>
        Already have an account? <Link to={'/signin'}>Sign in</Link>
      </p>
    </section>
  )
}

export { SignUp }
