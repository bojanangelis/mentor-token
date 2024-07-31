import React from 'react'
import DashboardHeader from '../components/DashboardComponents/DashboardHeader'
import MentorCardNew from '../components/MentorsComponents/MentorCardNew'

const MentorsPage = () => {
  const x = [
    {
      id: 1,
      name: 'Kierra Press',
      profilePicture: 'src/assets/KeiraBattye.png',
      rating: 2.54,
      skills: ['Sales', 'Management', 'Problem-solving', 'dadaad', 'dawadwwad'],
      description: 'Field sales training. 5+ years in an outside sales position',
      linkedIn: true,
      trending: false,
    },
    {
      id: 2,
      name: 'Alison Vetrovs',
      profilePicture: 'src/assets/james.png',
      rating: 4.92,
      skills: ['Sales', 'Management', 'Problem-solving'],
      description: 'The sales representative position is an OR based sales role with uncapped...',
      linkedIn: true,
      trending: true,
    },
    {
      id: 3,
      name: 'Marcus Carder',
      profilePicture: 'src/assets/alex_jansen.png',
      rating: 3.56,
      skills: ['Lidership', 'Management', 'Product sales'],
      description: 'Field sales training. 5+ years in an outside sales position',
      linkedIn: true,
      trending: false,
    },
  ]
  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <DashboardHeader />

      {x.map((data) => (
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
    </div>
  )
}

export default MentorsPage
