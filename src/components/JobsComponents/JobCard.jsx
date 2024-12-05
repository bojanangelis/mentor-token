import React from 'react'
import './JobCard.scss'
import ButtonComponent from '../ButtonComponent'

const JobCard = ({ id, companyName, title, description, imageUrl, button, onClick }) => {
  return (
    <div className='job-card-view'>
      <div className='card--header'>
        <img src={imageUrl} />
        <h4>{companyName}</h4>
      </div>

      <h5>{title}</h5>
      <p>{description}</p>
      <div>
        <ButtonComponent onClick={() => onClick(id)} text={button} className={'view--job-btn'} />
      </div>
    </div>
  )
}

export default JobCard
