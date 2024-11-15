import React from 'react'
import PropTypes from 'prop-types'
import './MentorCardStyle.scss'
import ButtonComponent from '../ButtonComponent'
import { useNavigate } from 'react-router-dom'

const MentorCardNew = ({
  id,
  name,
  profilePicture,
  rating,
  skills,
  description,
  linkedIn,
  trending,
}) => {
  return (
    <div className='mentor--card-new--view'>
      <div className='profile--view-card'>
        <img width={120} src={profilePicture} />

        <div className='profile--view-card--text'>
          <h2>
            {name} {linkedIn && <img src='src/assets/linkedin-vector.svg' />}
          </h2>

          <span>
            {/* polni dzvezdi */}

            <span className='px-2'>{rating} average based on KPI success rate.</span>
          </span>

          <div>
            <span>
              {/*   ignore:    3  */}
              Skills:{/*     0      , 1   ,   2,  3,  4    */}
              {/*        [menagment, data, blabla],  */}
              {skills?.map((skill, i) => (
                // 0
                // 1
                // 2
                // 3
                // 4
                <span key={i}>
                  {skill} {ignore > i && ' | '}
                </span>
              ))}
            </span>
          </div>
          <div style={{ fontWeight: '400', paddingTop: '5px' }}>{description}</div>
        </div>
      </div>

      <div className='buttons-view-mentor'>
        {trending && (
          <span>
            <img width={20} src='src/assets/trending.svg' /> Trending{' '}
          </span>
        )}
        <ButtonComponent
          onClick={() => navigate(`/${name}`)}
          className={'mentor-view-className'}
          text='View Mentor'
        />
      </div>
    </div>
  )
}

MentorCardNew.propTypes = {
  key: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired, // niza ke mi bide cela string.
  description: PropTypes.string.isRequired,
  linkedIn: PropTypes.bool.isRequired,
  trending: PropTypes.bool.isRequired,
}
export default MentorCardNew
