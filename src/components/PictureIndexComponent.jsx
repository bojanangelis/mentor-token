import './PictureIndexStyles.scss'

const PictureIndexComponent = () => {
  return (
    <div className='picture--view'>
      <h2 className='picture--title'>
        Every <span className='text-blue-500'>success</span> is rewarded!
      </h2>

      <img className='picture-img' src='/src/assets/dashboard.png' alt='dashboard' />
      <img className='picture-img-02' src='/src/assets/dashboard-02.png' alt='dashboard' />

      {/* dashboard-02.png */}
    </div>
  )
}

export default PictureIndexComponent
