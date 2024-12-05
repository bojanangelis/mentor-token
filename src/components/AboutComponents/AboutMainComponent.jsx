/* eslint-disable react/no-unescaped-entities */
import { mockData } from '../../utils/about-moc-data'
import ButtonComponent from '../ButtonComponent'
import AboutCard from './AboutCard'
import './AboutMainStyle.scss'

const AboutMainComponent = () => {
  return (
    <>
      <div className='about-contact-index__bg'>
        <h1 className='about-title'>Meet our team members</h1>

        <p className='about-title pt-4'>
          We Focus on the details of everything we do. All to help businesses around the world Focus
          on what's most important to them.
        </p>
        <div className='about-get-in-touch'>
          <ButtonComponent icon='src/assets/arrow-right.svg' text='Get in touch' />
        </div>
      </div>
      <div className='mockdata-view'>
        {mockData.map((data, i) => (
          <AboutCard
            key={i}
            img={data.img}
            title={data.name}
            major={data.major}
            description={data.description}
            links={data.links}
          />
        ))}
      </div>
    </>
  )
}

export default AboutMainComponent
