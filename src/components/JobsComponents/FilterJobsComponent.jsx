import React from 'react'
import Dropdown from '../DropdownComponent'
import { BsFillFilterCircleFill } from 'react-icons/bs'
import ButtonComponent from '../ButtonComponent'
import './FilterJobsStyles.scss'

const FilterJobsComponent = () => {
  return (
    <div className='filter--view'>
      <div className='flex'>
        <Dropdown title='Sort by:' />
        <Dropdown className='px-2' title='Category:' />
      </div>

      <div className='flex'>
        <Dropdown className='px-2' icon={<BsFillFilterCircleFill />} title='Filter' />
        <ButtonComponent className='secondary-button type-of-view ' icon={'src/assets/boxes.svg'} />
      </div>
    </div>
  )
}

export default FilterJobsComponent
