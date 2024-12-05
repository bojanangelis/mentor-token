import React, { useEffect, useState } from 'react'
import './DashboardStyles.scss'
import { bestPerformMentor } from '../../utils/assigned-jobs'
import ChevronUpRightIcon from '../../assets/react-svgs/ChevronUpRightIcon'

const DashboardBestPerformingMentors = () => {
  const [users, setUsers] = useState(null)
  useEffect(() => {
    const fetchUsers = async () => {
      const fetchData = await fetch('http://localhost:8000/api/users')
      setUsers(await fetchData?.json())
    }

    fetchUsers()
  }, [])

  return (
    <div className='dashboard--best-perform-men'>
      <h4>Best Performing Mentors</h4>
      {/* best performing mentor map */}
      <div className='mentor-view--container--best'>
        {users?.map((mentor, i) => (
          <div
            className={`mentor--view--perform ${mentor.jobs > 50 && 'chevron--up-right--active'}`}
            key={i}
          >
            <div className='mentor-image-paragraph'>
              <img width={46} height={46} src={mentor.image} />
              <p className='px-2'>{mentor.name}</p>
            </div>
            <span className='mentor--achieved-jobs'>
              {mentor.jobs} <span>Achieved Jobs</span>
            </span>
            <ChevronUpRightIcon />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardBestPerformingMentors
