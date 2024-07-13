import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import IndexPage from './routes/IndexPage'
import ContactPage from './routes/ContactPage'
import AboutPage from './routes/AboutPage'
import LoginPage from './routes/LoginPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <IndexPage />,
    },
    // test
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '/contact',
      element: <ContactPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
