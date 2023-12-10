import { Button, Form, Input } from 'antd'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import { useState } from 'react'

interface ISignInForm {
  email: string
  password: string
}
const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFinish = (values: ISignInForm) => {
    console.log('Success:', values)
    setEmail(values.email)
    setPassword(values.password)
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
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
        <Input.Password />
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
