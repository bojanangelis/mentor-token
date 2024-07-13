import MainContactComponet from '../components/ContactComponents/MainContactComponet'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import UseScrollToTop from '../hooks/useScrollToTop'

const ContactPage = () => {
  return (
    <>
      {/* max widht 1280px */}
      <div className='max-width-2xl'>
        <HeaderComponent />
        <MainContactComponet />
      </div>

      <UseScrollToTop />
      <FooterComponent />
    </>
  )
}

export default ContactPage
