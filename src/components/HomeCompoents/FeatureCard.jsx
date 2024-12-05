import { PropTypes } from 'prop-types'
import React from 'react'
import './FeatureCardStyle.scss'
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className='feature-card-div'>
      <img width={32} height={32} src={icon} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

FeatureCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard
