import { App as AntdApp } from 'antd'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/router'
function App() {
  return (
    <AntdApp notification={{ placement: 'bottomRight' }}>
      <RouterProvider router={router} />
    </AntdApp>
  )
}

export default App
