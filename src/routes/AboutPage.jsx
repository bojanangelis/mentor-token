import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import UseScrollToTop from '../hooks/useScrollToTop'
import AboutMainComponent from '../components/AboutComponents/AboutMainComponent'

const AboutPage = () => {
  return (
    <>
      {/* max widht 1280px */}
      <div className='max-width-2xl'>
        <HeaderComponent />
        <AboutMainComponent />
      </div>

      <UseScrollToTop />
      <FooterComponent />
    </>
  )
}

export default AboutPage
