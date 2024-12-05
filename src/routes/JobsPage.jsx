import React, { useState } from 'react'
import DashboardHeader from '../components/DashboardComponents/DashboardHeader'
import FilterJobsComponent from '../components/JobsComponents/FilterJobsComponent'
import jobsData from '../utils/jobs'
import JobCard from '../components/JobsComponents/JobCard'
import Modal from '../components/Modal'
import CustomPortal from '../hooks/customPortal'

const JobsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [jobSelected, setJobSelected] = useState(null)

  const onClose = () => {
    setIsModalOpen(false)
  }

  const handleJobOpenModal = (id) => {
    const renderThisJob = jobsData?.filter((job) => job.id === id)
    if (renderThisJob?.length > 0) {
      // tuka vikame ako slucajno vo nizava stho ja imame od jobsData imame podatok od toa id shto e kliknato
      // togash prikazi mi ja cel obiekt

      // .filter --> funkcijava sekogash vrajka niza od obiekti
      // vo situacijava sekogash ke bide niza od 0
      setJobSelected(renderThisJob[0])
      setIsModalOpen(true)
      console.log('this job is', renderThisJob)
      console.log('yes this is correct')
      console.log('this is id-->', id)
    }
  }

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <DashboardHeader />

      <div
        style={{
          marginTop: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <h2 style={{ color: '#404D61' }}>Startup Open Jobs</h2>

        <FilterJobsComponent />

        <div className='grid grid-col-4 gap-4 pt-4'>
          {jobsData.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              companyName={job.companyName}
              title={job.title}
              description={job.description}
              imageUrl={job.imageUrl}
              ctaText={job.ctaText}
              button='View More'
              onClick={handleJobOpenModal}
            />
          ))}
        </div>
      </div>

      <CustomPortal>
        <Modal onClose={onClose} isOpen={isModalOpen}>
          {/* sekogash da stavame ? bidejki ni frla error */}
          <JobCard
            key={jobSelected?.id}
            id={jobSelected?.id}
            companyName={jobSelected?.companyName}
            title={jobSelected?.title}
            description={jobSelected?.description}
            imageUrl={jobSelected?.imageUrl}
            ctaText={jobSelected?.ctaText}
            button='Apply'
          />
        </Modal>
      </CustomPortal>
    </div>
  )
}

export default JobsPage
