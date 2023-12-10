import { Button, Form, Input } from 'antd'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import { useState } from 'react'

interface ISignUpForm {
  email: string
  password: string
  confirmPassword: string
}
const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onFinish = (values: ISignUpForm) => {
    console.log('Success:', values)
    setEmail(values.email)
    setPassword(values.password)
    setConfirmPassword(values.confirmPassword)
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
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
