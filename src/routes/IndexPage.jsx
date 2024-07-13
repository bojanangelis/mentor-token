import HeaderComponent from '../components/HeaderComponent'
import MainIndexComponent from '../components/MainIndexComponent'
import CompaniesIndexComponent from '../components/CompaniesIndexComponent'
import BannerIndexComponent from '../components/BannerIndexComponent'
import PictureIndexComponent from '../components/PictureIndexComponent'
import FooterComponent from '../components/FooterComponent'
import UseScrollToTop from '../hooks/useScrollToTop'

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

      <UseScrollToTop />
      <FooterComponent />
    </>
  )
}

export default IndexPage
