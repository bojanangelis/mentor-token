import React from 'react'

const AboutMentor = ({ user }) => {
  return (
    <div className='about--mentor__card'>
      <img style={{ borderRadius: '50%' }} width={94} height={94} src={user?.image} />
      <h4>{user?.name}</h4>
      <p>{user?.description}</p>
      <p>{user?.email}</p>
      <p>{user?.number}</p>
    </div>
  )
}

export default AboutMentor
