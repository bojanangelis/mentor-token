import ButtonComponent from '../ButtonComponent'
import './MainContactStyle.scss'

const MainContactComponet = () => {
  return (
    <div className='main-contact-index__bg'>
      <h1 className='contact-title'>Let’s Talk!</h1>
      <span className='paragraph-contact'>
        We’re thrilled to connect with you! Whether you have a question, need assistance, or want to
        discuss a potential project, we’re here to listen and help. At Mentor Token, we believe in
        the power of collaboration and are committed to providing you with the best support and
        solutions. Fill out the form below, and one of our team members will get back to you as soon
        as possible.
        <h6 className='pt-4'>Let’s create something amazing together!</h6>
      </span>

      <div>
        <div className='inputs--contact'>
          <div className='input-contact'>
            <input className='input_con' type='text' placeholder='Full Name' />
          </div>
          <div className='input-contact'>
            <input className='input_con' type='text' placeholder='Email' />
          </div>
        </div>

        <textarea placeholder='Your message' className='textarea-con' />

        <div className='button-send-message'>
          <ButtonComponent text='Send Message' />
        </div>
      </div>
    </div>
  )
}

export default MainContactComponet
