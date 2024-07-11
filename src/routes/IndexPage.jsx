import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import MainIndexComponent from '../components/MainIndexComponent'
import CompaniesIndexComponent from '../components/CompaniesIndexComponent'
import BannerIndexComponent from '../components/BannerIndexComponent'

const IndexPage = () => {
  return (
    <>
      <HeaderComponent />
      <MainIndexComponent />
      <CompaniesIndexComponent />
      <BannerIndexComponent />
    </>
  )
}

export default IndexPage
