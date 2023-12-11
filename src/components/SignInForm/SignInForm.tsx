import { Button, Form, Input } from 'antd'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'

interface ISignInForm {
  email: string
  password: string
}
const SignInForm = () => {
  const auth = getAuth()

  const onFinish = (values: ISignInForm) => {
    console.log('Success:', values)

    const { email, password } = values
    console.log(email, password)
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)
  }
  const onFinishFailed = (errorInfo: ValidateErrorEntity<ISignInForm>) => {
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

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Sign in
        </Button>
      </Form.Item>
    </Form>
  )
}

export { SignInForm }
