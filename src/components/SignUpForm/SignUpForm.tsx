import { useActions } from '@/hooks/useActions'
import { ISignUpForm } from '@/types'
import { App, Button, Form, Input } from 'antd'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {
  const auth = getAuth()

  const { notification } = App.useApp()

  const { setUser } = useActions()

  const navigate = useNavigate()

  const onFinish = (values: ISignUpForm) => {
    const { email, password } = values
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        user.getIdToken().then((accessToken) => {
          setUser({ email: user.email, id: user.uid, token: accessToken })
        })
        navigate('/')
      })
      .catch((error) => {
        notification.error({ message: error.message })
      })
  }
  const onFinishFailed = (errorInfo: ValidateErrorEntity<ISignUpForm>) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input autoComplete="on" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password autoComplete="on" />
      </Form.Item>

      <Form.Item
        label="Confirm password"
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
        ]}
      >
        <Input.Password autoComplete="on" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Sign up
        </Button>
      </Form.Item>
    </Form>
  )
}

export { SignUpForm }
