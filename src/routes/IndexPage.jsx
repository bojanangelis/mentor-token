import HeaderComponent from '../components/HeaderComponent'
import MainIndexComponent from '../components/HomeCompoents/MainIndexComponent'
import CompaniesIndexComponent from '../components/HomeCompoents/CompaniesIndexComponent'
import BannerIndexComponent from '../components/HomeCompoents/BannerIndexComponent'
import PictureIndexComponent from '../components/HomeCompoents/PictureIndexComponent'
import UseScrollToTop from '../hooks/useScrollToTop'
import FooterComponent from '../components/FooterComponent'

const IndexPage = () => {
  return (
    <>
      {/* max widht 1280px */}
      <div className='max-width-2xl'>
        <HeaderComponent />
        <MainIndexComponent />
        <CompaniesIndexComponent />
        <BannerIndexComponent />
        <PictureIndexComponent />
      </div>
      {/* custom hook */}
      <UseScrollToTop />
      <FooterComponent />
    </>
  )
}

export default IndexPage
