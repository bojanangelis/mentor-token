import React, { useEffect, useState } from 'react'
import DashboardHeader from '../components/DashboardComponents/DashboardHeader'
import MentorCardNew from '../components/MentorsComponents/MentorCardNew'

const MentorsPage = () => {
  const [mentors, setMentors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const mentors = await fetch('http://localhost:8000/api/users')
        setMentors(await mentors.json())
      } catch (e) {
        console.error(e)
      }
    }
    fetchMentors()
  }, [])

  console.log(mentors?.filter((data) => data.role === 'mentor'))

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <DashboardHeader />
      {mentors
        ?.filter((mentor) => mentor.role === 'mentor')
        ?.map((data) => (
          <MentorCardNew
            key={data.id}
            linkedIn={data.linkedIn}
            trending={data.trending}
            profilePicture={data.profilePicture}
            name={data.name}
            id={data.id}
            description={data.description}
            skills={data.skills}
            rating={data.rating}
          />
        ))}
      {/* {mentors.filter((data) => data.role === 'mentor' =>  (
        <MentorCardNew
          key={data.id}
          linkedIn={data.linkedIn}
          trending={data.trending}
          profilePicture={data.profilePicture}
          name={data.name}
          id={data.id}
          description={data.description}
          skills={data.skills}
          rating={data.rating}
        />
      ))} */}
    </div>
  )
}

export default MentorsPage
