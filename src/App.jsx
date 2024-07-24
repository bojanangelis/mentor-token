import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import IndexPage from './routes/IndexPage'
import ContactPage from './routes/ContactPage'
import AboutPage from './routes/AboutPage'
import LoginPage from './routes/LoginPage'
import AuthLayout from './routes/AuthLayout'
import Register from './routes/Register'
import SetupAccount from './routes/SetupAccount'
import SetupMentor from './routes/SetupMentor'
import DashboardPage from './routes/DashboardPage'
import DashboardLayout from './routes/DashboardLayout'

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
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/setup-account',
          element: <SetupAccount />,
        },
        {
          path: '/setup-mentor',
          element: <SetupMentor />,
        },
      ],
    },

    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '/dashboard',
          element: <DashboardPage />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
