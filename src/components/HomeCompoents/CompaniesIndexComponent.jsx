import './CompaniesIndexStyle.scss'
import { companies } from '../../utils/companies'

const CompaniesIndexComponent = () => {
  return (
    <>
      <div className='companies--index'>
        {companies.map((company, i) => (
          <img key={i} src={`/src/assets/${company}`} alt='company' />
        ))}
      </div>
      <p className='companies--text'>
        More than 25+ Startups around the world trusted Mentor Token.
      </p>
    </>
  )
}

export default CompaniesIndexComponent
