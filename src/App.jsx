import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import IndexPage from './routes/IndexPage'
import ContactPage from './routes/ContactPage'
import AboutPage from './routes/AboutPage'
import LoginPage from './routes/LoginPage'
import AuthLayout from './routes/AuthLayout'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <IndexPage />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '/contact',
      element: <ContactPage />,
    },
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: '/login',
          element: <LoginPage />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
