import PropTypes from 'prop-types'
import './AboutCardStyle.scss'

const AboutCard = ({ img, title, description, major, links }) => {
  console.log(img, title, description, major, links)
  return (
    <div className='about-card-view'>
      <img src={img} width={80} height={80} />
      <h1>{title}</h1>
      <h5 className='about-major'>{major}</h5>
      <p className='about-description'>{description}</p>
      <div className='social_links_about'>
        <a target='_blank' href={links.facebook}>
          <img
            className='px-2'
            src='/src/assets/facebook-02.svg'
            alt='Facebook'
            width='34px'
            height='34px'
          />
        </a>

        <a target='_blank' href={links.github}>
          <img
            className='px-2'
            src='/src/assets/github-02.svg'
            alt='Twiter'
            width='34px'
            height='34px'
          />
        </a>

        <a target='_blank' href={links.linkedin}>
          <img
            className='px-2'
            src='/src/assets/linkedin-02.svg'
            alt='Linkedin'
            width='34px'
            height='34px'
          />
        </a>
      </div>
    </div>
  )
}

AboutCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  links: PropTypes.objectOf({
    facebook: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
}

export default AboutCard
