/* eslint-disable react/no-unescaped-entities */
import './BannerIndexStyle.scss'
import { featureCardMockData } from '../../utils/features-card'
import FeatureCard from './FeatureCard'

const BannerIndexComponent = () => {
  return (
    <div className='banner--component'>
      <img className='img_banner--rocket' width={600} height={600} src='src/assets/rocket.png' />
      <div className='banner--div--title'>
        <h5>FEATURES</h5>
        <h1>Boost Your Startup's Journey: Discover Mentor Token's Robust Features</h1>
      </div>

      <div className='feature-map'>
        {featureCardMockData.map((feat, i) => (
          <FeatureCard key={i} icon={feat.icon} title={feat.title} description={feat.description} />
        ))}
      </div>
    </div>
  )
}

export default BannerIndexComponent
