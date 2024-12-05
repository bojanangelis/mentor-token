import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='auth_layout'>
      <div className='left-side'>
        <div className='bg-leftside-img' />
        <div className='titles'>
          <h2>Grow your startup!</h2>
          <h6 className='title-2'>monitoring and evaluating now is easy!</h6>
        </div>
        <div className='img--auth'>
          <div className='img--title-auth'>
            <img width={80} height={80} src='/src/assets/mentor-cube.svg' />
            <div>
              <h4>Mentor Token</h4>
              <p>mentortoken.com</p>
            </div>
          </div>
        </div>
        <img className='rocket-auth' width={800} height={700} src='/src/assets/rocket-02.png' />
      </div>
      <div className='right-side'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
